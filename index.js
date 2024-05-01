const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true); // 解析请求的URL

  // 设置CORS头部
  // res.setHeader("Access-Control-Allow-Origin", "*");
  // res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  // res.setHeader(
  //   "Access-Control-Allow-Headers",
  //   "Origin, X-Requested-With, Content-Type, Accept"
  // );

  // 处理预检请求
  if (req.method === "OPTIONS") {
    res.writeHead(204); // No content to send back
    res.end();
    return;
  }

  // 检查请求路径和方法
  if (parsedUrl.pathname === "/getRoutes" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(
      JSON.stringify({
        status: 200,
        message: "请求成功",
        data: [
          {
            path: "/dashboard",
            name: "仪表盘",
            component: "@/views/dashboard/index.vue",
          },
          {
            path: "/chart",
            name: "图表",
            children: [
              {
                path: "lineCharts",
                name: "折线图",
              },
              {
                path: "barCharts",
                name: "柱状图",
              },
            ],
          },
        ],
      })
    );
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Not Found");
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
