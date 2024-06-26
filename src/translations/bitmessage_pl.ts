<?xml version="1.0" ?><!DOCTYPE TS><TS language="pl" sourcelanguage="en" version="2.0">
<context>
    <name>AddAddressDialog</name>
    <message>
        <location filename="../bitmessageqt/addaddressdialog.ui" line="20"/>
        <source>Add new entry</source>
        <translation>Dodaj nowy wpis</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/addaddressdialog.ui" line="29"/>
        <source>Label</source>
        <translation>Etykieta</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/addaddressdialog.ui" line="39"/>
        <source>Address</source>
        <translation>Adres</translation>
    </message>
</context>
<context>
    <name>EmailGatewayDialog</name>
    <message>
        <location filename="../bitmessageqt/emailgateway.ui" line="14"/>
        <source>Email gateway</source>
        <translation>Przekaźnik e-mail</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/emailgateway.ui" line="30"/>
        <source>Register on email gateway</source>
        <translation>Zarejestruj u przekaźnika e-mail</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/emailgateway.ui" line="82"/>
        <source>Account status at email gateway</source>
        <translation>Status konta u przekaźnika e-mail</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/emailgateway.ui" line="95"/>
        <source>Change account settings at email gateway</source>
        <translation>Zmień ustawienia konta u przekaźnika e-mail</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/emailgateway.ui" line="108"/>
        <source>Unregister from email gateway</source>
        <translation>Wyrejestruj od przekaźnika e-mail</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/emailgateway.ui" line="69"/>
        <source>Email gateway allows you to communicate with email users. Currently, only the Mailchuck email gateway (@mailchuck.com) is available.</source>
        <translation>Przekaźnik e-mail umożliwia komunikację z użytkownikami poczty elektronicznej. Obecnie usługa ta oferowana jest tylko przez Mailchuck (@mailchuck.com).</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/emailgateway.ui" line="23"/>
        <source>Desired email address (including @mailchuck.com):</source>
        <translation>Wybrany adres e-mail (razem a końcówką @mailchuck.com):</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/emailgateway.ui" line="59"/>
        <source>@mailchuck.com</source>
        <translation>@mailchuck.com</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/address_dialogs.py" line="307"/>
        <source>Registration failed:</source>
        <translation>Rejestracja nie powiodła się:</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/address_dialogs.py" line="309"/>
        <source>The requested email address is not available, please try a new one.</source>
        <translation>Wybrany adres e-mail nie jest dostępny, proszę spróbować inny.</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/address_dialogs.py" line="356"/>
        <source>Sending email gateway registration request</source>
        <translation>Wysyłanie zapytania o rejestrację na bramce poczty</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/address_dialogs.py" line="364"/>
        <source>Sending email gateway unregistration request</source>
        <translation>Wysyłanie zapytania o wyrejestrowanie z bramki poczty</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/address_dialogs.py" line="370"/>
        <source>Sending email gateway status request</source>
        <translation>Wysyłanie zapytania o stan bramki poczty</translation>
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
        <location filename="../bitmessageqt/account.py" line="225"/>
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
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/account.py" line="299"/>
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
        <translation># Tutaj możesz skonfigurować ustawienia bramki poczty e-mail
# Odkomentuj (usuń znak „#”) opcje których chcesz użyć
# Ustawienia:
# 
# pgp: server
# Bramka poczty utworzy i będzie zarządzać kluczami PGP za Ciebie - 
# podpisywać, weryfikować, szyfrować i deszyfrować. Jeżeli chcesz 
# używać PGP, ale jesteś leniwy, użyj tej opcji. Wymaga subskrypcji.
# 
# pgp: local
# Bramka poczty nie będzie wykonywała operacji PGP za Ciebie. Możesz 
# albo wcale nie korzystać z PGP, albo używać go lokalnie.
# 
# attachments: yes
# Przychodzące załączniki w wiadomościach będą wrzucane na MEGA.nz i 
# będziesz mógł je pobrać z podanego łącza. Wymaga subskrypcji.
# 
# attachments: no
# Załączniki zostaną zignorowane.
# 
# archive: yes
# Przychodzące wiadomości zostaną zarchiwizowane na serwerze. Użyj tej 
# opcji przy diagnozowaniu problemów lub jeżeli potrzebujesz dowodu 
# przesyłania wiadomości na zewnętrznym serwerze. Włączenie tej opcji 
# spowoduje, że operator usługi będzie mógł czytać Twoje listy nawet po 
# przesłaniu ich do Ciebie.
# 
# archive: no
# Przychodzące listy zostaną niezwłocznie usunięte z serwera po 
# przekierowaniu ich do Ciebie.
# 
# masterpubkey_btc: publiczny klucz BIP44 xpub lub electrum v1 publiczny seed
# offset_btc: integer (domyślnie 0)
# feeamount: liczba, maksymalnie 8 cyfr po przecinku
# feecurrency: BTC, XBT, USD, EUR lub GBP
# Użyj tych opcji, jeżeli chcesz pobierać opłaty od osób, które wyślą 
# Tobie wiadomość. Jeżeli ta opcja jest włączona i nieznana osoba wyśle 
# Ci wiadomość, będzie poproszona o wniesienie opłaty. Ta funkcja używa 
# deterministycznych kluczy publicznych, dostaniesz pieniądze 
# bezpośrednio. Aby ją ponownie wyłączyć, ustaw „feeamount” na 0. 
# Wymaga subskrypcji.</translation>
    </message>
</context>
<context>
    <name>MainWindow</name>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="166"/>
        <source>Reply to sender</source>
        <translation>Odpowiedz do nadawcy</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="168"/>
        <source>Reply to channel</source>
        <translation>Odpowiedz do kanału</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="170"/>
        <source>Add sender to your Address Book</source>
        <translation>Dodaj nadawcę do Książki Adresowej</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="174"/>
        <source>Add sender to your Blacklist</source>
        <translation>Dodaj nadawcę do Listy Blokowanych</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="374"/>
        <source>Move to Trash</source>
        <translation>Przenieś do kosza</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="181"/>
        <source>Undelete</source>
        <translation>Przywróć</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="184"/>
        <source>View HTML code as formatted text</source>
        <translation>Wyświetl kod HTML w postaci sformatowanej</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="188"/>
        <source>Save message as...</source>
        <translation>Zapisz wiadomość jako…</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="192"/>
        <source>Mark Unread</source>
        <translation>Oznacz jako nieprzeczytane</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="346"/>
        <source>New</source>
        <translation>Nowe</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/blacklist.py" line="122"/>
        <source>Enable</source>
        <translation>Aktywuj</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/blacklist.py" line="125"/>
        <source>Disable</source>
        <translation>Deaktywuj</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/blacklist.py" line="128"/>
        <source>Set avatar...</source>
        <translation>Ustaw awatar…</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/blacklist.py" line="118"/>
        <source>Copy address to clipboard</source>
        <translation>Kopiuj adres do schowka</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="293"/>
        <source>Special address behavior...</source>
        <translation>Specjalne zachowanie adresu…</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="240"/>
        <source>Email gateway</source>
        <translation>Przekaźnik e-mail</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/blacklist.py" line="115"/>
        <source>Delete</source>
        <translation>Usuń</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="309"/>
        <source>Send message to this address</source>
        <translation>Wyślij wiadomość pod ten adres</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="317"/>
        <source>Subscribe to this address</source>
        <translation>Subskrybuj ten adres</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="329"/>
        <source>Add New Address</source>
        <translation>Dodaj nowy adres</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="377"/>
        <source>Copy destination address to clipboard</source>
        <translation>Kopiuj adres odbiorcy do schowka</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="381"/>
        <source>Force send</source>
        <translation>Wymuś wysłanie</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="597"/>
        <source>One of your addresses, {0}, is an old version 1 address. Version 1 addresses are no longer supported. May we delete it now?</source>
        <translation>Jeden z adresów, {0}, jest starym adresem wersji 1. Adresy tej wersji nie są już wspierane. Usunąć go?</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="1030"/>
        <source>Waiting for their encryption key. Will request it again soon.</source>
        <translation>Oczekiwanie na klucz szyfrujący odbiorcy. Niedługo nastąpi ponowne wysłanie o niego prośby.</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="990"/>
        <source>Encryption key request queued.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="1036"/>
        <source>Queued.</source>
        <translation>W kolejce do wysłania.</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="1039"/>
        <source>Message sent. Waiting for acknowledgement. Sent at {0}</source>
        <translation>Wiadomość wysłana. Oczekiwanie na potwierdzenie odbioru. Wysłano o {0}</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="1042"/>
        <source>Message sent. Sent at {0}</source>
        <translation>Wiadomość wysłana. Wysłano o {0}</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="1002"/>
        <source>Need to do work to send message. Work is queued.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="1048"/>
        <source>Acknowledgement of the message received {0}</source>
        <translation>Otrzymano potwierdzenie odbioru wiadomości {0}</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="2140"/>
        <source>Broadcast queued.</source>
        <translation>Przekaz w kolejce do wysłania.</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="1057"/>
        <source>Broadcast on {0}</source>
        <translation>Wysłana o {0}</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="1060"/>
        <source>Problem: The work demanded by the recipient is more difficult than you are willing to do. {0}</source>
        <translation>Problem: dowód pracy wymagany przez odbiorcę jest trudniejszy niż zaakceptowany przez Ciebie. {0}</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="1063"/>
        <source>Problem: The recipient&apos;s encryption key is no good. Could not encrypt message. {0}</source>
        <translation>Problem: klucz szyfrujący odbiorcy jest nieprawidłowy. Nie można zaszyfrować wiadomości. {0}</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="1066"/>
        <source>Forced difficulty override. Send should start soon.</source>
        <translation>Wymuszono ominięcie trudności. Wysłanie zostanie wkrótce rozpoczęte.</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="1069"/>
        <source>Unknown status: {0} {1}</source>
        <translation>Nieznany status: {0} {1}</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="1610"/>
        <source>Not Connected</source>
        <translation>Brak połączenia</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="1200"/>
        <source>Show Bitmessage</source>
        <translation>Pokaż Bitmessage</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/bitmessageui.py" line="709"/>
        <source>Send</source>
        <translation>Wyślij</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="1223"/>
        <source>Subscribe</source>
        <translation>Subskrybuj</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="1229"/>
        <source>Channel</source>
        <translation>Kanał</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/bitmessageui.py" line="755"/>
        <source>Quit</source>
        <translation>Zamknij</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="1455"/>
        <source>You may manage your keys by editing the keys.dat file stored in the same directory as this program. It is important that you back up this file.</source>
        <translation>Możesz zarządzać swoimi kluczami edytując plik keys.dat znajdujący się w tym samym katalogu co program. Zaleca się zrobienie kopii zapasowej tego pliku.</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="1459"/>
        <source>You may manage your keys by editing the keys.dat file stored in
 {0} 
