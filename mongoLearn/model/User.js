const mongoose = require("mongoose");
const { Schema, model } = mongoose;

let UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true, // 设置为独一无二的
  },
  password: { type: String, required: true },
});

UserSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 8);
  }
  next();
});

UserSchema.methods.comparePassword = function (password) {
  return bcrypt.compare(password, this.password);
};

module.exports = model("user", UserSchema);
