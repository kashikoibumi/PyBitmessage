<?xml version="1.0" ?><!DOCTYPE TS><TS language="zh_CN" sourcelanguage="en" version="2.0">
<context>
    <name>AddAddressDialog</name>
    <message>
        <location filename="../bitmessageqt/addaddressdialog.ui" line="20"/>
        <source>Add new entry</source>
        <translation>添加新条目</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/addaddressdialog.ui" line="29"/>
        <source>Label</source>
        <translation>标签</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/addaddressdialog.ui" line="39"/>
        <source>Address</source>
        <translation>地址</translation>
    </message>
</context>
<context>
    <name>EmailGatewayDialog</name>
    <message>
        <location filename="../bitmessageqt/emailgateway.ui" line="14"/>
        <source>Email gateway</source>
        <translation>电子邮件网关</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/emailgateway.ui" line="30"/>
        <source>Register on email gateway</source>
        <translation>注册电子邮件网关</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/emailgateway.ui" line="82"/>
        <source>Account status at email gateway</source>
        <translation>电子邮件网关帐户状态</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/emailgateway.ui" line="95"/>
        <source>Change account settings at email gateway</source>
        <translation>更改电子邮件网关帐户设置</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/emailgateway.ui" line="108"/>
        <source>Unregister from email gateway</source>
        <translation>取消电子邮件网关注册</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/emailgateway.ui" line="69"/>
        <source>Email gateway allows you to communicate with email users. Currently, only the Mailchuck email gateway (@mailchuck.com) is available.</source>
        <translation>电子邮件网关允许您与电子邮件用户通信。目前，只有Mailchuck电子邮件网关（@mailchuck.com）可用。</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/emailgateway.ui" line="23"/>
        <source>Desired email address (including @mailchuck.com):</source>
        <translation>所需的电子邮件地址（包括 @mailchuck.com）：</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/emailgateway.ui" line="59"/>
        <source>@mailchuck.com</source>
        <translation>@mailchuck.com</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/address_dialogs.py" line="307"/>
        <source>Registration failed:</source>
        <translation>注册失败：</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/address_dialogs.py" line="309"/>
        <source>The requested email address is not available, please try a new one.</source>
        <translation>请求的电子邮件地址不可用，请换一个新的试试。</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/address_dialogs.py" line="356"/>
        <source>Sending email gateway registration request</source>
        <translation>发送电​​子邮件网关注册请求</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/address_dialogs.py" line="364"/>
        <source>Sending email gateway unregistration request</source>
        <translation>发送电​​子邮件网关注销请求</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/address_dialogs.py" line="370"/>
        <source>Sending email gateway status request</source>
        <translation>发送电​​子邮件网关状态请求</translation>
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
        <translation>#您可以用它来配置您的电子邮件网关帐户
#取消您要使用的设定
#这里的选项：
#
# pgp: server
#电子邮件网关将创建和维护PGP密钥，为您签名和验证，
#代表加密和解密。当您想使用PGP，但懒惰，
#用这个。需要订阅。 
#
# pgp: local
#电子邮件网关不会代您进行PGP操作。您可以
#选择或者不使用PGP, 或在本地使用它。
#
# attachement: yes
#传入附件的电子邮件将会被上传到MEGA.nz，您可以从
# 按照那里链接下载。需要订阅。
#
# attachement: no
#附件将被忽略。
#
# archive: yes
#您收到的邮件将在服务器上存档。如果您有需要请使用
#帮助调试问题，或者您需要第三方电子邮件的证明。这
#然而，意味着服务的操作运将能够读取您的
#电子邮件即使电子邮件已经传送给您。
#
# archive: no
# 已传入的电子邮件将从服务器被删除只要他们已中继。
#
# masterpubkey_btc：BIP44 XPUB键或琥珀金V1公共种子
#offset_btc：整数（默认为0）
#feeamount：多达8位小数
#feecurrency号：BTC，XBT，美元，欧元或英镑
#用这些，如果您想主管谁送您的电子邮件的人。如果这是在和
#一个不明身份的人向您发送一封电子邮件，他们将被要求支付规定的费用
#。由于这个方案使用确定性的公共密钥，您会直接接收
#钱。要再次将其关闭，设置“feeamount”0
#需要订阅。
</translation>
    </message>
</context>
<context>
    <name>MainWindow</name>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="166"/>
        <source>Reply to sender</source>
        <translation>回复发件人</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="168"/>
        <source>Reply to channel</source>
        <translation>回复通道</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="170"/>
        <source>Add sender to your Address Book</source>
        <translation>将发送者添加到您的通讯簿</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="174"/>
        <source>Add sender to your Blacklist</source>
        <translation>将发件人添加到您的黑名单</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="374"/>
        <source>Move to Trash</source>
        <translation>移入回收站</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="181"/>
        <source>Undelete</source>
        <translation>取消删除</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="184"/>
        <source>View HTML code as formatted text</source>
        <translation>作为HTML查看</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="188"/>
        <source>Save message as...</source>
        <translation>将消息保存为...</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="192"/>
        <source>Mark Unread</source>
        <translation>标记为未读</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="346"/>
        <source>New</source>
        <translation>新建</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/blacklist.py" line="122"/>
        <source>Enable</source>
        <translation>启用</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/blacklist.py" line="125"/>
        <source>Disable</source>
        <translation>禁用</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/blacklist.py" line="128"/>
        <source>Set avatar...</source>
        <translation>设置头像...</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/blacklist.py" line="118"/>
        <source>Copy address to clipboard</source>
        <translation>将地址复制到剪贴板</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="293"/>
        <source>Special address behavior...</source>
        <translation>特别的地址行为...</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="240"/>
        <source>Email gateway</source>
        <translation>电子邮件网关</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/blacklist.py" line="115"/>
        <source>Delete</source>
        <translation>删除</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="309"/>
        <source>Send message to this address</source>
        <translation>发送消息到这个地址</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="317"/>
        <source>Subscribe to this address</source>
        <translation>订阅到这个地址</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="329"/>
        <source>Add New Address</source>
        <translation>创建新地址</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="377"/>
        <source>Copy destination address to clipboard</source>
        <translation>复制目标地址到剪贴板</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="381"/>
        <source>Force send</source>
        <translation>强制发送</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="597"/>
        <source>One of your addresses, {0}, is an old version 1 address. Version 1 addresses are no longer supported. May we delete it now?</source>
        <translation>您的地址中的一个, {0},是一个过时的版本1地址. 版本1地址已经不再受到支持了. 我们可以将它删除掉么?</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="1030"/>
        <source>Waiting for their encryption key. Will request it again soon.</source>
        <translation>正在等待他们的加密密钥，我们会在稍后再次请求。</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="990"/>
        <source>Encryption key request queued.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="1036"/>
        <source>Queued.</source>
        <translation>已经添加到队列。</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="1039"/>
        <source>Message sent. Waiting for acknowledgement. Sent at {0}</source>
        <translation>消息已经发送. 正在等待回执. 发送于 {0}</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="1042"/>
        <source>Message sent. Sent at {0}</source>
        <translation>消息已经发送. 发送于 {0}</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="1002"/>
        <source>Need to do work to send message. Work is queued.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="1048"/>
        <source>Acknowledgement of the message received {0}</source>
        <translation>消息的回执已经收到于 {0}</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="2140"/>
        <source>Broadcast queued.</source>
        <translation>广播已经添加到队列中。</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="1057"/>
        <source>Broadcast on {0}</source>
        <translation>已经广播于 {0}</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="1060"/>
        <source>Problem: The work demanded by the recipient is more difficult than you are willing to do. {0}</source>
        <translation>错误： 收件人要求的做工量大于我们的最大接受做工量。 {0}</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="1063"/>
        <source>Problem: The recipient&apos;s encryption key is no good. Could not encrypt message. {0}</source>
        <translation>错误： 收件人的加密密钥是无效的。不能加密消息。 {0}</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="1066"/>
        <source>Forced difficulty override. Send should start soon.</source>
        <translation>已经忽略最大做工量限制。发送很快就会开始。</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="1069"/>
        <source>Unknown status: {0} {1}</source>
        <translation>未知状态： {0} {1}</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="1610"/>
        <source>Not Connected</source>
        <translation>未连接</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="1200"/>
        <source>Show Bitmessage</source>
        <translation>显示比特信</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/bitmessageui.py" line="709"/>
        <source>Send</source>
        <translation>发送</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="1223"/>
        <source>Subscribe</source>
        <translation>订阅</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="1229"/>
        <source>Channel</source>
        <translation>频道</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/bitmessageui.py" line="755"/>
        <source>Quit</source>
        <translation>退出</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="1455"/>
        <source>You may manage your keys by editing the keys.dat file stored in the same directory as this program. It is important that you back up this file.</source>
        <translation>您可以通过编辑和程序储存在同一个目录的 keys.dat 来编辑密钥。备份这个文件十分重要。 </translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="1459"/>
        <source>You may manage your keys by editing the keys.dat file stored in
 {0} 
