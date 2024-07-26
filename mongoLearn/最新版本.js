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

  BookSchema.methods.desc = function () {
    let desc = this.name ? "book name is " + this.name : "i don't have a name";
    console.log(desc, "desc");
  };

  let BookModel = mongoose.model("books", BookSchema);

  let bookData = [
    {
      name: "三国演义",
      author: "罗贯中",
      gender: "男",
      price: 29.9,
      is_hot: true,
      tags: ["历史", "战争"],
      pub_time: new Date(),
    },
    {
      name: "红楼梦",
      author: "曹雪芹",
      gender: "男",
      price: 39.9,
      is_hot: true,
      tags: ["爱情", "家庭"],
      pub_time: new Date(),
    },
    {
      name: "西游记",
      author: "吴承恩",
      gender: "男",
      price: 34.5,
      is_hot: true,
      tags: ["神话", "冒险"],
      pub_time: new Date(),
    },
    {
      name: "水浒传",
      author: "施耐庵",
      gender: "男",
      price: 29.9,
      is_hot: true,
      tags: ["英雄", "义气"],
      pub_time: new Date(),
    },
    {
      name: "金瓶梅",
      author: "兰陵笑笑生",
      gender: "男",
      price: 42.0,
      is_hot: false,
      tags: ["家庭", "伦理"],
      pub_time: new Date(),
    },
    {
      name: "封神演义",
      author: "许仲琳",
      gender: "男",
      price: 36.5,
      is_hot: true,
      tags: ["神话", "战争"],
      pub_time: new Date(),
    },
    {
      name: "聊斋志异",
      author: "蒲松龄",
      gender: "男",
      price: 28.8,
      is_hot: false,
      tags: ["鬼怪", "志怪"],
      pub_time: new Date(),
    },
    {
      name: "儒林外史",
      author: "吴敬梓",
      gender: "男",
      price: 33.0,
      is_hot: false,
      tags: ["讽刺", "社会"],
      pub_time: new Date(),
    },
    {
      name: "镜花缘",
      author: "李汝珍",
      gender: "男",
      price: 31.5,
      is_hot: true,
      tags: ["神话", "冒险"],
      pub_time: new Date(),
    },
    {
      name: "官场现形记",
      author: "李宝嘉",
      gender: "男",
      price: 27.9,
      is_hot: false,
      tags: ["讽刺", "社会"],
      pub_time: new Date(),
    },
    {
      name: "老残游记",
      author: "刘鹗",
      gender: "男",
      price: 29.5,
      is_hot: true,
      tags: ["冒险", "社会"],
      pub_time: new Date(),
    },
    {
      name: "二十年目睹之怪现状",
      author: "吴沃尧",
      gender: "男",
      price: 40.0,
      is_hot: false,
      tags: ["讽刺", "社会"],
      pub_time: new Date(),
    },
    {
      name: "醒世姻缘传",
      author: "西周生",
      gender: "男",
      price: 38.9,
      is_hot: true,
      tags: ["家庭", "伦理"],
      pub_time: new Date(),
    },
    {
      name: "孽海花",
      author: "曾朴",
      gender: "男",
      price: 32.0,
      is_hot: false,
      tags: ["爱情", "历史"],
      pub_time: new Date(),
    },
    {
      name: "歧路灯",
      author: "李绿园",
      gender: "男",
      price: 30.8,
      is_hot: false,
      tags: ["讽刺", "社会"],
      pub_time: new Date(),
    },
    {
      name: "野叟曝言",
      author: "夏敬渠",
      gender: "男",
      price: 35.9,
      is_hot: true,
      tags: ["冒险", "奇幻"],
      pub_time: new Date(),
    },
    {
      name: "海上花列传",
      author: "韩邦庆",
      gender: "男",
      price: 26.5,
      is_hot: false,
      tags: ["社会", "爱情"],
      pub_time: new Date(),
    },
    {
      name: "玉娇梨",
      author: "荑荻散人",
      gender: "男",
      price: 28.0,
      is_hot: false,
      tags: ["爱情", "家庭"],
      pub_time: new Date(),
    },
    {
      name: "绿野仙踪",
      author: "李百川",
      gender: "男",
      price: 34.0,
      is_hot: true,
      tags: ["神话", "冒险"],
      pub_time: new Date(),
    },
    {
      name: "天雨花",
      author: "褚人获",
      gender: "男",
      price: 39.5,
      is_hot: true,
      tags: ["神话", "家庭"],
      pub_time: new Date(),
    },
    {
      name: "封神榜",
      author: "许仲琳",
      gender: "男",
      price: 36.0,
      is_hot: true,
      tags: ["神话", "战争"],
      pub_time: new Date(),
    },
  ];

  // BookModel.insertMany(bookData);
  // new BookModel({
  //   name: "测试",
  //   author: "佚名",
  //   num: 13,
  // }).save();

  // BookModel.find({ price: { $lt: 29 } }).then(data => {
  //   console.log(data, "find");
  // });

  //或
  // BookModel.find({ $or: [{ author: "罗贯中" }, { author: "曹雪芹" }] }).then(
  //   data => {
  //     console.log(data, "find");
  //   }
  // );

  // 与
  // BookModel.find({
  //   $and: [{ price: { $gt: 36 } }, { price: { $lt: 40 } }],
  // }).then(data => {
  //   console.log(data, "find");
  // });

  let name = "三";
  BookModel.find({ name: new RegExp(name) }).then(data => {
    console.log(data, "find");
  });
});
db.on("error", () => {
  console.log("连接失败");
});
db.once("close", () => {
  console.log("连接关闭");
});
