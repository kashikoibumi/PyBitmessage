"""
Some shared functions

.. deprecated:: 0.6.3
  Should be moved to different places and this file removed,
  but it needs refactoring.
"""
from __future__ import division

# Libraries.
import hashlib
import os
import stat
import subprocess  # nosec B404
import sys
from binascii import hexlify

# Project imports.
import highlevelcrypto
import state
from addresses import decodeAddress, encodeVarint
from bmconfigparser import config
from debug import logger
from helper_sql import sqlQuery


myECCryptorObjects = {}
MyECSubscriptionCryptorObjects = {}
# The key in this dictionary is the RIPE hash which is encoded
# in an address and value is the address itself.
myAddressesByHash = {}
# The key in this dictionary is the tag generated from the address.
myAddressesByTag = {}
broadcastSendersForWhichImWatching = {}


def isAddressInMyAddressBook(address):
    """Is address in my addressbook?"""
    queryreturn = sqlQuery(
        '''select address from addressbook where address=?''',
        address)
    return queryreturn != []


# At this point we should really just have a isAddressInMy(book, address)...
def isAddressInMySubscriptionsList(address):
    """Am I subscribed to this address?"""
    queryreturn = sqlQuery(
        '''select * from subscriptions where address=?''',
        str(address))
    return queryreturn != []


def isAddressInMyAddressBookSubscriptionsListOrWhitelist(address):
    """
    Am I subscribed to this address, is it in my addressbook or whitelist?
    """
    if isAddressInMyAddressBook(address):
        return True

    queryreturn = sqlQuery(
        '''SELECT address FROM whitelist where address=?'''
        ''' and enabled = '1' ''',
        address)
    if queryreturn != []:
        return True

    queryreturn = sqlQuery(
        '''select address from subscriptions where address=?'''
        ''' and enabled = '1' ''',
        address)
    if queryreturn != []:
        return True
    return False


def reloadMyAddressHashes():
    """Reload keys for user's addresses from the config file"""
    logger.debug('reloading keys from keys.dat file')
    myECCryptorObjects.clear()
    myAddressesByHash.clear()
    myAddressesByTag.clear()
    # myPrivateKeys.clear()

    keyfileSecure = checkSensitiveFilePermissions(os.path.join(
        state.appdata, 'keys.dat'))
    hasEnabledKeys = False
    for addressInKeysFile in config.addresses():
        if not config.getboolean(addressInKeysFile, 'enabled'):
            continue

        hasEnabledKeys = True

        addressVersionNumber, streamNumber, hashobj = decodeAddress(
            addressInKeysFile)[1:]
        if addressVersionNumber not in (2, 3, 4):
            logger.error(
                'Error in reloadMyAddressHashes: Can\'t handle'
                ' address versions other than 2, 3, or 4.')
            continue

        # Returns a simple 32 bytes of information encoded in 64 Hex characters
        try:
            privEncryptionKey = hexlify(
                highlevelcrypto.decodeWalletImportFormat(config.get(
                    addressInKeysFile, 'privencryptionkey').encode()
                ))
        except ValueError:
            logger.error(
                'Error in reloadMyAddressHashes: failed to decode'
                ' one of the private keys for address %s', addressInKeysFile)
            continue
        # It is 32 bytes encoded as 64 hex characters
        if len(privEncryptionKey) == 64:
            myECCryptorObjects[hashobj] = \
                highlevelcrypto.makeCryptor(privEncryptionKey)
            myAddressesByHash[bytes(hashobj)] = addressInKeysFile
            tag = highlevelcrypto.double_sha512(
                encodeVarint(addressVersionNumber)
                + encodeVarint(streamNumber) + hashobj)[32:]
            myAddressesByTag[bytes(tag)] = addressInKeysFile

    if not keyfileSecure:
        fixSensitiveFilePermissions(os.path.join(
            state.appdata, 'keys.dat'), hasEnabledKeys)