It is important that you back up this file.</source>
        <translation>Możesz zarządzać swoimi kluczami edytując plik keys.dat znajdujący się
{0}
Zaleca się zrobienie kopii zapasowej tego pliku.</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="1466"/>
        <source>Open keys.dat?</source>
        <translation>Otworzyć plik keys.dat?</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="1463"/>
        <source>You may manage your keys by editing the keys.dat file stored in the same directory as this program. It is important that you back up this file. Would you like to open the file now? (Be sure to close Bitmessage before making any changes.)</source>
        <translation>Możesz zarządzać swoimi kluczami edytując plik keys.dat znajdujący się w tym samym katalogu co program. Zaleca się zrobienie kopii zapasowej tego pliku. Czy chcesz otworzyć ten plik teraz? (Zamknij Bitmessage, przed wprowadzeniem jakichkolwiek zmian.)</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="1466"/>
        <source>You may manage your keys by editing the keys.dat file stored in
 {0} 
It is important that you back up this file. Would you like to open the file now? (Be sure to close Bitmessage before making any changes.)</source>
        <translation>Możesz zarządzać swoimi kluczami edytując plik keys.dat znajdujący się
{0}
Zaleca się zrobienie kopii zapasowej tego pliku. Czy chcesz otworzyć ten plik teraz? (Zamknij Bitmessage przed wprowadzeniem jakichkolwiek zmian.)</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="1473"/>
        <source>Delete trash?</source>
        <translation>Opróżnić kosz?</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="1473"/>
        <source>Are you sure you want to delete all trashed messages?</source>
        <translation>Czy na pewno usunąć wszystkie wiadomości z kosza?</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="1491"/>
        <source>bad passphrase</source>
        <translation>nieprawidłowe hasło</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="1491"/>
        <source>You must type your passphrase. If you don&apos;t have one then this is not the form for you.</source>
        <translation>Musisz wpisać swoje hasło. Jeżeli go nie posiadasz, to ten formularz nie jest dla Ciebie.</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="1514"/>
        <source>Bad address version number</source>
        <translation>Nieprawidłowy numer wersji adresu</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="1504"/>
        <source>Your address version number must be a number: either 3 or 4.</source>
        <translation>Twój numer wersji adresu powinien wynosić: 3 lub 4.</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="1514"/>
        <source>Your address version number must be either 3 or 4.</source>
        <translation>Twój numer wersji adresu powinien wynosić: 3 lub 4.</translation>
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
        <location filename="../bitmessageqt/__init__.py" line="1595"/>
        <source>Connection lost</source>
        <translation>Połączenie utracone</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="1645"/>
        <source>Connected</source>
        <translation>Połączono</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="1765"/>
        <source>Message trashed</source>
        <translation>Wiadomość usunięta</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="1854"/>
        <source>The TTL, or Time-To-Live is the length of time that the network will hold the message.
 The recipient must get it during this time. If your Bitmessage client does not hear an acknowledgement, it
 will resend the message automatically. The longer the Time-To-Live, the
 more work your computer must do to send the message. A Time-To-Live of four or five days is often appropriate.</source>
        <translation>TTL (ang. Time-To-Live -- czas życia) to czas przez jaki wiadomość będzie przechowywana przez węzły sieci, po jego upływie odbiorca nie będzie juz mógł jej odebrać.
Jeżeli adresat nie otrzyma w tym czasie potwierdzenia odbioru wiadomości, zostanie ona wysłana ponownie.
Im dłuższy TTL, tym więcej pracy będzie musiał wykonac komputer wysyłający wiadomość.
Zwykle 4-5 dniowy TTL jest odpowiedni.</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="1899"/>
        <source>Message too long</source>
        <translation>Wiadomość zbyt długa</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="1899"/>
        <source>The message that you are trying to send is too long by {0} bytes. (The maximum is 261644 bytes). Please cut it down before sending.</source>
        <translation>Wiadomość jest za długa o {0} bajtów (maksymalna długość wynosi 261644 bajty). Przed wysłaniem należy ją skrócić.</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="1941"/>
        <source>Error: Your account wasn&apos;t registered at an email gateway. Sending registration now as {0}, please wait for the registration to be processed before retrying sending.</source>
        <translation>Błąd: Twoje konto nie było zarejestrowane w bramce poczty. Rejestrowanie jako {0}, proszę poczekać na zakończenie procesu przed ponowną próbą wysłania wiadomości.</translation>
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
        <translation>Błąd: musisz wybrać adres wysyłania. Jeżeli go nie posiadasz, przejdź do zakładki &apos;Twoje tożsamości&apos;.</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="2026"/>
        <source>Address version number</source>
        <translation>Numer wersji adresu</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="2026"/>
        <source>Concerning the address {0}, Bitmessage cannot understand address version numbers of {1}. Perhaps upgrade Bitmessage to the latest version.</source>
        <translation>Odnośnie adresu {0}, Bitmessage nie potrafi odczytać wersji adresu {1}. Może uaktualnij Bitmessage do najnowszej wersji.</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="2030"/>
        <source>Stream number</source>
        <translation>Numer strumienia</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="2030"/>
        <source>Concerning the address {0}, Bitmessage cannot handle stream numbers of {1}. Perhaps upgrade Bitmessage to the latest version.</source>
        <translation>Odnośnie adresu {0}, Bitmessage nie potrafi operować na strumieniu adresu {1}. Może uaktualnij Bitmessage do najnowszej wersji.</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="2035"/>
        <source>Warning: You are currently not connected. Bitmessage will do the work necessary to send the message but it won&apos;t send until you connect.</source>
        <translation>Uwaga: nie jesteś obecnie połączony. Bitmessage wykona niezbędną pracę do wysłania wiadomości, ale nie wyśle jej póki się nie połączysz.</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="2084"/>
        <source>Message queued.</source>
        <translation>W kolejce do wysłania</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="2088"/>
        <source>Your &apos;To&apos; field is empty.</source>
        <translation>Pole &apos;Do&apos; jest puste</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="2149"/>
        <source>Right click one or more entries in your address book and select &apos;Send message to this address&apos;.</source>
        <translation>Użyj prawego przycisku myszy na adresie z książki adresowej i wybierz opcję &quot;Wyślij wiadomość do tego adresu&quot;.</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="2164"/>
        <source>Fetched address from namecoin identity.</source>
        <translation>Pobrano adres z identyfikatora Namecoin.</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="2276"/>
        <source>New Message</source>
        <translation>Nowa wiadomość</translation>
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
        <location filename="../bitmessageqt/blacklist.py" line="60"/>
        <source>Address is valid.</source>
        <translation>Adres jest prawidłowy.</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/blacklist.py" line="94"/>
        <source>The address you entered was invalid. Ignoring it.</source>
        <translation>Wprowadzono niewłaściwy adres, który został zignorowany.</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="2306"/>
        <source>Error: You cannot add the same address to your address book twice. Try renaming the existing one if you want.</source>
        <translation>Błąd: Adres znajduje się już w książce adresowej.</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="3364"/>
        <source>Error: You cannot add the same address to your subscriptions twice. Perhaps rename the existing one if you want.</source>
        <translation>Błąd: Adres znajduje się już na liście subskrybcji.</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="2428"/>
        <source>Restart</source>
        <translation>Uruchom ponownie</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="2414"/>
        <source>You must restart Bitmessage for the port number change to take effect.</source>
        <translation>Musisz zrestartować Bitmessage, aby zmiana numeru portu weszła w życie.</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="2428"/>
        <source>Bitmessage will use your proxy from now on but you may want to manually restart Bitmessage now to close existing connections (if any).</source>
        <translation>Bitmessage będzie of teraz korzystał z serwera proxy, ale możesz ręcznie zrestartować Bitmessage, aby zamknąć obecne połączenia (jeżeli występują).</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="2457"/>
        <source>Number needed</source>
        <translation>Wymagany numer</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="2457"/>
        <source>Your maximum download and upload rate must be numbers. Ignoring what you typed.</source>
        <translation>Maksymalne prędkości wysyłania i pobierania powinny być liczbami. Zignorowano zmiany.</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="2538"/>
        <source>Will not resend ever</source>
        <translation>Nigdy nie wysyłaj ponownie</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="2538"/>
        <source>Note that the time limit you entered is less than the amount of time Bitmessage waits for the first resend attempt therefore your messages will never be resent.</source>
        <translation>Zauważ, że wpisany limit czasu wynosi mniej niż czas, który Bitmessage czeka przed pierwszą ponowną próbą wysłania wiadomości, więc Twoje wiadomości nie zostaną nigdy wysłane ponownie.</translation>
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
        <location filename="../bitmessageqt/address_dialogs.py" line="152"/>
        <source>Passphrase mismatch</source>
        <translation>Hasła różnią się</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/address_dialogs.py" line="152"/>
        <source>The passphrase you entered twice doesn&apos;t match. Try again.</source>
        <translation>Hasła, które wpisałeś nie pasują. Spróbuj ponownie.</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/address_dialogs.py" line="160"/>
        <source>Choose a passphrase</source>
        <translation>Wpisz hasło</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/address_dialogs.py" line="160"/>
        <source>You really do need a passphrase.</source>
        <translation>Naprawdę musisz wpisać hasło.</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="3043"/>
        <source>Address is gone</source>
        <translation>Adres zniknął</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="3043"/>
        <source>Bitmessage cannot find your address {0}. Perhaps you removed it?</source>
        <translation>Bitmessage nie może odnaleźć Twojego adresu {0}. Może go usunąłeś?</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="3046"/>
        <source>Address disabled</source>
        <translation>Adres nieaktywny</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="3046"/>
        <source>Error: The address from which you are trying to send is disabled. You&apos;ll have to enable it on the &apos;Your Identities&apos; tab before using it.</source>
        <translation>Błąd: adres, z którego próbowałeś wysłać wiadomość jest nieaktywny. Włącz go w zakładce „Twoje tożsamości”, zanim go użyjesz.</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="3020"/>
        <source>Entry added to the Address Book. Edit the label to your liking.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="3121"/>
        <source>Entry added to the blacklist. Edit the label to your liking.</source>
        <translation>Dodano wpis do listy blokowanych. Można teraz zmienić jego nazwę.</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="3126"/>
        <source>Error: You cannot add the same address to your blacklist twice. Try renaming the existing one if you want.</source>
        <translation>Błąd: adres znajduje się już na liście blokowanych.</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="3268"/>
        <source>Moved items to trash.</source>
        <translation>Przeniesiono wiadomości do kosza.</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="3212"/>
        <source>Undeleted item.</source>
        <translation>Przywrócono wiadomość.</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="3236"/>
        <source>Save As...</source>
        <translation>Zapisz jako…</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="3245"/>
        <source>Write error.</source>
        <translation>Błąd zapisu.</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="3348"/>
        <source>No addresses selected.</source>
        <translation>Nie wybrano adresu.</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="3403"/>
        <source>If you delete the subscription, messages that you already received will become inaccessible. Maybe you can consider disabling the subscription instead. Disabled subscriptions will not receive new messages, but you can still view messages you already received.

