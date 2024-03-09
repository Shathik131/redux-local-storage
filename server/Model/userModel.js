const mongoose = require("mongoose");

// userModel

const userSchema = new mongoose.Schema({
  email: String,
  password: String,
});

const userModel = mongoose.model("register_data", userSchema);

module.exports = userModel;
