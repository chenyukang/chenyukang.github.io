---
title: "Git使用"
date: 2014-10-24 17:34
---

更新代码的时候尽量，这样代码的diff要好看一些。

```shell
git pull --rebase
```

撤销本地操作:

```shell
git reset --hard
```
撤销一个文件的本地操作：

```shell
git checkout -- file
````

查看哪一次commit删除了某个文件

```shell
git log -- file
```


清除所有untracked files in Git repo:
```shell
git clean -fxd
```
