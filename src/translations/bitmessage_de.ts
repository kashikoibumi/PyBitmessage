<?xml version="1.0" ?><!DOCTYPE TS><TS language="de" sourcelanguage="en" version="2.0">
<context>
    <name>AddAddressDialog</name>
    <message>
        <location filename="../bitmessageqt/addaddressdialog.ui" line="20"/>
        <source>Add new entry</source>
        <translation>Neuen Eintrag erstellen</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/addaddressdialog.ui" line="29"/>
        <source>Label</source>
        <translation>Name oder Bezeichnung</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/addaddressdialog.ui" line="39"/>
        <source>Address</source>
        <translation>Adresse</translation>
    </message>
</context>
<context>
    <name>EmailGatewayDialog</name>
    <message>
        <location filename="../bitmessageqt/emailgateway.ui" line="14"/>
        <source>Email gateway</source>
        <translation>E-Mail Schnittstelle</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/emailgateway.ui" line="30"/>
        <source>Register on email gateway</source>
        <translation>An E-Mail Schnittstelle registrieren</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/emailgateway.ui" line="82"/>
        <source>Account status at email gateway</source>
        <translation>Statusanfrage der E-Mail Schnittstelle</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/emailgateway.ui" line="95"/>
        <source>Change account settings at email gateway</source>
        <translation>Einstellungen der E-Mail Schnittstelle ändern</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/emailgateway.ui" line="108"/>
        <source>Unregister from email gateway</source>
        <translation>Von der E-Mail Schnittstelle abmelden</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/emailgateway.ui" line="69"/>
        <source>Email gateway allows you to communicate with email users. Currently, only the Mailchuck email gateway (@mailchuck.com) is available.</source>
        <translation>Die E-Mail Schnittstelle ermöglicht es, mit anderen E-Mail Nutzern zu kommunizieren. Zur Zeit ist nur die Mailchuck-E-Mail Schnittstelle (@mailchuck.com) verfügbar.</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/emailgateway.ui" line="23"/>
        <source>Desired email address (including @mailchuck.com):</source>
        <translation>Gewünschte E-Mailaddresse (inkl. @mailchuck.com):</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/emailgateway.ui" line="59"/>
        <source>@mailchuck.com</source>
        <translation>@mailchuck.com</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/address_dialogs.py" line="286"/>
        <source>Registration failed:</source>
        <translation>Registrierung fehlgeschlagen:</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/address_dialogs.py" line="288"/>
        <source>The requested email address is not available, please try a new one.</source>
        <translation>Die gewünschte E-Mailaddresse ist nicht verfügbar, bitte probieren Sie eine neue.</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/address_dialogs.py" line="334"/>
        <source>Sending email gateway registration request</source>
        <translation>Der Registrierungsantrag für die E-Mail Schnittstelle wird versandt.</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/address_dialogs.py" line="342"/>
        <source>Sending email gateway unregistration request</source>
        <translation>E-Mail Schnittestellen-Abmeldeantrag wird versandt</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/address_dialogs.py" line="348"/>
        <source>Sending email gateway status request</source>
        <translation>E-Mail Schnittestellen Statusantrag wird versandt</translation>
    </message>
</context>
<context>
    <name>EmailGatewayRegistrationDialog</name>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="2266"/>
        <source>Registration failed:</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="2266"/>
        <source>The requested email address is not available, please try a new one. Fill out the new desired email address (including @mailchuck.com) below:</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/emailgateway.py" line="102"/>
        <source>Email gateway registration</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/emailgateway.py" line="103"/>
        <source>Email gateway allows you to communicate with email users. Currently, only the Mailchuck email gateway (@mailchuck.com) is available.
Please type the desired email address (including @mailchuck.com) below:</source>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>Mailchuck</name>
    <message>
        <location filename="../bitmessageqt/account.py" line="243"/>
        <source># You can use this to configure your email gateway account
# Uncomment the setting you want to use
# Here are the options:
# 
# pgp: server
# The email gateway will create and maintain PGP keys for you and sign, verify,
# encrypt and decrypt on your behalf. When you want to use PGP but are lazy,
# use this. Requires subscription.
#
# pgp: local
# The email gateway will not conduct PGP operations on your behalf. You can
# either not use PGP at all, or use it locally.
#
# attachments: yes
# Incoming attachments in the email will be uploaded to MEGA.nz, and you can
# download them from there by following the link. Requires a subscription.
#
# attachments: no
# Attachments will be ignored.
# 
# archive: yes
# Your incoming emails will be archived on the server. Use this if you need
# help with debugging problems or you need a third party proof of emails. This
# however means that the operator of the service will be able to read your
# emails even after they have been delivered to you.
#
# archive: no
# Incoming emails will be deleted from the server as soon as they are relayed
# to you.
#
# masterpubkey_btc: BIP44 xpub key or electrum v1 public seed
# offset_btc: integer (defaults to 0)
# feeamount: number with up to 8 decimal places
# feecurrency: BTC, XBT, USD, EUR or GBP
# Use these if you want to charge people who send you emails. If this is on and
# an unknown person sends you an email, they will be requested to pay the fee
# specified. As this scheme uses deterministic public keys, you will receive
# the money directly. To turn it off again, set &quot;feeamount&quot; to 0. Requires
# subscription.
</source>
        <translation># Diese Nachricht können Sie für die Änderung Ihrer Einstellungen an der
# E-Mail Schnittstelle verwenden. Unkommentieren Sie die Einstellung, die Sie
# ändern möchten. Dies sind die verfügbaren Einstellungen:
# 
# pgp: server
# Die E-Mail-Schnittstelle wird für Sie PGP-Schlüssel erzeugen, und die
# Nachrichten für Sie unterschreiben, Unterschriften überprüfen, ver- und
# entschlüsseln. Verwenden Sie diese Option, wenn Sie PGP verwenden möchten
# aber es manuell zu umständig finden. Erfordert Abonnement.
#
# pgp: local
# Die E-Mail-Schnittstelle wird keine PGP-verarbeitung für Sie machen.
# Sie können auf die Verwendung von PGP entweder ganz verzichten, oder es lokal machen.
#
# attachments: yes
# Eingehende Dateianhänge von E-Mails werden zu MEGA.nz hochgeladen, und Sie
# können diese über einen Link in der Nachricht herunterladen. Erfordert
# Abonnement.
#
# attachments: no
# Anhänge werden ignoriert.
# 
# archive: yes
# Ihre eingehende E-Mails werden auf dem Server archiviert. Nutzen Sie dies,
# wenn Sie Hilfe bei Debugging benötigen, oder eine Bestätigung von dritter
# Partei über die E-Mails benötigen. Diese Einstellung bedeutet jedoch, dass
# der Betreiber der Dienstleistung Ihre E-Mails auch lesen kann nachdem sie
# diese erhalten haben.
#
# archive: no
# Eingehende E-Mails werden gleich nach dem Übertragen zu Ihnen bei dem
# Schnittstellenbetreiber gelöscht.
#
# masterpubkey_btc: BIP44-xpub-Schlüssel oder electrum v1 Seed
# offset_btc: Ganzzahl (Voreingestellt auf 0)
# feeamount: Zahl mit bis zu 8 Nachkommastellen
# feecurrency: BTC, XBT, USD, EUR oder GBP
# Nutzen Sie diese Variablen, wenn Sie von den Absendern eine Zahlung
# verlangen. Wenn diese Option eingeschaltet ist und Sie eine E-Mail von einer
# noch nicht bekannten E-Mail-Addresse erhalten, wird die E-Mail abgelehnt und
# der Absender erhällt eine Zahlungsaufforderung in der spezifizierten Höhe. Da
# diese Methode deterministische öffentliche Schlüssel verwendet, erhalten Sie
# die Zahlungen direkt. Um die Funktion wieder auszuschalten, ändern Sie die
# &quot;feeamount&quot;-Variable auf 0. Erfordert Abonnement.
</translation>
    </message>
</context>
<context>
    <name>MainWindow</name>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="170"/>
        <source>Reply to sender</source>
        <translation>Dem Absender antworten</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="172"/>
        <source>Reply to channel</source>
        <translation>Antworten in den Chan</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="174"/>
        <source>Add sender to your Address Book</source>
        <translation>Absender zum Adressbuch hinzufügen</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="178"/>
        <source>Add sender to your Blacklist</source>
        <translation>Absender in die Blacklist eintragen</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="364"/>
        <source>Move to Trash</source>
        <translation>In den Papierkorb verschieben</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="185"/>
        <source>Undelete</source>
        <translation>Wiederherstellen</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="188"/>
        <source>View HTML code as formatted text</source>
        <translation>HTML als formatierten Text anzeigen</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="192"/>
        <source>Save message as...</source>
        <translation>Nachricht speichern unter...</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="196"/>
        <source>Mark Unread</source>
        <translation>Als ungelesen markieren</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="336"/>
        <source>New</source>
        <translation>Neu</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/blacklist.py" line="121"/>
        <source>Enable</source>
        <translation>Aktivieren</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/blacklist.py" line="124"/>
        <source>Disable</source>
        <translation>Deaktivieren</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/blacklist.py" line="127"/>
        <source>Set avatar...</source>
        <translation>Avatar wählen...</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/blacklist.py" line="117"/>
        <source>Copy address to clipboard</source>
        <translation>Adresse in die Zwischenablage kopieren</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="283"/>
        <source>Special address behavior...</source>
        <translation>Spezielles Verhalten der Adresse...</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="244"/>
        <source>Email gateway</source>
        <translation>E-Mail Schnittstelle</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/blacklist.py" line="114"/>
        <source>Delete</source>
        <translation>Löschen</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="299"/>
        <source>Send message to this address</source>
        <translation>Nachricht an diese Adresse senden</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="307"/>
        <source>Subscribe to this address</source>
        <translation>Diese Adresse abonnieren</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="319"/>
        <source>Add New Address</source>
        <translation>Neue Adresse hinzufügen</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="367"/>
        <source>Copy destination address to clipboard</source>
        <translation>Zieladresse in die Zwischenablage kopieren</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="371"/>
        <source>Force send</source>
        <translation>Senden erzwingen</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="587"/>
        <source>One of your addresses, {0}, is an old version 1 address. Version 1 addresses are no longer supported. May we delete it now?</source>
        <translation>Eine Ihrer Adressen, {0}, ist eine alte Adresse der Version 1 und wird nicht mehr unterstützt. Soll sie jetzt gelöscht werden?</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="1034"/>
        <source>Waiting for their encryption key. Will request it again soon.</source>
        <translation>Warte auf den Verschlüsselungscode. Wird bald erneut angefordert.</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="990"/>
        <source>Encryption key request queued.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="1040"/>
        <source>Queued.</source>
        <translation>In Warteschlange.</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="1043"/>
        <source>Message sent. Waiting for acknowledgement. Sent at {0}</source>
        <translation>Nachricht gesendet. Warte auf Bestätigung. Zeitpunkt der Sendung: {0}</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="1046"/>
        <source>Message sent. Sent at {0}</source>
        <translation>Nachricht gesendet. Zeitpunkt der Sendung: {0}</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="1002"/>
        <source>Need to do work to send message. Work is queued.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="1052"/>
        <source>Acknowledgement of the message received {0}</source>
        <translation>Bestätigung der Nachricht erhalten {0}</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="2140"/>
        <source>Broadcast queued.</source>
        <translation>Rundruf in Warteschlange.</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="1061"/>
        <source>Broadcast on {0}</source>
        <translation>Rundruf um {0}</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="1064"/>
        <source>Problem: The work demanded by the recipient is more difficult than you are willing to do. {0}</source>
        <translation>Problem: Die vom Empfänger geforderte Arbeit ist schwerer als Sie bereit sind, zu berechnen. {0}</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="1067"/>
        <source>Problem: The recipient&apos;s encryption key is no good. Could not encrypt message. {0}</source>
        <translation>Problem: Der Verschlüsselungscode des Empfängers ist nicht in Ordnung. Nachricht konnte nicht verschlüsselt werden. {0}</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="1070"/>
        <source>Forced difficulty override. Send should start soon.</source>
        <translation>Schwierigkeitslimit überschrieben. Senden sollte bald beginnen.</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="1073"/>
        <source>Unknown status: {0} {1}</source>
        <translation>Unbekannter Status: {0} {1}</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="1612"/>
        <source>Not Connected</source>
        <translation>Nicht verbunden</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="1204"/>
        <source>Show Bitmessage</source>
        <translation>Bitmessage anzeigen</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/bitmessageui.py" line="709"/>
        <source>Send</source>
        <translation>Senden</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="1227"/>
        <source>Subscribe</source>
        <translation>Abonnieren</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="1233"/>
        <source>Channel</source>
        <translation>Chan</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/bitmessageui.py" line="755"/>
        <source>Quit</source>
        <translation>Beenden</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="1459"/>
        <source>You may manage your keys by editing the keys.dat file stored in the same directory as this program. It is important that you back up this file.</source>
        <translation>Sie können Ihre Schlüssel verwalten, indem Sie die keys.dat bearbeiten, die im gleichen Ordner wie das Programm liegt. Es ist empfehlenswert, vorher ein Backup dieser Datei anzulegen.</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="1463"/>
        <source>You may manage your keys by editing the keys.dat file stored in
 {0} 
