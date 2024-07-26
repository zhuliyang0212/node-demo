const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes");
const path = require("path");
const app = express();

// 设置模板引擎
app.set("view engine", "ejs");
// 设置模板目录
app.set("views", path.join(__dirname, "views"));

// 中间件
// const logger = (req, res, next) => {
//   console.log(req.url, "LOGGER");
//   next();
// };
// app.use(logger);

app.use(express.static(path.join(__dirname, "public")));

// 解析application/x-www-form-urlencoded数据格式
app.use(bodyParser.urlencoded({ extended: true }));
// 解析json数据格式
app.use(bodyParser.json());
//解析 text/plain 数据格式
app.use(bodyParser.text());

app.use("/", routes);

app.get("/home/:id/:username", (req, res) => {
  console.log(req.params);
  res.send(req.params);
});

app.post("/create", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

// app.get("/home", (req, res) => {
//   res.send("hello express");
// });

app.listen(3000, () => {
  console.log("express server running at 3000;");
});
