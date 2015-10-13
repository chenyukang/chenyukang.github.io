---
title: "Ruby on Rails Tips"
date: 2014-11-21 11:17
---

## Don't do too much in hooks transaction.

This may cause dead lock in Database,
more details refer to [Mysql Dead lock](http://stackoverflow.com/questions/2596005/working-around-mysql-error-deadlock-found-when-trying-to-get-lock-try-restarti)