It is important that you back up this file.</source>
        <translation>Sie können Ihre Schlüssel verwalten, indem Sie die keys.dat bearbeiten, die im Ordner
{0} liegt.
Es ist empfehlenswert, vorher ein Backup dieser Datei anzulegen.</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="1470"/>
        <source>Open keys.dat?</source>
        <translation>Die keys.dat öffnen?</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="1467"/>
        <source>You may manage your keys by editing the keys.dat file stored in the same directory as this program. It is important that you back up this file. Would you like to open the file now? (Be sure to close Bitmessage before making any changes.)</source>
        <translation>Sie können Ihre Schlüssel verwalten, indem Sie die keys.dat bearbeiten, die im gleichen Ordner wie das Programm liegt. Es ist empfehlenswert, vorher ein Backup dieser Datei anzulegen. Möchten Sie die Datei jetzt öffnen? (Stellen Sie sicher, dass Sie Bitmessage beendet haben, bevor Sie etwas ändern.)</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="1470"/>
        <source>You may manage your keys by editing the keys.dat file stored in
 {0} 
It is important that you back up this file. Would you like to open the file now? (Be sure to close Bitmessage before making any changes.)</source>
        <translation>Sie können Ihre Schlüssel verwalten, indem Sie die keys.dat bearbeiten,
die im Ordner {0} liegt.
Es ist empfehlenswert, vorher ein Backup dieser Datei anzulegen. Möchten Sie die Datei jetzt öffnen?
(Stellen Sie sicher, dass Sie Bitmessage beendet haben, bevor Sie etwas ändern.)</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="1477"/>
        <source>Delete trash?</source>
        <translation>Papierkorb leeren?</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="1477"/>
        <source>Are you sure you want to delete all trashed messages?</source>
        <translation>Sind Sie sicher, dass Sie alle Nachrichten im Papierkorb löschen möchten?</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="1495"/>
        <source>bad passphrase</source>
        <translation>Falsches Passwort</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="1495"/>
        <source>You must type your passphrase. If you don&apos;t have one then this is not the form for you.</source>
        <translation>Sie müssen Ihr Passwort eingeben. Wenn Sie keins haben, ist dies das falsche Formular für Sie.</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="1518"/>
        <source>Bad address version number</source>
        <translation>Falsche Addressenversionsnummer</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="1508"/>
        <source>Your address version number must be a number: either 3 or 4.</source>
        <translation>Die Addressenversionsnummer muss eine Zahl sein, entweder 3 oder 4.</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="1518"/>
        <source>Your address version number must be either 3 or 4.</source>
        <translation>Die Addressenversionnsnummer muss entweder 3 oder 4 sein.</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="1608"/>
        <source>Chan name needed</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="1608"/>
        <source>You didn&apos;t enter a chan name.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="1628"/>
        <source>Address already present</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="1628"/>
        <source>Could not add chan because it appears to already be one of your identities.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="1632"/>
        <source>Success</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="1603"/>
        <source>Successfully created chan. To let others join your chan, give them the chan name and this Bitmessage address: {0}. This address also appears in &apos;Your Identities&apos;.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="1612"/>
        <source>Address too new</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="1612"/>
        <source>Although that Bitmessage address might be valid, its version number is too new for us to handle. Perhaps you need to upgrade Bitmessage.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="1616"/>
        <source>Address invalid</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="1616"/>
        <source>That Bitmessage address is not valid.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="1624"/>
        <source>Address does not match chan name</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="1624"/>
        <source>Although the Bitmessage address you entered was valid, it doesn&apos;t match the chan name.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="1632"/>
        <source>Successfully joined chan. </source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="1597"/>
        <source>Connection lost</source>
        <translation>Verbindung verloren</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="1647"/>
        <source>Connected</source>
        <translation>Verbunden</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="1765"/>
        <source>Message trashed</source>
        <translation>Nachricht in den Papierkorb verschoben</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="1854"/>
        <source>The TTL, or Time-To-Live is the length of time that the network will hold the message.
 The recipient must get it during this time. If your Bitmessage client does not hear an acknowledgement, it
 will resend the message automatically. The longer the Time-To-Live, the
 more work your computer must do to send the message. A Time-To-Live of four or five days is often appropriate.</source>
        <translation>Die Haltbarkeit, oder Time-To-Live, ist die Dauer, für die das Netzwerk die Nachricht speichern wird. Der Empfänger muss sie während dieser Zeit empfangen. Wenn Ihr Bitmessage-Client keine Empfangsbestätigung erhält, wird die Nachricht automatisch erneut verschickt. Je länger die Time-To-Live, desto mehr Arbeit muss Ihr Rechner verrichten, um die Nachricht zu senden. Eine Time-To-Live von vier oder fünf Tagen ist meist ausreichend.</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="1899"/>
        <source>Message too long</source>
        <translation>Narchricht zu lang</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="1899"/>
        <source>The message that you are trying to send is too long by {0} bytes. (The maximum is 261644 bytes). Please cut it down before sending.</source>
        <translation>Die Nachricht, die Sie zu senden versuchen, ist {0} Byte zu lang. (Maximum 261.644 Bytes). Bitte verringern Sie ihre Größe vor dem Senden.</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="1941"/>
        <source>Error: Your account wasn&apos;t registered at an email gateway. Sending registration now as {0}, please wait for the registration to be processed before retrying sending.</source>
        <translation>Fehler: Ihr Konto war an keiner E-Mail Schnittstelle registriert. Registrierung als {0} wird versandt, bitte vor einem erneutem Sendeversuch auf die Registrierungsverarbeitung warten.</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="2008"/>
        <source>Error: Bitmessage addresses start with BM-   Please check {0}</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="2011"/>
        <source>Error: The address {0} is not typed or copied correctly. Please check it.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="2014"/>
        <source>Error: The address {0} contains invalid characters. Please check it.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="2017"/>
        <source>Error: The address version in {0} is too high. Either you need to upgrade your Bitmessage software or your acquaintance is being clever.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="2020"/>
        <source>Error: Some data encoded in the address {0} is too short. There might be something wrong with the software of your acquaintance.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="2023"/>
        <source>Error: Some data encoded in the address {0} is too long. There might be something wrong with the software of your acquaintance.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="2026"/>
        <source>Error: Some data encoded in the address {0} is malformed. There might be something wrong with the software of your acquaintance.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="2029"/>
        <source>Error: Something is wrong with the address {0}.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="2092"/>
        <source>Error: You must specify a From address. If you don&apos;t have one, go to the &apos;Your Identities&apos; tab.</source>
        <translation>Fehler: Sie müssen eine Absenderadresse auswählen. Sollten Sie keine haben, wechseln Sie zum Reiter &quot;Ihre Identitäten&quot;.</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="2026"/>
        <source>Address version number</source>
        <translation>Adressversion</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="2026"/>
        <source>Concerning the address {0}, Bitmessage cannot understand address version numbers of {1}. Perhaps upgrade Bitmessage to the latest version.</source>
        <translation>Aufgrund der Adresse {0} kann Bitmessage Adressen mit der Version {1} nicht verarbeiten. Möglicherweise müssen Sie Bitmessage auf die aktuelle Version aktualisieren.</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="2030"/>
        <source>Stream number</source>
        <translation>Datenstrom Nummer</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="2030"/>
        <source>Concerning the address {0}, Bitmessage cannot handle stream numbers of {1}. Perhaps upgrade Bitmessage to the latest version.</source>
        <translation>Aufgrund der Adresse {0} kann Bitmessage den Datenstrom  mit der Version {1} nicht verarbeiten. Möglicherweise müssen Sie Bitmessage auf die aktuelle Version aktualisieren.</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="2035"/>
        <source>Warning: You are currently not connected. Bitmessage will do the work necessary to send the message but it won&apos;t send until you connect.</source>
        <translation>Warnung: Sie sind aktuell nicht verbunden. Bitmessage wird die nötige Arbeit zum versenden verrichten, aber erst senden, wenn Sie verbunden sind.</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="2084"/>
        <source>Message queued.</source>
        <translation>Nachricht befindet sich in der Warteschleife.</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="2088"/>
        <source>Your &apos;To&apos; field is empty.</source>
        <translation>Ihr &quot;Empfänger&quot;-Feld ist leer.</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="2149"/>
        <source>Right click one or more entries in your address book and select &apos;Send message to this address&apos;.</source>
        <translation>Klicken Sie mit rechts auf einen oder mehrere Einträge aus Ihrem Adressbuch und wählen Sie &quot;Nachricht an diese Adresse senden&quot;.</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="2165"/>
        <source>Fetched address from namecoin identity.</source>
        <translation>Adresse aus Namecoin Identität geholt.</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="2277"/>
        <source>New Message</source>
        <translation>Neue Nachricht</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="2260"/>
        <source>From </source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="2638"/>
        <source>Sending email gateway registration request</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/blacklist.py" line="59"/>
        <source>Address is valid.</source>
        <translation>Adresse ist gültig.</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/blacklist.py" line="93"/>
        <source>The address you entered was invalid. Ignoring it.</source>
        <translation>Die von Ihnen eingegebene Adresse ist ungültig, sie wird ignoriert.</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="2307"/>
        <source>Error: You cannot add the same address to your address book twice. Try renaming the existing one if you want.</source>
        <translation>Fehler: Sie können eine Adresse nicht doppelt im Adressbuch speichern. Sie können jedoch die bereits eingetragene umbenennen.</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="3333"/>
        <source>Error: You cannot add the same address to your subscriptions twice. Perhaps rename the existing one if you want.</source>
        <translation>Fehler: Dieselbe Adresse kann nicht doppelt in die Abonnements eingetragen werden. Sie können jedoch die bereits eingetragene umbenennen.</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="2429"/>
        <source>Restart</source>
        <translation>Neustart</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="2415"/>
        <source>You must restart Bitmessage for the port number change to take effect.</source>
        <translation>Sie müssen Bitmessage neu starten, um den geänderten Port zu verwenden.</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="2429"/>
        <source>Bitmessage will use your proxy from now on but you may want to manually restart Bitmessage now to close existing connections (if any).</source>
        <translation>Bitmessage wird ab sofort den Proxy-Server verwenden, aber eventuell möchten Sie Bitmessage neu starten um bereits bestehende Verbindungen zu schließen.</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="2458"/>
        <source>Number needed</source>
        <translation>Zahl erforderlich</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="2458"/>
        <source>Your maximum download and upload rate must be numbers. Ignoring what you typed.</source>
        <translation>Ihre maximale Herungerlade- und Hochladegeschwindigkeit müssen Zahlen sein. Die eingetragenen Werte werden ignoriert.</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="2538"/>
        <source>Will not resend ever</source>
        <translation>Wird nie wiederversendet</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="2538"/>
        <source>Note that the time limit you entered is less than the amount of time Bitmessage waits for the first resend attempt therefore your messages will never be resent.</source>
        <translation>Bitte beachten Sie, dass der eingetratene Dauer kürzer ist als die, die Bitmessage auf das erste Wiederversenden wartet. Deswegen werden Ihre Nachrichten nie wiederversendet.</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="2611"/>
        <source>Sending email gateway unregistration request</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="2615"/>
        <source>Sending email gateway status request</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/address_dialogs.py" line="136"/>
        <source>Passphrase mismatch</source>
        <translation>Kennwort stimmt nicht überein</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/address_dialogs.py" line="136"/>
        <source>The passphrase you entered twice doesn&apos;t match. Try again.</source>
        <translation>Die von Ihnen eingegebenen Kennwörter sind nicht identisch. Bitte neu versuchen.</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/address_dialogs.py" line="144"/>
        <source>Choose a passphrase</source>
        <translation>Wählen Sie ein Kennwort</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/address_dialogs.py" line="144"/>
        <source>You really do need a passphrase.</source>
        <translation>Sie benötigen unbedingt ein Kennwort.</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="3012"/>
        <source>Address is gone</source>
        <translation>Adresse ist verloren</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="3012"/>
        <source>Bitmessage cannot find your address {0}. Perhaps you removed it?</source>
        <translation>Bitmessage kann Ihre Adresse {0} nicht finden. Haben Sie sie gelöscht?</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="3015"/>
        <source>Address disabled</source>
        <translation>Adresse deaktiviert</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="3015"/>
        <source>Error: The address from which you are trying to send is disabled. You&apos;ll have to enable it on the &apos;Your Identities&apos; tab before using it.</source>
        <translation>Fehler: Die Adresse von der Sie versuchen zu senden ist deaktiviert. Sie müssen sie unter dem Reiter &quot;Ihre Identitäten&quot; aktivieren bevor Sie fortfahren.</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="3020"/>
        <source>Entry added to the Address Book. Edit the label to your liking.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="3090"/>
        <source>Entry added to the blacklist. Edit the label to your liking.</source>
        <translation>Eintrag in die Blacklist hinzugefügt. Die Beschriftung können Sie ändern.</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="3095"/>
        <source>Error: You cannot add the same address to your blacklist twice. Try renaming the existing one if you want.</source>
        <translation>Fehler: Dieselbe Addresse kann nicht doppelt in die Blacklist eingetragen werden. Sie können jedoch die bereits eingetragene umbenennen.</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="3237"/>
        <source>Moved items to trash.</source>
        <translation>Objekt(e) in den Papierkorb verschoben.</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="3181"/>
        <source>Undeleted item.</source>
        <translation>Nachricht wiederhergestellt.</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="3205"/>
        <source>Save As...</source>
        <translation>Speichern unter...</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="3214"/>
        <source>Write error.</source>
        <translation>Fehler beim Speichern.</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="3317"/>
        <source>No addresses selected.</source>
        <translation>Keine Adresse ausgewählt.</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="3372"/>
        <source>If you delete the subscription, messages that you already received will become inaccessible. Maybe you can consider disabling the subscription instead. Disabled subscriptions will not receive new messages, but you can still view messages you already received.

