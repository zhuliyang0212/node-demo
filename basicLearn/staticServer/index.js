/**
 * 创建一个HTTP服务，端口3000，满足如下要求
 * GET /index.html    响应  /page/index.html文件内容
 * GET /css/app.css    响应  /page/css/app.css文件内容
 * GET /image/logo.png    响应  /page/image/logo.png文件内容
 *  */

const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  let { pathname } = new URL(req.url, "http://127.0.0.1");

  let filename = __dirname + "/page" + pathname;

  fs.readFile(filename, (err, data) => {
    if (err) {
      res.statusCode = 500;
      res.end("服务器错误");
      return;
    }
    res.end(data);
  });

  // if (pathname === "/index.html") {
  //   let html = fs.readFileSync(__dirname + "/page/index.html");
  //   res.end(html);
  // } else if (pathname === "/css/app.css") {
  //   let css = fs.readFileSync(__dirname + "/page/css/app.css");
  //   res.end(css);
  // } else if (pathname === "/image/logo.png") {
  //   let img = fs.readFileSync(__dirname + "/page/image/logo.png");
  //   res.end(img);
  // } else {
  //   res.end("1");
  // }
});

server.listen(3000, () => {
  console.log("server runner at 3000");
});
