---
title: "Hello Simiki"
date: 2014-08-21 17:34
---

今天想弄个自己的wiki，然后找到了[tankywoo](http://tankywoo.com/)写的这个[Simiki](http://simiki.org)。试用了一把觉得还不错。

测试代码：

```python
import sys
if __name__ == __main__:
    sys.exit()

```

发布的脚本：
```shell
do_commit() {
    cmd="git commit -a -m\"$log\""
    echo $cmd
    git add .;
    git commit -am"$log"
    git push -u origin source;

    simiki generate;
    cd output;
    git pull;
    git add .
    git commit -am"$log";
    git push
    cd ../

}

while [ $# -gt 0 ]
do
    case $1 in
        -commit |-u) shift; log=$1; do_commit; exit 0;;
    esac
    shift
done
```

我觉得还需要增加的功能是检索。