It is important that you back up this file.</source>
        <translation>您可以通过编辑储存在 {0} 的 keys.dat 来编辑密钥。备份这个文件十分重要。</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="1466"/>
        <source>Open keys.dat?</source>
        <translation>打开 keys.dat ？ </translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="1463"/>
        <source>You may manage your keys by editing the keys.dat file stored in the same directory as this program. It is important that you back up this file. Would you like to open the file now? (Be sure to close Bitmessage before making any changes.)</source>
        <translation>您可以通过编辑和程序储存在同一个目录的 keys.dat 来编辑密钥。备份这个文件十分重要。您现在想打开这个文件么？（请在进行任何修改前关闭比特信）</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="1466"/>
        <source>You may manage your keys by editing the keys.dat file stored in
 {0} 
It is important that you back up this file. Would you like to open the file now? (Be sure to close Bitmessage before making any changes.)</source>
        <translation>您可以通过编辑储存在 {0} 的 keys.dat 来编辑密钥。备份这个文件十分重要。您现在想打开这个文件么？（请在进行任何修改前关闭比特信）</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="1473"/>
        <source>Delete trash?</source>
        <translation>清空回收站？</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="1473"/>
        <source>Are you sure you want to delete all trashed messages?</source>
        <translation>您确定要删除全部被回收的消息么？</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="1491"/>
        <source>bad passphrase</source>
        <translation>错误的密钥</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="1491"/>
        <source>You must type your passphrase. If you don&apos;t have one then this is not the form for you.</source>
        <translation>您必须输入您的密钥。如果您没有的话，这个表单不适用于您。</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="1514"/>
        <source>Bad address version number</source>
        <translation>地址的版本号无效</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="1504"/>
        <source>Your address version number must be a number: either 3 or 4.</source>
        <translation>您的地址的版本号必须是一个数字： 3 或 4.</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="1514"/>
        <source>Your address version number must be either 3 or 4.</source>
        <translation>您的地址的版本号必须是 3 或 4.</translation>
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
        <translation>连接已丢失</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="1645"/>
        <source>Connected</source>
        <translation>已经连接</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="1765"/>
        <source>Message trashed</source>
        <translation>消息已经移入回收站</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="1854"/>
        <source>The TTL, or Time-To-Live is the length of time that the network will hold the message.
 The recipient must get it during this time. If your Bitmessage client does not hear an acknowledgement, it
 will resend the message automatically. The longer the Time-To-Live, the
 more work your computer must do to send the message. A Time-To-Live of four or five days is often appropriate.</source>
        <translation>TTL，或Time-To-Time是保留信息网络时间的长度.
收件人必须在此期间得到它. 如果您的Bitmessage客户沒有听到确认, 它会自动重新发送信息. Time-To-Live的时间越长, 您的电脑必须要做更多工作來发送信息. 四天或五天的 Time-To-Time, 通常是合适的.</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="1899"/>
        <source>Message too long</source>
        <translation>信息太长</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="1899"/>
        <source>The message that you are trying to send is too long by {0} bytes. (The maximum is 261644 bytes). Please cut it down before sending.</source>
        <translation>您正在尝试发送的信息已超过 ％1 个字节太长（最大为261644个字节），发送前请先缩短一些。</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="1941"/>
        <source>Error: Your account wasn&apos;t registered at an email gateway. Sending registration now as {0}, please wait for the registration to be processed before retrying sending.</source>
        <translation>错误: 您的帐户没有在电子邮件网关注册。现在发送注册为％1​​, 注册正在处理请稍候重试发送.</translation>
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
        <translation>错误： 您必须指出一个表单地址， 如果您没有，请到“您的身份”标签页。</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="2026"/>
        <source>Address version number</source>
        <translation>地址版本号</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="2026"/>
        <source>Concerning the address {0}, Bitmessage cannot understand address version numbers of {1}. Perhaps upgrade Bitmessage to the latest version.</source>
        <translation>地址 {0} 的地址版本号 {1} 无法被比特信理解。也许您应该升级您的比特信到最新版本。</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="2030"/>
        <source>Stream number</source>
        <translation>节点流序号</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="2030"/>
        <source>Concerning the address {0}, Bitmessage cannot handle stream numbers of {1}. Perhaps upgrade Bitmessage to the latest version.</source>
        <translation>地址 {0} 的节点流序号 {1} 无法被比特信所理解。也许您应该升级您的比特信到最新版本。</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="2035"/>
        <source>Warning: You are currently not connected. Bitmessage will do the work necessary to send the message but it won&apos;t send until you connect.</source>
        <translation>警告： 您尚未连接。 比特信将做足够的功来发送消息，但是消息不会被发出直到您连接。</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="2084"/>
        <source>Message queued.</source>
        <translation>信息排队。</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="2088"/>
        <source>Your &apos;To&apos; field is empty.</source>
        <translation>“收件人&quot;是空的。</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="2149"/>
        <source>Right click one or more entries in your address book and select &apos;Send message to this address&apos;.</source>
        <translation>在您的地址本的一个条目上右击，之后选择”发送消息到这个地址“。</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="2164"/>
        <source>Fetched address from namecoin identity.</source>
        <translation>已经自namecoin接收了地址。</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="2276"/>
        <source>New Message</source>
        <translation>新消息</translation>
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
        <translation>地址有效。</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/blacklist.py" line="94"/>
        <source>The address you entered was invalid. Ignoring it.</source>
        <translation>您输入的地址是无效的，将被忽略。</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="2306"/>
        <source>Error: You cannot add the same address to your address book twice. Try renaming the existing one if you want.</source>
        <translation>错误：您无法将一个地址添加到您的地址本两次，请尝试重命名已经存在的那个。</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="3364"/>
        <source>Error: You cannot add the same address to your subscriptions twice. Perhaps rename the existing one if you want.</source>
        <translation>错误: 您不能在同一地址添加到您的订阅两次. 也许您可重命名现有之一.</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="2428"/>
        <source>Restart</source>
        <translation>重启</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="2414"/>
        <source>You must restart Bitmessage for the port number change to take effect.</source>
        <translation>您必须重启以便使比特信对于使用的端口的改变生效。</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="2428"/>
        <source>Bitmessage will use your proxy from now on but you may want to manually restart Bitmessage now to close existing connections (if any).</source>
        <translation>比特信将会从现在开始使用代理，但是您可能想手动重启比特信以便使之前的连接关闭（如果有的话）。</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="2457"/>
        <source>Number needed</source>
        <translation>需求数字</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="2457"/>
        <source>Your maximum download and upload rate must be numbers. Ignoring what you typed.</source>
        <translation>您最大的下载和上传速率必须是数字. 忽略您键入的内容.</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="2538"/>
        <source>Will not resend ever</source>
        <translation>不尝试再次发送</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="2538"/>
        <source>Note that the time limit you entered is less than the amount of time Bitmessage waits for the first resend attempt therefore your messages will never be resent.</source>
        <translation>请注意，您所输入的时间限制小于比特信的最小重试时间，因此您将永远不会重发消息。</translation>
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
        <translation>密钥不匹配</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/address_dialogs.py" line="152"/>
        <source>The passphrase you entered twice doesn&apos;t match. Try again.</source>
        <translation>您两次输入的密码并不匹配，请再试一次。</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/address_dialogs.py" line="160"/>
        <source>Choose a passphrase</source>
        <translation>选择一个密钥</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/address_dialogs.py" line="160"/>
        <source>You really do need a passphrase.</source>
        <translation>您真的需要一个密码。</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="3043"/>
        <source>Address is gone</source>
        <translation>已经失去了地址</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="3043"/>
        <source>Bitmessage cannot find your address {0}. Perhaps you removed it?</source>
        <translation>比特信无法找到您的地址 {0} ，也许您已经把它删掉了？</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="3046"/>
        <source>Address disabled</source>
        <translation>地址已经禁用</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="3046"/>
        <source>Error: The address from which you are trying to send is disabled. You&apos;ll have to enable it on the &apos;Your Identities&apos; tab before using it.</source>
        <translation>错误： 您想以一个您已经禁用的地址发出消息。在使用之前您需要在“您的身份”处再次启用。</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="3020"/>
        <source>Entry added to the Address Book. Edit the label to your liking.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="3121"/>
        <source>Entry added to the blacklist. Edit the label to your liking.</source>
        <translation>条目添加到黑名单. 根据自己的喜好编辑标签.</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="3126"/>
        <source>Error: You cannot add the same address to your blacklist twice. Try renaming the existing one if you want.</source>
        <translation>错误: 您不能在同一地址添加到您的黑名单两次.  也许您可重命名现有之一.</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="3268"/>
        <source>Moved items to trash.</source>
        <translation>已经移动项目到回收站。</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="3212"/>
        <source>Undeleted item.</source>
        <translation>未删除的项目。</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="3236"/>
        <source>Save As...</source>
        <translation>另存为...</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="3245"/>
        <source>Write error.</source>
        <translation>写入失败。</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="3348"/>
        <source>No addresses selected.</source>
        <translation>没有选择地址。</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="3403"/>
        <source>If you delete the subscription, messages that you already received will become inaccessible. Maybe you can consider disabling the subscription instead. Disabled subscriptions will not receive new messages, but you can still view messages you already received.

