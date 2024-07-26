const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const db = require("./db/db.js");
const BookModel = require("./model/BookModel");

const app = express();

// 设置模版引擎
app.set("view engine", "ejs");

app.set("views", path.join(__dirname, "views"));

app.use(bodyParser.json());

app.listen("3030", () => {
  console.log("服务启动在3030端口");
});

db(() => {
  console.log("连接成功");

  //数据截取
  BookModel.find()
    .select({ name: 1, price: 1, _id: 0 })
    .sort({ price: -1 })
    .skip(3)
    .limit(3)
    .exec()
    .then(data => {
      console.log(data, "data");
    });
});
