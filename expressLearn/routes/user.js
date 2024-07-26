const express = require("express");
const userController = require("../controllers/userController");

const router = express.Router();

router.get("/getUser", userController.getUser);

router.delete("/deleteUser", userController.deleteUser);

router.get("/create", userController.create);
router.post("/upload", userController.upload);

module.exports = router;