Are you sure you want to delete the subscription?</source>
        <translation>如果删除订阅, 您已经收到的信息将无法访问. 也许您可以考虑禁用订阅.禁用订阅将不会收到新信息, 但您仍然可以看到您已经收到的信息. 

您确定要删除订阅?</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="3650"/>
        <source>If you delete the channel, messages that you already received will become inaccessible. Maybe you can consider disabling the channel instead. Disabled channels will not receive new messages, but you can still view messages you already received.

Are you sure you want to delete the channel?</source>
        <translation>如果您删除的频道, 您已经收到的信息将无法访问. 也许您可以考虑禁用频道. 禁用频道将不会收到新信息, 但您仍然可以看到您已经收到的信息. 

您确定要删除频道？</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="3780"/>
        <source>Do you really want to remove this avatar?</source>
        <translation>您真的想移除这个头像么？</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="3788"/>
        <source>You have already set an avatar for this address. Do you really want to overwrite it?</source>
        <translation>您已经为这个地址设置了头像了。您真的想移除么？</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="4206"/>
        <source>Start-on-login not yet supported on your OS.</source>
        <translation>登录时启动尚未支持您在使用的操作系统。</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="4199"/>
        <source>Minimize-to-tray not yet supported on your OS.</source>
        <translation>最小化到托盘尚未支持您的操作系统。</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="4202"/>
        <source>Tray notifications not yet supported on your OS.</source>
        <translation>托盘提醒尚未支持您所使用的操作系统。</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="4373"/>
        <source>Testing...</source>
        <translation>正在测试...</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="4237"/>
        <source>This is a chan address. You cannot use it as a pseudo-mailing list.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/address_dialogs.py" line="45"/>
        <source>The address should start with &apos;&apos;BM-&apos;&apos;</source>
        <translation>地址应该以&quot;BM-&quot;开始</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/address_dialogs.py" line="50"/>
        <source>The address is not typed or copied correctly (the checksum failed).</source>
        <translation>地址没有被正确的键入或复制（校验码校验失败）。</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/address_dialogs.py" line="56"/>
        <source>The version number of this address is higher than this software can support. Please upgrade Bitmessage.</source>
        <translation>这个地址的版本号大于此软件的最大支持。 请升级比特信。</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/address_dialogs.py" line="62"/>
        <source>The address contains invalid characters.</source>
        <translation>这个地址中包含无效字符。</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/address_dialogs.py" line="67"/>
        <source>Some data encoded in the address is too short.</source>
        <translation>在这个地址中编码的部分信息过少。</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/address_dialogs.py" line="72"/>
        <source>Some data encoded in the address is too long.</source>
        <translation>在这个地址中编码的部分信息过长。</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/address_dialogs.py" line="77"/>
        <source>Some data encoded in the address is malformed.</source>
        <translation>在地址编码的某些数据格式不正确.</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="4289"/>
        <source>Enter an address above.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/address_dialogs.py" line="188"/>
        <source>Address is an old type. We cannot display its past broadcasts.</source>
        <translation>地址没有近期的广播。我们无法显示之间的广播。</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/address_dialogs.py" line="203"/>
        <source>There are no recent broadcasts from this address to display.</source>
        <translation>没有可以显示的近期广播。</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="4374"/>
        <source>You are using TCP port {0}. (This can be changed in the settings).</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/bitmessageui.py" line="665"/>
        <source>Bitmessage</source>
        <translation>比特信</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/bitmessageui.py" line="666"/>
        <source>Identities</source>
        <translation>身份标识</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/bitmessageui.py" line="667"/>
        <source>New Identity</source>
        <translation>新身份标识</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/bitmessageui.py" line="730"/>
        <source>Search</source>
        <translation>搜索</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/bitmessageui.py" line="731"/>
        <source>All</source>
        <translation>全部</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/bitmessageui.py" line="738"/>
        <source>To</source>
        <translation>至</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/bitmessageui.py" line="740"/>
        <source>From</source>
        <translation>来自</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/bitmessageui.py" line="742"/>
        <source>Subject</source>
        <translation>标题</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/bitmessageui.py" line="735"/>
        <source>Message</source>
        <translation>消息</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/bitmessageui.py" line="744"/>
        <source>Received</source>
        <translation>接收时间</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/bitmessageui.py" line="683"/>
        <source>Messages</source>
        <translation>信息</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/bitmessageui.py" line="686"/>
        <source>Address book</source>
        <translation>地址簿</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/bitmessageui.py" line="688"/>
        <source>Address</source>
        <translation>地址</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/bitmessageui.py" line="689"/>
        <source>Add Contact</source>
        <translation>增加联系人</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/bitmessageui.py" line="690"/>
        <source>Fetch Namecoin ID</source>
        <translation>接收Namecoin ID</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/bitmessageui.py" line="697"/>
        <source>Subject:</source>
        <translation>标题：</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/bitmessageui.py" line="696"/>
        <source>From:</source>
        <translation>来自：</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/bitmessageui.py" line="693"/>
        <source>To:</source>
        <translation>至：</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/bitmessageui.py" line="695"/>
        <source>Send ordinary Message</source>
        <translation>发送普通信息</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/bitmessageui.py" line="699"/>
        <source>Send Message to your Subscribers</source>
        <translation>发送信息给您的订户</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/bitmessageui.py" line="700"/>
        <source>TTL:</source>
        <translation>TTL:</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/bitmessageui.py" line="727"/>
        <source>Subscriptions</source>
        <translation>订阅</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/bitmessageui.py" line="711"/>
        <source>Add new Subscription</source>
        <translation>添加新的订阅</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/bitmessageui.py" line="745"/>
        <source>Chans</source>
        <translation>频道</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/bitmessageui.py" line="729"/>
        <source>Add Chan</source>
        <translation>添加 Chans</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/bitmessageui.py" line="750"/>
        <source>File</source>
        <translation>文件</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/bitmessageui.py" line="761"/>
        <source>Settings</source>
        <translation>设置</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/bitmessageui.py" line="757"/>
        <source>Help</source>
        <translation>帮助</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/bitmessageui.py" line="753"/>
        <source>Import keys</source>
        <translation>导入密钥</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/bitmessageui.py" line="754"/>
        <source>Manage keys</source>
        <translation>管理密钥</translation>
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
        <translation>联系支持</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/bitmessageui.py" line="760"/>
        <source>About</source>
        <translation>关于</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/bitmessageui.py" line="762"/>
        <source>Regenerate deterministic addresses</source>
        <translation>重新生成静态地址</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/bitmessageui.py" line="763"/>
        <source>Delete all trashed messages</source>
        <translation>彻底删除全部回收站中的消息</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/bitmessageui.py" line="764"/>
        <source>Join / Create chan</source>
        <translation>加入或创建一个频道</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/foldertree.py" line="224"/>
        <source>All accounts</source>
        <translation>所有帐户</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/messageview.py" line="56"/>
        <source>Zoom level {0}%</source>
        <translation>缩放级别％1％</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/blacklist.py" line="91"/>
        <source>Error: You cannot add the same address to your list twice. Perhaps rename the existing one if you want.</source>
        <translation>错误: 您不能在同一地址添加到列表中两次. 也许您可重命名现有之一.</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/blacklist.py" line="112"/>
        <source>Add new entry</source>
        <translation>添加新条目</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="4334"/>
        <source>Display the {0} recent broadcast(s) from this address.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="1774"/>
        <source>New version of PyBitmessage is available: {0}. Download it from https://github.com/Bitmessage/PyBitmessage/releases/latest</source>
        <translation>PyBitmessage的新版本可用: {0}. 从https://github.com/Bitmessage/PyBitmessage/releases/latest下载</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="2817"/>
        <source>Waiting for PoW to finish... {0}%</source>
        <translation>等待PoW完成...{0}%</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="2826"/>
        <source>Shutting down Pybitmessage... {0}%</source>
        <translation>关闭Pybitmessage ...{0}%</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="2845"/>
        <source>Waiting for objects to be sent... {0}%</source>
        <translation>等待要发送对象...{0}%</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="2862"/>
        <source>Saving settings... {0}%</source>
        <translation>保存设置...{0}%</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="2875"/>
        <source>Shutting down core... {0}%</source>
        <translation>关闭核心...{0}%</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="2881"/>
        <source>Stopping notifications... {0}%</source>
        <translation>停止通知...{0}%</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="2885"/>
        <source>Shutdown imminent... {0}%</source>
        <translation>关闭即将来临...{0}%</translation>
    </message>
    <message numerus="yes">
        <location filename="../bitmessageqt/bitmessageui.py" line="706"/>
        <source>%n hour(s)</source>
        <translation><numerusform>%n 小时</numerusform></translation>
    </message>
    <message numerus="yes">
        <location filename="../bitmessageqt/__init__.py" line="825"/>
        <source>%n day(s)</source>
        <translation><numerusform>%n 天</numerusform></translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="2783"/>
        <source>Shutting down PyBitmessage... {0}%</source>
        <translation>关闭PyBitmessage...{0}%</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="1144"/>
        <source>Sent</source>
        <translation>发送</translation>
    </message>
    <message>
        <location filename="../class_addressGenerator.py" line="115"/>
        <source>Generating one new address</source>
        <translation>生成一个新的地址</translation>
    </message>
    <message>
        <location filename="../class_addressGenerator.py" line="193"/>
        <source>Done generating address. Doing work necessary to broadcast it...</source>
        <translation>完成生成地址. 做必要的工作, 以播放它...</translation>
    </message>
    <message>
        <location filename="../class_addressGenerator.py" line="219"/>
        <source>Generating {0} new addresses.</source>
        <translation>生成{0}个新地址.</translation>
    </message>
    <message>
        <location filename="../class_addressGenerator.py" line="323"/>
        <source>{0} is already in &apos;Your Identities&apos;. Not adding it again.</source>
        <translation>{0}已经在&apos;您的身份&apos;. 不必重新添加.</translation>
    </message>
    <message>
        <location filename="../class_addressGenerator.py" line="377"/>
        <source>Done generating address</source>
        <translation>完成生成地址</translation>
    </message>
    <message>
        <location filename="../class_outgoingSynSender.py" line="228"/>
        <source>SOCKS5 Authentication problem: {0}</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../class_sqlThread.py" line="481"/>
        <source>Disk full</source>
        <translation>磁盘已满</translation>
    </message>
    <message>
        <location filename="../class_sqlThread.py" line="481"/>
        <source>Alert: Your disk or data storage volume is full. Bitmessage will now exit.</source>
        <translation>警告: 您的磁盘或数据存储量已满. 比特信将立即退出.</translation>
    </message>
    <message>
        <location filename="../class_singleWorker.py" line="1058"/>
        <source>Error! Could not find sender address (your address) in the keys.dat file.</source>
        <translation>错误! 找不到在keys.dat 件发件人的地址 ( 您的地址).</translation>
    </message>
    <message>
        <location filename="../class_singleWorker.py" line="579"/>
        <source>Doing work necessary to send broadcast...</source>
        <translation>做必要的工作, 以发送广播...</translation>
    </message>
    <message>
        <location filename="../class_singleWorker.py" line="612"/>
        <source>Broadcast sent on {0}</source>
        <translation>广播发送{0}</translation>
    </message>
    <message>
        <location filename="../class_singleWorker.py" line="722"/>
        <source>Encryption key was requested earlier.</source>
        <translation>加密密钥已请求.</translation>
    </message>
    <message>
        <location filename="../class_singleWorker.py" line="794"/>
        <source>Sending a request for the recipient&apos;s encryption key.</source>
        <translation>发送收件人的加密密钥的请求.</translation>
    </message>
    <message>
        <location filename="../class_singleWorker.py" line="819"/>
        <source>Looking up the receiver&apos;s public key</source>
        <translation>展望接收方的公钥</translation>
    </message>
    <message>
        <location filename="../class_singleWorker.py" line="877"/>
        <source>Problem: Destination is a mobile device who requests that the destination be included in the message but this is disallowed in your settings.  {0}</source>
        <translation>问题：对方是移动设备，并且对方的地址包含在此消息中，但是您的设置禁止了。 {0}</translation>
    </message>
    <message>
        <location filename="../class_singleWorker.py" line="908"/>
        <source>Doing work necessary to send message.
