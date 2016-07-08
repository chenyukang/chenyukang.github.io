#!/usr/bin/python
import os
import sys
import commands
import optparse
import re
from os.path import join, getsize

def get_name(path):
    l = len(path)-1
    while(l>0):
        if( path[l] == '/'):
            return path[l+1:-1]
        else:
            l = l - 1

assert(os.path.isfile("list"))

def get_files(dir, pattern):
    size = 0L
    res = []
    for root,dir,files in os.walk(dir):
        for f in files:
            if pattern == None or f.endswith(pattern):
                res.append(f)
                #res.append(join(root, f))
    return res


l = open("list", "r")
lines = l.readlines()

nows = get_files("./", None)

def check(f, nows):
    found = 0
    for h in nows:
        if  cmp(h,f)==0:
            found = 1
            break
        else:
            pass 
    return found

for l in lines:
    name = get_name(l)
    print name
    if os.path.isfile(name):
        print "yes:", name
        continue
    else:
        print "get:", name
        #cmd = "wget " + l
        #os.system(cmd)

