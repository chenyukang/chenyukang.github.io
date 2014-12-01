---
title: "Linux Commands"
date: 2014-12-01 15:29
---


## mail command

send mail with mail commend in Linux:

```shell
#!/bin/bash
df -h > /tmp/mail_report.log
free -m >> /tmp/mail_report.log
mail -s “disk and RAM report” calvin@cnh.com < /tmp/mail_report.log

Read more at http://www.simplehelp.net/2008/12/01/how-to-send-email-from-the-linux-command-line/#lgE9u8GEKuzhrAC6.99
```

when you need attachment:

```shell
gzip -c mysqldbbackup.sql | uuencode mysqldbbackup.sql.gz  | mail -s "MySQL DB" backup@email.com
```

or use mutt:

```shell
echo "This is the message body" | mutt -a file.to.attach -s "subject of message" recipient@domain.com
```
