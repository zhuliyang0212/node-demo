module.exports = function (success, error) {
  const mongoose = require("mongoose");
  const { DBHOST, DBPORT, DBNAME } = require("../config/config");

  if (typeof error !== "function") {
    error = () => {
      console.log("连接失败");
    };
  }

  mongoose.connect(`mongodb://${DBHOST}:${DBPORT}/${DBNAME}`);

  const db = mongoose.connection;

  db.once("open", () => {
    success();
  });
  db.on("error", () => {
    error();
  });
  db.once("close", () => {
    console.log("连接关闭");
  });
};