There is no required difficulty for version 2 addresses like this.</source>
        <translation>做必要的工作, 以发送信息. 
这样第2版的地址没有难度.</translation>
    </message>
    <message>
        <location filename="../class_singleWorker.py" line="944"/>
        <source>Doing work necessary to send message.
Receiver&apos;s required difficulty: {0} and {1}</source>
        <translation>做必要的工作, 以发送短信.
接收者的要求难度: {0}与{1}</translation>
    </message>
    <message>
        <location filename="../class_singleWorker.py" line="986"/>
        <source>Problem: The work demanded by the recipient ({0} and {1}) is more difficult than you are willing to do. {2}</source>
        <translation>问题: 由接收者({0}{1})要求的工作量比您愿意做的工作量來得更困难. {2}</translation>
    </message>
    <message>
        <location filename="../class_singleWorker.py" line="1010"/>
        <source>Problem: You are trying to send a message to yourself or a chan but your encryption key could not be found in the keys.dat file. Could not encrypt message. {0}</source>
        <translation>问题: 您正在尝试将信息发送给自己或频道, 但您的加密密钥无法在keys.dat文件中找到. 无法加密信息. {0}</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="1045"/>
        <source>Doing work necessary to send message.</source>
        <translation>做必要的工作, 以发送信息.</translation>
    </message>
    <message>
        <location filename="../class_singleWorker.py" line="1214"/>
        <source>Message sent. Waiting for acknowledgement. Sent on {0}</source>
        <translation>信息发送. 等待确认. 已发送{0}</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="1033"/>
        <source>Doing work necessary to request encryption key.</source>
        <translation>做必要的工作以要求加密密钥.</translation>
    </message>
    <message>
        <location filename="../class_singleWorker.py" line="1376"/>
        <source>Broadcasting the public key request. This program will auto-retry if they are offline.</source>
        <translation>广播公钥请求. 这个程序将自动重试, 如果他们处于离线状态.</translation>
    </message>
    <message>
        <location filename="../class_singleWorker.py" line="1383"/>
        <source>Sending public key request. Waiting for reply. Requested at {0}</source>
        <translation>发送公钥的请求. 等待回复. 请求在{0}</translation>
    </message>
    <message>
        <location filename="../upnp.py" line="267"/>
        <source>UPnP port mapping established on port {0}</source>
        <translation>UPnP端口映射建立在端口{0}</translation>
    </message>
    <message>
        <location filename="../upnp.py" line="293"/>
        <source>UPnP port mapping removed</source>
        <translation>UPnP端口映射被删除</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="244"/>
        <source>Mark all messages as read</source>
        <translation>标记全部信息为已读</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="2636"/>
        <source>Are you sure you would like to mark all messages read?</source>
        <translation>确定将所有信息标记为已读吗？</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="1054"/>
        <source>Doing work necessary to send broadcast.</source>
        <translation>持续进行必要的工作，以发送广播。</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="2718"/>
        <source>Proof of work pending</source>
        <translation>待传输内容的校验</translation>
    </message>
    <message numerus="yes">
        <location filename="../bitmessageqt/__init__.py" line="2718"/>
        <source>%n object(s) pending proof of work</source>
        <translation><numerusform>%n 待传输内容校验任务</numerusform></translation>
    </message>
    <message numerus="yes">
        <location filename="../bitmessageqt/__init__.py" line="2718"/>
        <source>%n object(s) waiting to be distributed</source>
        <translation><numerusform>%n 任务等待分配</numerusform></translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="2718"/>
        <source>Wait until these tasks finish?</source>
        <translation>等待所有任务执行完？</translation>
    </message>
    <message>
        <location filename="../namecoin.py" line="119"/>
        <source>The name {0} was not found.</source>
        <translation>名字{0}未找到。</translation>
    </message>
    <message>
        <location filename="../namecoin.py" line="130"/>
        <source>The namecoin query failed ({0})</source>
        <translation>域名币查询失败({0})</translation>
    </message>
    <message>
        <location filename="../namecoin.py" line="134"/>
        <source>Unknown namecoin interface type: {0}</source>
        <translation>未知的 Namecoin 界面类型： {0}</translation>
    </message>
    <message>
        <location filename="../namecoin.py" line="139"/>
        <source>The namecoin query failed.</source>
        <translation>域名币查询失败。</translation>
    </message>
    <message>
        <location filename="../namecoin.py" line="156"/>
        <source>The name {0} has no associated Bitmessage address.</source>
        <translation> 名字{0}没有关联比特信地址。</translation>
    </message>
    <message>
        <location filename="../namecoin.py" line="185"/>
        <source>Success!  Namecoind version {0} running.</source>
        <translation>成功！域名币系统{0}运行中。</translation>
    </message>
    <message>
        <location filename="../namecoin.py" line="196"/>
        <source>Success!  NMControll is up and running.</source>
        <translation>成功！域名币控制上线运行！</translation>
    </message>
    <message>
        <location filename="../namecoin.py" line="199"/>
        <source>Couldn&apos;t understand NMControl.</source>
        <translation>不能理解 NMControl。</translation>
    </message>
    <message>
        <location filename="../namecoin.py" line="209"/>
        <source>The connection to namecoin failed.</source>
        <translation>连接到 Namecoin 失败。</translation>
    </message>
    <message>
        <location filename="../proofofwork.py" line="132"/>
        <source>Your GPU(s) did not calculate correctly, disabling OpenCL. Please report to the developers.</source>
        <translation>您的GPU不能够正确计算，正在关闭OpenGL。请报告给开发者。</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="3828"/>
        <source>Set notification sound...</source>
        <translation>设置通知提示音...</translation>
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
欢迎使用简便安全的比特信
*发送信息给其他人
*像推特那样发送广播信息
*在频道里和其他人讨论</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="816"/>
        <source>not recommended for chans</source>
        <translation>频道内不建议的内容</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="1209"/>
        <source>Quiet Mode</source>
        <translation>静默模式</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="1601"/>
        <source>Problems connecting? Try enabling UPnP in the Network Settings</source>
        <translation>连接问题？请尝试在网络设置里打开UPnP</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="1928"/>
        <source>You are trying to send an email instead of a bitmessage. This requires registering with a gateway. Attempt to register?</source>
        <translation>您将要尝试经由 Bitmessage 发送一封电子邮件。该操作需要在一个网关上注册。尝试注册？</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="1960"/>
        <source>Error: Bitmessage addresses start with BM-   Please check the recipient address {0}</source>
        <translation>错误：Bitmessage地址是以BM-开头的，请检查收信地址{0}.</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="1966"/>
        <source>Error: The recipient address {0} is not typed or copied correctly. Please check it.</source>
        <translation>错误：收信地址{0}未填写或复制错误。请检查。</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="1972"/>
        <source>Error: The recipient address {0} contains invalid characters. Please check it.</source>
        <translation>错误：收信地址{0}还有非法字符。请检查。</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="1978"/>
        <source>Error: The version of the recipient address {0} is too high. Either you need to upgrade your Bitmessage software or your acquaintance is being clever.</source>
        <translation>错误：收信地址 {0} 版本太高。要么您需要更新您的软件，要么对方需要降级 。</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="1986"/>
        <source>Error: Some data encoded in the recipient address {0} is too short. There might be something wrong with the software of your acquaintance.</source>
        <translation>错误：收信地址{0}编码数据太短。可能对方使用的软件有问题。</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="1994"/>
        <source>Error: Some data encoded in the recipient address {0} is too long. There might be something wrong with the software of your acquaintance.</source>
        <translation>错误：</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="2002"/>
        <source>Error: Some data encoded in the recipient address {0} is malformed. There might be something wrong with the software of your acquaintance.</source>
        <translation>错误：收信地址{0}编码数据太长。可能对方使用的软件有问题。</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="2010"/>
        <source>Error: Something is wrong with the recipient address {0}.</source>
        <translation>错误：收信地址{0}有问题。</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="2159"/>
        <source>Error: {0}</source>
        <translation>错误：{0}</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="2276"/>
        <source>From {0}</source>
        <translation>来自 {0}</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="2680"/>
        <source>Disconnecting</source>
        <translation>正在断开连接</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="2680"/>
        <source>Connecting</source>
        <translation>已连接</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="2680"/>
        <source>Bitmessage will now drop all connections. Are you sure?</source>
        <translation>比特信将要丢弃所有连接，您确定吗？</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="2680"/>
        <source>Bitmessage will now start connecting to network. Are you sure?</source>
        <translation>比特信将会开始连接至网络中，您确定吗？</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="2742"/>
        <source>Synchronisation pending</source>
        <translation>待同步</translation>
    </message>
    <message numerus="yes">
        <location filename="../bitmessageqt/__init__.py" line="2742"/>
        <source>Bitmessage hasn&apos;t synchronised with the network, %n object(s) to be downloaded. If you quit now, it may cause delivery delays. Wait until the synchronisation finishes?</source>
        <translation><numerusform>Bitmessage还没有与网络同步，%n 件任务需要下载。如果您现在退出软件，可能会造成传输延时。是否等同步完成？</numerusform></translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="2763"/>
        <source>Not connected</source>
        <translation>未连接成功。</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="2763"/>
        <source>Bitmessage isn&apos;t connected to the network. If you quit now, it may cause delivery delays. Wait until connected and the synchronisation finishes?</source>
        <translation>Bitmessage未连接到网络。如果现在退出软件，可能会造成传输延时。是否等待同步完成？</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="2787"/>
        <source>Waiting for network connection...</source>
        <translation>等待网络连接……</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="2799"/>
        <source>Waiting for finishing synchronisation...</source>
        <translation>等待同步完成……</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="3846"/>
        <source>You have already set a notification sound for this address book entry. Do you really want to overwrite it?</source>
        <translation>您已经为该地址簿条目设置了通知提示音。您想要覆盖它吗？</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/__init__.py" line="4067"/>
        <source>Error occurred: could not load message from disk.</source>
        <translation>发生错误：无法从磁盘读取消息。</translation>
    </message>
    <message numerus="yes">
        <location filename="../bitmessageqt/address_dialogs.py" line="211"/>
        <source>Display the %n recent broadcast(s) from this address.</source>
        <translation><numerusform>显示从此地址最近 %n 的广播。</numerusform></translation>
    </message>
    <message>
        <location filename="../bitmessageqt/bitmessageui.py" line="658"/>
        <source>Go online</source>
        <translation>上线</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/bitmessageui.py" line="658"/>
        <source>Go offline</source>
        <translation>下线</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/bitmessageui.py" line="707"/>
        <source>Clear</source>
        <translation>清除</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/foldertree.py" line="16"/>
        <source>inbox</source>
        <translation>收件箱</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/foldertree.py" line="17"/>
        <source>new</source>
        <translation>新信息</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/foldertree.py" line="18"/>
        <source>sent</source>
        <translation>已发送</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/foldertree.py" line="19"/>
        <source>trash</source>
        <translation>回收站</translation>
    </message>
