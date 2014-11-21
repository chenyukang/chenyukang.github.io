---
title: "Tools for Linux network status"
date: 2014-11-21 10:53
---


## netstat

```shell
netstat -tulpn
```

sample result is:

```shell
Active Internet connections (only servers)
Proto Recv-Q Send-Q Local Address           Foreign Address         State       PID/Program name
tcp        0      0 127.0.0.1:3306          0.0.0.0:*               LISTEN      1138/mysqld
tcp        0      0 0.0.0.0:111             0.0.0.0:*               LISTEN      850/portmap
tcp        0      0 0.0.0.0:80              0.0.0.0:*               LISTEN      1607/apache2
tcp        0      0 0.0.0.0:55091           0.0.0.0:*               LISTEN      910/rpc.statd
tcp        0      0 192.168.122.1:53        0.0.0.0:*               LISTEN      1467/dnsmasq
tcp        0      0 0.0.0.0:22              0.0.0.0:*               LISTEN      992/sshd
tcp        0      0 127.0.0.1:631           0.0.0.0:*               LISTEN      1565/cupsd
tcp        0      0 0.0.0.0:7000            0.0.0.0:*               LISTEN      3813/transmission
tcp6       0      0 :::22                   :::*                    LISTEN      992/sshd
tcp6       0      0 ::1:631                 :::*                    LISTEN      1565/cupsd
tcp6       0      0 :::7000                 :::*                    LISTEN      3813/transmission
udp        0      0 0.0.0.0:111             0.0.0.0:*                           850/portmap
udp        0      0 0.0.0.0:662             0.0.0.0:*                           910/rpc.statd
udp        0      0 192.168.122.1:53        0.0.0.0:*                           1467/dnsmasq
udp        0      0 0.0.0.0:67              0.0.0.0:*                           1467/dnsmasq
udp        0      0 0.0.0.0:68              0.0.0.0:*                           3697/dhclient
udp        0      0 0.0.0.0:7000            0.0.0.0:*                           3813/transmission
udp        0      0 0.0.0.0:54746           0.0.0.0:*                           910/rpc.statd
```

more info links to:

[Linux: Find Out Which Process Is Listening Upon a Port](http://www.cyberciti.biz/faq/what-process-has-open-linux-port/)
