"""
Sqlite Inventory
"""
import six
import sqlite3
import time
from threading import RLock

from helper_sql import SqlBulkExecute, sqlExecute, sqlQuery
from .storage import InventoryItem, InventoryStorage


class SqliteInventory(InventoryStorage):
    """Inventory using SQLite"""
    def __init__(self):
        super(SqliteInventory, self).__init__()
        # of objects (like msg payloads and pubkey payloads)
        # Does not include protocol headers (the first 24 bytes of each packet).
        self._inventory = {}
        # cache for existing objects, used for quick lookups if we have an object.
        # This is used for example whenever we receive an inv message from a peer
        # to check to see what items are new to us.
        # We don't delete things out of it; instead,
        # the singleCleaner thread clears and refills it.
        self._objects = {}
        # Guarantees that two receiveDataThreads don't receive
        # and process the same message concurrently
        # (probably sent by a malicious individual)
        self.lock = RLock()

    def __contains__(self, hash_):
        with self.lock:
            hash_bytes = bytes(hash_)
            if hash_bytes in self._objects:
                return True
            rows = sqlQuery(
                'SELECT streamnumber FROM inventory WHERE hash=?',
                sqlite3.Binary(hash_))
            if not rows:
                return False
            self._objects[hash_bytes] = rows[0][0]
            return True

    def __getitem__(self, hash_):
        with self.lock:
            hash_bytes = bytes(hash_)
            if hash_bytes in self._inventory:
                return self._inventory[hash_bytes]
            rows = sqlQuery(
                'SELECT objecttype, streamnumber, payload, expirestime, tag'
                ' FROM inventory WHERE hash=?', sqlite3.Binary(hash_))
            if not rows:
                raise KeyError(hash_)
            return InventoryItem(*rows[0])

    def __setitem__(self, hash_, value):
        with self.lock:
            value = InventoryItem(*value)
            hash_bytes = bytes(hash_)
            self._inventory[hash_bytes] = value
            self._objects[hash_bytes] = value.stream

    def __delitem__(self, hash_):
        raise NotImplementedError

    def __iter__(self):
        with self.lock:
            hashes = [] + self._inventory.keys()[:]
            hashes += (x for x, in sqlQuery('SELECT hash FROM inventory'))
            return hashes.__iter__()

    def __len__(self):
        with self.lock:
            return len(self._inventory) + sqlQuery(
                'SELECT count(*) FROM inventory')[0][0]

    def by_type_and_tag(self, objectType, tag=None):
        """
        Get all inventory items of certain *objectType*
        with *tag* if given.
        """
        query = [
            'SELECT objecttype, streamnumber, payload, expirestime, tag'
            ' FROM inventory WHERE objecttype=?', objectType]
        if tag:
            query[0] += ' AND tag=?'
            query.append(sqlite3.Binary(tag))
        with self.lock:
            values = [
                value for value in self._inventory.values()
                if value.type == objectType
                and tag is None or value.tag == tag
            ] + [InventoryItem(*value) for value in sqlQuery(*query)]
            return values

    def unexpired_hashes_by_stream(self, stream):
        """Return unexpired inventory vectors filtered by stream"""
        with self.lock:
            t = int(time.time())
            hashes = [x for x, value in self._inventory.items()
                      if value.stream == stream and value.expires > t]
            hashes += (bytes(payload) for payload, in sqlQuery(
                'SELECT hash FROM inventory WHERE streamnumber=?'
                ' AND expirestime>?', stream, t))
            return hashes

    def flush(self):
        """Flush cache"""
        with self.lock:
            # If you use both the inventoryLock and the sqlLock,
            # always use the inventoryLock OUTSIDE of the sqlLock.
            with SqlBulkExecute() as sql:
                for objectHash, value in self._inventory.items():
                    tag = value[4]
                    if six.PY3 and isinstance(tag, str):
                        tag = tag.encode("utf-8", "replace")
                    value = [value[0], value[1], sqlite3.Binary(value[2]), value[3], sqlite3.Binary(tag)]
                    sql.execute(
                        'INSERT INTO inventory VALUES (?, ?, ?, ?, ?, ?)',
                        sqlite3.Binary(objectHash), *value)
                self._inventory.clear()

    def clean(self):
        """Free memory / perform garbage collection"""
        with self.lock:
            sqlExecute(
                'DELETE FROM inventory WHERE expirestime<?',
                int(time.time()) - (60 * 60 * 3))
            self._objects.clear()
            for objectHash, value in self._inventory.items():
                self._objects[objectHash] = value.stream
