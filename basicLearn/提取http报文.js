const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
  //方式一
  let path = url.parse(req.url, true);
  console.log(path);
  let query = path.query.keywords;
  console.log(query, "query");

  //方式二
  let Url = new URL(req.url, "http://127.0.0.1:3000");
  console.log(Url.searchParams.get("keywords"));
  res.end("server runner");
});

server.listen(3000, () => {
  console.log("server runner at 3000");
});
