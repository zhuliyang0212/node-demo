const express = require("express");
const cookieParser = require("cookie-parser");
const login = require("./routes/login");

const app = express();

app.use(cookieParser());

app.use("", login);

app.get("/set-cookie", (req, res) => {
  res.cookie("test", "12asdas", { maxAge: 6 * 1000 });
  res.send("hello");
});

app.listen(3000);