Are you sure you want to delete the subscription?</source>
        <translation>Jeżeli usuniesz subskrypcję, wiadomości które już dostałeś staną się niedostępne. Może powinieneś rozważyć wyłączenie subskrypcji. Dezaktywowane subskrypcje nie będą odbierać nowych wiadomości, ale ciągle będziesz mógł odczytać obecnie pobrane.

Czy na pewno chcesz usunąć tę subskrypcję?</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="3650"/>
        <source>If you delete the channel, messages that you already received will become inaccessible. Maybe you can consider disabling the channel instead. Disabled channels will not receive new messages, but you can still view messages you already received.

Are you sure you want to delete the channel?</source>
        <translation>Jeżeli usuniesz kanał, wiadomości które już dostałeś staną się niedostępne. Może powinieneś rozważyć wyłączenie kanału. Dezaktywowane kanały nie będą odbierać nowych wiadomości, ale ciągle będziesz mógł odczytać obecnie pobrane.

Czy na pewno chcesz usunąć ten kanał?</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="3780"/>
        <source>Do you really want to remove this avatar?</source>
        <translation>Czy na pewno chcesz usunąć ten awatar?</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="3788"/>
        <source>You have already set an avatar for this address. Do you really want to overwrite it?</source>
        <translation>Już ustawiłeś awatar dla tego adresu. Czy na pewno chcesz go nadpisać?</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="4206"/>
        <source>Start-on-login not yet supported on your OS.</source>
        <translation>Start po zalogowaniu jeszcze nie jest wspierany pod Twoim systemem.</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="4199"/>
        <source>Minimize-to-tray not yet supported on your OS.</source>
        <translation>Minimalizacja do zasobnika nie jest jeszcze wspierana pod Twoim systemem.</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="4202"/>
        <source>Tray notifications not yet supported on your OS.</source>
        <translation>Powiadomienia w zasobniku nie są jeszcze wspierane pod Twoim systemem.</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="4373"/>
        <source>Testing...</source>
        <translation>Testowanie…</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="4237"/>
        <source>This is a chan address. You cannot use it as a pseudo-mailing list.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/address_dialogs.py" line="45"/>
        <source>The address should start with &apos;&apos;BM-&apos;&apos;</source>
        <translation>Adres powinien zaczynać się od „BM-”</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/address_dialogs.py" line="50"/>
        <source>The address is not typed or copied correctly (the checksum failed).</source>
        <translation>Adres nie został skopiowany lub przepisany poprawnie (błąd sumy kontrolnej).</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/address_dialogs.py" line="56"/>
        <source>The version number of this address is higher than this software can support. Please upgrade Bitmessage.</source>
        <translation>Numer wersji tego adresu jest wyższy niż ten program może obsłużyć. Proszę zaktualizować Bitmessage.</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/address_dialogs.py" line="62"/>
        <source>The address contains invalid characters.</source>
        <translation>Adres zawiera nieprawidłowe znaki.</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/address_dialogs.py" line="67"/>
        <source>Some data encoded in the address is too short.</source>
        <translation>Niektóre dane zakodowane w adresie są za krótkie.</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/address_dialogs.py" line="72"/>
        <source>Some data encoded in the address is too long.</source>
        <translation>Niektóre dane zakodowane w adresie są za długie.</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/address_dialogs.py" line="77"/>
        <source>Some data encoded in the address is malformed.</source>
        <translation>Niektóre dane zakodowane w adresie są uszkodzone.</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="4289"/>
        <source>Enter an address above.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/address_dialogs.py" line="188"/>
        <source>Address is an old type. We cannot display its past broadcasts.</source>
        <translation>Adres starego typu. Nie można wyświetlić jego wiadomości subskrypcji.</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/address_dialogs.py" line="203"/>
        <source>There are no recent broadcasts from this address to display.</source>
        <translation>Brak niedawnych wiadomości subskrypcji do wyświetlenia.</translation>
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
        <translation>Tożsamości</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/bitmessageui.py" line="667"/>
        <source>New Identity</source>
        <translation>Nowa tożsamość</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/bitmessageui.py" line="730"/>
        <source>Search</source>
        <translation>Szukaj</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/bitmessageui.py" line="731"/>
        <source>All</source>
        <translation>Wszystkie</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/bitmessageui.py" line="738"/>
        <source>To</source>
        <translation>Do</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/bitmessageui.py" line="740"/>
        <source>From</source>
        <translation>Od</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/bitmessageui.py" line="742"/>
        <source>Subject</source>
        <translation>Temat</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/bitmessageui.py" line="735"/>
        <source>Message</source>
        <translation>Wiadomość</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/bitmessageui.py" line="744"/>
        <source>Received</source>
        <translation>Odebrana</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/bitmessageui.py" line="683"/>
        <source>Messages</source>
        <translation>Wiadomości</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/bitmessageui.py" line="686"/>
        <source>Address book</source>
        <translation>Książka adresowa</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/bitmessageui.py" line="688"/>
        <source>Address</source>
        <translation>Adres</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/bitmessageui.py" line="689"/>
        <source>Add Contact</source>
        <translation>Dodaj kontakt</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/bitmessageui.py" line="690"/>
        <source>Fetch Namecoin ID</source>
        <translation>Pobierz Namecoin ID</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/bitmessageui.py" line="697"/>
        <source>Subject:</source>
        <translation>Temat:</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/bitmessageui.py" line="696"/>
        <source>From:</source>
        <translation>Od:</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/bitmessageui.py" line="693"/>
        <source>To:</source>
        <translation>Do:</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/bitmessageui.py" line="695"/>
        <source>Send ordinary Message</source>
        <translation>Wyślij zwykłą wiadomość</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/bitmessageui.py" line="699"/>
        <source>Send Message to your Subscribers</source>
        <translation>Wyślij wiadomość broadcast</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/bitmessageui.py" line="700"/>
        <source>TTL:</source>
        <translation>Czas życia:</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/bitmessageui.py" line="727"/>
        <source>Subscriptions</source>
        <translation>Subskrypcje</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/bitmessageui.py" line="711"/>
        <source>Add new Subscription</source>
        <translation>Dodaj subskrypcję</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/bitmessageui.py" line="745"/>
        <source>Chans</source>
        <translation>Kanały</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/bitmessageui.py" line="729"/>
        <source>Add Chan</source>
        <translation>Dodaj kanał</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/bitmessageui.py" line="750"/>
        <source>File</source>
        <translation>Plik</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/bitmessageui.py" line="761"/>
        <source>Settings</source>
        <translation>Ustawienia</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/bitmessageui.py" line="757"/>
        <source>Help</source>
        <translation>Pomoc</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/bitmessageui.py" line="753"/>
        <source>Import keys</source>
        <translation>Importuj klucze</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/bitmessageui.py" line="754"/>
        <source>Manage keys</source>
        <translation>Zarządzaj kluczami</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/bitmessageui.py" line="756"/>
        <source>Ctrl+Q</source>
        <translation>Ctrl+Q</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/bitmessageui.py" line="758"/>
        <source>F1</source>
        <translation>F1</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/bitmessageui.py" line="759"/>
        <source>Contact support</source>
        <translation>Kontakt z twórcami</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/bitmessageui.py" line="760"/>
        <source>About</source>
        <translation>O programie</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/bitmessageui.py" line="762"/>
        <source>Regenerate deterministic addresses</source>
        <translation>Odtwórz adres deterministyczny</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/bitmessageui.py" line="763"/>
        <source>Delete all trashed messages</source>
        <translation>Usuń wiadomości z kosza</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/bitmessageui.py" line="764"/>
        <source>Join / Create chan</source>
        <translation>Dołącz / Utwórz kanał</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/foldertree.py" line="224"/>
        <source>All accounts</source>
        <translation>Wszystkie konta</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/messageview.py" line="56"/>
        <source>Zoom level {0}%</source>
        <translation>Poziom powiększenia {0}%</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/blacklist.py" line="91"/>
        <source>Error: You cannot add the same address to your list twice. Perhaps rename the existing one if you want.</source>
        <translation>Błąd: Adres znajduje sie już na liście.</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/blacklist.py" line="112"/>
        <source>Add new entry</source>
        <translation>Dodaj nowy wpis</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="4334"/>
        <source>Display the {0} recent broadcast(s) from this address.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="1774"/>
        <source>New version of PyBitmessage is available: {0}. Download it from https://github.com/Bitmessage/PyBitmessage/releases/latest</source>
        <translation>Nowa wersja Bitmessage jest dostępna: {0}. Pobierz ją z https://github.com/Bitmessage/PyBitmessage/releases/latest</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="2817"/>
        <source>Waiting for PoW to finish... {0}%</source>
        <translation>Oczekiwanie na wykonanie dowodu pracy… {0}%</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="2826"/>
        <source>Shutting down Pybitmessage... {0}%</source>
        <translation>Zamykanie PyBitmessage… {0}%</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="2845"/>
        <source>Waiting for objects to be sent... {0}%</source>
        <translation>Oczekiwanie na wysłanie obiektów… {0}%</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="2862"/>
        <source>Saving settings... {0}%</source>
        <translation>Zapisywanie ustawień… {0}%</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="2875"/>
        <source>Shutting down core... {0}%</source>
        <translation>Zamykanie rdzenia programu… {0}%</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="2881"/>
        <source>Stopping notifications... {0}%</source>
        <translation>Zatrzymywanie powiadomień… {0}%</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="2885"/>
        <source>Shutdown imminent... {0}%</source>
        <translation>Zaraz zamknę… {0}%</translation>
    </message>
    <message numerus="yes">
        <location filename="../bitmessageqt/bitmessageui.py" line="706"/>
        <source>%n hour(s)</source>
        <translation><numerusform>%n godzina</numerusform><numerusform>%n godziny</numerusform><numerusform>%n godzin</numerusform><numerusform>%n godzin</numerusform></translation>
    </message>
    <message numerus="yes">
        <location filename="../bitmessageqt/__init__.py" line="825"/>
        <source>%n day(s)</source>
        <translation><numerusform>%n dzień</numerusform><numerusform>%n dni</numerusform><numerusform>%n dni</numerusform><numerusform>%n dni</numerusform></translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="2783"/>
        <source>Shutting down PyBitmessage... {0}%</source>
        <translation>Zamykanie PyBitmessage… {0}%</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="1144"/>
        <source>Sent</source>
        <translation>Wysłane</translation>
    </message>
    <message>
        <location filename="../class_addressGenerator.py" line="115"/>
        <source>Generating one new address</source>
        <translation>Generowanie jednego nowego adresu</translation>
    </message>
    <message>
        <location filename="../class_addressGenerator.py" line="193"/>
        <source>Done generating address. Doing work necessary to broadcast it...</source>
        <translation>Adresy wygenerowany. Wykonywanie dowodu pracy niezbędnego na jego rozesłanie…</translation>
    </message>
    <message>
        <location filename="../class_addressGenerator.py" line="219"/>
        <source>Generating {0} new addresses.</source>
        <translation>Generowanie {0} nowych adresów.</translation>
    </message>
    <message>
        <location filename="../class_addressGenerator.py" line="323"/>
        <source>{0} is already in &apos;Your Identities&apos;. Not adding it again.</source>
        <translation>{0} jest już w &apos;Twoich tożsamościach&apos;. Nie zostanie tu dodany.</translation>
    </message>
    <message>
        <location filename="../class_addressGenerator.py" line="377"/>
        <source>Done generating address</source>
        <translation>Ukończono generowanie adresów</translation>
    </message>
    <message>
        <location filename="../class_outgoingSynSender.py" line="228"/>
        <source>SOCKS5 Authentication problem: {0}</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../class_sqlThread.py" line="481"/>
        <source>Disk full</source>
        <translation>Dysk pełny</translation>
    </message>
    <message>
        <location filename="../class_sqlThread.py" line="481"/>
        <source>Alert: Your disk or data storage volume is full. Bitmessage will now exit.</source>
        <translation>Uwaga: Twój dysk lub partycja jest pełny. Bitmessage zamknie się.</translation>
    </message>
    <message>
        <location filename="../class_singleWorker.py" line="1058"/>
        <source>Error! Could not find sender address (your address) in the keys.dat file.</source>
        <translation>Błąd! Nie można odnaleźć adresu nadawcy (Twojego adresu) w pliku keys.dat.</translation>
    </message>
    <message>
        <location filename="../class_singleWorker.py" line="579"/>
        <source>Doing work necessary to send broadcast...</source>
        <translation>Wykonywanie dowodu pracy niezbędnego do wysłania przekazu…</translation>
    </message>
    <message>
        <location filename="../class_singleWorker.py" line="612"/>
        <source>Broadcast sent on {0}</source>
        <translation>Wysłano: {0}</translation>
    </message>
    <message>
        <location filename="../class_singleWorker.py" line="722"/>
        <source>Encryption key was requested earlier.</source>
        <translation>Prośba o klucz szyfrujący została już wysłana.</translation>
    </message>
    <message>
        <location filename="../class_singleWorker.py" line="794"/>
        <source>Sending a request for the recipient&apos;s encryption key.</source>
        <translation>Wysyłanie zapytania o klucz szyfrujący odbiorcy.</translation>
    </message>
    <message>
        <location filename="../class_singleWorker.py" line="819"/>
        <source>Looking up the receiver&apos;s public key</source>
        <translation>Wyszukiwanie klucza publicznego odbiorcy</translation>
    </message>
    <message>
        <location filename="../class_singleWorker.py" line="877"/>
        <source>Problem: Destination is a mobile device who requests that the destination be included in the message but this is disallowed in your settings.  {0}</source>
        <translation>Problem: adres docelowy jest urządzeniem przenośnym, które wymaga, aby adres docelowy był zawarty w wiadomości, ale jest to zabronione w Twoich ustawieniach. {0}</translation>
    </message>
    <message>
        <location filename="../class_singleWorker.py" line="908"/>
        <source>Doing work necessary to send message.
