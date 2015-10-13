---
title: "multiple-git-ssh"
date: 2015-10-13 22:36
---


场景: 服务器中有多个Github项目，每个项目用的不同github rsa key，于是默认的~/.ssh/id_rsa就不能解决问题。


解决方案

1、为新项目生成一个新的rsa key

```sh
ssh-keygen -t rsa -C "your_email@youremail.com”
```

2、github库中加入新的rsa key公钥

3、添加git配置文件（~/.ssh/id_rsa_newprj 为rsa私钥路径）

vim ~/.ssh/config

```sh
#default account
Host github.com
    HostName github.com
    User git
    IdentityFile ~/.ssh/id_rsa

#your project account
Host github.com-newprj
    HostName github.com
    User git
    IdentityFile ~/.ssh/id_rsa_newprj
```

4、clone项目或者修改现有项目的.git/config

```sh
git clone git@github.com-newprj:XXXXX/yyyy.git
```
