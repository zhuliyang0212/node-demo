const http = require("http");
const fs = require("fs");
const path = require("path");

let mimes = {
  html: "text/html",
  css: "text/css",
  js: "text/javascript",
  png: "image/png",
  jpg: "image/jpeg",
  jpeg: "image/jpeg",
  gif: "image/gif",
  json: "application/json",
  txt: "text/plain",
};

const server = http.createServer((req, res) => {
  let pathname = new URL(req.url, "http://127.0.0.1").pathname;
  let ext = path.extname(pathname).slice(1);

  let type = mimes[ext];
  if (type) {
    res.setHeader("Content-Type", type + ";charset=utf-8");
  } else {
    res.setHeader("Content-Type", "application/octet-stream");
  }

  // 设置响应体字符集

  res.end("你好");
});

server.listen(3000, () => {
  console.log("3000 runner");
});