Are you sure you want to delete the subscription?</source>
        <translation>Wenn Sie das Abonnement löschen, werden bereits erhaltene Nachrichten unaufrufbar. Vielleicht deaktivieren Sie das Abonnement lieber? Deaktivierte Abonnements erhalten keine neue Nachrichten, aber Sie können die bereits erhaltene aufrufen.

Sind Sie sicher, dass Sie das Abonnement löschen möchten?</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="3615"/>
        <source>If you delete the channel, messages that you already received will become inaccessible. Maybe you can consider disabling the channel instead. Disabled channels will not receive new messages, but you can still view messages you already received.

Are you sure you want to delete the channel?</source>
        <translation>Wenn Sie das Chan löschen, die bereits erhaltene Nachrichten werden unaufrufbar. Vielleicht deaktivieren Sie den Chan lieber?. Deaktivierte Chans erhalten keine neue Nachrichten, aber Sie können die bereits erhaltene aufrufen.

Sind Sie sicher, dass Sie das Chan löschen möchten?</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="3745"/>
        <source>Do you really want to remove this avatar?</source>
        <translation>Wollen Sie diesen Avatar wirklich entfernen?</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="3753"/>
        <source>You have already set an avatar for this address. Do you really want to overwrite it?</source>
        <translation>Sie haben bereits einen Avatar für diese Adresse gewählt. Wollen Sie ihn wirklich überschreiben?</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="4151"/>
        <source>Start-on-login not yet supported on your OS.</source>
        <translation>Mit Betriebssystem starten, noch nicht von Ihrem Betriebssystem unterstützt</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="4144"/>
        <source>Minimize-to-tray not yet supported on your OS.</source>
        <translation>Ins System Tray minimieren von Ihrem Betriebssytem noch nicht unterstützt.</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="4147"/>
        <source>Tray notifications not yet supported on your OS.</source>
        <translation>Trach-Benachrichtigungen von Ihrem Betriebssystem noch nicht unterstützt.</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="4318"/>
        <source>Testing...</source>
        <translation>teste...</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="4237"/>
        <source>This is a chan address. You cannot use it as a pseudo-mailing list.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/address_dialogs.py" line="35"/>
        <source>The address should start with &apos;&apos;BM-&apos;&apos;</source>
        <translation>Die Adresse sollte mit &quot;BM-&quot; beginnen</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/address_dialogs.py" line="40"/>
        <source>The address is not typed or copied correctly (the checksum failed).</source>
        <translation>Die Adresse wurde nicht korrekt getippt oder kopiert (Prüfsumme falsch).</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/address_dialogs.py" line="46"/>
        <source>The version number of this address is higher than this software can support. Please upgrade Bitmessage.</source>
        <translation>Die Versionsnummer dieser Adresse ist höher als diese Software unterstützt. Bitte installieren Sie die neueste Bitmessage Version.</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/address_dialogs.py" line="52"/>
        <source>The address contains invalid characters.</source>
        <translation>Diese Adresse beinhaltet ungültige Zeichen.</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/address_dialogs.py" line="57"/>
        <source>Some data encoded in the address is too short.</source>
        <translation>Die in der Adresse kodierten Daten sind zu kurz.</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/address_dialogs.py" line="62"/>
        <source>Some data encoded in the address is too long.</source>
        <translation>Die in der Adresse kodierten Daten sind zu lang.</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/address_dialogs.py" line="67"/>
        <source>Some data encoded in the address is malformed.</source>
        <translation>Einige in der Adresse kodierten Daten sind ungültig.</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="4289"/>
        <source>Enter an address above.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/address_dialogs.py" line="171"/>
        <source>Address is an old type. We cannot display its past broadcasts.</source>
        <translation>Alter Addressentyp. Wir können deren vorige Rundrufe nicht anzeigen.</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/address_dialogs.py" line="186"/>
        <source>There are no recent broadcasts from this address to display.</source>
        <translation>Es gibt keine neuen Rundrufe von dieser Adresse die angezeigt werden können.</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="4374"/>
        <source>You are using TCP port {0}. (This can be changed in the settings).</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/bitmessageui.py" line="665"/>
        <source>Bitmessage</source>
        <translation>Bitmessage</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/bitmessageui.py" line="666"/>
        <source>Identities</source>
        <translation>Identitäten</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/bitmessageui.py" line="667"/>
        <source>New Identity</source>
        <translation>Neue Identität</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/bitmessageui.py" line="730"/>
        <source>Search</source>
        <translation>Suchen</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/bitmessageui.py" line="731"/>
        <source>All</source>
        <translation>Alle</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/bitmessageui.py" line="738"/>
        <source>To</source>
        <translation>An</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/bitmessageui.py" line="740"/>
        <source>From</source>
        <translation>Von</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/bitmessageui.py" line="742"/>
        <source>Subject</source>
        <translation>Betreff</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/bitmessageui.py" line="735"/>
        <source>Message</source>
        <translation>Nachricht</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/bitmessageui.py" line="744"/>
        <source>Received</source>
        <translation>Erhalten</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/bitmessageui.py" line="683"/>
        <source>Messages</source>
        <translation>Nachrichten</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/bitmessageui.py" line="686"/>
        <source>Address book</source>
        <translation>Addressbuch</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/bitmessageui.py" line="688"/>
        <source>Address</source>
        <translation>Adresse</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/bitmessageui.py" line="689"/>
        <source>Add Contact</source>
        <translation>Kontakt hinzufügen</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/bitmessageui.py" line="690"/>
        <source>Fetch Namecoin ID</source>
        <translation>Hole Namecoin ID</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/bitmessageui.py" line="697"/>
        <source>Subject:</source>
        <translation>Betreff:</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/bitmessageui.py" line="696"/>
        <source>From:</source>
        <translation>Von:</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/bitmessageui.py" line="693"/>
        <source>To:</source>
        <translation>An:</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/bitmessageui.py" line="695"/>
        <source>Send ordinary Message</source>
        <translation>Ordentliche Nachricht senden</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/bitmessageui.py" line="699"/>
        <source>Send Message to your Subscribers</source>
        <translation>Rundruf an Ihre Abonnenten senden</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/bitmessageui.py" line="700"/>
        <source>TTL:</source>
        <translation>Lebenszeit:</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/bitmessageui.py" line="727"/>
        <source>Subscriptions</source>
        <translation>Abonnements</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/bitmessageui.py" line="711"/>
        <source>Add new Subscription</source>
        <translation>Neues Abonnement anlegen</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/bitmessageui.py" line="745"/>
        <source>Chans</source>
        <translation>Chans</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/bitmessageui.py" line="729"/>
        <source>Add Chan</source>
        <translation>Chan hinzufügen</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/bitmessageui.py" line="750"/>
        <source>File</source>
        <translation>Datei</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/bitmessageui.py" line="761"/>
        <source>Settings</source>
        <translation>Einstellungen</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/bitmessageui.py" line="757"/>
        <source>Help</source>
        <translation>Hilfe</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/bitmessageui.py" line="753"/>
        <source>Import keys</source>
        <translation>Schlüssel importieren</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/bitmessageui.py" line="754"/>
        <source>Manage keys</source>
        <translation>Schlüssel verwalten</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/bitmessageui.py" line="756"/>
        <source>Ctrl+Q</source>
        <translation>Strg+Q</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/bitmessageui.py" line="758"/>
        <source>F1</source>
        <translation>F1</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/bitmessageui.py" line="759"/>
        <source>Contact support</source>
        <translation>Unterstützung anfordern</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/bitmessageui.py" line="760"/>
        <source>About</source>
        <translation>Über</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/bitmessageui.py" line="762"/>
        <source>Regenerate deterministic addresses</source>
        <translation>Deterministische Adressen neu generieren</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/bitmessageui.py" line="763"/>
        <source>Delete all trashed messages</source>
        <translation>Alle Nachrichten im Papierkorb löschen</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/bitmessageui.py" line="764"/>
        <source>Join / Create chan</source>
        <translation>Chan beitreten / erstellen</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/foldertree.py" line="181"/>
        <source>All accounts</source>
        <translation>Alle Identitäten</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/messageview.py" line="47"/>
        <source>Zoom level {0}%</source>
        <translation>Zoom-Stufe {0}%</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/blacklist.py" line="90"/>
        <source>Error: You cannot add the same address to your list twice. Perhaps rename the existing one if you want.</source>
        <translation>Fehler: Sie können eine Adresse nicht doppelt zur Liste hinzufügen. Wenn Sie möchten, benennen Sie den existierenden Eintrag um.</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/blacklist.py" line="111"/>
        <source>Add new entry</source>
        <translation>Neuen Eintrag erstellen</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="4334"/>
        <source>Display the {0} recent broadcast(s) from this address.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="1774"/>
        <source>New version of PyBitmessage is available: {0}. Download it from https://github.com/Bitmessage/PyBitmessage/releases/latest</source>
        <translation>Neue Version von PyBitmessage steht zur Verfügung: {0}. Sie können sie von https://github.com/Bitmessage/PyBitmessage/releases/latest herunterladen.</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="2774"/>
        <source>Waiting for PoW to finish... {0}%</source>
        <translation>Warte auf Abschluss von Berechnungen (PoW)... {0}%</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="2784"/>
        <source>Shutting down Pybitmessage... {0}%</source>
        <translation>PyBitmessage wird beendet... {0}%</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="2802"/>
        <source>Waiting for objects to be sent... {0}%</source>
        <translation>Warte auf Versand von Objekten... {0}%</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="2822"/>
        <source>Saving settings... {0}%</source>
        <translation>Einstellungen werden gespeichert... {0}%</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="2835"/>
        <source>Shutting down core... {0}%</source>
        <translation>Kern wird beendet... {0}%</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="2841"/>
        <source>Stopping notifications... {0}%</source>
        <translation>Beende Benachrichtigungen... {0}%</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="2845"/>
        <source>Shutdown imminent... {0}%</source>
        <translation>Unmittelbar vor Beendung... {0}%</translation>
    </message>
    <message numerus="yes">
        <location filename="../bitmessageqt/bitmessageui.py" line="706"/>
        <source>%n hour(s)</source>
        <translation><numerusform>%n Stunde</numerusform><numerusform>%n Stunden</numerusform></translation>
    </message>
    <message numerus="yes">
        <location filename="../bitmessageqt/__init__.py" line="829"/>
        <source>%n day(s)</source>
        <translation><numerusform>%n Tag</numerusform><numerusform>%n Tage</numerusform></translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="2742"/>
        <source>Shutting down PyBitmessage... {0}%</source>
        <translation>PyBitmessage wird beendet... {0}%</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="1148"/>
        <source>Sent</source>
        <translation>Gesendet</translation>
    </message>
    <message>
        <location filename="../class_addressGenerator.py" line="91"/>
        <source>Generating one new address</source>
        <translation>Neue Addresse wird erstellt</translation>
    </message>
    <message>
        <location filename="../class_addressGenerator.py" line="153"/>
        <source>Done generating address. Doing work necessary to broadcast it...</source>
        <translation>Die Addresse wurde erstellt. Arbeit wird verrichtet, um sie zu versenden...</translation>
    </message>
    <message>
        <location filename="../class_addressGenerator.py" line="170"/>
        <source>Generating {0} new addresses.</source>
        <translation>Erzeuge {0} neue Addressen.</translation>
    </message>
    <message>
        <location filename="../class_addressGenerator.py" line="247"/>
        <source>{0} is already in &apos;Your Identities&apos;. Not adding it again.</source>
        <translation>{0} befindet sich bereits unter Ihren Identitäten, wird nicht doppelt hinzugefügt.</translation>
    </message>
    <message>
        <location filename="../class_addressGenerator.py" line="283"/>
        <source>Done generating address</source>
        <translation>Addresse fertiggestellt.</translation>
    </message>
    <message>
        <location filename="../class_outgoingSynSender.py" line="228"/>
        <source>SOCKS5 Authentication problem: {0}</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../class_sqlThread.py" line="584"/>
        <source>Disk full</source>
        <translation>Datenträger voll</translation>
    </message>
    <message>
        <location filename="../class_sqlThread.py" line="584"/>
        <source>Alert: Your disk or data storage volume is full. Bitmessage will now exit.</source>
        <translation>Warnung: Datenträger ist voll. Bitmessage wird jetzt beendet.</translation>
    </message>
    <message>
        <location filename="../class_singleWorker.py" line="747"/>
        <source>Error! Could not find sender address (your address) in the keys.dat file.</source>
        <translation>Fehler! Konnte die Absenderadresse (Ihre Adresse) in der keys.dat-Datei nicht finden.</translation>
    </message>
    <message>
        <location filename="../class_singleWorker.py" line="495"/>
        <source>Doing work necessary to send broadcast...</source>
        <translation>Arbeit wird verrichtet, um Rundruf zu verschicken...</translation>
    </message>
    <message>
        <location filename="../class_singleWorker.py" line="518"/>
        <source>Broadcast sent on {0}</source>
        <translation>Rundruf verschickt um {0}</translation>
    </message>
    <message>
        <location filename="../class_singleWorker.py" line="587"/>
        <source>Encryption key was requested earlier.</source>
        <translation>Verschlüsselungscode wurde früher angefordert.</translation>
    </message>
    <message>
        <location filename="../class_singleWorker.py" line="624"/>
        <source>Sending a request for the recipient&apos;s encryption key.</source>
        <translation>Anfrage nach dem Verschlüsselungscode des Empfängers wird versendet.</translation>
    </message>
    <message>
        <location filename="../class_singleWorker.py" line="639"/>
        <source>Looking up the receiver&apos;s public key</source>
        <translation>Suche nach dem öffentlichen Schlüssel des Empfängers</translation>
    </message>
    <message>
        <location filename="../class_singleWorker.py" line="673"/>
        <source>Problem: Destination is a mobile device who requests that the destination be included in the message but this is disallowed in your settings.  {0}</source>
        <translation>Problem: Der Empfänger benutzt ein mobiles Gerät und erfordert eine unverschlüsselte Empfängeraddresse. Dies ist in Ihren Einstellungen jedoch nicht zulässig. 1%</translation>
    </message>
    <message>
        <location filename="../class_singleWorker.py" line="687"/>
        <source>Doing work necessary to send message.
