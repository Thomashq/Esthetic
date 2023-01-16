const mongooseModel = require('mongoose')

const Clientes = mongooseModel.model('Clientes',{
    nome: String,
    CPF: String,
    numero: String,
})
module.exports = Clientes