var express = require("express");
const formidable = require("formidable");
const fs = require("fs");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/create", (req, res) => {
  res.render("upload");
});

router.post("/uploadFile", (req, res) => {
  // const form = formidable({ multiples: true });
  const form = formidable({
    multiples: true,
    uploadDir: __dirname + "/../public/images",
    keepExtensions: true,
  });

  form.parse(req, (err, fields, files) => {
    if (err) {
      next(err);
      return;
    }
    let url = "/images/" + files.logo.newFilename;
    res.json({ fields, files, url });
  });
});

module.exports = router;
