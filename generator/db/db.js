const mongoose = require("mongoose");
const { DBPORT, DBHOST, DBNAME } = require("../config/config");

mongoose.connect(`mongodb://${DBHOST}:${DBPORT}/${DBNAME}`);

let db = mongoose.connection;

module.exports = function (success, error) {
  if (typeof error !== "function") {
    error = () => console.log("链接失败");
  }

  db.on("open", () => {
    success();
  });
  db.on("error", () => {
    error();
  });
};