</context>
<context>
    <name>MessageView</name>
    <message>
        <location filename="../bitmessageqt/messageview.py" line="84"/>
        <source>Follow external link</source>
        <translation>查看外部链接</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/messageview.py" line="84"/>
        <source>The link &quot;{0}&quot; will open in a browser. It may be a security risk, it could de-anonymise you or download malicious data. Are you sure?</source>
        <translation>此链接“{0}”将在浏览器中打开。可能会有安全风险，可能会暴露您或下载恶意数据。确定吗？</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/messageview.py" line="134"/>
        <source>HTML detected, click here to display</source>
        <translation>检测到HTML，单击此处来显示内容。</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/messageview.py" line="146"/>
        <source>Click here to disable HTML</source>
        <translation>单击此处以禁止HTML。</translation>
    </message>
</context>
<context>
    <name>MsgDecode</name>
    <message>
        <location filename="../helper_msgcoding.py" line="84"/>
        <source>The message has an unknown encoding.
Perhaps you should upgrade Bitmessage.</source>
        <translation>这些消息使用了未知编码方式。
您可能需要更新Bitmessage软件。</translation>
    </message>
    <message>
        <location filename="../helper_msgcoding.py" line="88"/>
        <source>Unknown encoding</source>
        <translation>未知编码</translation>
    </message>
</context>
<context>
    <name>NewAddressDialog</name>
    <message>
        <location filename="../bitmessageqt/newaddressdialog.ui" line="14"/>
        <source>Create new Address</source>
        <translation>创建新地址</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/newaddressdialog.ui" line="23"/>
        <source>Here you may generate as many addresses as you like. Indeed, creating and abandoning addresses is encouraged. You may generate addresses by using either random numbers or by using a passphrase. If you use a passphrase, the address is called a &quot;deterministic&quot; address.
