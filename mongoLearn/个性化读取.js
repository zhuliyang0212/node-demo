const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/bili");

const db = mongoose.connection;

db.once("open", () => {
  console.log("连接成功");
  // 创建文档的结构对象
  let BookSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
      unique: true, // 设置为独一无二的
    },
    author: String,
    gender: {
      type: String,
      enum: ["男", "女", "未知"],
    },
    price: Number,
    is_hot: Boolean,
    tags: Array,
    pub_time: Date,
    num: {
      type: Number,
      min: [6, "数量小于最小容量"],
      max: [12, "数量超过最大容量"],
    },
  });

  let BookModel = mongoose.model("books", BookSchema);

  // BookModel.find()
  //   .select({ name: 1, author: 1, _id: 0 })
  //   .exec()
  //   .then((err, data) => {
  //     console.log(err, "err");
  //     console.log(data, "data");
  //   });

  // 排序
  // BookModel.find()
  //   .select({ name: 1, price: 1, _id: 0 })
  //   .sort({ price: -1 })
  //   .exec()
  //   .then((err, data) => {
  //     console.log(err, "err");
  //     console.log(data, "data");
  //   });

  //数据截取
  BookModel.find()
    .select({ name: 1, price: 1, _id: 0 })
    .sort({ price: -1 })
    .skip(3)
    .limit(3)
    .exec()
    .then((err, data) => {
      console.log(err, "err");
      console.log(data, "data");
    });
});
db.on("error", () => {
  console.log("连接失败");
});
db.once("close", () => {
  console.log("连接关闭");
});
