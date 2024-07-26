const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
  let { method } = req;

  if (method == "GET") {
    // 方式一
    // let pathname = url.parse(req.url).pathname;

    //方式二
    let pathname = new URL(req.url, "http://127.0.0.1").pathname;

    // 设置响应状态码
    res.statusCode = 404;

    // 设置响应状态描述
    res.statusMessage = "asfa";

    // 设置响应头
    res.setHeader("Content-Type", "text/html;chatset=utf-8");
    res.setHeader("Server", "node js");

    // 同名响应头
    res.setHeader("Test", ["a", "b", "c"]);
    res.setHeader("Content-Type", "text/html; charset=utf-8");

    res.write("write返回的响应体");

    if (pathname == "/login") {
      res.end("登录页面");
    } else if (pathname == "/reg") {
      res.end("注册页面");
    } else {
      res.end("路由未命中");
    }
  } else {
    res.end("1");
  }
});

server.listen(3000, () => {
  console.log("server runner at 3000");
});
