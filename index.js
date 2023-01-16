const express = require('express');
const mongoose = require('mongoose')
const routes = require('./src/router/routers.js')
const server = express();


mongoose.set("strictQuery", false)

mongoose
.connect('sua connection string')
.then(() => {
    server.listen(3000)
    console.log("Conectado com sucesso")
    console.log(`Servidor está rodando na porta ${3000}`)
})
.catch((err) => console.log(err))
 
server.use(express.json())
server.use('/clientes', routes)
