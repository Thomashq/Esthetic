const ClientesModel = require('mongoose')

const Clientes = ClientesModel.model('Clientes',{
    nome: String,
    CPF: String,
    numero: String
})