const express = require("express");
const userController = require("../controllers/bookController");

const router = express.Router();

router.get("/login", userController.login);
router.post("/register", userController.register);

exports.userRouter = router;
