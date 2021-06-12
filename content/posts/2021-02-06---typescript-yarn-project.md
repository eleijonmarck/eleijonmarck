---
title: "New typescript yarn project"
date: "2021-02-06"
template: "post"
draft: false
slug: "SWE"
category: "software-engineering"
tags:
  - "software-engineering"
  - "node"
  - "js"
  - "ts"
description: "A description of how to setup a project using yarn with typescript support from the beginning"
socialImage: ""
---

gist

- install yarn
- initialize a project using yarn
- add dependencies
- setup a decent tsconfig

---

## Yarn

desription of yarn

Create an initial package.json, the project configuration file:

\$ yarn init

Install initial dependencies (-D flag is a development dependency):

$ yarn add @types/node typescript
$ yarn add -D ts-node

Create tsconfig.json, required for tsc and ts-node, to compile TypeScript to JavaScript:

\$ yarn tsc --init --rootDir src --outDir ./bin --esModuleInterop --lib ES2019 --module commonjs --noImplicitAny true

Create your first source file in src folder:

$ mkdir src
$ echo “console.log(‘Hello World\!\!\!’)” > src/app.ts

Build the project:

\$ yarn tsc

tsc, TypeScript to JavaScript compiler, is located in ./node_modules/.bin/tsc. yarn resolves the path and run it with node. The command above compiles our TypeScript to JavaScript with an ouput to ./bin folder. Now, you can run the output JavaScript file, ./bin/app.js, with node:

\$ node ./bin/app.js
Hello World!!!

For development purposes, ts-node is used, to run code without a compilation. ts-node will compile it on fly:

\$ yarn ts-node ./src/app.ts

As with tsc, we run ts-node with yarn to resolve it location.

---

If you really want to set it up properly, you also add nodemon for hot-reloading of the code changes

https://stackoverflow.com/questions/37979489/how-to-watch-and-reload-ts-node-when-typescript-files-change

```
nodemon --watch "src/**" --ext "ts,json" --ignore "src/**/*.spec.ts" --exec "ts-node src/index.ts"
```