There is no required difficulty for version 2 addresses like this.</source>
        <translation>Wykonywanie dowodu pracy niezbędnego do wysłania wiadomości.
Nie ma wymaganej trudności dla adresów w wersji 2, takich jak ten adres.</translation>
    </message>
    <message>
        <location filename="../class_singleWorker.py" line="944"/>
        <source>Doing work necessary to send message.
Receiver&apos;s required difficulty: {0} and {1}</source>
        <translation>Wykonywanie dowodu pracy niezbędnego do wysłania wiadomości.
Odbiorca wymaga trudności: {0} i {1}</translation>
    </message>
    <message>
        <location filename="../class_singleWorker.py" line="986"/>
        <source>Problem: The work demanded by the recipient ({0} and {1}) is more difficult than you are willing to do. {2}</source>
        <translation>Problem: dowód pracy wymagany przez odbiorcę ({0} i {1}) jest trudniejszy niż chciałbyś wykonać. {2}</translation>
    </message>
    <message>
        <location filename="../class_singleWorker.py" line="1010"/>
        <source>Problem: You are trying to send a message to yourself or a chan but your encryption key could not be found in the keys.dat file. Could not encrypt message. {0}</source>
        <translation>Problem: próbujesz wysłać wiadomość do siebie lub na kanał, ale Twój klucz szyfrujący nie został znaleziony w pliku keys.dat. Nie można zaszyfrować wiadomości. {0}</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="1045"/>
        <source>Doing work necessary to send message.</source>
        <translation>Wykonywanie pracy potrzebnej do wysłania wiadomości.</translation>
    </message>
    <message>
        <location filename="../class_singleWorker.py" line="1214"/>
        <source>Message sent. Waiting for acknowledgement. Sent on {0}</source>
        <translation>Wiadomość wysłana. Oczekiwanie na potwierdzenie odbioru. Wysłano o {0}</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="1033"/>
        <source>Doing work necessary to request encryption key.</source>
        <translation>Wykonywanie pracy niezbędnej do prośby o klucz szyfrujący.</translation>
    </message>
    <message>
        <location filename="../class_singleWorker.py" line="1376"/>
        <source>Broadcasting the public key request. This program will auto-retry if they are offline.</source>
        <translation>Rozsyłanie prośby o klucz publiczny. Program spróbuje ponownie, jeżeli jest on niepołączony.</translation>
    </message>
    <message>
        <location filename="../class_singleWorker.py" line="1383"/>
        <source>Sending public key request. Waiting for reply. Requested at {0}</source>
        <translation>Wysyłanie prośby o klucz publiczny. Oczekiwanie na odpowiedź. Zapytano o {0}</translation>
    </message>
    <message>
        <location filename="../upnp.py" line="267"/>
        <source>UPnP port mapping established on port {0}</source>
        <translation>Mapowanie portów UPnP wykonano na porcie {0}</translation>
    </message>
    <message>
        <location filename="../upnp.py" line="293"/>
        <source>UPnP port mapping removed</source>
        <translation>Usunięto mapowanie portów UPnP</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="244"/>
        <source>Mark all messages as read</source>
        <translation>Oznacz wszystkie jako przeczytane</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="2636"/>
        <source>Are you sure you would like to mark all messages read?</source>
        <translation>Czy na pewno chcesz oznaczyć wszystkie wiadomości jako przeczytane?</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="1054"/>
        <source>Doing work necessary to send broadcast.</source>
        <translation>Wykonywanie dowodu pracy niezbędnego do wysłania przekazu.</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="2718"/>
        <source>Proof of work pending</source>
        <translation>Dowód pracy zawieszony</translation>
    </message>
    <message numerus="yes">
        <location filename="../bitmessageqt/__init__.py" line="2718"/>
        <source>%n object(s) pending proof of work</source>
        <translation><numerusform>Zawieszony dowód pracy %n obiektu</numerusform><numerusform>Zawieszony dowód pracy %n obiektów</numerusform><numerusform>Zawieszony dowód pracy %n obiektów</numerusform><numerusform>Zawieszony dowód pracy %n obiektów</numerusform></translation>
    </message>
    <message numerus="yes">
        <location filename="../bitmessageqt/__init__.py" line="2718"/>
        <source>%n object(s) waiting to be distributed</source>
        <translation><numerusform>%n obiekt oczekuje na wysłanie</numerusform><numerusform>%n obiektów oczekuje na wysłanie</numerusform><numerusform>%n obiektów oczekuje na wysłanie</numerusform><numerusform>%n obiektów oczekuje na wysłanie</numerusform></translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="2718"/>
        <source>Wait until these tasks finish?</source>
        <translation>Czy poczekać aż te zadania zostaną zakończone?</translation>
    </message>
    <message>
        <location filename="../namecoin.py" line="119"/>
        <source>The name {0} was not found.</source>
        <translation>Ksywka {0} nie została znaleziona.</translation>
    </message>
    <message>
        <location filename="../namecoin.py" line="130"/>
        <source>The namecoin query failed ({0})</source>
        <translation>Zapytanie namecoin nie powiodło się ({0})</translation>
    </message>
    <message>
        <location filename="../namecoin.py" line="134"/>
        <source>Unknown namecoin interface type: {0}</source>
        <translation>Nieznany typ interfejsu namecoin: {0}</translation>
    </message>
    <message>
        <location filename="../namecoin.py" line="139"/>
        <source>The namecoin query failed.</source>
        <translation>Zapytanie namecoin nie powiodło się.</translation>
    </message>
    <message>
        <location filename="../namecoin.py" line="156"/>
        <source>The name {0} has no associated Bitmessage address.</source>
        <translation>Ksywka {0} nie ma powiązanego adresu Bitmessage.</translation>
    </message>
    <message>
        <location filename="../namecoin.py" line="185"/>
        <source>Success!  Namecoind version {0} running.</source>
        <translation>Namecoind wersja {0} działa poprawnie!</translation>
    </message>
    <message>
        <location filename="../namecoin.py" line="196"/>
        <source>Success!  NMControll is up and running.</source>
        <translation>NMControl działa poprawnie!</translation>
    </message>
    <message>
        <location filename="../namecoin.py" line="199"/>
        <source>Couldn&apos;t understand NMControl.</source>
        <translation>Nie można zrozumieć NMControl.</translation>
    </message>
    <message>
        <location filename="../namecoin.py" line="209"/>
        <source>The connection to namecoin failed.</source>
        <translation>Nie udało się połączyć z namecoin.</translation>
    </message>
    <message>
        <location filename="../proofofwork.py" line="132"/>
        <source>Your GPU(s) did not calculate correctly, disabling OpenCL. Please report to the developers.</source>
        <translation>Twoje procesory graficzne nie obliczyły poprawnie, wyłączam OpenCL. Prosimy zaraportować przypadek twórcom programu.</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="3828"/>
        <source>Set notification sound...</source>
        <translation>Ustaw dźwięk powiadomień…</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="647"/>
        <source>
        Welcome to easy and secure Bitmessage
            * send messages to other people
            * send broadcast messages like twitter or
            * discuss in chan(nel)s with other people
        </source>
        <translation>
