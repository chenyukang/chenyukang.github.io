#!/bin/sh


do_commit() {
    cmd="git commit -a -m\"$log\""
    echo $cmd
    git add . -A;
    git commit -am"$log"
    git push -u origin source;

    cd output; git pull; cd ../;
    simiki generate;
    cd output;
    git pull;
    git add . -A;
    git commit -am"$log";
    git push
    cd ../

}

while [ $# -gt 0 ]
do
    case $1 in
        -append |-a) shift; log=$1; do_commit; exit 0;;
    esac
    shift
done
