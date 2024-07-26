const jwt = require("jsonwebtoken");
const mysql = require("../db/mysql");
const userService = require("../service/userService");

exports.register = (req, res) => {
  let { username, nickname, password } = req.body;
  console.log(userService.createUser(username, nickname, password), "写入数据");
  mysql.query(userService.createUser(username, nickname, password)).then(() => {
    res.json({
      code: 200,
      message: "注册成功",
    });
  });
};

exports.login = (req, res, next) => {
  let { username, password } = req.body;
  console.log(username, password);
  mysql.query(userService.queryUser(username, password)).then(data => {
    console.log(data, "查询结果");
    let flag = data.find(
      v => v.username === username && v.password === password
    );
    if (!flag) {
      res.json({
        message: "用户名或密码不匹配",
        code: "200",
        data: null,
      });
    }
    //登陆成功，返回token
    const token = jwt.sign(
      // payload: 签发的token里包含的数据 （规则）
      { username },
      //私钥
      "zly",
      //设置过期时间
      { expiresIn: 60 * 60 * 24 }
    );

    res.json({
      message: "请求成功",
      code: "200",
      token: token,
    });
  });
};
