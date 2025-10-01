---
title: "Arbitrary code execution during compilation - Rust"
date: "2023-03-18"
template: "post"
draft: false
slug: "Code execution during compilation"
category: "software-engineering"
tags:
  - "software-engineering"
  - "rust"
description: "Arbitrary code execution during compilation."
socialImage: ""
---

I recently played around with Rust macros and discovered that they allow for arbitrary code execution during compilation. Here is a proof-of-concept that demonstrates a critical vulnerability in the Rust programming language ecosystem. The proof-of-concept, called `do not-run-this-code`, abuses Rust macros to interact with and modify the machine that the Rust code is being compiled on.

Github: https://github.com/eleijonmarck/do-not-compile-this-code

When the `do-not-compile-this-code` source code is opened in the Visual Studio Code editor with the `rust-analyzer` plugin, the editor expands the `some_macro!()` macro defined in the code. This macro then reads the contents of the `~/.ssh/id_rsa_do_not_try_this_at_home` file and deletes it. This arbitrary file deletion also occurs when cargo build is run on the code or when the resulting executable is run.

The key insight enabling this vulnerability is that Rust macros are expanded before or during the compilation process. This means that arbitrary code can be executed as part of compiling Rust code. In this proof-of-concept, this is abused to delete an SSH key file, but more malicious exploits are certainly possible. For example, an attacker could steal data, encrypt files for ransom, or use the machine to attack others.


![do-not-compile-this-code](/assets/blog/code-execution-during-runtime.gif)

## To verify this vulnerability yourself:

- Clone the "do not run this code" Git repository.
- Create an SSH key at `~/.ssh/id_rsa_do_not_try_this_at_home` with some sample contents.
- Open the `do_not_compile_this_code` crate in Visual Studio Code with `rust-analyzer`.
- Once the file is opened, VS Code will analyze the code, expanding the macro and deleting the contents of `~/.ssh/id_rsa_do_not_try_this_at_home`.

This proof-of-concept highlights the need to sanitize Rust macros and be very careful about what code is executed during the compilation process. The Rust team and ecosystem will need to work to release fixes and security enhancements to prevent arbitrary code execution vulnerabilities like this one in the future. Compilation-time security is an important area for continued research and development in the Rust language and compiler.