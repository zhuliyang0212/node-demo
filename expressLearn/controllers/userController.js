const mysql = require("../db/mysql");
const userService = require("../service/userService");
const formidable = require("formidable");
const path = require("path");
const fs = require("fs");

exports.getUser = (req, res) => {
  mysql.query(userService.userAll).then(data => {
    console.log(data, "获取数据库数据");
    let jsonData = JSON.parse(JSON.stringify(data));
    res.json({
      code: 200,
      message: "请求成功",
      data: jsonData,
    });
  });
};

exports.deleteUser = (req, res) => {
  res.send("Got a DELETE request at /user");
};

exports.create = (req, res) => {
  res.render("index", { msg: "你好ejs" });
};

exports.upload = (req, res) => {
  const form = new formidable.IncomingForm();
  // 保留上传文件的后缀名
  form.keepExtensions = true;
  // 设置上传文件的保存路径
  form.uploadDir = path.join(__dirname, "../public/upload");
  form.parse(req, (err, fields, files) => {
    console.log(files, "文件");
    console.log(fields, "字段");

    let ran = "test";
    let extName = path.extname(files.image[0].originalFilename);
    console.log(extName, "---");

    let oldPath = __dirname + "/" + files.image.path;
    let newPath = path.join(__dirname, "/uploads" + ran + extName);
    console.log(oldPath, "文件保存路径");
    // if (err) throw err;
    fs.rename(oldPath, newPath, err => {
      if (err) {
        throw Error("改名失败");
      }
    });
    res.writeHead(200, { "Content-type": "text/plain" });
    res.end("success");
    // res.send({
    //   message: "提交成功",
    //   code: 200,
    //   data: null,
    // });
  });
};