There is no required difficulty for version 2 addresses like this.</source>
        <translation>Arbeit für Nachrichtenversand wird verrichtet.
Version-2-Addressen wie die des Empfängers haben keine Schweirigkeitserforderungen.</translation>
    </message>
    <message>
        <location filename="../class_singleWorker.py" line="701"/>
        <source>Doing work necessary to send message.
Receiver&apos;s required difficulty: {0} and {1}</source>
        <translation>Arbeit für Nachrichtenversand wird errichtet. Vom Empfänger geforderte Schwierigkeit: {0} und {1}</translation>
    </message>
    <message>
        <location filename="../class_singleWorker.py" line="710"/>
        <source>Problem: The work demanded by the recipient ({0} and {1}) is more difficult than you are willing to do. {2}</source>
        <translation>Problem: Die vom Empfänger verlangte Arbeit ({0} und {1}) ist schwieriger, als Sie in den Einstellungen erlaubt haben. {2}</translation>
    </message>
    <message>
        <location filename="../class_singleWorker.py" line="722"/>
        <source>Problem: You are trying to send a message to yourself or a chan but your encryption key could not be found in the keys.dat file. Could not encrypt message. {0}</source>
        <translation>Problem: Sie versuchen, eine Nachricht an sich zu versenden, aber Ihr Schlüssel befindet sich nicht in der keys.dat-Datei. Die Nachricht kann nicht verschlüsselt werden. 1%</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="1049"/>
        <source>Doing work necessary to send message.</source>
        <translation>Arbeit wird verrichtet, um die Nachricht zu verschicken.</translation>
    </message>
    <message>
        <location filename="../class_singleWorker.py" line="845"/>
        <source>Message sent. Waiting for acknowledgement. Sent on {0}</source>
        <translation>Nachricht gesendet. Auf Bestätigung wird gewartet. Zeitpunkt der  Sendung: {0}</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="1037"/>
        <source>Doing work necessary to request encryption key.</source>
        <translation>Arbeit wird verrichtet, um den Schlüssel nachzufragen...</translation>
    </message>
    <message>
        <location filename="../class_singleWorker.py" line="961"/>
        <source>Broadcasting the public key request. This program will auto-retry if they are offline.</source>
        <translation>Anfrage nach dem öffentlichen Schlüssel läuft. Wenn der Besitzer nicht mit dem Netzwerk verbunden ist, wird ein Wiederholungsversuch unternommen.</translation>
    </message>
    <message>
        <location filename="../class_singleWorker.py" line="963"/>
        <source>Sending public key request. Waiting for reply. Requested at {0}</source>
        <translation>Nachfrage nach dem öffentlichen Schlüssel läuft, auf Antwort wird gewartet. Nachgefragt am {0}</translation>
    </message>
    <message>
        <location filename="../upnp.py" line="235"/>
        <source>UPnP port mapping established on port {0}</source>
        <translation>UPnP Port-Mapping eingerichtet auf Port {0}</translation>
    </message>
    <message>
        <location filename="../upnp.py" line="264"/>
        <source>UPnP port mapping removed</source>
        <translation>UPnP Port-Mapping entfernt</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="248"/>
        <source>Mark all messages as read</source>
        <translation>Alle Nachrichten als gelesen markieren</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="2636"/>
        <source>Are you sure you would like to mark all messages read?</source>
        <translation>Sind Sie sicher, dass Sie alle Nachrichten als gelesen markieren möchten?</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="1058"/>
        <source>Doing work necessary to send broadcast.</source>
        <translation>Führe Arbeit aus, die notwendig ist zum Senden des Rundspruches.</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="2708"/>
        <source>Proof of work pending</source>
        <translation>Arbeitsbeweis wird berechnet</translation>
    </message>
    <message numerus="yes">
        <location filename="../bitmessageqt/__init__.py" line="2708"/>
        <source>%n object(s) pending proof of work</source>
        <translation><numerusform>%n Objekt wartet auf Berechnungen</numerusform><numerusform>%n Objekte warten auf Berechnungen</numerusform></translation>
    </message>
    <message numerus="yes">
        <location filename="../bitmessageqt/__init__.py" line="2708"/>
        <source>%n object(s) waiting to be distributed</source>
        <translation><numerusform>%n Objekt wartet darauf, verteilt zu werden</numerusform><numerusform>%n Objekte warten darauf, verteilt zu werden</numerusform></translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="2708"/>
        <source>Wait until these tasks finish?</source>
        <translation>Warten bis diese Aufgaben erledigt sind?</translation>
    </message>
    <message>
        <location filename="../class_outgoingSynSender.py" line="211"/>
        <source>Problem communicating with proxy: {0}. Please check your network settings.</source>
        <translation>Kommunikationsfehler mit dem Proxy: {0}. Bitte überprüfen Sie Ihre Netzwerkeinstellungen.</translation>
    </message>
    <message>
        <location filename="../class_outgoingSynSender.py" line="240"/>
        <source>SOCKS5 Authentication problem: {0}. Please check your SOCKS5 settings.</source>
        <translation>SOCKS5-Authentizierung fehlgeschlagen: {0}. Bitte überprüfen Sie Ihre SOCKS5-Einstellungen.</translation>
    </message>
    <message>
        <location filename="../class_receiveDataThread.py" line="171"/>
        <source>The time on your computer, {0}, may be wrong. Please verify your settings.</source>
        <translation>Die Uhrzeit ihres Computers, {0}, ist möglicherweise falsch. Bitte überprüfen Sie Ihre einstellungen.</translation>
    </message>
    <message>
        <location filename="../namecoin.py" line="101"/>
        <source>The name {0} was not found.</source>
        <translation>Der Name {0} wurde nicht gefunden.</translation>
    </message>
    <message>
        <location filename="../namecoin.py" line="110"/>
        <source>The namecoin query failed ({0})</source>
        <translation>Namecoin-abfrage fehlgeschlagen ({0})</translation>
    </message>
    <message>
        <location filename="../namecoin.py" line="113"/>
        <source>The namecoin query failed.</source>
        <translation>Namecoin-abfrage fehlgeschlagen.</translation>
    </message>
    <message>
        <location filename="../namecoin.py" line="119"/>
        <source>The name {0} has no valid JSON data.</source>
        <translation>Der Name {0} beinhaltet keine gültige JSON-Daten.</translation>
    </message>
    <message>
        <location filename="../namecoin.py" line="127"/>
        <source>The name {0} has no associated Bitmessage address.</source>
        <translation>Der Name {0} hat keine zugewiesene Bitmessageaddresse.</translation>
    </message>
    <message>
        <location filename="../namecoin.py" line="147"/>
        <source>Success!  Namecoind version {0} running.</source>
        <translation>Erfolg! Namecoind Version {0} läuft.</translation>
    </message>
    <message>
        <location filename="../namecoin.py" line="153"/>
        <source>Success!  NMControll is up and running.</source>
        <translation>Erfolg! NMControl läuft.</translation>
    </message>
    <message>
        <location filename="../namecoin.py" line="156"/>
        <source>Couldn&apos;t understand NMControl.</source>
        <translation>Kann NMControl nicht verstehen.</translation>
    </message>
    <message>
        <location filename="../proofofwork.py" line="120"/>
        <source>Your GPU(s) did not calculate correctly, disabling OpenCL. Please report to the developers.</source>
        <translation>Ihre Grafikkarte hat inkorrekt berechnet, OpenCL wird deaktiviert. Bitte benachrichtigen Sie die Entwickler.</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="3793"/>
        <source>Set notification sound...</source>
        <translation>Benachrichtigungsklang einstellen ...</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="637"/>
        <source>
        Welcome to easy and secure Bitmessage
            * send messages to other people
            * send broadcast messages like twitter or
            * discuss in chan(nel)s with other people
        </source>
        <translation>
