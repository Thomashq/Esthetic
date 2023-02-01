const mongooseModel = require("mongoose");

const Login = mongooseModel.model("Login", {
  Token: String,
  Password: String,
});

module.exports = Login;
