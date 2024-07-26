const express = require("express");

const loginController = require("../controllers/loginController");

const router = express.Router();

router.post("/register", loginController.register);
router.post("/login", loginController.login);

module.exports = router;