def reloadBroadcastSendersForWhichImWatching():
    """
    Reinitialize runtime data for the broadcasts I'm subscribed to
    from the config file
    """
    broadcastSendersForWhichImWatching.clear()
    MyECSubscriptionCryptorObjects.clear()
    queryreturn = sqlQuery('SELECT address FROM subscriptions where enabled=1')
    logger.debug('reloading subscriptions...')
    for row in queryreturn:
        address, = row
        # status
        addressVersionNumber, streamNumber, hashobj = decodeAddress(address)[1:]
        if addressVersionNumber == 2:
            broadcastSendersForWhichImWatching[hashobj] = 0
        # Now, for all addresses, even version 2 addresses,
        # we should create Cryptor objects in a dictionary which we will
        # use to attempt to decrypt encrypted broadcast messages.

        if addressVersionNumber <= 3:
            privEncryptionKey = hashlib.sha512(
                encodeVarint(addressVersionNumber)
                + encodeVarint(streamNumber) + hashobj
            ).digest()[:32]
            MyECSubscriptionCryptorObjects[bytes(hashobj)] = \
                highlevelcrypto.makeCryptor(hexlify(privEncryptionKey))
        else:
            doubleHashOfAddressData = highlevelcrypto.double_sha512(
                encodeVarint(addressVersionNumber)
                + encodeVarint(streamNumber) + hashobj
            )
            tag = doubleHashOfAddressData[32:]
            privEncryptionKey = doubleHashOfAddressData[:32]
            MyECSubscriptionCryptorObjects[bytes(tag)] = \
                highlevelcrypto.makeCryptor(hexlify(privEncryptionKey))


def fixPotentiallyInvalidUTF8Data(text):
    """Sanitise invalid UTF-8 strings"""
    try:
        text.decode('utf-8')
        return text
    except UnicodeDecodeError:
        return 'Part of the message is corrupt. The message cannot be' \
            ' displayed the normal way.\n\n' + repr(text)


def checkSensitiveFilePermissions(filename):
    """
    :param str filename: path to the file
    :return: True if file appears to have appropriate permissions.
    """
    if sys.platform == 'win32':
        # .. todo:: This might deserve extra checks by someone familiar with
        # Windows systems.
        return True
    elif sys.platform[:7] == 'freebsd':
        # FreeBSD file systems are the same as major Linux file systems
        present_permissions = os.stat(filename)[0]
        disallowed_permissions = stat.S_IRWXG | stat.S_IRWXO
        return present_permissions & disallowed_permissions == 0
    try:
        # Skip known problems for non-Win32 filesystems
        # without POSIX permissions.
        fstype = subprocess.check_output(
            ['/usr/bin/stat', '-f', '-c', '%T', filename],
            stderr=subprocess.STDOUT
        )  # nosec B603
        if 'fuseblk' in fstype:
            logger.info(
                'Skipping file permissions check for %s.'
                ' Filesystem fuseblk detected.', filename)
            return True
    except:  # noqa:E722
        # Swallow exception here, but we might run into trouble later!
        logger.error('Could not determine filesystem type. %s', filename)
    present_permissions = os.stat(filename)[0]
    disallowed_permissions = stat.S_IRWXG | stat.S_IRWXO
    return present_permissions & disallowed_permissions == 0


# Fixes permissions on a sensitive file.
def fixSensitiveFilePermissions(filename, hasEnabledKeys):
    """Try to change file permissions to be more restrictive"""
    if hasEnabledKeys:
        logger.warning(
            'Keyfile had insecure permissions, and there were enabled'
            ' keys. The truly paranoid should stop using them immediately.')
    else:
        logger.warning(
            'Keyfile had insecure permissions, but there were no enabled keys.'
        )
    try:
        present_permissions = os.stat(filename)[0]
        disallowed_permissions = stat.S_IRWXG | stat.S_IRWXO
        allowed_permissions = ((1 << 32) - 1) ^ disallowed_permissions
        new_permissions = (
            allowed_permissions & present_permissions)
        os.chmod(filename, new_permissions)

        logger.info('Keyfile permissions automatically fixed.')

    except Exception:
        logger.exception('Keyfile permissions could not be fixed.')
        raise