Willkommen zu einfachem und sicherem Bitmessage
* senden Sie Nachrichten an andere Leute
* senden Sie Rundrufe wie bei Twitter oder
* diskutieren Sie mit anderen Leuten in Chans</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="820"/>
        <source>not recommended for chans</source>
        <translation>für Chans nicht empfohlen</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="1213"/>
        <source>Quiet Mode</source>
        <translation>stiller Modus </translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="1603"/>
        <source>Problems connecting? Try enabling UPnP in the Network Settings</source>
        <translation>Verbindungsprobleme? Versuchen Sie UPnP in den Netzwerkeinstellungen einzuschalten</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="1928"/>
        <source>You are trying to send an email instead of a bitmessage. This requires registering with a gateway. Attempt to register?</source>
        <translation>Sie versuchen, eine E-Mail anstelle einer Bitmessage zu senden. Dies erfordert eine Registrierung bei einer Schnittstelle. Registrierung versuchen?</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="1960"/>
        <source>Error: Bitmessage addresses start with BM-   Please check the recipient address {0}</source>
        <translation>Fehler: Bitmessage Adressen starten mit BM-   Bitte überprüfen Sie die Empfängeradresse {0}</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="1966"/>
        <source>Error: The recipient address {0} is not typed or copied correctly. Please check it.</source>
        <translation>Fehler: Die Empfängeradresse {0} wurde nicht korrekt getippt oder kopiert. Bitte überprüfen.</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="1972"/>
        <source>Error: The recipient address {0} contains invalid characters. Please check it.</source>
        <translation>Fehler: Die Empfängeradresse {0} beinhaltet ungültig Zeichen. Bitte überprüfen.</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="1978"/>
        <source>Error: The version of the recipient address {0} is too high. Either you need to upgrade your Bitmessage software or your acquaintance is being clever.</source>
        <translation>Fehler: Die Empfängerdresseversion von {0} ist zu hoch. Entweder Sie müssen Ihre Bitmessage Software aktualisieren oder Ihr Bekannter ist sehr clever.</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="1986"/>
        <source>Error: Some data encoded in the recipient address {0} is too short. There might be something wrong with the software of your acquaintance.</source>
        <translation>Fehler: Einige Daten die in der Empfängerdresse {0} codiert sind, sind zu kurz. Es könnte sein, dass etwas mit der Software Ihres Bekannten nicht stimmt.</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="1994"/>
        <source>Error: Some data encoded in the recipient address {0} is too long. There might be something wrong with the software of your acquaintance.</source>
        <translation>Fehler: Einige Daten die in der Empfängeradresse {0} codiert sind, sind zu lang. Es könnte sein, dass etwas mit der Software Ihres Bekannten nicht stimmt.</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="2002"/>
        <source>Error: Some data encoded in the recipient address {0} is malformed. There might be something wrong with the software of your acquaintance.</source>
        <translation>Fehler: Einige codierte Daten in der Empfängeradresse {0} sind ungültig. Es könnte etwas mit der Software Ihres Bekannten sein.</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="2010"/>
        <source>Error: Something is wrong with the recipient address {0}.</source>
        <translation>Fehler: Mit der Empfängeradresse {0} stimmt etwas nicht.</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="2160"/>
        <source>Error: {0}</source>
        <translation>Fehler: {0}</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="2277"/>
        <source>From {0}</source>
        <translation>Von {0}</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="2719"/>
        <source>Synchronisation pending</source>
        <translation>Synchronisierung läuft</translation>
    </message>
    <message numerus="yes">
        <location filename="../bitmessageqt/__init__.py" line="2719"/>
        <source>Bitmessage hasn&apos;t synchronised with the network, %n object(s) to be downloaded. If you quit now, it may cause delivery delays. Wait until the synchronisation finishes?</source>
        <translation><numerusform>Bitmessage ist nicht synchronisiert, %n Objekt wurde noch nicht heruntergeladen. Wenn Sie das Programm jetzt beenden, kann es zu Zustellverzögerungen kommen. Warten bis die Synchronisierung abgeschlossen ist?</numerusform><numerusform>Bitmessage ist nicht synchronisiert, %n Objekte wurden noch nicht heruntergeladen. Wenn Sie das Programm jetzt beenden, kann es zu Zustellverzögerungen kommen. Warten bis die Synchronisierung abgeschlossen ist?</numerusform></translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="2731"/>
        <source>Not connected</source>
        <translation>Nicht verbunden</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="2731"/>
        <source>Bitmessage isn&apos;t connected to the network. If you quit now, it may cause delivery delays. Wait until connected and the synchronisation finishes?</source>
        <translation>Bitmessage ist nicht mit dem Netzwerk verbunden. Wenn Sie das Programm jetzt beenden, kann es zu Zustellverzögerungen kommen. Warten bis eine Verbindung besteht und die Synchronisierung abgeschlossen ist?</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="2746"/>
        <source>Waiting for network connection...</source>
        <translation>Warte auf Netzwerkverbindung...</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="2756"/>
        <source>Waiting for finishing synchronisation...</source>
        <translation>Warte auf Synchronisationsabschluss...</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="3811"/>
        <source>You have already set a notification sound for this address book entry. Do you really want to overwrite it?</source>
        <translation>Sie haben bereits einen Benachrichtigungsklang für diesen Adressbucheintrag gesetzt. Möchten Sie ihn wirklich überschreiben?</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="4028"/>
        <source>Error occurred: could not load message from disk.</source>
        <translation>Fehler: Nachricht konnte nicht geladen werden.</translation>
    </message>
    <message numerus="yes">
        <location filename="../bitmessageqt/address_dialogs.py" line="194"/>
        <source>Display the %n recent broadcast(s) from this address.</source>
        <translation><numerusform>Den letzten {0} Rundruf von dieser Addresse anzeigen.</numerusform><numerusform>Die letzten {0} Rundrufe von dieser Addresse anzeigen.</numerusform></translation>
    </message>
    <message>
        <location filename="../bitmessageqt/bitmessageui.py" line="658"/>
        <source>Go online</source>
        <translation>Mit dem Netzwerk verbinden</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/bitmessageui.py" line="658"/>
        <source>Go offline</source>
        <translation>Trennen vom Netzwerk</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/bitmessageui.py" line="707"/>
        <source>Clear</source>
        <translation>Löschen</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/foldertree.py" line="11"/>
        <source>inbox</source>
        <translation>Eingang</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/foldertree.py" line="12"/>
        <source>new</source>
        <translation>Neu</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/foldertree.py" line="13"/>
        <source>sent</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/foldertree.py" line="14"/>
        <source>trash</source>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>MessageView</name>
    <message>
        <location filename="../bitmessageqt/messageview.py" line="72"/>
        <source>Follow external link</source>
        <translation>Externen Link folgen</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/messageview.py" line="72"/>
        <source>The link &quot;{0}&quot; will open in a browser. It may be a security risk, it could de-anonymise you or download malicious data. Are you sure?</source>
        <translation>Der Link &quot;{0}&quot; wird in Browser geöffnet. Es kann ein Sicherheitsrisiko darstellen, es könnte Sie de-anonymisieren oder schädliche Aktivitäten durchführen. Sind Sie sicher?</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/messageview.py" line="117"/>
        <source>HTML detected, click here to display</source>
        <translation>HTML gefunden, klicken Sie hier um anzuzeigen</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/messageview.py" line="126"/>
        <source>Click here to disable HTML</source>
        <translation>Klicken Sie hier um HTML-Anzeige zu deaktivieren</translation>
    </message>
</context>
<context>
    <name>MsgDecode</name>
    <message>
        <location filename="../helper_msgcoding.py" line="72"/>
        <source>The message has an unknown encoding.
Perhaps you should upgrade Bitmessage.</source>
        <translation>Diese Bitmessage verwendtet eine unbekannte codierung.
Womöglich sollten Sie Bitmessage upgraden.</translation>
    </message>
    <message>
        <location filename="../helper_msgcoding.py" line="73"/>
        <source>Unknown encoding</source>
        <translation>Codierung unbekannt</translation>
    </message>
</context>
<context>
    <name>NewAddressDialog</name>
    <message>
        <location filename="../bitmessageqt/newaddressdialog.ui" line="14"/>
        <source>Create new Address</source>
        <translation>Neue Adresse erstellen</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/newaddressdialog.ui" line="23"/>
        <source>Here you may generate as many addresses as you like. Indeed, creating and abandoning addresses is encouraged. You may generate addresses by using either random numbers or by using a passphrase. If you use a passphrase, the address is called a &quot;deterministic&quot; address.
The &apos;Random Number&apos; option is selected by default but deterministic addresses have several pros and cons:</source>
        <translation>Sie können so viele Adressen generieren wie Sie möchten. Es ist sogar empfohlen neue Adressen zu verwenden und alte fallen zu lassen. Sie können Adressen durch Zufallszahlen erstellen lassen, oder unter Verwendung eines Kennwortsatzes. Wenn Sie einen Kennwortsatz verwenden, nennt man dies eine &quot;deterministische&quot; Adresse.
