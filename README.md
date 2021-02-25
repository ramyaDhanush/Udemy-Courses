# Udemy-Courses
A repo to hold my udemy course materials &amp; exercises

# NodeJS Dependencies

**Libraries**
1. A JAvascript Engine (V8 Engine) - Written in C++
2. An asynchronous code handler (Libuv - Written in C) - A library that implements Node.JS event loop and all of the asynchronous behaviours of the platform.

**Tools**
npm

**Key Terms**

1. Thread : 
   - The smallest sequence of programmed instructions to be executed(to do list). 
   - A thread can be called as **V8 call stack**.
2. NodeJS Process : Contains Thread
3. Libuv : 
   - A tool that enforces an asynchronous, event driven style of programming.
   - It's core job is to provide an event loop.
4. Event Loop:
   - Allows Node.Js to perform non-blocking I/O operations. 
   - By offloading operations to the system kernel whenever possible.

# Basics of NodeJS

1. To create a server, import **http**
   
2. http => `const http = require('http');`

  This is Common JS modules.Getting the **module.exports** object defined in the **http** module, then copying this reference to a new http object in your code, this is object in a node special function with a particular context, not only an object created in your code with the contents of the module.

3. Create Server in http `http.createServer( (req, res) =>{ })`

  The http.createServer() method turns your computer into an HTTP server.

  The http.createServer() method creates an HTTP Server object.

  The HTTP Server object can listen to ports on your computer and execute a function, a requestListener, each time a request is made.

4. Split the query

```js
var http = require('http');
var url = require('url');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  var q = url.parse(req.url, true).query;
  var txt = q.year + " " + q.month;
  res.end(txt);
}).listen(8080);

// Input : http://localhost:8080/?year=2017&month=July
// Output : 2017 July
 ```

5. File System
The Node.js file system module allows you to work with the file system on your computer.

`var fs = require('fs');`

Common use for the File System module:

  - Read files
  - Create files
  - Update files
  - Delete files
  - Rename files