const mongooseModel = require("mongoose");

const Login = mongooseModel.model("Login", {
    User: String,
    Password: String
})
module.exports = Login