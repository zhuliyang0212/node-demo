const { expressjwt: jwt } = require("express-jwt");

// 验证token是否过期
const jwtAuth = jwt({
  secret: "zly",
  algorithms: ["HS256"],
}).unless({
  path: ["/login", "/register"],
});

module.exports = jwtAuth;
