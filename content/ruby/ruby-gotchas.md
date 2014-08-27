---
title: "ruby-gotchas"
date: 2014-08-27 17:06
---

## Whitespace is sensitive

```ruby
def method(arg1, arg2); end

method 1, 2
method(1, 2)
method (1, 2) ## ERROR

def method; 42; end
num = 21
method/num
method / num
method/ num
method /num ## ERROR
```



## `===` is confusing

like this:

```ruby
1 === 1            => true
Fixnum === 1       => true
1 === Fixnum       => false

Fixnum === Fixnum  => false

(1..3) === 2       => true
2 === (1..3)       => false
```

Remember, `===` used to test equality within a when clause of a case statement.

```ruby
(1..4) === 5       => false
```


## Operator precedence

```ruby
x = true & false
x => false

x = true and false
x => true
```

## Regexps is not same

In "standard" regexps:

```ruby
`^` is start and `$` is end of the whole string.
```

Ruby's regexps default to multiple line, so:

```ruby
^ and $ is start and end of any line,
A and E is start and end of whole string.
```

## getting.any?

```ruby
[].any?            => false
[1].any?           => true
[:foo, :bar].any   => true

# ok so far, BUT:
[false].any?       => false
[nil].any?         => false
[false, nil].any?  => false
[false, true].any? => true

```
Actually `any?` means `are any truthy?`
