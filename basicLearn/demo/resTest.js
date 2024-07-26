const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  let { pathname } = new URL(req.url, "http://127.0.0.1");
  if (pathname === "/") {
    let html = fs.readFileSync(__dirname + "/resTest.html");
    res.end(html);
  } else if (pathname === "/res.css") {
    let css = fs.readFileSync(__dirname + "/res.css");
    res.end(css);
  } else if (pathname === "/res.js") {
    let js = fs.readFileSync(__dirname + "/res.js");
    res.end(js);
  } else {
    res.statusCode = 404;
    res.end(`<h1>404 Not Found<h1/>`);
  }
});

server.listen(3000, () => {
  console.log("server runner at 3000");
});
