---
title: "EchoServer for monitoring of applications"
date: 2019-07-28
published: true
tags: ["backend", "monitoring"]
cover_image: "./images/echoserver.png"
series: true
canonical_url: false
description: "EchoServer send whatever you `$ curl localhost:4000` 'sent to it'. \"sent to it\""
---
### EchoServer

> An "echo server" is a server that does nothing more than sending back whatever is sent to it. What can you use it for ? Whatever you feel like.

Practical application of using echoservers is troubleshooting of network and connectivity settings.

[Echo Protocol](https://en.wikipedia.org/wiki/Echo_Protocol)

Services around todays approach that most developers need to have some grasp of each segment, the goal of this text is to get you enlightened into troubleshooting your systems around building subnets and network to be able to connect your database server, web server and whatever external services for your firewall.

A ping or a traceroute will establish if the server (IP address) can be reached but does not tell you if an application will be able to connect to the desired port on the server and whether a reply from the server will be able to reach the client again. You can use this echo server to troubleshoot networks, test a firewall (eg "if I have a server listening on port 123, will my firewall allow connections to it.

### Simple implementation using node express

```javascript
    $ cat config/index.js
    
    module.exports = {
      port: process.env.port || 4000
    }
    
    $ cat index.js
    const express = require('express')
    let app = express()
    let config = require('./config')
    
    app.all('*', (req, res) => {
      res.send('Alive')
    })
    
    app.listen(
      config.port, () => console.log(
        'Server is listening on port', config.port
      )
    )
```

> You can use this echo server to troubleshoot networks, test a firewall (eg "if I have a server listening on port 123, will my firewall allow connections to it

```bash
    $ node index.js
    Server is listening on port 4000
```

This "echo server" can now be set up to listen on any desired port to simulate an application (web server port 80, postgresql 5432, ...). From the client, you can now `telnet` to the port. Typing anything and receiving it; indicating that the telnet client and the echo server can talk to each other : you've established connectivity at the application level.

```bash
    $ curl localhost:4000
    Alive
```