const jwtAuth = require("../utils/user-jwt");
const express = require("express");
const userRouter = require("./user");
const loginRouter = require("./login");
const routesRouter = require("./routes");

const router = express.Router();

// router.use(jwtAuth);

router.use("/", userRouter);
router.use("/", loginRouter);
router.use("/", routesRouter);

//统一异常处理
router.use((err, req, res, next) => {
  console.log(req.url, "req--------");
  // 自定义用户认证失败的错误返回
  console.log(err, "err router");
  if (err && err.name === "UnauthorizedError") {
    const { status = 401, message } = err;
    // 抛出401异常
    res.status(401).json({
      code: status,
      message: "token失效,请重新登录",
      data: null,
    });
  } else {
    const { output } = err || {};
    //错误码和错误信息
    const errCode = (output && output.statusCode) || 500;
    const errMsg =
      (output && output.payload && output.payload.error) || err.message;
    res.send({
      code: errCode,
      message: errMsg,
    });
  }
});

module.exports = router;