Die Zufallszahlen-Option ist standardmässig gewählt, jedoch haben deterministische Adressen einige Vor- und Nachteile:</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/newaddressdialog.ui" line="37"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;&lt;span style=&quot; font-weight:600;&quot;&gt;Pros:&lt;br/&gt;&lt;/span&gt;You can recreate your addresses on any computer from memory. &lt;br/&gt;You need-not worry about backing up your keys.dat file as long as you can remember your passphrase. &lt;br/&gt;&lt;span style=&quot; font-weight:600;&quot;&gt;Cons:&lt;br/&gt;&lt;/span&gt;You must remember (or write down) your passphrase if you expect to be able to recreate your keys if they are lost. &lt;br/&gt;You must remember the address version number and the stream number along with your passphrase. &lt;br/&gt;If you choose a weak passphrase and someone on the Internet can brute-force it, they can read your messages and send messages as you.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;&lt;span style=&quot; font-weight:600;&quot;&gt;Vorteile:&lt;br/&gt;&lt;/span&gt;Sie können ihre Adresse an jedem Computer aus dem Gedächtnis regenerieren. &lt;br/&gt;Sie brauchen sich keine Sorgen um das Sichern ihrer Schlüssel machen solange Sie sich den Kennwortsatz merken. &lt;br/&gt;&lt;span style=&quot; font-weight:600;&quot;&gt;Nachteile:&lt;br/&gt;&lt;/span&gt;Sie müssen sich den Kennwortsatz merken (oder aufschreiben) wenn Sie in der Lage sein wollen ihre Schlüssel wiederherzustellen. &lt;br/&gt;Sie müssen sich die Adressversion und die Datenstrom Nummer zusammen mit dem Kennwortsatz merken. &lt;br/&gt;Wenn Sie einen schwachen Kennwortsatz wählen und jemand kann ihn erraten oder durch ausprobieren herausbekommen, kann dieser Ihre Nachrichten lesen, oder in ihrem Namen Nachrichten senden..&lt;/p&gt;&lt;/body&gt;&lt;/html&gt; </translation>
    </message>
    <message>
        <location filename="../bitmessageqt/newaddressdialog.ui" line="66"/>
        <source>Use a random number generator to make an address</source>
        <translation>Lassen Sie eine Adresse mittels Zufallsgenerator erstellen</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/newaddressdialog.ui" line="79"/>
        <source>Use a passphrase to make addresses</source>
        <translation>Benutzen Sie einen Kennwortsatz um eine Adresse erstellen zu lassen</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/newaddressdialog.ui" line="89"/>
        <source>Spend several minutes of extra computing time to make the address(es) 1 or 2 characters shorter</source>
        <translation>Verwenden Sie einige Minuten extra Rechenleistung um die Adresse(n) ein bis zwei Zeichen kürzer zu machen</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/newaddressdialog.ui" line="96"/>
        <source>Make deterministic addresses</source>
        <translation>Deterministische Adresse erzeugen</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/newaddressdialog.ui" line="102"/>
        <source>Address version number: 4</source>
        <translation>Adress-Versionsnummer: 4</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/newaddressdialog.ui" line="109"/>
        <source>In addition to your passphrase, you must remember these numbers:</source>
        <translation>Zusätzlich zu Ihrem Kennwortsatz müssen Sie sich diese Zahlen merken:</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/newaddressdialog.ui" line="126"/>
        <source>Passphrase</source>
        <translation>Kennwortsatz</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/newaddressdialog.ui" line="133"/>
        <source>Number of addresses to make based on your passphrase:</source>
        <translation>Anzahl Adressen die basierend auf diesem Kennwortsatz erzeugt werden sollen:</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/newaddressdialog.ui" line="153"/>
        <source>Stream number: 1</source>
        <translation>Datenstrom Nummer: 1</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/newaddressdialog.ui" line="173"/>
        <source>Retype passphrase</source>
        <translation>Kennwortsatz erneut eingeben</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/newaddressdialog.ui" line="200"/>
        <source>Randomly generate address</source>
        <translation>Zufällig generierte Adresse</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/newaddressdialog.ui" line="206"/>
        <source>Label (not shown to anyone except you)</source>
        <translation>Bezeichnung (Wird niemandem außer Ihnen gezeigt)</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/newaddressdialog.ui" line="216"/>
        <source>Use the most available stream</source>
        <translation>Verwendung des am besten verfügbaren Datenstroms</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/newaddressdialog.ui" line="226"/>
        <source> (best if this is the first of many addresses you will create)</source>
        <translation>(Zum Generieren der ersten Adresse empfohlen)</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/newaddressdialog.ui" line="236"/>
        <source>Use the same stream as an existing address</source>
        <translation>Verwendung des gleichen Datenstroms wie eine bestehende Adresse</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/newaddressdialog.ui" line="246"/>
        <source>(saves you some bandwidth and processing power)</source>
        <translation>(Dies erspart Ihnen etwas an Bandbreite und Rechenleistung)</translation>
    </message>
</context>
<context>
    <name>NewSubscriptionDialog</name>
    <message>
        <location filename="../bitmessageqt/newsubscriptiondialog.ui" line="20"/>
        <source>Add new entry</source>
        <translation>Neuen Eintrag erstellen</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/newsubscriptiondialog.ui" line="26"/>
        <source>Label</source>
        <translation>Name oder Bezeichnung</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/newsubscriptiondialog.ui" line="36"/>
        <source>Address</source>
        <translation>Adresse</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/newsubscriptiondialog.ui" line="59"/>
        <source>Enter an address above.</source>
        <translation>Bitte geben Sie oben eine Adresse ein.</translation>
    </message>
</context>
<context>
    <name>SpecialAddressBehaviorDialog</name>
    <message>
        <location filename="../bitmessageqt/specialaddressbehavior.ui" line="14"/>
        <source>Special Address Behavior</source>
        <translation>Spezielles Adressverhalten</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/specialaddressbehavior.ui" line="20"/>
        <source>Behave as a normal address</source>
        <translation>Wie eine normale Adresse verhalten</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/specialaddressbehavior.ui" line="30"/>
        <source>Behave as a pseudo-mailing-list address</source>
        <translation>Wie eine Pseudo-Mailinglistenadresse verhalten</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/specialaddressbehavior.ui" line="37"/>
        <source>Mail received to a pseudo-mailing-list address will be automatically broadcast to subscribers (and thus will be public).</source>
        <translation>Nachrichten an eine Pseudo-Mailinglistenadresse werden automatisch an alle Abonnenten weitergeleitet (Der Inhalt ist dann öffentlich).</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/specialaddressbehavior.ui" line="47"/>
        <source>Name of the pseudo-mailing-list:</source>
        <translation>Name der Pseudo-Mailingliste:</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/address_dialogs.py" line="230"/>
        <source>This is a chan address. You cannot use it as a pseudo-mailing list.</source>
        <translation>Dies ist eine Chan-Adresse. Sie können sie nicht als Pseudo-Mailingliste verwenden.</translation>
    </message>
</context>
<context>
    <name>aboutDialog</name>
    <message>
        <location filename="../bitmessageqt/about.ui" line="14"/>
        <source>About</source>
        <translation>Über</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/about.py" line="68"/>
        <source>PyBitmessage</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/about.py" line="69"/>
        <source>version ?</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/about.ui" line="69"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Distributed under the MIT/X11 software license; see &lt;a href=&quot;http://www.opensource.org/licenses/mit-license.php&quot;&gt;&lt;span style=&quot; text-decoration: underline; color:#0000ff;&quot;&gt;http://www.opensource.org/licenses/mit-license.php&lt;/span&gt;&lt;/a&gt;&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Veröffentlicht unter der MIT/X11 Software-Lizenz, siehe unter &lt;a href=&quot;http://www.opensource.org/licenses/mit-license.php&quot;&gt;&lt;span style=&quot; text-decoration: underline; color:#0000ff;&quot;&gt;http://www.opensource.org/licenses/mit-license.php&lt;/span&gt;&lt;/a&gt;&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/about.ui" line="59"/>
        <source>This is Beta software.</source>
        <translation>Dies ist Beta-Software.</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/about.py" line="70"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Copyright Â© 2012-2016 Jonathan Warren&lt;br/&gt;Copyright Â© 2013-2016 The Bitmessage Developers&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"/>
    </message>
    <message encoding="UTF-8">
        <location filename="../bitmessageqt/about.ui" line="49"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Copyright © 2012-2016 Jonathan Warren&lt;br/&gt;Copyright © 2013-2017 The Bitmessage Developers&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Copyright © 2012-2016 Jonathan Warren&lt;br/&gt;Copyright © 2013-2017 The Bitmessage Developers&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
</context>
<context>
    <name>blacklist</name>
    <message>
        <location filename="../bitmessageqt/blacklist.ui" line="17"/>
        <source>Use a Blacklist (Allow all incoming messages except those on the Blacklist)</source>
        <translation>Liste als Blacklist verwenden (Erlaubt alle eingehenden Nachrichten, außer von Adressen auf der Blacklist)</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/blacklist.ui" line="27"/>
        <source>Use a Whitelist (Block all incoming messages except those on the Whitelist)</source>
        <translation>Liste als Whitelist verwenden (Erlaubt keine eingehenden Nachrichten, außer von Adressen auf der Whitelist)</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/blacklist.ui" line="34"/>
        <source>Add new entry</source>
        <translation>Neuen Eintrag erstellen</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/blacklist.ui" line="85"/>
        <source>Name or Label</source>
        <translation>Name oder Bezeichnung</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/blacklist.ui" line="90"/>
        <source>Address</source>
        <translation>Adresse</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/blacklist.py" line="150"/>
        <source>Blacklist</source>
        <translation>Blacklist (Liste gesperrter Adressen)</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/blacklist.py" line="152"/>
        <source>Whitelist</source>
        <translation>Whitelist (Liste zugelassener Adressen)</translation>
    </message>
</context>
<context>
    <name>connectDialog</name>
    <message>
        <location filename="../bitmessageqt/connect.ui" line="14"/>
        <source>Bitmessage</source>
        <translation>Bitmessage</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/connect.ui" line="20"/>
        <source>Bitmessage won&apos;t connect to anyone until you let it. </source>
        <translation>Bitmessage wird sich nicht verbinden, wenn Sie es nicht möchten.</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/connect.ui" line="27"/>
        <source>Connect now</source>
        <translation>Jetzt verbinden</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/connect.ui" line="37"/>
        <source>Let me configure special network settings first</source>
        <translation>Zunächst spezielle Netzwerkeinstellungen vornehmen</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/connect.ui" line="44"/>
        <source>Work offline</source>
        <translation>Nicht verbinden</translation>
    </message>
</context>
<context>
    <name>helpDialog</name>
    <message>
        <location filename="../bitmessageqt/help.ui" line="14"/>
        <source>Help</source>
        <translation>Hilfe</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/help.ui" line="20"/>
        <source>&lt;a href=&quot;https://bitmessage.org/wiki/PyBitmessage_Help&quot;&gt;https://bitmessage.org/wiki/PyBitmessage_Help&lt;/a&gt;</source>
        <translation>&lt;a href=&quot;https://bitmessage.org/wiki/PyBitmessage_Help&quot;&gt;https://bitmessage.org/wiki/PyBitmessage_Help&lt;/a&gt;</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/help.ui" line="30"/>
        <source>As Bitmessage is a collaborative project, help can be found online in the Bitmessage Wiki:</source>
        <translation>Bitmessage ist ein kollaboratives Projekt. Hilfe finden Sie online im Bitmessage-Wiki:</translation>
    </message>
</context>
<context>
    <name>iconGlossaryDialog</name>
    <message>
        <location filename="../bitmessageqt/iconglossary.ui" line="20"/>
        <source>Icon Glossary</source>
        <translation>Icon Glossar</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/iconglossary.ui" line="36"/>
        <source>You have no connections with other peers. </source>
        <translation>Sie haben keine Verbindung mit anderen Netzwerkteilnehmern.</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/iconglossary.ui" line="53"/>
        <source>You have made at least one connection to a peer using an outgoing connection but you have not yet received any incoming connections. Your firewall or home router probably isn&apos;t configured to forward incoming TCP connections to your computer. Bitmessage will work just fine but it would help the Bitmessage network if you allowed for incoming connections and will help you be a better-connected node.</source>
        <translation>Sie haben mindestes eine Verbindung mit einem Netzwerkteilnehmer über eine ausgehende Verbindung, aber Sie haben noch keine eingehende Verbindung. Ihre Firewall oder Ihr Router ist vermutlich nicht richtig konfiguriert, um eingehende TCP-Verbindungen an Ihren Computer weiterzuleiten. Bitmessage wird gut funktionieren, jedoch helfen Sie dem Netzwerk, wenn Sie eingehende Verbindungen erlauben. Es hilft auch Ihnen, schneller und mehr Verbindungen ins Netzwerk aufzubauen.</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/iconglossary.py" line="85"/>
        <source>You are using TCP port ?. (This can be changed in the settings).</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/iconglossary.ui" line="96"/>
        <source>You do have connections with other peers and your firewall is correctly configured.</source>
        <translation>Sie haben Verbindungen mit anderen Netzwerkteilnehmern und Ihre Firewall ist richtig konfiguriert.</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/dialogs.py" line="58"/>
        <source>You are using TCP port {0}. (This can be changed in the settings).</source>
        <translation>Sie benutzen TCP-Port {0} (Dieser kann in den Einstellungen verändert werden).</translation>
    </message>
