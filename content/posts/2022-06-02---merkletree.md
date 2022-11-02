---
title: "Merkle Trees"
date: "2022-06-02"
template: "post"
draft: false
slug: "merkle-trees"
category: "software-engineering"
tags:
  - "software-engineering"
  - "tree"
description: "A brief introduction to merkle trees"
socialImage: ""
---
## Merkle trees

A merkel tree is a tree implementation in which every "leaf" node (leaf node is the single node at the bottom without children) is labelled with hash of a data block. Each non-leaf has the labelled hash of it's children's hash.
The benefits of a merkle tree or a hash tree is that it allows for efficient and secure verification of the contents of a large data structure.
Hash trees can be used to verify the contents or data of a transferred between computers. They can also be used to help verify undamaged, unaltered datablocks in a peer-to-peer network. They are used in products like [[ipfs]] , [[git]] , [[bittorrent]], [[bitcoin]], [[ethereum]], nix package manager (Except that in the Nix object store, objects are not named by the SHA hash of their contents, but rather SHA hash of their build rules + their direct dependencies.).

```mermaid

graph BT

node("top hash <br> hash(node0 + node1)")
node0("node0 <br> hash(node2 + node3)") --> node
node1 --> node
node2 --> node0
node3 --> node0
node4 --> node1
data0 --> node2
data1 --> node3
data2 --> node4
```