The &apos;Random Number&apos; option is selected by default but deterministic addresses have several pros and cons:</source>
        <translation>在这里，您想创建多少地址就创建多少。诚然，创建和丢弃地址受到鼓励。您既可以使用随机数来创建地址，也可以使用密钥。如果您使用密钥的话，生成的地址叫“静态地址”。随机数选项默认为选择，不过相比而言静态地址既有缺点也有优点：</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/newaddressdialog.ui" line="37"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;&lt;span style=&quot; font-weight:600;&quot;&gt;Pros:&lt;br/&gt;&lt;/span&gt;You can recreate your addresses on any computer from memory. &lt;br/&gt;You need-not worry about backing up your keys.dat file as long as you can remember your passphrase. &lt;br/&gt;&lt;span style=&quot; font-weight:600;&quot;&gt;Cons:&lt;br/&gt;&lt;/span&gt;You must remember (or write down) your passphrase if you expect to be able to recreate your keys if they are lost. &lt;br/&gt;You must remember the address version number and the stream number along with your passphrase. &lt;br/&gt;If you choose a weak passphrase and someone on the Internet can brute-force it, they can read your messages and send messages as you.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;&lt;span style=&quot; font-weight:600;&quot;&gt;优点:&lt;br/&gt;&lt;/span&gt;您可以通过记忆在任何电脑再次得到您的地址. &lt;br/&gt;您不需要注意备份您的 keys.dat 只要您能记住您的密钥。 &lt;br/&gt;&lt;span style=&quot; font-weight:600;&quot;&gt;缺点:&lt;br/&gt;&lt;/span&gt;您若要再次得到您的地址，您必须牢记（或写下您的密钥）。 &lt;br/&gt;您必须牢记密钥的同时也牢记地址版本号和the stream number . &lt;br/&gt;如果您选择了一个弱的密钥的话，一些在互联网我那个的人可能有机会暴力破解, 他们将可以阅读您的消息并且以您的身份发送消息.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/newaddressdialog.ui" line="66"/>
        <source>Use a random number generator to make an address</source>
        <translation>使用随机数生成地址</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/newaddressdialog.ui" line="79"/>
        <source>Use a passphrase to make addresses</source>
        <translation>使用密钥生成地址</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/newaddressdialog.ui" line="89"/>
        <source>Spend several minutes of extra computing time to make the address(es) 1 or 2 characters shorter</source>
        <translation>花费数分钟的计算使地址短1-2个字母</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/newaddressdialog.ui" line="96"/>
        <source>Make deterministic addresses</source>
        <translation>创建静态地址</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/newaddressdialog.ui" line="102"/>
        <source>Address version number: 4</source>
        <translation>地址版本号:4</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/newaddressdialog.ui" line="109"/>
        <source>In addition to your passphrase, you must remember these numbers:</source>
        <translation>在记住您的密钥的同时，您还需要记住以下数字：</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/newaddressdialog.ui" line="126"/>
        <source>Passphrase</source>
        <translation>密钥</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/newaddressdialog.ui" line="133"/>
        <source>Number of addresses to make based on your passphrase:</source>
        <translation>使用该密钥生成的地址数:</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/newaddressdialog.ui" line="153"/>
        <source>Stream number: 1</source>
        <translation>节点流序号：1</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/newaddressdialog.ui" line="173"/>
        <source>Retype passphrase</source>
        <translation>再次输入密钥</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/newaddressdialog.ui" line="200"/>
        <source>Randomly generate address</source>
        <translation>随机生成地址</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/newaddressdialog.ui" line="206"/>
        <source>Label (not shown to anyone except you)</source>
        <translation>标签(只有您看的到)</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/newaddressdialog.ui" line="216"/>
        <source>Use the most available stream</source>
        <translation>使用最可用的节点流</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/newaddressdialog.ui" line="226"/>
        <source> (best if this is the first of many addresses you will create)</source>
        <translation>如果这是您创建的数个地址中的第一个时最佳</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/newaddressdialog.ui" line="236"/>
        <source>Use the same stream as an existing address</source>
        <translation>使用和如下地址一样的节点流</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/newaddressdialog.ui" line="246"/>
        <source>(saves you some bandwidth and processing power)</source>
        <translation>（节省您的带宽和处理能力）</translation>
    </message>
</context>
<context>
    <name>NewSubscriptionDialog</name>
    <message>
        <location filename="../bitmessageqt/newsubscriptiondialog.ui" line="20"/>
        <source>Add new entry</source>
        <translation>添加新条目</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/newsubscriptiondialog.ui" line="26"/>
        <source>Label</source>
        <translation>标签</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/newsubscriptiondialog.ui" line="36"/>
        <source>Address</source>
        <translation>地址</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/newsubscriptiondialog.ui" line="59"/>
        <source>Enter an address above.</source>
        <translation>请在上方键入地址。</translation>
    </message>
</context>
<context>
    <name>SpecialAddressBehaviorDialog</name>
    <message>
        <location filename="../bitmessageqt/specialaddressbehavior.ui" line="14"/>
        <source>Special Address Behavior</source>
        <translation>特别的地址行为</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/specialaddressbehavior.ui" line="20"/>
        <source>Behave as a normal address</source>
        <translation>作为普通地址</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/specialaddressbehavior.ui" line="30"/>
        <source>Behave as a pseudo-mailing-list address</source>
        <translation>作为伪邮件列表地址</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/specialaddressbehavior.ui" line="37"/>
        <source>Mail received to a pseudo-mailing-list address will be automatically broadcast to subscribers (and thus will be public).</source>
        <translation>伪邮件列表收到消息时会自动将其公开的广播给订阅者。</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/specialaddressbehavior.ui" line="47"/>
        <source>Name of the pseudo-mailing-list:</source>
        <translation>伪邮件列表名称：</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/address_dialogs.py" line="249"/>
        <source>This is a chan address. You cannot use it as a pseudo-mailing list.</source>
        <translation>这是一个频道地址，您无法把它作为伪邮件列表。</translation>
    </message>
</context>
<context>
    <name>aboutDialog</name>
    <message>
        <location filename="../bitmessageqt/about.ui" line="14"/>
        <source>About</source>
        <translation>关于</translation>
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
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;以 MIT/X11 软件授权发布; 详情参见 &lt;a href=&quot;http://www.opensource.org/licenses/mit-license.php&quot;&gt;&lt;span style=&quot; text-decoration: underline; color:#0000ff;&quot;&gt;http://www.opensource.org/licenses/mit-license.php&lt;/span&gt;&lt;/a&gt;&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/about.ui" line="59"/>
        <source>This is Beta software.</source>
        <translation>本软件处于Beta阶段。</translation>
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
        <translation>使用黑名单 (允许所有传入的信息除了那些在黑名单)</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/blacklist.ui" line="27"/>
        <source>Use a Whitelist (Block all incoming messages except those on the Whitelist)</source>
        <translation>使用白名单 (阻止所有传入的消息除了那些在白名单)</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/blacklist.ui" line="34"/>
        <source>Add new entry</source>
        <translation>添加新条目</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/blacklist.ui" line="85"/>
        <source>Name or Label</source>
        <translation>名称或标签</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/blacklist.ui" line="90"/>
        <source>Address</source>
        <translation>地址</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/blacklist.py" line="151"/>
        <source>Blacklist</source>
        <translation>黑名单</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/blacklist.py" line="153"/>
        <source>Whitelist</source>
        <translation>白名单</translation>
    </message>
</context>
<context>
    <name>connectDialog</name>
    <message>
        <location filename="../bitmessageqt/connect.ui" line="14"/>
        <source>Bitmessage</source>
        <translation>比特信</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/connect.ui" line="20"/>
        <source>Bitmessage won&apos;t connect to anyone until you let it. </source>
        <translation>除非您允许，比特信不会连接到任何人。</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/connect.ui" line="27"/>
        <source>Connect now</source>
        <translation>现在连接</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/connect.ui" line="37"/>
        <source>Let me configure special network settings first</source>
        <translation>请先让我进行特别的网络设置</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/connect.ui" line="44"/>
        <source>Work offline</source>
        <translation>离线模式下工作</translation>
    </message>
</context>
<context>
    <name>helpDialog</name>
    <message>
        <location filename="../bitmessageqt/help.ui" line="14"/>
        <source>Help</source>
        <translation>帮助</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/help.ui" line="20"/>
        <source>&lt;a href=&quot;https://bitmessage.org/wiki/PyBitmessage_Help&quot;&gt;https://bitmessage.org/wiki/PyBitmessage_Help&lt;/a&gt;</source>
        <translation>&lt;a href=&quot;https://bitmessage.org/wiki/PyBitmessage_Help&quot;&gt;https://bitmessage.org/wiki/PyBitmessage_Help&lt;/a&gt;</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/help.ui" line="30"/>
        <source>As Bitmessage is a collaborative project, help can be found online in the Bitmessage Wiki:</source>
        <translation>鉴于比特信是一个共同完成的项目，您可以在比特信的Wiki上了解如何帮助比特信：</translation>
    </message>
</context>
<context>
    <name>iconGlossaryDialog</name>
    <message>
        <location filename="../bitmessageqt/iconglossary.ui" line="20"/>
        <source>Icon Glossary</source>
        <translation>图标含义</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/iconglossary.ui" line="36"/>
        <source>You have no connections with other peers. </source>
        <translation>您没有和其他节点的连接.</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/iconglossary.ui" line="53"/>
        <source>You have made at least one connection to a peer using an outgoing connection but you have not yet received any incoming connections. Your firewall or home router probably isn&apos;t configured to forward incoming TCP connections to your computer. Bitmessage will work just fine but it would help the Bitmessage network if you allowed for incoming connections and will help you be a better-connected node.</source>
        <translation>您有至少一个到其他节点的出站连接，但是尚未收到入站连接。您的防火墙或路由器可能尚未设置转发入站TCP连接到您的电脑。比特信将正常运行，不过如果您允许入站连接的话将帮助比特信网络并成为一个通信状态更好的节点。</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/iconglossary.py" line="85"/>
        <source>You are using TCP port ?. (This can be changed in the settings).</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/iconglossary.ui" line="96"/>
        <source>You do have connections with other peers and your firewall is correctly configured.</source>
        <translation>您有和其他节点的连接且您的防火墙已经正确配置。</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/dialogs.py" line="64"/>
        <source>You are using TCP port {0}. (This can be changed in the settings).</source>
        <translation>您正在使用TCP端口 {0} 。（可以在设置中修改）。</translation>
    </message>
