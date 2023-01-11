const express = require('express');
const mongoose = require('mongoose')
const routes = require('./src/router/routers.ts')
const server = express();

server.use(
    express.urlencoded({
        extended: true
    })
)

mongoose
.connect('mongodb://localhost:27017')
.then(() => {
    server.listen(3000)
    console.log("Conectado com sucesso")
    console.log(`Servidor está rodando na porta ${3000}`)
})
.catch((err) => console.log(err))
 
server.use(express.json())
server.use('/clientes', routes)
