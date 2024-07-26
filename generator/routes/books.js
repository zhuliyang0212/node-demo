const express = require("express");
const bookController = require("../controllers/bookController");

const router = express.Router();

router.get("/bookList", bookController.bookList);
router.get("/create", bookController.create);
router.post("/createBook", bookController.createBook);
router.post("/updateBook", bookController.updateBook);
router.post("/deleteBook/:id", bookController.deleteBook);

module.exports = router;