</context>
<context>
    <name>networkstatus</name>
    <message>
        <location filename="../bitmessageqt/networkstatus.ui" line="39"/>
        <source>Total connections:</source>
        <translation>总连接:</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/networkstatus.ui" line="185"/>
        <source>Since startup:</source>
        <translation>自启动:</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/networkstatus.ui" line="201"/>
        <source>Processed 0 person-to-person messages.</source>
        <translation>处理0人对人的信息.</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/networkstatus.ui" line="230"/>
        <source>Processed 0 public keys.</source>
        <translation>处理0公钥。</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/networkstatus.ui" line="217"/>
        <source>Processed 0 broadcasts.</source>
        <translation>处理0广播.</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/networkstatus.ui" line="282"/>
        <source>Inventory lookups per second: 0</source>
        <translation>每秒库存查询: 0</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/networkstatus.ui" line="243"/>
        <source>Objects to be synced:</source>
        <translation>对象	已同步:</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/networkstatus.ui" line="152"/>
        <source>Stream #</source>
        <translation>数据流 ＃</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/networkstatus.ui" line="116"/>
        <source>Connections</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/networkstatus.py" line="242"/>
        <source>Since startup on {0}</source>
        <translation>自从{0}启动</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/networkstatus.py" line="140"/>
        <source>Down: {0}/s  Total: {1}</source>
        <translation>下: {0}/秒 总计: {1}</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/networkstatus.py" line="146"/>
        <source>Up: {0}/s  Total: {1}</source>
        <translation>上: {0}/秒 总计: {1}</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/networkstatus.py" line="219"/>
        <source>Total Connections: {0}</source>
        <translation>总的连接数: {0}</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/networkstatus.py" line="234"/>
        <source>Inventory lookups per second: {0}</source>
        <translation>每秒库存查询: {0}</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/networkstatus.ui" line="256"/>
        <source>Up: 0 kB/s</source>
        <translation>上载: 0 kB /秒</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/networkstatus.ui" line="269"/>
        <source>Down: 0 kB/s</source>
        <translation>下载: 0 kB /秒</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/bitmessageui.py" line="749"/>
        <source>Network Status</source>
        <translation>网络状态</translation>
    </message>
    <message numerus="yes">
        <location filename="../bitmessageqt/networkstatus.py" line="70"/>
        <source>byte(s)</source>
        <translation><numerusform>字节</numerusform></translation>
    </message>
    <message numerus="yes">
        <location filename="../bitmessageqt/networkstatus.py" line="93"/>
        <source>Object(s) to be synced: %n</source>
        <translation><numerusform>要同步的对象: %n</numerusform></translation>
    </message>
    <message numerus="yes">
        <location filename="../bitmessageqt/networkstatus.py" line="105"/>
        <source>Processed %n person-to-person message(s).</source>
        <translation><numerusform>处理%n人对人的信息.</numerusform></translation>
    </message>
    <message numerus="yes">
        <location filename="../bitmessageqt/networkstatus.py" line="116"/>
        <source>Processed %n broadcast message(s).</source>
        <translation><numerusform>处理%n广播信息.</numerusform></translation>
    </message>
    <message numerus="yes">
        <location filename="../bitmessageqt/networkstatus.py" line="127"/>
        <source>Processed %n public key(s).</source>
        <translation><numerusform>处理%n公钥.</numerusform></translation>
    </message>
    <message>
        <location filename="../bitmessageqt/networkstatus.ui" line="120"/>
        <source>Peer</source>
        <translation>节点</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/networkstatus.ui" line="123"/>
        <source>IP address or hostname</source>
        <translation>IP地址或主机名</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/networkstatus.ui" line="128"/>
        <source>Rating</source>
        <translation>评分</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/networkstatus.ui" line="131"/>
        <source>PyBitmessage tracks the success rate of connection attempts to individual nodes. The rating ranges from -1 to 1 and affects the likelihood of selecting the node in the future</source>
        <translation>PyBitmessage 跟踪连接尝试到各个节点的成功率。评分范围从 -1 到 1 ，这会影响到未来选择节点的可能性。</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/networkstatus.ui" line="136"/>
        <source>User agent</source>
        <translation>用户代理</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/networkstatus.ui" line="139"/>
        <source>Peer&apos;s self-reported software</source>
        <translation>节点自我报告的软件</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/networkstatus.ui" line="144"/>
        <source>TLS</source>
        <translation>TLS</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/networkstatus.ui" line="147"/>
        <source>Connection encryption</source>
        <translation>连接加密</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/networkstatus.ui" line="155"/>
        <source>List of streams negotiated between you and the peer</source>
        <translation>您和节点之间已协商的流列表</translation>
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
        <translation>创建或加入一个频道</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/newchandialog.ui" line="41"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;A chan exists when a group of people share the same decryption keys. The keys and bitmessage address used by a chan are generated from a human-friendly word or phrase (the chan name). To send a message to everyone in the chan, send a message to the chan address.&lt;/p&gt;&lt;p&gt;Chans are experimental and completely unmoderatable.&lt;/p&gt;&lt;p&gt;Enter a name for your chan. If you choose a sufficiently complex chan name (like a strong and unique passphrase) and none of your friends share it publicly, then the chan will be secure and private. However if you and someone else both create a chan with the same chan name, the same chan will be shared.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;当一群人共享同一样的加密钥匙时会创建一个频道。使用一个词组来命名密钥和Bitmessage地址。发送信息到频道地址就可以发送消息给每个成员。&lt;/p&gt;&lt;p&gt;频道功能为实验性功能，也不稳定。&lt;/p&gt;&lt;p&gt;为您的频道命名。如果您选择使用一个十分复杂的名字命令并且您的朋友不会公开它，那这个频道就是安全和私密的。然而如果您和其他人都创建了一个同样命名的频道，那么相同名字的频道将会被共享。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/newchandialog.ui" line="56"/>
        <source>Chan passphrase/name:</source>
        <translation>通道密码／名称：</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/newchandialog.ui" line="63"/>
        <source>Optional, for advanced usage</source>
        <translation>可选，适用于高级应用</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/newchandialog.ui" line="76"/>
        <source>Chan address</source>
        <translation>频道地址</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/newchandialog.ui" line="101"/>
        <source>Please input chan name/passphrase:</source>
        <translation>请输入频道名字：</translation>
    </message>
</context>
<context>
    <name>newchandialog</name>
    <message>
        <location filename="../bitmessageqt/newchandialog.py" line="68"/>
        <source>Successfully created / joined chan {0}</source>
        <translation>成功创建或加入频道{0}</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/newchandialog.py" line="75"/>
        <source>Chan creation / joining failed</source>
        <translation>频道创建或加入失败</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/newchandialog.py" line="82"/>
        <source>Chan creation / joining cancelled</source>
        <translation>频道创建或加入已取消</translation>
    </message>
</context>
<context>
    <name>proofofwork</name>
    <message>
        <location filename="../proofofwork.py" line="196"/>
        <source>C PoW module built successfully.</source>
        <translation>C PoW模块编译成功。</translation>
    </message>
    <message>
        <location filename="../proofofwork.py" line="199"/>
        <source>Failed to build C PoW module. Please build it manually.</source>
        <translation>无法编译C PoW模块。请手动编译。</translation>
    </message>
    <message>
        <location filename="../proofofwork.py" line="211"/>
        <source>C PoW module unavailable. Please build it.</source>
        <translation>C PoW模块不可用。请编译它。</translation>
    </message>
</context>
<context>
    <name>regenerateAddressesDialog</name>
    <message>
        <location filename="../bitmessageqt/regenerateaddresses.ui" line="14"/>
        <source>Regenerate Existing Addresses</source>
        <translation>重新生成已经存在的地址</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/regenerateaddresses.ui" line="30"/>
        <source>Regenerate existing addresses</source>
        <translation>重新生成已经存在的地址</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/regenerateaddresses.ui" line="36"/>
        <source>Passphrase</source>
        <translation>密钥</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/regenerateaddresses.ui" line="53"/>
        <source>Number of addresses to make based on your passphrase:</source>
        <translation>使用该密钥生成的地址数:</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/regenerateaddresses.ui" line="89"/>
        <source>Address version number:</source>
        <translation>地址版本号：</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/regenerateaddresses.ui" line="131"/>
        <source>Stream number:</source>
        <translation>节点流序号：</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/regenerateaddresses.ui" line="153"/>
        <source>1</source>
        <translation>1</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/regenerateaddresses.ui" line="173"/>
        <source>Spend several minutes of extra computing time to make the address(es) 1 or 2 characters shorter</source>
        <translation>花费数分钟的计算使地址短1-2个字母</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/regenerateaddresses.ui" line="180"/>
        <source>You must check (or not check) this box just like you did (or didn&apos;t) when you made your addresses the first time.</source>
        <translation>这个选项需要和您第一次生成的时候相同。</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/regenerateaddresses.ui" line="190"/>
        <source>If you have previously made deterministic addresses but lost them due to an accident (like hard drive failure), you can regenerate them here. If you used the random number generator to make your addresses then this form will be of no use to you.</source>
        <translation>如果您之前创建了静态地址，但是因为一些意外失去了它们（比如硬盘坏了），您可以在这里将他们再次生成。如果您使用随机数来生成的地址的话，那么这个表格对您没有帮助。</translation>
    </message>
