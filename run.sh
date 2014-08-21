#!/bin/sh

#******************************************************************/
#
#       RUN_SH
#
#       @brief
#
#       @author   Yukang Chen  @date  2014-08-21 18:31:20
#
# ******************************************************************/

simiki generate;
cp -rf output/* ./;
git add .
git commit -am"update"
git push