Witamy w przyjaznym i bezpiecznym Bitmessage
* wysyłaj wiadomości do innych użytkowników
* wysyłaj wiadomości subskrypcji (jak na Twitterze)
* dyskutuj na kanałach (chany) z innymi ludźmi</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="816"/>
        <source>not recommended for chans</source>
        <translation>niezalecany dla kanałów</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="1209"/>
        <source>Quiet Mode</source>
        <translation>Tryb cichy</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="1601"/>
        <source>Problems connecting? Try enabling UPnP in the Network Settings</source>
        <translation>Problem z połączeniem? Spróbuj włączyć UPnP w ustawieniach sieci.</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="1928"/>
        <source>You are trying to send an email instead of a bitmessage. This requires registering with a gateway. Attempt to register?</source>
        <translation>Próbujesz wysłać e-mail zamiast wiadomość bitmessage. To wymaga zarejestrowania się na bramce. Czy zarejestrować?</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="1960"/>
        <source>Error: Bitmessage addresses start with BM-   Please check the recipient address {0}</source>
        <translation>Błąd: adresy Bitmessage zaczynają się od BM-. Proszę sprawdzić adres odbiorcy {0}.</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="1966"/>
        <source>Error: The recipient address {0} is not typed or copied correctly. Please check it.</source>
        <translation>Błąd: adres odbiorcy {0} nie został skopiowany lub przepisany poprawnie. Proszę go sprawdzić.</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="1972"/>
        <source>Error: The recipient address {0} contains invalid characters. Please check it.</source>
        <translation>Błąd: adres odbiorcy {0} zawiera nieprawidłowe znaki. Proszę go sprawdzić.</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="1978"/>
        <source>Error: The version of the recipient address {0} is too high. Either you need to upgrade your Bitmessage software or your acquaintance is being clever.</source>
        <translation>Błąd: wersja adresu odbiorcy {0} jest za wysoka. Musisz albo zaktualizować Twoje oprogramowanie Bitmessage, albo twój znajomy Cię trolluje.</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="1986"/>
        <source>Error: Some data encoded in the recipient address {0} is too short. There might be something wrong with the software of your acquaintance.</source>
        <translation>Błąd: niektóre dane zakodowane w adresie odbiorcy {0} są zbyt krótkie. Być może coś nie działa należycie w programie Twojego znajomego.</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="1994"/>
        <source>Error: Some data encoded in the recipient address {0} is too long. There might be something wrong with the software of your acquaintance.</source>
        <translation>Błąd: niektóre dane zakodowane w adresie odbiorcy {0} są zbyt długie. Być może coś nie działa należycie w programie Twojego znajomego.</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="2002"/>
        <source>Error: Some data encoded in the recipient address {0} is malformed. There might be something wrong with the software of your acquaintance.</source>
        <translation>Błąd: niektóre dane zakodowane w adresie odbiorcy {0} są uszkodzone. Być może coś nie działa należycie w programie Twojego znajomego.</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="2010"/>
        <source>Error: Something is wrong with the recipient address {0}.</source>
        <translation>Błąd: coś jest nie tak z adresem odbiorcy {0}.</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="2159"/>
        <source>Error: {0}</source>
        <translation>Błąd: {0}</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="2276"/>
        <source>From {0}</source>
        <translation>Od {0}</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="2680"/>
        <source>Disconnecting</source>
        <translation>Rozłączanie</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="2680"/>
        <source>Connecting</source>
        <translation>Łączenie</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="2680"/>
        <source>Bitmessage will now drop all connections. Are you sure?</source>
        <translation>Bitmessage zatrzyma wszystkie połączenia? Czy kontynuować?</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="2680"/>
        <source>Bitmessage will now start connecting to network. Are you sure?</source>
        <translation>Bitmessage rozpocznie łączenie z siecią. Czy kontynuować?</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="2742"/>
        <source>Synchronisation pending</source>
        <translation>Synchronizacja zawieszona</translation>
    </message>
    <message numerus="yes">
        <location filename="../bitmessageqt/__init__.py" line="2742"/>
        <source>Bitmessage hasn&apos;t synchronised with the network, %n object(s) to be downloaded. If you quit now, it may cause delivery delays. Wait until the synchronisation finishes?</source>
        <translation><numerusform>Bitmessage nie zsynchronizował się z siecią, %n obiekt oczekuje na pobranie. Jeżeli zamkniesz go teraz, może to spowodować opóźnienia dostarczeń. Czy poczekać na zakończenie synchronizacji?</numerusform><numerusform>Bitmessage nie zsynchronizował się z siecią, %n obiekty oczekują na pobranie. Jeżeli zamkniesz go teraz, może to spowodować opóźnienia dostarczeń. Czy poczekać na zakończenie synchronizacji?</numerusform><numerusform>Bitmessage nie zsynchronizował się z siecią, %n obiektów oczekuje na pobranie. Jeżeli zamkniesz go teraz, może to spowodować opóźnienia dostarczeń. Czy poczekać na zakończenie synchronizacji?</numerusform><numerusform>Bitmessage nie zsynchronizował się z siecią, %n obiektów oczekuje na pobranie. Jeżeli zamkniesz go teraz, może to spowodować opóźnienia dostarczeń. Czy poczekać na zakończenie synchronizacji?</numerusform></translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="2763"/>
        <source>Not connected</source>
        <translation>Niepołączony</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="2763"/>
        <source>Bitmessage isn&apos;t connected to the network. If you quit now, it may cause delivery delays. Wait until connected and the synchronisation finishes?</source>
        <translation>Bitmessage nie połączył się z siecią. Jeżeli zamkniesz go teraz, może to spowodować opóźnienia dostarczeń. Czy poczekać na połączenie i zakończenie synchronizacji?</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="2787"/>
        <source>Waiting for network connection...</source>
        <translation>Oczekiwanie na połączenie sieciowe…</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="2799"/>
        <source>Waiting for finishing synchronisation...</source>
        <translation>Oczekiwanie na zakończenie synchronizacji…</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="3846"/>
        <source>You have already set a notification sound for this address book entry. Do you really want to overwrite it?</source>
        <translation>Już ustawiłeś dźwięk powiadomienia dla tego kontaktu. Czy chcesz go zastąpić?</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="4067"/>
        <source>Error occurred: could not load message from disk.</source>
        <translation>Wystąpił błąd: nie można załadować wiadomości z dysku.</translation>
    </message>
    <message numerus="yes">
        <location filename="../bitmessageqt/address_dialogs.py" line="211"/>
        <source>Display the %n recent broadcast(s) from this address.</source>
        <translation><numerusform>Wyświetl %n ostatnią wiadomość przekazu z tego adresu.</numerusform><numerusform>Wyświetl %n ostatnią wiadomość przekazu z tego adresu.</numerusform><numerusform>Wyświetl %n ostatnich wiadomości przekazu z tego adresu.</numerusform><numerusform>Wyświetl %n ostatnich wiadomości przekazu z tego adresu.</numerusform></translation>
    </message>
    <message>
        <location filename="../bitmessageqt/bitmessageui.py" line="658"/>
        <source>Go online</source>
        <translation>Połącz</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/bitmessageui.py" line="658"/>
        <source>Go offline</source>
        <translation>Rozłącz</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/bitmessageui.py" line="707"/>
        <source>Clear</source>
        <translation>Wymaż</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/foldertree.py" line="16"/>
        <source>inbox</source>
        <translation>odebrane</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/foldertree.py" line="17"/>
        <source>new</source>
        <translation>nowe</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/foldertree.py" line="18"/>
        <source>sent</source>
        <translation>wysłane</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/foldertree.py" line="19"/>
        <source>trash</source>
        <translation>kosz</translation>
    </message>
</context>
<context>
    <name>MessageView</name>
    <message>
        <location filename="../bitmessageqt/messageview.py" line="84"/>
        <source>Follow external link</source>
        <translation>Otwórz zewnętrzne łącze</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/messageview.py" line="84"/>
        <source>The link &quot;{0}&quot; will open in a browser. It may be a security risk, it could de-anonymise you or download malicious data. Are you sure?</source>
        <translation>Odnośnik &quot;{0}&quot; zostanie otwarty w przeglądarce. Może to spowodować zagrożenie bezpieczeństwa, może on ujawnić Twoją anonimowość lub pobrać złośliwe dane. Czy jesteś pewien?</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/messageview.py" line="134"/>
        <source>HTML detected, click here to display</source>
        <translation>Wykryto HTML, kliknij tu, aby go wyświetlić</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/messageview.py" line="146"/>
        <source>Click here to disable HTML</source>
        <translation>Kliknij tutaj aby wyłączyć HTML</translation>
    </message>
</context>
<context>
    <name>MsgDecode</name>
    <message>
        <location filename="../helper_msgcoding.py" line="84"/>
        <source>The message has an unknown encoding.
Perhaps you should upgrade Bitmessage.</source>
        <translation>Wiadomość zawiera nierozpoznane kodowanie.
Prawdopodobnie powinieneś zaktualizować Bitmessage.</translation>
    </message>
    <message>
        <location filename="../helper_msgcoding.py" line="88"/>
        <source>Unknown encoding</source>
        <translation>Nierozpoznane kodowanie</translation>
    </message>
</context>
<context>
    <name>NewAddressDialog</name>
    <message>
        <location filename="../bitmessageqt/newaddressdialog.ui" line="14"/>
        <source>Create new Address</source>
        <translation>Generuj nowy adres</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/newaddressdialog.ui" line="23"/>
        <source>Here you may generate as many addresses as you like. Indeed, creating and abandoning addresses is encouraged. You may generate addresses by using either random numbers or by using a passphrase. If you use a passphrase, the address is called a &quot;deterministic&quot; address.
The &apos;Random Number&apos; option is selected by default but deterministic addresses have several pros and cons:</source>
        <translation>Tutaj możesz utworzyć tyle adresów, ile tylko potrzebujesz. W istocie, tworzenie nowych i porzucanie adresów jest zalecane. Możesz wygenerować adres używając albo losowych liczb albo hasła. Jeżeli użyjesz hasła, adres taki jest nazywany adresem „deterministycznym”.
