const fs = require("fs");
const path = require("path");
const myPath = path.resolve(__dirname, "./file/观书有感.txt");

//常见写入对象
const ws = fs.createWriteStream(myPath);

ws.write("半亩方塘一鉴开");
ws.write("\r\n天光云影共徘徊");
ws.write("\r\n问渠那得清如许");
ws.write("\r\n为有源头活水来");
