const express = require('express');
const mongoose = require('mongoose')
const routes = require('./src/router/routers.js')
const server = express();

//iniciar conexão com banco e abertura do servidor.
mongoose.set("strictQuery", false)

mongoose
.connect('web.config')
.then(() => {
    server.listen(3000)
    console.log("Conectado com sucesso")
    console.log(`Servidor está rodando na porta ${3000}`)
})
.catch((err) => console.log(err))
 
server.use(express.json())
server.use('/clientes', routes)