Generowanie adresów „losowych” jest wybrane domyślnie, jednak deterministyczne adresy mają swoje wady i zalety:</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/newaddressdialog.ui" line="37"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;&lt;span style=&quot; font-weight:600;&quot;&gt;Pros:&lt;br/&gt;&lt;/span&gt;You can recreate your addresses on any computer from memory. &lt;br/&gt;You need-not worry about backing up your keys.dat file as long as you can remember your passphrase. &lt;br/&gt;&lt;span style=&quot; font-weight:600;&quot;&gt;Cons:&lt;br/&gt;&lt;/span&gt;You must remember (or write down) your passphrase if you expect to be able to recreate your keys if they are lost. &lt;br/&gt;You must remember the address version number and the stream number along with your passphrase. &lt;br/&gt;If you choose a weak passphrase and someone on the Internet can brute-force it, they can read your messages and send messages as you.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;&lt;span style=&quot; font-weight:600;&quot;&gt;Zalety:&lt;br/&gt;&lt;/span&gt;Możesz wygenerować swój adres na każdym komputerze z głowy.&lt;br/&gt;Nie musisz się martwić o tworzenie kopii zapasowej pliku keys.dat tak długo jak pamiętasz hasło.&lt;/br&gt;&lt;span style=&quot; font-weight:600;&quot;&gt;Wady:&lt;br/&gt;&lt;/span&gt;Musisz zapamiętać (bądź zapisać) swoje hasło, jeżeli chcesz odzyskać swój adres po utracie kluczy.&lt;/br&gt;Musisz zapamiętać numer wersji adresu i numer strumienia razem z hasłem.&lt;/br&gt;Jeżeli użyjesz słabego hasła, ktoś z Internetu może je odgadnąć i przeczytać wszystkie Twoje wiadomości i wysyłać wiadomości jako Ty.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/newaddressdialog.ui" line="66"/>
        <source>Use a random number generator to make an address</source>
        <translation>Użyj generatora liczb losowych do utworzenia adresu</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/newaddressdialog.ui" line="79"/>
        <source>Use a passphrase to make addresses</source>
        <translation>Użyj hasła do utworzenia adresu</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/newaddressdialog.ui" line="89"/>
        <source>Spend several minutes of extra computing time to make the address(es) 1 or 2 characters shorter</source>
        <translation>Dołóż kilka minut dodatkowych obliczeń aby wygenerować adres(y) krótsze o 1 lub 2 znaki</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/newaddressdialog.ui" line="96"/>
        <source>Make deterministic addresses</source>
        <translation>Utwórz adres deterministyczny</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/newaddressdialog.ui" line="102"/>
        <source>Address version number: 4</source>
        <translation>Numer wersji adresu: 4</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/newaddressdialog.ui" line="109"/>
        <source>In addition to your passphrase, you must remember these numbers:</source>
        <translation>Razem ze swoim hasłem musisz zapamiętać te liczby:</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/newaddressdialog.ui" line="126"/>
        <source>Passphrase</source>
        <translation>Hasło</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/newaddressdialog.ui" line="133"/>
        <source>Number of addresses to make based on your passphrase:</source>
        <translation>Liczba adresów do wygenerowanie na podstawie hasła:</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/newaddressdialog.ui" line="153"/>
        <source>Stream number: 1</source>
        <translation>Numer strumienia: 1</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/newaddressdialog.ui" line="173"/>
        <source>Retype passphrase</source>
        <translation>Hasło ponownie</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/newaddressdialog.ui" line="200"/>
        <source>Randomly generate address</source>
        <translation>Adres losowy</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/newaddressdialog.ui" line="206"/>
        <source>Label (not shown to anyone except you)</source>
        <translation>Etykieta (nie wyświetlana komukolwiek oprócz Ciebie)</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/newaddressdialog.ui" line="216"/>
        <source>Use the most available stream</source>
        <translation>Użyj najbardziej dostępnego strumienia</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/newaddressdialog.ui" line="226"/>
        <source> (best if this is the first of many addresses you will create)</source>
        <translation>(zalecane, jeżeli jest to pierwszy z adresów który chcesz utworzyć)</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/newaddressdialog.ui" line="236"/>
        <source>Use the same stream as an existing address</source>
        <translation>Użyj tego samego strumienia co istniejący adres</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/newaddressdialog.ui" line="246"/>
        <source>(saves you some bandwidth and processing power)</source>
        <translation>(oszczędza trochę transferu i mocy procesora)</translation>
    </message>
</context>
<context>
    <name>NewSubscriptionDialog</name>
    <message>
        <location filename="../bitmessageqt/newsubscriptiondialog.ui" line="20"/>
        <source>Add new entry</source>
        <translation>Dodaj nowy wpis</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/newsubscriptiondialog.ui" line="26"/>
        <source>Label</source>
        <translation>Etykieta</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/newsubscriptiondialog.ui" line="36"/>
        <source>Address</source>
        <translation>Adres</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/newsubscriptiondialog.ui" line="59"/>
        <source>Enter an address above.</source>
        <translation>Wprowadź adres powyżej.</translation>
    </message>
</context>
<context>
    <name>SpecialAddressBehaviorDialog</name>
    <message>
        <location filename="../bitmessageqt/specialaddressbehavior.ui" line="14"/>
        <source>Special Address Behavior</source>
        <translation>Specjalne zachowanie adresu</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/specialaddressbehavior.ui" line="20"/>
        <source>Behave as a normal address</source>
        <translation>Zachowuj się jak normalny adres</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/specialaddressbehavior.ui" line="30"/>
        <source>Behave as a pseudo-mailing-list address</source>
        <translation>Zachowuj się jak pseudo-lista-dyskusyjna</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/specialaddressbehavior.ui" line="37"/>
        <source>Mail received to a pseudo-mailing-list address will be automatically broadcast to subscribers (and thus will be public).</source>
        <translation>Wiadomości wysłane na pseudo-listę-dyskusyjną zostaną automatycznie rozesłane do abonentów (i w ten sposób będą publiczne).</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/specialaddressbehavior.ui" line="47"/>
        <source>Name of the pseudo-mailing-list:</source>
        <translation>Nazwa pseudo-listy-dyskusyjnej:</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/address_dialogs.py" line="249"/>
        <source>This is a chan address. You cannot use it as a pseudo-mailing list.</source>
        <translation>To jest adres kanału. Nie możesz go użyć jako pseudo-listy-dyskusyjnej.</translation>
    </message>
</context>
<context>
    <name>aboutDialog</name>
    <message>
        <location filename="../bitmessageqt/about.ui" line="14"/>
        <source>About</source>
        <translation>O programie</translation>
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
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Rozpowszechniane na licencji MIT/X11 software license; zobacz &lt;a href=&quot;http://www.opensource.org/licenses/mit-license.php&quot;&gt;&lt;span style=&quot; text-decoration: underline; color:#0000ff;&quot;&gt;http://www.opensource.org/licenses/mit-license.php&lt;/span&gt;&lt;/a&gt;&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/about.ui" line="59"/>
        <source>This is Beta software.</source>
        <translation>To jest wersja Beta.</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/about.py" line="70"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Copyright Â© 2012-2016 Jonathan Warren&lt;br/&gt;Copyright Â© 2013-2016 The Bitmessage Developers&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"/>
    </message>
    <message encoding="UTF-8">
        <location filename="../bitmessageqt/about.ui" line="49"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Copyright © 2012-2016 Jonathan Warren&lt;br/&gt;Copyright © 2013-2017 The Bitmessage Developers&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Prawa autorskie © 2012-2016 Jonathan Warren&lt;br/&gt;Prawa autorskie © 2013-2017 Programiści Bitmessage&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
</context>
<context>
    <name>blacklist</name>
    <message>
        <location filename="../bitmessageqt/blacklist.ui" line="17"/>
        <source>Use a Blacklist (Allow all incoming messages except those on the Blacklist)</source>
        <translation>Użyj czarnej listy (zezwala na wszystkie przychodzące wiadomości, z wyjątkiem tych na czarnej liście)</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/blacklist.ui" line="27"/>
        <source>Use a Whitelist (Block all incoming messages except those on the Whitelist)</source>
        <translation>Użyj białej listy (blokuje wszystkie wiadomości, z wyjątkiem o tych na białej liście)</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/blacklist.ui" line="34"/>
        <source>Add new entry</source>
        <translation>Dodaj wpis</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/blacklist.ui" line="85"/>
        <source>Name or Label</source>
        <translation>Nazwa lub etykieta</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/blacklist.ui" line="90"/>
        <source>Address</source>
        <translation>Adres</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/blacklist.py" line="151"/>
        <source>Blacklist</source>
        <translation>Czarna lista</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/blacklist.py" line="153"/>
        <source>Whitelist</source>
        <translation>Biała lista</translation>
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
        <translation>Bitmessage nie połączy się, zanim mu na to nie pozwolisz.</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/connect.ui" line="27"/>
        <source>Connect now</source>
        <translation>Połącz teraz</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/connect.ui" line="37"/>
        <source>Let me configure special network settings first</source>
        <translation>Pozwól mi najpierw ustawić specjalne opcje konfiguracji sieci</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/connect.ui" line="44"/>
        <source>Work offline</source>
        <translation>Działaj bez sieci</translation>
    </message>
</context>
<context>
    <name>helpDialog</name>
    <message>
        <location filename="../bitmessageqt/help.ui" line="14"/>
        <source>Help</source>
        <translation>Pomoc</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/help.ui" line="20"/>
        <source>&lt;a href=&quot;https://bitmessage.org/wiki/PyBitmessage_Help&quot;&gt;https://bitmessage.org/wiki/PyBitmessage_Help&lt;/a&gt;</source>
        <translation>&lt;a href=&quot;https://bitmessage.org/wiki/PyBitmessage_Help&quot;&gt;https://bitmessage.org/wiki/PyBitmessage_Help&lt;/a&gt;</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/help.ui" line="30"/>
        <source>As Bitmessage is a collaborative project, help can be found online in the Bitmessage Wiki:</source>
        <translation>Ponieważ Bitmessage jest tworzone przez społeczność, możesz uzyskać pomoc w sieci na wiki Bitmessage:</translation>
    </message>
</context>
<context>
    <name>iconGlossaryDialog</name>
    <message>
        <location filename="../bitmessageqt/iconglossary.ui" line="20"/>
        <source>Icon Glossary</source>
        <translation>Opis ikon</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/iconglossary.ui" line="36"/>
        <source>You have no connections with other peers. </source>
        <translation>Nie masz żadnych połączeń z innymi użytkownikami.</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/iconglossary.ui" line="53"/>
        <source>You have made at least one connection to a peer using an outgoing connection but you have not yet received any incoming connections. Your firewall or home router probably isn&apos;t configured to forward incoming TCP connections to your computer. Bitmessage will work just fine but it would help the Bitmessage network if you allowed for incoming connections and will help you be a better-connected node.</source>
        <translation>Masz co najmniej jedno połączenie wychodzące z innymi użytkownikami, ale nie masz jeszcze żadnych połączeń przychodzących. Twoja zapora sieciowa lub domowy ruter prawdopodobnie nie są poprawnie skonfigurowane aby przekazywać połączenia przychodzące TCP na Twój komputer. Bitmessage będzie działał dobrze, ale byłoby fajnie, gdybyś pomógł sieci Bitmessage i zezwolił na połączenia przychodzące.</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/iconglossary.py" line="85"/>
        <source>You are using TCP port ?. (This can be changed in the settings).</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/iconglossary.ui" line="96"/>
        <source>You do have connections with other peers and your firewall is correctly configured.</source>
        <translation>Masz połączenia z innymi użytkownikami i twoja zapora sieciowa jest skonfigurowana poprawnie.</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/dialogs.py" line="64"/>
        <source>You are using TCP port {0}. (This can be changed in the settings).</source>
        <translation>Btimessage używa portu TCP {0}. (Można go zmienić w ustawieniach).</translation>
    </message>
