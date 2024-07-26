const mysql = require("../db/mysql");
const userService = require("../service/userService");

exports.getRoutes = (req, res) => {
  // mysql.query(userService.userAll).then(data => {
  //   console.log(data, "获取数据库数据");
  //   let jsonData = JSON.parse(JSON.stringify(data));
  //   res.json({
  //     code: 200,
  //     message: "请求成功",
  //     data: jsonData,
  //   });
  // });
  res.json({
    code: 200,
    message: "请求成功",
    data: 1,
  });
};
