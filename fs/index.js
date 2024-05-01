const fs = require("fs");
const path = require("path");
const myPath = path.resolve(__dirname, "./file/测试.txt");
const myPath1 = path.resolve(__dirname, "./file/test.txt");

// 文件写入，
fs.writeFile(myPath, "醉后不知天在水，满船清梦压星河", (err) => {
  if (err) {
    console.log(err, "ss");
    return;
  }
  console.log("成功");
});

fs.writeFileSync(myPath1, "test");

console.log(1 + 1);

fs.appendFile(myPath, "\r\nappendFile", (err) => {
  if (err) {
    console.log(err, "append Err");
  }
});
