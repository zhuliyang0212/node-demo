const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/bili");

mongoose.connection.once("open", () => {
  console.log("连接成功");
  // 创建文档的结构对象
  let BookSchema = new mongoose.Schema({
    name: String,
    author: String,
    price: Number,
  });

  let BookModel = mongoose.model("books", BookSchema);

  // BookModel.create({
  //   name: "西游记",
  //   author: "吴承恩",
  //   price: 29.9,
  // }).then(data => {
  //   console.log(data);
  // });
});
mongoose.connection.on("error", () => {
  console.log("连接失败");
});
mongoose.connection.once("close", () => {
  console.log("连接关闭");
});

//  断开连接
// mongoose.disconnect();
