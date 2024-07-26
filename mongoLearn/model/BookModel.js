const mongoose = require("mongoose");
const { Schema, model } = mongoose;

let BookSchema = new Schema({
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

module.exports = model("book", BookSchema);
