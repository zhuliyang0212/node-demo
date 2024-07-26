const BookModel = require("../models/BookModel");
const moment = require("moment");

const bookList = (req, res) => {
  BookModel.find()
    .sort({ time: -1 })
    .then(result => {
      let temp = JSON.parse(JSON.stringify(result));
      temp.forEach(
        v => (v.pub_time = moment(v.pub_time).format("YYYY-MM-DD HH:mm:ss"))
      );
      res.render("index", { title: "书籍列表", books: temp });
    });
};

const create = (req, res) => {
  res.render("create");
};

const createBook = (req, res) => {
  BookModel.create({
    ...req.body,
    pub_time: moment(req.body.pub_time).format("YYYY-MM-DD"),
    tags: req.body.tags.split("，"),
  }).then(result => {
    console.log(result, "result");
    res.send("新增成功");
  });
};

const updateBook = (req, res) => {
  let data = BookModel.sort({ time: -1 }).find();
  console.log(data, "books");
  // res.render("list", { list: data });
  res.send("ok");
};

const deleteBook = async (req, res) => {
  console.log(req.params.id);
  let data = await BookModel.deleteOne({ _id: req.params.id });
  res.send({
    code: 200,
    message: "删除成功",
    data,
  });
};

module.exports = {
  bookList,
  create,
  createBook,
  updateBook,
  deleteBook,
};
