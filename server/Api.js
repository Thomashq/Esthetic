require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose')
const routes = require('./src/controler/clienteController.js')
const server = express();

const DB_USER = process.env.DB_USER
const DB_PASSWORD = process.env.DB_PASSWORD
const PORT = process.env.PORT
//iniciar conexão com banco e abertura do servidor.
mongoose.set("strictQuery", false);

mongoose
.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.6ppaf.mongodb.net/?retryWrites=true&w=majority`)
.then(() => {
    server.listen(PORT)
    console.log("Conectado com sucesso")
    console.log(`Servidor está rodando na porta ${3000}`)
})
.catch((err) => console.log(err))
 
server.use(express.json())
server.use('/clientes', routes)