</context>
<context>
    <name>networkstatus</name>
    <message>
        <location filename="../bitmessageqt/networkstatus.ui" line="39"/>
        <source>Total connections:</source>
        <translation>Wszystkich połączeń:</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/networkstatus.ui" line="185"/>
        <source>Since startup:</source>
        <translation>Od startu:</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/networkstatus.ui" line="201"/>
        <source>Processed 0 person-to-person messages.</source>
        <translation>Przetworzono 0 wiadomości zwykłych.</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/networkstatus.ui" line="230"/>
        <source>Processed 0 public keys.</source>
        <translation>Przetworzono 0 kluczy publicznych.</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/networkstatus.ui" line="217"/>
        <source>Processed 0 broadcasts.</source>
        <translation>Przetworzono 0 wiadomości subskrypcji.</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/networkstatus.ui" line="282"/>
        <source>Inventory lookups per second: 0</source>
        <translation>Zapytań o elementy na sekundę: 0</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/networkstatus.ui" line="243"/>
        <source>Objects to be synced:</source>
        <translation>Obiektów do zsynchronizowania:</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/networkstatus.ui" line="152"/>
        <source>Stream #</source>
        <translation>Strumień #</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/networkstatus.ui" line="116"/>
        <source>Connections</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/networkstatus.py" line="242"/>
        <source>Since startup on {0}</source>
        <translation>Od startu programu o {0}</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/networkstatus.py" line="140"/>
        <source>Down: {0}/s  Total: {1}</source>
        <translation>Pobieranie: {0}/s W całości: {1}</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/networkstatus.py" line="146"/>
        <source>Up: {0}/s  Total: {1}</source>
        <translation>Wysyłanie: {0}/s W całości: {1}</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/networkstatus.py" line="219"/>
        <source>Total Connections: {0}</source>
        <translation>Wszystkich połączeń: {0}</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/networkstatus.py" line="234"/>
        <source>Inventory lookups per second: {0}</source>
        <translation>Zapytań o elementy na sekundę: {0}</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/networkstatus.ui" line="256"/>
        <source>Up: 0 kB/s</source>
        <translation>Wysyłanie: 0 kB/s</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/networkstatus.ui" line="269"/>
        <source>Down: 0 kB/s</source>
        <translation>Pobieranie: 0 kB/s</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/bitmessageui.py" line="749"/>
        <source>Network Status</source>
        <translation>Stan sieci</translation>
    </message>
    <message numerus="yes">
        <location filename="../bitmessageqt/networkstatus.py" line="70"/>
        <source>byte(s)</source>
        <translation><numerusform>bajt</numerusform><numerusform>bajtów</numerusform><numerusform>bajtów</numerusform><numerusform>bajtów</numerusform></translation>
    </message>
    <message numerus="yes">
        <location filename="../bitmessageqt/networkstatus.py" line="93"/>
        <source>Object(s) to be synced: %n</source>
        <translation><numerusform>Jeden obiekt do zsynchronizowania</numerusform><numerusform>Obieków do zsynchronizowania: %n</numerusform><numerusform>Obieków do zsynchronizowania: %n</numerusform><numerusform>Obieków do zsynchronizowania: %n</numerusform></translation>
    </message>
    <message numerus="yes">
        <location filename="../bitmessageqt/networkstatus.py" line="105"/>
        <source>Processed %n person-to-person message(s).</source>
        <translation><numerusform>Przetworzono %n wiadomość zwykłą.</numerusform><numerusform>Przetworzono %n wiadomości zwykłych.</numerusform><numerusform>Przetworzono %n wiadomości zwykłych.</numerusform><numerusform>Przetworzono %n wiadomości zwykłych.</numerusform></translation>
    </message>
    <message numerus="yes">
        <location filename="../bitmessageqt/networkstatus.py" line="116"/>
        <source>Processed %n broadcast message(s).</source>
        <translation><numerusform>Przetworzono %n wiadomość subskrypcji.</numerusform><numerusform>Przetworzono %n wiadomości subskrypcji.</numerusform><numerusform>Przetworzono %n wiadomości subskrypcji.</numerusform><numerusform>Przetworzono %n wiadomości subskrypcji.</numerusform></translation>
    </message>
    <message numerus="yes">
        <location filename="../bitmessageqt/networkstatus.py" line="127"/>
        <source>Processed %n public key(s).</source>
        <translation><numerusform>Przetworzono %n klucz publiczny.</numerusform><numerusform>Przetworzono %n kluczy publicznych.</numerusform><numerusform>Przetworzono %n kluczy publicznych.</numerusform><numerusform>Przetworzono %n kluczy publicznych.</numerusform></translation>
    </message>
    <message>
        <location filename="../bitmessageqt/networkstatus.ui" line="120"/>
        <source>Peer</source>
        <translation>Użytkownik</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/networkstatus.ui" line="123"/>
        <source>IP address or hostname</source>
        <translation>IP lub nazwa hosta</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/networkstatus.ui" line="128"/>
        <source>Rating</source>
        <translation>Ocena</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/networkstatus.ui" line="131"/>
        <source>PyBitmessage tracks the success rate of connection attempts to individual nodes. The rating ranges from -1 to 1 and affects the likelihood of selecting the node in the future</source>
        <translation>PyBitmessage rejestruje pomyślność prób połączeń z indywidualnymi węzłami. Ocena przyjmuje wartości od -1 do 1 i ma wpływ na prawdopodobieństwo wybrania węzła w przyszłości.</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/networkstatus.ui" line="136"/>
        <source>User agent</source>
        <translation>Klient</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/networkstatus.ui" line="139"/>
        <source>Peer&apos;s self-reported software</source>
        <translation>Ogłaszana aplikacja kliencka</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/networkstatus.ui" line="144"/>
        <source>TLS</source>
        <translation>TLS</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/networkstatus.ui" line="147"/>
        <source>Connection encryption</source>
        <translation>Szyfrowanie połączenia</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/networkstatus.ui" line="155"/>
        <source>List of streams negotiated between you and the peer</source>
        <translation>Lista strumieni negocjowanych pomiędzy Tobą i użytkownikiem</translation>
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
        <translation>Utwórz lub dołącz do kanału</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/newchandialog.ui" line="41"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;A chan exists when a group of people share the same decryption keys. The keys and bitmessage address used by a chan are generated from a human-friendly word or phrase (the chan name). To send a message to everyone in the chan, send a message to the chan address.&lt;/p&gt;&lt;p&gt;Chans are experimental and completely unmoderatable.&lt;/p&gt;&lt;p&gt;Enter a name for your chan. If you choose a sufficiently complex chan name (like a strong and unique passphrase) and none of your friends share it publicly, then the chan will be secure and private. However if you and someone else both create a chan with the same chan name, the same chan will be shared.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Kanał powstałe wtedy, jeżeli grupa ludzi dzieli się tymi samymi kluczami szyfrującymi. Klucze i adres używane przez kanał są generowane z łatwego do zapamiętania słowa bądź hasła (nazwa kanału). Aby wysłać wiadomość do każdego na kanale, wyślij zwykłą wiadomość na adres kanału.&lt;/p&gt;&lt;p&gt;Kanały są eksperymentem i są poza wszelką kontrolą.&lt;/p&gt;&lt;p&gt;Wpisz nazwę swojego kanału. Jeżeli wybierzesz wystarczająco złożoną nazwę kanału (tak jak mocne i unikalne hasło) i nikt z Twoich przyjaciół nie ujawni go publicznie, wtedy Twój kanał będzie bezpieczny i prywatny. Jeżeli Ty i ktoś inny utworzy kanał o tej samej nazwie, wtedy prawdopodobnie będzie to ten sam kanał.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/newchandialog.ui" line="56"/>
        <source>Chan passphrase/name:</source>
        <translation>Nazwa/hasło kanału:</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/newchandialog.ui" line="63"/>
        <source>Optional, for advanced usage</source>
        <translation>Opcjonalne, dla zaawansowanych</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/newchandialog.ui" line="76"/>
        <source>Chan address</source>
        <translation>Adres kanału</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/newchandialog.ui" line="101"/>
        <source>Please input chan name/passphrase:</source>
        <translation>Proszę wpisz nazwę/hasło kanału:</translation>
    </message>
</context>
<context>
    <name>newchandialog</name>
    <message>
        <location filename="../bitmessageqt/newchandialog.py" line="68"/>
        <source>Successfully created / joined chan {0}</source>
        <translation>Pomyślnie utworzono / dołączono do kanału {0}</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/newchandialog.py" line="75"/>
        <source>Chan creation / joining failed</source>
        <translation>Utworzenie / dołączenie do kanału nie powiodło się</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/newchandialog.py" line="82"/>
        <source>Chan creation / joining cancelled</source>
        <translation>Utworzenie / dołączenie do kanału przerwane</translation>
    </message>
</context>
<context>
    <name>proofofwork</name>
    <message>
        <location filename="../proofofwork.py" line="196"/>
        <source>C PoW module built successfully.</source>
        <translation>Moduł C PoW zbudowany poprawnie.</translation>
    </message>
    <message>
        <location filename="../proofofwork.py" line="199"/>
        <source>Failed to build C PoW module. Please build it manually.</source>
        <translation>Nie można zbudować modułu C PoW. Prosimy zbudować go ręcznie.</translation>
    </message>
    <message>
        <location filename="../proofofwork.py" line="211"/>
        <source>C PoW module unavailable. Please build it.</source>
        <translation>Moduł C PoW niedostępny. Prosimy zbudować go.</translation>
    </message>
</context>
<context>
    <name>regenerateAddressesDialog</name>
    <message>
        <location filename="../bitmessageqt/regenerateaddresses.ui" line="14"/>
        <source>Regenerate Existing Addresses</source>
        <translation>Odtwórz istniejące adresy</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/regenerateaddresses.ui" line="30"/>
        <source>Regenerate existing addresses</source>
        <translation>Odtwórz istniejące adresy</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/regenerateaddresses.ui" line="36"/>
        <source>Passphrase</source>
        <translation>Hasło</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/regenerateaddresses.ui" line="53"/>
        <source>Number of addresses to make based on your passphrase:</source>
        <translation>Liczba adresów do wygenerowanie na podstawie hasła:</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/regenerateaddresses.ui" line="89"/>
        <source>Address version number:</source>
        <translation>Numer wersji adresu:</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/regenerateaddresses.ui" line="131"/>
        <source>Stream number:</source>
        <translation>Numer strumienia:</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/regenerateaddresses.ui" line="153"/>
        <source>1</source>
        <translation>1</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/regenerateaddresses.ui" line="173"/>
        <source>Spend several minutes of extra computing time to make the address(es) 1 or 2 characters shorter</source>
        <translation>Dołóż kilka minut dodatkowych obliczeń aby wygenerować adres(y) krótsze o 1 lub 2 znaki</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/regenerateaddresses.ui" line="180"/>
        <source>You must check (or not check) this box just like you did (or didn&apos;t) when you made your addresses the first time.</source>
        <translation>Musisz to zaznaczyć (albo nie zaznaczyć) jeżeli zaznaczyłeś (bądź nie zaznaczyłeś) to podczas tworzenia adresu po raz pierwszy.</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/regenerateaddresses.ui" line="190"/>
        <source>If you have previously made deterministic addresses but lost them due to an accident (like hard drive failure), you can regenerate them here. If you used the random number generator to make your addresses then this form will be of no use to you.</source>
        <translation>Jeżeli poprzednio wygenerowałeś deterministyczne adresy, ale je straciłeś przez przypadek (jak np. awaria dysku), możesz je tutaj odtworzyć. Jeżeli użyłeś generatora liczb losowych do utworzenia adresu, wtedy ten formularz jest dla Ciebie bezużyteczny.</translation>
    </message>