</context>
<context>
    <name>settingsDialog</name>
    <message>
        <location filename="../bitmessageqt/settings.py" line="483"/>
        <source>Settings</source>
        <translation>设置</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/settings.py" line="484"/>
        <source>Start Bitmessage on user login</source>
        <translation>在用户登录时启动比特信</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/settings.py" line="485"/>
        <source>Tray</source>
        <translation>任务栏</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/settings.py" line="486"/>
        <source>Start Bitmessage in the tray (don&apos;t show main window)</source>
        <translation>启动比特信到托盘 （不要显示主窗口）</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/settings.py" line="491"/>
        <source>Minimize to tray</source>
        <translation>最小化到托盘</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/settings.py" line="492"/>
        <source>Close to tray</source>
        <translation>关闭任务栏</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/settings.py" line="495"/>
        <source>Show notification when message received</source>
        <translation>在收到消息时提示</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/settings.py" line="500"/>
        <source>Run in Portable Mode</source>
        <translation>以便携方式运行</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/settings.py" line="501"/>
        <source>In Portable Mode, messages and config files are stored in the same directory as the program rather than the normal application-data folder. This makes it convenient to run Bitmessage from a USB thumb drive.</source>
        <translation>在便携模式下， 消息和配置文件和程序保存在同一个目录而不是通常的程序数据文件夹。 这使在U盘中允许比特信很方便。</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/settings.py" line="508"/>
        <source>Willingly include unencrypted destination address when sending to a mobile device</source>
        <translation>愿意在发送到手机时使用不加密的目标地址</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/settings.py" line="513"/>
        <source>Use Identicons</source>
        <translation>用户身份</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/settings.py" line="514"/>
        <source>Reply below Quote</source>
        <translation>回复	引述如下</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/settings.py" line="515"/>
        <source>Interface Language</source>
        <translation>界面语言</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/settings.py" line="516"/>
        <source>System Settings</source>
        <comment>system</comment>
        <translation>系统设置</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/settings.py" line="517"/>
        <source>User Interface</source>
        <translation>用户界面</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/settings.py" line="522"/>
        <source>Listening port</source>
        <translation>监听端口</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/settings.py" line="523"/>
        <source>Listen for connections on port:</source>
        <translation>监听连接于端口：</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/settings.py" line="524"/>
        <source>UPnP:</source>
        <translation>UPnP:</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/settings.py" line="525"/>
        <source>Bandwidth limit</source>
        <translation>带宽限制</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/settings.py" line="526"/>
        <source>Maximum download rate (kB/s): [0: unlimited]</source>
        <translation>最大下载速率(kB/秒): [0: 无限制]</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/settings.py" line="527"/>
        <source>Maximum upload rate (kB/s): [0: unlimited]</source>
        <translation>最大上传速度 (kB/秒): [0: 无限制]</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/settings.py" line="529"/>
        <source>Proxy server / Tor</source>
        <translation>代理服务器 / Tor</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/settings.py" line="530"/>
        <source>Type:</source>
        <translation>类型：</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/settings.py" line="531"/>
        <source>Server hostname:</source>
        <translation>服务器主机名：</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/settings.py" line="601"/>
        <source>Port:</source>
        <translation>端口：</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/settings.py" line="533"/>
        <source>Authentication</source>
        <translation>认证</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/settings.py" line="602"/>
        <source>Username:</source>
        <translation>用户名：</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/settings.py" line="535"/>
        <source>Pass:</source>
        <translation>密码：</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/settings.py" line="536"/>
        <source>Listen for incoming connections when using proxy</source>
        <translation>在使用代理时仍然监听入站连接</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/settings.py" line="541"/>
        <source>none</source>
        <translation>无</translation>
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
        <translation>网络设置</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/settings.py" line="549"/>
        <source>Total difficulty:</source>
        <translation>总难度：</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/settings.py" line="550"/>
        <source>The &apos;Total difficulty&apos; affects the absolute amount of work the sender must complete. Doubling this value doubles the amount of work.</source>
        <translation>“总难度”影响发送者所需要的做工总数。当这个值翻倍时，做工的总数也翻倍。</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/settings.py" line="556"/>
        <source>Small message difficulty:</source>
        <translation>小消息难度：</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/settings.py" line="557"/>
        <source>When someone sends you a message, their computer must first complete some work. The difficulty of this work, by default, is 1. You may raise this default for new addresses you create by changing the values here. Any new addresses you create will require senders to meet the higher difficulty. There is one exception: if you add a friend or acquaintance to your address book, Bitmessage will automatically notify them when you next send a message that they need only complete the minimum amount of work: difficulty 1. </source>
        <translation>当一个人向您发送消息的时候， 他们的电脑必须先做工。这个难度的默认值是1,您可以在创建新的地址前提高这个值。任何新创建的地址都会要求更高的做工量。这里有一个例外，当您将您的朋友添加到地址本的时候，比特信将自动提示他们，当他们下一次向您发送的时候，他们需要的做功量将总是1.</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/settings.py" line="566"/>
        <source>The &apos;Small message difficulty&apos; mostly only affects the difficulty of sending small messages. Doubling this value makes it almost twice as difficult to send a small message but doesn&apos;t really affect large messages.</source>
        <translation>“小消息困难度”几乎仅影响发送消息。当这个值翻倍时，发小消息时做工的总数也翻倍，但是并不影响大的消息。</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/settings.py" line="573"/>
        <source>Demanded difficulty</source>
        <translation>要求的难度</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/settings.py" line="578"/>
        <source>Here you may set the maximum amount of work you are willing to do to send a message to another person. Setting these values to 0 means that any value is acceptable.</source>
        <translation>您可以在这里设置您所愿意接受的发送消息的最大难度。0代表接受任何难度。</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/settings.py" line="584"/>
        <source>Maximum acceptable total difficulty:</source>
        <translation>最大接受难度：</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/settings.py" line="585"/>
        <source>Maximum acceptable small message difficulty:</source>
        <translation>最大接受的小消息难度：</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/settings.py" line="586"/>
        <source>Max acceptable difficulty</source>
        <translation>最大可接受难度</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/settings.py" line="473"/>
        <source>Hardware GPU acceleration (OpenCL)</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../bitmessageqt/settings.py" line="592"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Bitmessage can utilize a different Bitcoin-based program called Namecoin to make addresses human-friendly. For example, instead of having to tell your friend your long Bitmessage address, you can simply tell him to send a message to &lt;span style=&quot; font-style:italic;&quot;&gt;test. &lt;/span&gt;&lt;/p&gt;&lt;p&gt;(Getting your own Bitmessage address into Namecoin is still rather difficult).&lt;/p&gt;&lt;p&gt;Bitmessage can use either namecoind directly or a running nmcontrol instance.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;比特信可以利用基于比特币的Namecoin让地址更加友好。比如除了告诉您的朋友您的长长的比特信地址，您还可以告诉他们发消息给 &lt;span style=&quot; font-style:italic;&quot;&gt;test. &lt;/span&gt;&lt;/p&gt;&lt;p&gt;把您的地址放入Namecoin还是相当的难的.&lt;/p&gt;&lt;p&gt;比特信可以不但直接连接到namecoin守护程序或者连接到运行中的nmcontrol实例.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/settings.py" line="600"/>
        <source>Host:</source>
        <translation>主机名：</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/settings.py" line="603"/>
        <source>Password:</source>
        <translation>密码：</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/settings.py" line="604"/>
        <source>Test</source>
        <translation>测试</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/settings.py" line="605"/>
        <source>Connect to:</source>
        <translation>连接到：</translation>
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
        <translation>Namecoin整合</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/settings.py" line="613"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;By default, if you send a message to someone and he is offline for more than two days, Bitmessage will send the message again after an additional two days. This will be continued with exponential backoff forever; messages will be resent after 5, 10, 20 days ect. until the receiver acknowledges them. Here you may change that behavior by having Bitmessage give up after a certain number of days or months.&lt;/p&gt;&lt;p&gt;Leave these input fields blank for the default behavior. &lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;您发给他们的消息默认会在网络上保存两天，之后比特信会再重发一次. 重发时间会随指数上升; 消息会在5, 10, 20... 天后重发并以此类推. 直到收到收件人的回执. 您可以在这里改变这一行为，让比特信在尝试一段时间后放弃.&lt;/p&gt;&lt;p&gt;留空意味着默认行为. &lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/settings.py" line="622"/>
        <source>Give up after</source>
        <translation>在</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/settings.py" line="623"/>
        <source>and</source>
        <translation>和</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/settings.py" line="624"/>
        <source>days</source>
        <translation>天</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/settings.py" line="625"/>
        <source>months.</source>
        <translation>月后放弃。</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/settings.py" line="626"/>
        <source>Resends Expire</source>
        <translation>重发超时</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/settings.py" line="493"/>
        <source>Hide connection notifications</source>
        <translation>隐藏连接通知</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/settings.py" line="528"/>
        <source>Maximum outbound connections: [0: none]</source>
        <translation>最大外部连接：[0: 无]</translation>
    </message>
    <message>
        <location filename="../bitmessageqt/settings.py" line="591"/>
        <source>Hardware GPU acceleration (OpenCL):</source>
        <translation>硬件GPU加速(OpenCL)：</translation>
    </message>
</context>
</TS>