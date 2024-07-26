const express = require("express");

const routesController = require("../controllers/routesController");

const router = express.Router();

router.get("/getRoutes", routesController.getRoutes);
router.get("/test", (req, res) => {
  let num = (Math.random() * 500 + 1000).toFixed(0);
  setTimeout(() => {
    res.send({
      code: 200,
      message: "请求成功",
      data: num,
    });
  }, num);
});

module.exports = router;
