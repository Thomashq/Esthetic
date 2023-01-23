const mongooseModel = require("mongoose");

const Clientes = mongooseModel.model("Clientes", {
  Address: String,
  Age: Number,
  Birthdate: String,
  Cellphone: String,
  Cep: String,
  City: String,
  District: String,
  Mail: String,
  Name: String,
  Profession: String,
  State: String,
});
module.exports = Clientes;