</context>
<context>
    <name>networkstatus</name>
    <message>
        <location filename="../bitmessageqt/networkstatus.ui" line="39"/>
        <source>Total connections:</source>
        <translation>Verbindungen insgesamt:</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/networkstatus.ui" line="185"/>
        <source>Since startup:</source>
        <translation>Seit Start:</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/networkstatus.ui" line="201"/>
        <source>Processed 0 person-to-person messages.</source>
        <translation>0 Person-zu-Person-Nachrichten verarbeitet.</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/networkstatus.ui" line="230"/>
        <source>Processed 0 public keys.</source>
        <translation>0 öffentliche Schlüssel verarbeitet.</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/networkstatus.ui" line="217"/>
        <source>Processed 0 broadcasts.</source>
        <translation>0 Rundrufe verarbeitet.</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/networkstatus.ui" line="282"/>
        <source>Inventory lookups per second: 0</source>
        <translation>Inventory lookups pro Sekunde: 0</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/networkstatus.ui" line="243"/>
        <source>Objects to be synced:</source>
        <translation>Zu synchronisierende Objektanzahl:</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/networkstatus.ui" line="152"/>
        <source>Stream #</source>
        <translation>Datenstrom #</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/networkstatus.ui" line="116"/>
        <source>Connections</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/networkstatus.py" line="171"/>
        <source>Since startup on {0}</source>
        <translation>Seit Start der Anwendung am {0}</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/networkstatus.py" line="90"/>
        <source>Down: {0}/s  Total: {1}</source>
        <translation>Herunter: {0}/s  Insg.: {1}</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/networkstatus.py" line="92"/>
        <source>Up: {0}/s  Total: {1}</source>
        <translation>Hoch: {0}/s Insg.: {1}</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/networkstatus.py" line="153"/>
        <source>Total Connections: {0}</source>
        <translation>Verbindungen insgesamt: {0}</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/networkstatus.py" line="163"/>
        <source>Inventory lookups per second: {0}</source>
        <translation>Inventory lookups pro Sekunde: {0}</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/networkstatus.ui" line="256"/>
        <source>Up: 0 kB/s</source>
        <translation>Hoch: 0 kB/s</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/networkstatus.ui" line="269"/>
        <source>Down: 0 kB/s</source>
        <translation>Herunter: 0 kB/s</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/bitmessageui.py" line="749"/>
        <source>Network Status</source>
        <translation>Netzwerkstatus</translation>
    </message>
    <message numerus="yes">
        <location filename="../bitmessageqt/networkstatus.py" line="57"/>
        <source>byte(s)</source>
        <translation><numerusform>Byte</numerusform><numerusform>Bytes</numerusform></translation>
    </message>
    <message numerus="yes">
        <location filename="../bitmessageqt/networkstatus.py" line="68"/>
        <source>Object(s) to be synced: %n</source>
        <translation><numerusform>%n Objekt zu synchronisieren.</numerusform><numerusform>%n Objekte zu synchronisieren.</numerusform></translation>
    </message>
    <message numerus="yes">
        <location filename="../bitmessageqt/networkstatus.py" line="72"/>
        <source>Processed %n person-to-person message(s).</source>
        <translation><numerusform>%n Person-zu-Person-Nachricht bearbeitet.</numerusform><numerusform>%n Person-zu-Person-Nachrichten bearbeitet.</numerusform></translation>
    </message>
    <message numerus="yes">
        <location filename="../bitmessageqt/networkstatus.py" line="77"/>
        <source>Processed %n broadcast message(s).</source>
        <translation><numerusform>%n Rundruf-Nachricht bearbeitet.</numerusform><numerusform>%n Rundruf-Nachrichten bearbeitet.</numerusform></translation>
    </message>
    <message numerus="yes">
        <location filename="../bitmessageqt/networkstatus.py" line="82"/>
        <source>Processed %n public key(s).</source>
        <translation><numerusform>%n öffentlicher Schlüssel verarbeitet.</numerusform><numerusform>%n öffentliche Schlüssel verarbeitet.</numerusform></translation>
    </message>
    <message>
        <location filename="../bitmessageqt/networkstatus.ui" line="120"/>
        <source>Peer</source>
        <translation>Peer</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/networkstatus.ui" line="123"/>
        <source>IP address or hostname</source>
        <translation>IP-Adresse oder Hostname</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/networkstatus.ui" line="128"/>
        <source>Rating</source>
        <translation>Bewertung</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/networkstatus.ui" line="131"/>
        <source>PyBitmessage tracks the success rate of connection attempts to individual nodes. The rating ranges from -1 to 1 and affects the likelihood of selecting the node in the future</source>
        <translation>PyBitmessage verfolgt die Erfolgsrate von Verbindungsversuchen zu einzelnen Knoten. Die Bewertung reicht von -1 bis 1 und beeinflusst die Wahrscheinlichkeit, den Knoten zukünftig auszuwählen</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/networkstatus.ui" line="136"/>
        <source>User agent</source>
        <translation>Benutzer-Agent</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/networkstatus.ui" line="139"/>
        <source>Peer&apos;s self-reported software</source>
        <translation>Peer&apos;s selbstberichtete Software</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/networkstatus.ui" line="144"/>
        <source>TLS</source>
        <translation>TLS</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/networkstatus.ui" line="147"/>
        <source>Connection encryption</source>
        <translation>Verbindungsverschlüsselung</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/networkstatus.ui" line="155"/>
        <source>List of streams negotiated between you and the peer</source>
        <translation>Liste der zwischen Ihnen und dem Peer ausgehandelter Datenströme</translation>
    </message>
</context>
<context>
    <name>newChanDialog</name>
    <message>
        <location filename="../bitmessageqt/newchandialog.py" line="97"/>
        <source>Dialog</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/newchandialog.py" line="98"/>
        <source>Create a new chan</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/newchandialog.py" line="103"/>
        <source>Join a chan</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/newchandialog.py" line="100"/>
        <source>Create a chan</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/newchandialog.py" line="101"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Enter a name for your chan. If you choose a sufficiently complex chan name (like a strong and unique passphrase) and none of your friends share it publicly then the chan will be secure and private. If you and someone else both create a chan with the same chan name then it is currently very likely that they will be the same chan.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/newchandialog.py" line="105"/>
        <source>Chan name:</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/newchandialog.py" line="104"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;A chan exists when a group of people share the same decryption keys. The keys and bitmessage address used by a chan are generated from a human-friendly word or phrase (the chan name). To send a message to everyone in the chan, send a normal person-to-person message to the chan address.&lt;/p&gt;&lt;p&gt;Chans are experimental and completely unmoderatable.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/newchandialog.py" line="106"/>
        <source>Chan bitmessage address:</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/newchandialog.ui" line="26"/>
        <source>Create or join a chan</source>
        <translation>Chan erstellen oder beitreten</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/newchandialog.ui" line="41"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;A chan exists when a group of people share the same decryption keys. The keys and bitmessage address used by a chan are generated from a human-friendly word or phrase (the chan name). To send a message to everyone in the chan, send a message to the chan address.&lt;/p&gt;&lt;p&gt;Chans are experimental and completely unmoderatable.&lt;/p&gt;&lt;p&gt;Enter a name for your chan. If you choose a sufficiently complex chan name (like a strong and unique passphrase) and none of your friends share it publicly, then the chan will be secure and private. However if you and someone else both create a chan with the same chan name, the same chan will be shared.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Wenn eine Gruppe von Leuten sich den gleichen Entschlüsselungscode teilen, bilden sie einen &quot;chan&quot;. Die Schlüssel und Bitmessage-Adressen werden basierend auf einem lesbaren Wort oder Satz generiert (dem Chan-Namen). Um eine Nachricht an den Chan zu senden, senden Sie eine Nachricht an die Chan-Adresse.&lt;/p&gt;&lt;p&gt;Chans sind experimentell und völlig zentral unmoderierbar.&lt;/p&gt;&lt;p&gt;Geben Sie einen Namen für Ihren Chan ein. Wenn Sie einen ausreichend komplexen Chan-Namen wählen (wie einen starken, einzigartigen Kennwortsatz) und keiner Ihrer Freunde ihn öffentlich weitergibt, wird der Chan sicher und privat bleiben. Wenn eine andere Person einen Chan mit dem gleichen Namen erzeugt, repräsentieren diese denselben Chan, bzw. der Chan für beide Personen verwendbar.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/newchandialog.ui" line="56"/>
        <source>Chan passphrase/name:</source>
        <translation>Chan-Name</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/newchandialog.ui" line="63"/>
        <source>Optional, for advanced usage</source>
        <translation>Optional, für Fortgeschrittene</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/newchandialog.ui" line="76"/>
        <source>Chan address</source>
        <translation>Chan-Adresse</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/newchandialog.ui" line="101"/>
        <source>Please input chan name/passphrase:</source>
        <translation>Bitte Chan-Namen eingeben:</translation>
    </message>
</context>
<context>
    <name>newchandialog</name>
    <message>
        <location filename="../bitmessageqt/newchandialog.py" line="38"/>
        <source>Successfully created / joined chan {0}</source>
        <translation>Chan {0} erfolgreich erstellt/beigetreten</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/newchandialog.py" line="44"/>
        <source>Chan creation / joining failed</source>
        <translation>Chan-erstellung/-beitritt fehlgeschlagen</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/newchandialog.py" line="50"/>
        <source>Chan creation / joining cancelled</source>
        <translation>Chan-erstellung/-beitritt abgebrochen</translation>
    </message>
</context>
<context>
    <name>proofofwork</name>
    <message>
        <location filename="../proofofwork.py" line="163"/>
        <source>C PoW module built successfully.</source>
        <translation>C-PoW-Modul erfolgreich erstellt.</translation>
    </message>
    <message>
        <location filename="../proofofwork.py" line="165"/>
        <source>Failed to build C PoW module. Please build it manually.</source>
        <translation>Erstellung vom C-PoW-Modul fehlgeschlagen. Bitte erstellen Sie es manuell.</translation>
    </message>
    <message>
        <location filename="../proofofwork.py" line="167"/>
        <source>C PoW module unavailable. Please build it.</source>
        <translation>C-PoW-Modul nicht verfügbar. Bitte erstellen Sie es.</translation>
    </message>
</context>
<context>
    <name>qrcodeDialog</name>
    <message>
        <location filename="../plugins/qrcodeui.py" line="67"/>
        <source>QR-code</source>
        <translation>QR-Code</translation>
    </message>
</context>
<context>
    <name>regenerateAddressesDialog</name>
    <message>
        <location filename="../bitmessageqt/regenerateaddresses.ui" line="14"/>
        <source>Regenerate Existing Addresses</source>
        <translation>Bestehende Adresse regenerieren</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/regenerateaddresses.ui" line="30"/>
        <source>Regenerate existing addresses</source>
        <translation>Bestehende Adresse regenerieren</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/regenerateaddresses.ui" line="36"/>
        <source>Passphrase</source>
        <translation>Kennwortsatz</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/regenerateaddresses.ui" line="53"/>
        <source>Number of addresses to make based on your passphrase:</source>
        <translation>Anzahl Adressen die basierend auf diesem Kennwortsatz erzeugt werden sollen:</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/regenerateaddresses.ui" line="89"/>
        <source>Address version number:</source>
        <translation>Adress-Versionsnummer:</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/regenerateaddresses.ui" line="131"/>
        <source>Stream number:</source>
        <translation>Stream-Nummer:</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/regenerateaddresses.ui" line="153"/>
        <source>1</source>
        <translation>1</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/regenerateaddresses.ui" line="173"/>
        <source>Spend several minutes of extra computing time to make the address(es) 1 or 2 characters shorter</source>
        <translation>Verwenden Sie einige Minuten extra Rechenleistung um die Adresse(n) ein bis zwei Zeichen kürzer zu machen</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/regenerateaddresses.ui" line="180"/>
        <source>You must check (or not check) this box just like you did (or didn&apos;t) when you made your addresses the first time.</source>
        <translation>Sie müssen diese Option auswählen (oder nicht auswählen) wie Sie es gemacht haben, als Sie Ihre Adresse das erste Mal erstellt haben.</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/regenerateaddresses.ui" line="190"/>
        <source>If you have previously made deterministic addresses but lost them due to an accident (like hard drive failure), you can regenerate them here. If you used the random number generator to make your addresses then this form will be of no use to you.</source>
        <translation>Wenn Sie bereits deterministische Adressen erstellt haben, aber diese durch einen Unfall (zum Beispiel durch eine defekte Festplatte) verloren haben, können Sie sie hier regenerieren. Dies funktioniert nur dann, wenn Sie bei der erstmaligen Erstellung Ihrer Adressen nicht den Zufallsgenerator verwendet haben.</translation>
    </message>
