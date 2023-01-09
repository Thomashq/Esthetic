const {app, BrowserWindow} = require('electron');
const express = require('express');
const mongoose = require('mongoose')
const server = express();
let mainWindow;

server.use(
    express.urlencoded({
        extended: true
    })
)
server.use(express.json())
mongoose
    .connect('mongodb://localhost:27017')
    .then(() => {
        server.listen(3000)
        console.log("Conectado com sucesso")
    })
    .catch((err) => console.log(err))

app.on('ready', () => {

    mainWindow = new BrowserWindow({
        
    });
    
    mainWindow.loadURL(`file://${__dirname}/index.html`)

})