</context>
<context>
    <name>settingsDialog</name>
    <message>
        <location filename="../bitmessageqt/settings.py" line="483"/>
        <source>Settings</source>
        <translation>Ustawienia</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/settings.py" line="484"/>
        <source>Start Bitmessage on user login</source>
        <translation>Uruchom Bitmessage po zalogowaniu</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/settings.py" line="485"/>
        <source>Tray</source>
        <translation>Zasobnik systemowy</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/settings.py" line="486"/>
        <source>Start Bitmessage in the tray (don&apos;t show main window)</source>
        <translation>Uruchom Bitmessage w zasobniku (nie pokazuj głównego okna)</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/settings.py" line="491"/>
        <source>Minimize to tray</source>
        <translation>Minimalizuj do zasobnika</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/settings.py" line="492"/>
        <source>Close to tray</source>
        <translation>Zamknij do zasobnika</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/settings.py" line="495"/>
        <source>Show notification when message received</source>
        <translation>Wyświetl powiadomienia o przychodzących wiadomościach</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/settings.py" line="500"/>
        <source>Run in Portable Mode</source>
        <translation>Uruchom w trybie przenośnym</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/settings.py" line="501"/>
        <source>In Portable Mode, messages and config files are stored in the same directory as the program rather than the normal application-data folder. This makes it convenient to run Bitmessage from a USB thumb drive.</source>
        <translation>W trybie przenośnym, wiadomości i pliki konfiguracyjne są przechowywane w tym samym katalogu co program, zamiast w osobistym katalogu danych użytkownika. To sprawia, że wygodnie można uruchamiać Bitmessage z pamięci przenośnych.</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/settings.py" line="508"/>
        <source>Willingly include unencrypted destination address when sending to a mobile device</source>
        <translation>Chętnie umieść niezaszyfrowany adres docelowy podczas wysyłania na urządzenia przenośne.</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/settings.py" line="513"/>
        <source>Use Identicons</source>
        <translation>Użyj graficznych awatarów</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/settings.py" line="514"/>
        <source>Reply below Quote</source>
        <translation>Odpowiedź pod cytatem</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/settings.py" line="515"/>
        <source>Interface Language</source>
        <translation>Język interfejsu</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/settings.py" line="516"/>
        <source>System Settings</source>
        <comment>system</comment>
        <translation>Język systemu</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/settings.py" line="517"/>
        <source>User Interface</source>
        <translation>Interfejs</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/settings.py" line="522"/>
        <source>Listening port</source>
        <translation>Port nasłuchujący</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/settings.py" line="523"/>
        <source>Listen for connections on port:</source>
        <translation>Nasłuchuj połaczeń na porcie:</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/settings.py" line="524"/>
        <source>UPnP:</source>
        <translation>UPnP:</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/settings.py" line="525"/>
        <source>Bandwidth limit</source>
        <translation>Limity przepustowości</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/settings.py" line="526"/>
        <source>Maximum download rate (kB/s): [0: unlimited]</source>
        <translation>Maksymalna prędkość pobierania (w kB/s): [0: bez limitu]</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/settings.py" line="527"/>
        <source>Maximum upload rate (kB/s): [0: unlimited]</source>
        <translation>Maksymalna prędkość wysyłania (w kB/s): [0: bez limitu]</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/settings.py" line="529"/>
        <source>Proxy server / Tor</source>
        <translation>Serwer proxy / Tor</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/settings.py" line="530"/>
        <source>Type:</source>
        <translation>Typ:</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/settings.py" line="531"/>
        <source>Server hostname:</source>
        <translation>Adres serwera:</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/settings.py" line="601"/>
        <source>Port:</source>
        <translation>Port:</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/settings.py" line="533"/>
        <source>Authentication</source>
        <translation>Uwierzytelnienie</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/settings.py" line="602"/>
        <source>Username:</source>
        <translation>Użytkownik:</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/settings.py" line="535"/>
        <source>Pass:</source>
        <translation>Hasło:</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/settings.py" line="536"/>
        <source>Listen for incoming connections when using proxy</source>
        <translation>Nasłuchuj przychodzących połączeń podczas używania proxy</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/settings.py" line="541"/>
        <source>none</source>
        <translation>brak</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/settings.py" line="542"/>
        <source>SOCKS4a</source>
        <translation>SOCKS4a</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/settings.py" line="543"/>
        <source>SOCKS5</source>
        <translation>SOCKS5</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/settings.py" line="544"/>
        <source>Network Settings</source>
        <translation>Sieć</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/settings.py" line="549"/>
        <source>Total difficulty:</source>
        <translation>Całkowita trudność:</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/settings.py" line="550"/>
        <source>The &apos;Total difficulty&apos; affects the absolute amount of work the sender must complete. Doubling this value doubles the amount of work.</source>
        <translation>&apos;Całkowita trudność&apos; ma wpływ na całkowitą ilość pracy jaką nadawca musi wykonać. Podwojenie tej wartości, podwaja ilość pracy do wykonania.</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/settings.py" line="556"/>
        <source>Small message difficulty:</source>
        <translation>Trudność małej wiadomości:</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/settings.py" line="557"/>
        <source>When someone sends you a message, their computer must first complete some work. The difficulty of this work, by default, is 1. You may raise this default for new addresses you create by changing the values here. Any new addresses you create will require senders to meet the higher difficulty. There is one exception: if you add a friend or acquaintance to your address book, Bitmessage will automatically notify them when you next send a message that they need only complete the minimum amount of work: difficulty 1. </source>
        <translation>Kiedy ktoś wysyła Ci wiadomość, jego komputer musi najpierw wykonać dowód pracy. Trudność tej pracy domyślnie wynosi 1. Możesz podwyższyć tę wartość dla nowo-utworzonych adresów podwyższając wartości tutaj. Każdy nowy adres będzie wymagał przez nadawców wyższej trudności. Jest jeden wyjątek: jeżeli dodasz kolegę do swojej książki adresowej, Bitmessage automatycznie powiadomi go kiedy następnym razem wyślesz do niego wiadomość, że musi tylko wykonać minimalną ilość pracy: trudność 1.</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/settings.py" line="566"/>
        <source>The &apos;Small message difficulty&apos; mostly only affects the difficulty of sending small messages. Doubling this value makes it almost twice as difficult to send a small message but doesn&apos;t really affect large messages.</source>
        <translation>&apos;Trudność małej wiadomości&apos; głównie ma wpływ na trudność wysyłania małych wiadomości. Podwojenie tej wartości, prawie podwaja pracę potrzebną do wysłania małej wiadomości, ale w rzeczywistości nie ma wpływu na większe wiadomości.</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/settings.py" line="573"/>
        <source>Demanded difficulty</source>
        <translation>Wymagana trudność</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/settings.py" line="578"/>
        <source>Here you may set the maximum amount of work you are willing to do to send a message to another person. Setting these values to 0 means that any value is acceptable.</source>
        <translation>Tutaj możesz ustawić maksymalną ilość pracy jaką zamierzasz wykonać aby wysłać wiadomość innej osobie. Ustawienie tych wartości na 0 oznacza, że każda wartość jest akceptowana.</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/settings.py" line="584"/>
        <source>Maximum acceptable total difficulty:</source>
        <translation>Maksymalna akceptowalna całkowita trudność:</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/settings.py" line="585"/>
        <source>Maximum acceptable small message difficulty:</source>
        <translation>Maksymalna akceptowalna trudność dla małych wiadomości:</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/settings.py" line="586"/>
        <source>Max acceptable difficulty</source>
        <translation>Maksymalna akceptowalna trudność</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/settings.py" line="473"/>
        <source>Hardware GPU acceleration (OpenCL)</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/settings.py" line="592"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Bitmessage can utilize a different Bitcoin-based program called Namecoin to make addresses human-friendly. For example, instead of having to tell your friend your long Bitmessage address, you can simply tell him to send a message to &lt;span style=&quot; font-style:italic;&quot;&gt;test. &lt;/span&gt;&lt;/p&gt;&lt;p&gt;(Getting your own Bitmessage address into Namecoin is still rather difficult).&lt;/p&gt;&lt;p&gt;Bitmessage can use either namecoind directly or a running nmcontrol instance.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Bitmessage potrafi wykorzystać inny program oparty na Bitcoinie - Namecoin - aby sprawić adresy czytelnymi dla ludzi. Na przykład, zamiast podawać koledze swój długi adres Bitmessage, możesz po prostu powiedzieć mu aby wysłał wiadomość pod &lt;span style=&quot; font-style:italic;&quot;&gt;id/ksywka&lt;/span&gt;.&lt;/p&gt;&lt;p&gt;(Utworzenie swojego adresu Bitmessage w Namecoinie jest ciągle racze trudne).&lt;/p&gt;&lt;p&gt;Bitmessage może skorzystać albo bezpośrednio z namecoind, albo z działającego wątku nmcontrol.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/settings.py" line="600"/>
        <source>Host:</source>
        <translation>Host:</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/settings.py" line="603"/>
        <source>Password:</source>
        <translation>Hasło:</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/settings.py" line="604"/>
        <source>Test</source>
        <translation>Test</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/settings.py" line="605"/>
        <source>Connect to:</source>
        <translation>Połącz z:</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/settings.py" line="606"/>
        <source>Namecoind</source>
        <translation>Namecoind</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/settings.py" line="607"/>
        <source>NMControl</source>
        <translation>NMControl</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/settings.py" line="608"/>
        <source>Namecoin integration</source>
        <translation>Połączenie z Namecoin</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/settings.py" line="613"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;By default, if you send a message to someone and he is offline for more than two days, Bitmessage will send the message again after an additional two days. This will be continued with exponential backoff forever; messages will be resent after 5, 10, 20 days ect. until the receiver acknowledges them. Here you may change that behavior by having Bitmessage give up after a certain number of days or months.&lt;/p&gt;&lt;p&gt;Leave these input fields blank for the default behavior. &lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Domyślnie jeżeli wyślesz wiadomość do kogoś i ta osoba będzie poza siecią przez jakiś czas, Bitmessage spróbuje ponownie wysłać wiadomość trochę później, i potem ponownie. Program będzie próbował wysyłać wiadomość do czasu aż odbiorca potwierdzi odbiór. Tutaj możesz zmienić kiedy Bitmessage ma zaprzestać próby wysyłania.&lt;/p&gt;&lt;p&gt;Pozostaw te poza puste, aby ustawić domyślne zachowanie.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/settings.py" line="622"/>
        <source>Give up after</source>
        <translation>Poddaj się po</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/settings.py" line="623"/>
        <source>and</source>
        <translation>i</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/settings.py" line="624"/>
        <source>days</source>
        <translation>dniach</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/settings.py" line="625"/>
        <source>months.</source>
        <translation>miesiącach.</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/settings.py" line="626"/>
        <source>Resends Expire</source>
        <translation>Niedoręczone wiadomości</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/settings.py" line="493"/>
        <source>Hide connection notifications</source>
        <translation>Nie pokazuj powiadomień o połączeniu</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/settings.py" line="528"/>
        <source>Maximum outbound connections: [0: none]</source>
        <translation>Maksymalnych połączeń wychodzących: [0: brak]</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/settings.py" line="591"/>
        <source>Hardware GPU acceleration (OpenCL):</source>
        <translation>Przyspieszenie sprzętowe GPU (OpenCL):</translation>
    </message>
</context>
</TS>