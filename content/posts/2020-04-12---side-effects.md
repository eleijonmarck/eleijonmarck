---
title: "Side Effects"
date: "2020-04-12"
template: "post"
draft: false
slug: "SWE"
category: "software-engineering"
tags:
  - "software-engineering"
description: "A short but concise description of what side effects mean in software development"
socialImage: ""
---

Most tutorials are stating the somewhat obvious as to why you should test your code or you should separate your domain from your application logic.
> "What does this really mean?"


---
gist:
- side effect definition
- how it is being introduced and somewhat neglected
- examples from real application
- functional programming vs imperitive

## Side Effects
wiki definition:
https://en.wikipedia.org/wiki/Side_effect_(computer_science)


## introduced in concept

## example in javascript map/filter vs for loop
```
var y = [1,2,3]
for i in range(y):
  y++
```

## example from functional haskell vs imperitive for loop

## testing

How do you test this? It is good to separate your "domain" code from the outside world (side-effects). The fmt.Println is a side effect (printing to stdout) and the string we send in is our domain.


```go
package main

import "fmt"

func main() {
    fmt.Println("Hello World")
}
```

```go
package main

import "fmt"

func Hello() string {
    return "Hello, world"
}

func main() {
    fmt.Println(Hello())
}
```

This way we can test the domain of our software and disregard any side effects. We just want the pure domain logic. We do not really care if this goes out to stdout or to stderr.

```go
package main

import "testing"

func TestHello(t *testing.T) {
    got := Hello()
    want := "Hello, world"

    if got != want {
        t.Errorf("got %q want %q", got, want)
    }
}
```