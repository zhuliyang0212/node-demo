const fs = require("fs");
const path = require("path");

const myPath = path.resolve(__dirname, "./file/观书有感.txt");

fs.readFile(myPath, (err, data) => {
  if (err) {
    console.log(err, "err");
    return;
  }
  console.log(data.toString());
});
