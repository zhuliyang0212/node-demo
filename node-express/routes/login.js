const router = require("express").Router();
const loginController = require("../controllers/loginController");

router.get("/login", loginController.login);
router.get("/register", loginController.register);

module.exports = router;