</context>
<context>
    <name>settingsDialog</name>
    <message>
        <location filename="../bitmessageqt/settings.py" line="453"/>
        <source>Settings</source>
        <translation>Einstellungen</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/settings.py" line="454"/>
        <source>Start Bitmessage on user login</source>
        <translation>Bitmessage nach dem Hochfahren automatisch starten</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/settings.py" line="455"/>
        <source>Tray</source>
        <translation>Infobereich (Taskleiste)</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/settings.py" line="456"/>
        <source>Start Bitmessage in the tray (don&apos;t show main window)</source>
        <translation>Bitmessage minimiert starten (zeigt das Hauptfenster nicht an)</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/settings.py" line="457"/>
        <source>Minimize to tray</source>
        <translation>In den Infobereich (Tray) minimieren</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/settings.py" line="458"/>
        <source>Close to tray</source>
        <translation>Schliessen in den Infobereich (Tray)</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/settings.py" line="460"/>
        <source>Show notification when message received</source>
        <translation>Benachrichtigung anzeigen, wenn eine Nachricht eintrifft</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/settings.py" line="461"/>
        <source>Run in Portable Mode</source>
        <translation>Im portablen Modus arbeiten</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/settings.py" line="462"/>
        <source>In Portable Mode, messages and config files are stored in the same directory as the program rather than the normal application-data folder. This makes it convenient to run Bitmessage from a USB thumb drive.</source>
        <translation>Im portablen Modus werden Nachrichten und Konfigurationen im gleichen Ordner abgelegt, in dem sich das Programm selbst befindet (anstatt im normalen Anwendungsdaten-Ordner). Das macht es möglich, Bitmessage auf einem USB-Stick zu betreiben.</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/settings.py" line="463"/>
        <source>Willingly include unencrypted destination address when sending to a mobile device</source>
        <translation>Willentlich die unverschlüsselte Adresse des Empfängers übertragen, wenn an ein mobiles Gerät gesendet wird</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/settings.py" line="464"/>
        <source>Use Identicons</source>
        <translation>Benutze Identicons (Automatisch generierte Icons zu einer Bitmessageadresse)</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/settings.py" line="465"/>
        <source>Reply below Quote</source>
        <translation>Antworte unter zitierter Nachricht</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/settings.py" line="466"/>
        <source>Interface Language</source>
        <translation>Sprachauswahl</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/settings.py" line="467"/>
        <source>System Settings</source>
        <comment>system</comment>
        <translation>Systemeinstellungen</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/settings.py" line="468"/>
        <source>User Interface</source>
        <translation>Benutzerinterface</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/settings.py" line="469"/>
        <source>Listening port</source>
        <translation>Empfangender TCP-Port</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/settings.py" line="470"/>
        <source>Listen for connections on port:</source>
        <translation>Wartet auf Verbindungen auf Port:</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/settings.py" line="471"/>
        <source>UPnP:</source>
        <translation>UPnP:</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/settings.py" line="472"/>
        <source>Bandwidth limit</source>
        <translation>Bandbreite begrenzen</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/settings.py" line="473"/>
        <source>Maximum download rate (kB/s): [0: unlimited]</source>
        <translation>Maximale Downloadrate in kB/s, 0 bedeutet kein Limit</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/settings.py" line="474"/>
        <source>Maximum upload rate (kB/s): [0: unlimited]</source>
        <translation>Maximale Uploadrate in kB/s, 0 bedeutet kein Limit</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/settings.py" line="476"/>
        <source>Proxy server / Tor</source>
        <translation>Proxy-Server / Tor</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/settings.py" line="477"/>
        <source>Type:</source>
        <translation>Typ:</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/settings.py" line="478"/>
        <source>Server hostname:</source>
        <translation>Servername:</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/settings.py" line="501"/>
        <source>Port:</source>
        <translation>Port:</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/settings.py" line="480"/>
        <source>Authentication</source>
        <translation>Authentifizierung</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/settings.py" line="502"/>
        <source>Username:</source>
        <translation>Benutzername:</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/settings.py" line="482"/>
        <source>Pass:</source>
        <translation>Kennwort:</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/settings.py" line="483"/>
        <source>Listen for incoming connections when using proxy</source>
        <translation>Auf eingehende Verbindungen warten, auch wenn ein Proxy-Server verwendet wird</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/settings.py" line="484"/>
        <source>none</source>
        <translation>keiner</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/settings.py" line="485"/>
        <source>SOCKS4a</source>
        <translation>SOCKS4a</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/settings.py" line="486"/>
        <source>SOCKS5</source>
        <translation>SOCKS5</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/settings.py" line="487"/>
        <source>Network Settings</source>
        <translation>Netzwerkeinstellungen</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/settings.py" line="488"/>
        <source>Total difficulty:</source>
        <translation>Gesamtschwierigkeit:</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/settings.py" line="489"/>
        <source>The &apos;Total difficulty&apos; affects the absolute amount of work the sender must complete. Doubling this value doubles the amount of work.</source>
        <translation>Die &quot;Gesamtschwierigkeit&quot; beeinflusst die absolute Menge Arbeit, die ein Sender verrichten muss. Verdoppelung dieses Wertes verdoppelt die Menge der Arbeit.</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/settings.py" line="490"/>
        <source>Small message difficulty:</source>
        <translation>Schwierigkeit für kurze Nachrichten:</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/settings.py" line="491"/>
        <source>When someone sends you a message, their computer must first complete some work. The difficulty of this work, by default, is 1. You may raise this default for new addresses you create by changing the values here. Any new addresses you create will require senders to meet the higher difficulty. There is one exception: if you add a friend or acquaintance to your address book, Bitmessage will automatically notify them when you next send a message that they need only complete the minimum amount of work: difficulty 1. </source>
        <translation>Wenn jemand Ihnen eine Nachricht schickt, muss der absendende Computer erst einige Arbeit verrichten. Die Schwierigkeit dieser Arbeit ist standardmäßig 1. Sie können diesen Wert für alle neuen Adressen, die Sie generieren, hier ändern. Es gibt eine Ausnahme: Wenn Sie einen Freund oder Bekannten in Ihr Adressbuch übernehmen, wird Bitmessage ihn mit der nächsten Nachricht automatisch informieren, dass er nur noch die minimale Arbeit verrichten muss: Schwierigkeit 1.</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/settings.py" line="492"/>
        <source>The &apos;Small message difficulty&apos; mostly only affects the difficulty of sending small messages. Doubling this value makes it almost twice as difficult to send a small message but doesn&apos;t really affect large messages.</source>
        <translation>Die &quot;Schwierigkeit für kurze Nachrichten&quot; trifft nur auf das Senden kurzer Nachrichten zu. Verdoppelung dieses Wertes macht es fast doppelt so schwer, kurze Nachrichten zu senden, aber hat keinen Effekt bei langen Nachrichten.</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/settings.py" line="493"/>
        <source>Demanded difficulty</source>
        <translation>Geforderte Schwierigkeit</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/settings.py" line="494"/>
        <source>Here you may set the maximum amount of work you are willing to do to send a message to another person. Setting these values to 0 means that any value is acceptable.</source>
        <translation>Hier setzen Sie die maximale Arbeit, die Sie bereit sind zu verrichten, um eine Nachricht an eine andere Person zu versenden. Ein Wert von 0 bedeutet, dass Sie jede Arbeit akzeptieren.</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/settings.py" line="495"/>
        <source>Maximum acceptable total difficulty:</source>
        <translation>Maximale akzeptierte Gesamtschwierigkeit:</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/settings.py" line="496"/>
        <source>Maximum acceptable small message difficulty:</source>
        <translation>Maximale akzeptierte Schwierigkeit für kurze Nachrichten:</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/settings.py" line="497"/>
        <source>Max acceptable difficulty</source>
        <translation>Maximale akzeptierte Schwierigkeit</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/settings.py" line="473"/>
        <source>Hardware GPU acceleration (OpenCL)</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/settings.py" line="499"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Bitmessage can utilize a different Bitcoin-based program called Namecoin to make addresses human-friendly. For example, instead of having to tell your friend your long Bitmessage address, you can simply tell him to send a message to &lt;span style=&quot; font-style:italic;&quot;&gt;test. &lt;/span&gt;&lt;/p&gt;&lt;p&gt;(Getting your own Bitmessage address into Namecoin is still rather difficult).&lt;/p&gt;&lt;p&gt;Bitmessage can use either namecoind directly or a running nmcontrol instance.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Bitmessage kann ein anderes Bitcoin basiertes Programm namens Namecoin nutzen, um Adressen leserlicher zu machen. Zum Beispiel: Anstelle Ihrem Bekannten Ihre lange Bitmessage-Adresse vorzulesen, können Sie ihm einfach sagen, er soll eine Nachricht an &lt;span style=&quot; font-style:italic;&quot;&gt;test &lt;/span&gt;senden.&lt;/p&gt;&lt;p&gt; (Ihre Bitmessage-Adresse in Namecoin zu speichern ist noch sehr umständlich)&lt;/p&gt;&lt;p&gt;Bitmessage kann direkt namecoind verwenden, oder eine nmcontrol Instanz.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/settings.py" line="500"/>
        <source>Host:</source>
        <translation>Server:</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/settings.py" line="503"/>
        <source>Password:</source>
        <translation>Kennwort:</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/settings.py" line="504"/>
        <source>Test</source>
        <translation>Verbindung testen</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/settings.py" line="505"/>
        <source>Connect to:</source>
        <translation>Verbinde mit:</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/settings.py" line="506"/>
        <source>Namecoind</source>
        <translation>Namecoind</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/settings.py" line="507"/>
        <source>NMControl</source>
        <translation>NMControl</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/settings.py" line="508"/>
        <source>Namecoin integration</source>
        <translation>Namecoin Integration</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/settings.py" line="509"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;By default, if you send a message to someone and he is offline for more than two days, Bitmessage will send the message again after an additional two days. This will be continued with exponential backoff forever; messages will be resent after 5, 10, 20 days ect. until the receiver acknowledges them. Here you may change that behavior by having Bitmessage give up after a certain number of days or months.&lt;/p&gt;&lt;p&gt;Leave these input fields blank for the default behavior. &lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Wenn der Empfänger eine Nachricht nicht bis zum Verfallsdatum herunterlädt, zum Beispiel weil er für längere Zeit nicht mit dem Netz verbunden ist, wird die Nachricht erneut versendet. Dies passiert solange, bis eine Empfangsbestätigung erhalten wird. Hier können Sie dieses Verhalten ändern, indem Sie Bitmessage die Wiederversandversuche nach einer bestimmten Anzahl von Tagen oder Monaten aufgeben lassen.&lt;/p&gt;&lt;p&gt;Für die Standardeinstellung (ohne zeitliche Einschränkung) lassen Sie diese Eingabefelder leer.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/settings.py" line="510"/>
        <source>Give up after</source>
        <translation>Gib auf nach</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/settings.py" line="511"/>
        <source>and</source>
        <translation>und</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/settings.py" line="512"/>
        <source>days</source>
        <translation>Tagen</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/settings.py" line="513"/>
        <source>months.</source>
        <translation>Monaten.</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/settings.py" line="514"/>
        <source>Resends Expire</source>
        <translation>Verfall der erneuten Sendungen</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/settings.py" line="459"/>
        <source>Hide connection notifications</source>
        <translation>Verbindungsbenachrichtigungen nicht anzeigen</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/settings.py" line="475"/>
        <source>Maximum outbound connections: [0: none]</source>
        <translation>Maximale Anzahl der ausgehenden Verbindungen, 0 bedeutet keine</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/settings.py" line="498"/>
        <source>Hardware GPU acceleration (OpenCL):</source>
        <translation>Hardwaregrafikkartenbeschleunigung (OpenCL):</translation>
    </message>
</context>
</TS>