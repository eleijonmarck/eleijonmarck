---
title: "Understanding Rusts uniqueness: Ownership"
date: "2022-10-02"
template: "post"
draft: false
slug: "rust: onwership"
category: "software-engineering"
tags:
  - "software-engineering"
  - "rust"
description: "A brief introduction to ownership in Rust"
socialImage: ""
---
## Rust uniqueness: Ownership

Part of the success of why Rust is popular for performance AND safety is due to it's unique way of handling memory. Most of the language before Rust approach memory management either via leaving the memory management entirely up to the developer of the application (C) or have a garbage collector swiping through the application from time to time.

I briefly want to touch upon why the previous approaches have been successful and vital upon on til today. C as a programming language is still by far the most performant, given that you handle the memory allocation as perfect as can be. There is no need for the runtime to have a separate service (the garbage collector) to handle pointers and memory allocation because in C, it assumes you have allocated and free memory appropriately. In languages like Go/Java or any other language using a garbage collector, we leave the memory management up to the runtime garbage collector, this makes for overhead during runtime where the garbage collector needs to take up time from the application running to remove memory where memory stored in the heap is no longer needed.

### Why are we talking about this? :thinking_face:
Performance and safety can be made together, as performance comes with runtime not having a garbage collector and safety comes when memory allocation happens only when needed. If you want a performant application (i am talking about performant software, where most bytes allocated counts and milliseconds for a service upstart of handling matters) than a garbage collector can slow the application down. It is also vital for security as most of the security loop holes come from bad memory management, see [microsoft post of 70%](https://www.zdnet.com/article/microsoft-70-percent-of-all-security-bugs-are-memory-safety-issues/) of their security bugs come from bad memory management in their software. This is where Rust has introduced ownership.

## Ownership
Ownership is composed of two rules:

1. data has one owner
	1. in rust you do not pass in a variable, you give ownership to that variable
	2. when passing a variable into a function, you are giving ownership to that function of that variable
2. data may have multiple readers or one writer

Rusts compiler knows about ownership and due to property of strong types in Rust the compiler and especially the tooling `rust-analyser` can help identify these ownerships to us. This is why it feels like Rust is a bit of a learning curve and things won't work out of the box, because it sets constraints on the ways we can manipulate the memory management in Rust. This is a good thing if you care about performance and safety. The example below show case that a simple printing step can be hard if you are not used to the compiler giving away errors to you directly.

```rust
fn print_capitalized(s: String) {
    let upper_case = &s.to_uppercase();
    println!("upper_case: {}", upper_case);

}

fn main() {
    let name = String::from("hello");
    print_capitalized(name); // value moved here rustcE0382
    println!("{}",name); // borrow of moved value: `name` value borrowed here after move rustcE0382
}
```

This variable `name`s ownership is moved to the capitalize function and is therefore still with that function when we returned a new string from the function. So giving away ownership to the `print_capitilized` gives an error that we cannot use this function because the ownership of `name` still remains within the `print_capitilized` function. To fix our example Rust introduce a concept of `borrowing` a variable which gives us a way to tell the compiler that we only reference (borrow) this value for a while, annotated by `&`.

### Borrowing
Borrowing let's us give away ownership to a function or a variable until it's completion. The borrowing gives a pointer reference for the function to that memory with a ownership property and removes the ownership property onces that function has run it's course. Let's fix our example using the newly introduced concept of letting the complier know that we are borrowing this variable to the function.

```rust
fn print_capitalized(s: &String) { // <-- we need to tell the compiler that we are receiving a reference of some string
    let upper_case = &s.to_uppercase();
    println!("upper_case: {}", upper_case);
}

fn main() {
    let name = String::from("hello");
    print_capitalized(&name); // <-- here we let print_capitalized "borrow" the value of name and use it, then letting go of the ownership once the function completes
    println!("{}", name);
}
```

## Links
70% memory issues - https://www.zdnet.com/article/microsoft-70-percent-of-all-security-bugs-are-memory-safety-issues/
