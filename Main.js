const {app, BrowserWindow} = require('electron');
const path = require("path")
const url = require("url")

require('@electron/remote/main.js').initialize()

function createWindow(){
    const win = new BrowserWindow({
        width: 800,
        heigth: 800,
        webPreferences: {
            enableRemoteModule: true
        }
    })
    win.loadURL('http://localhost:5001')
}

app.whenReady().then(() => {
    createWindow()
})

module.exports = app;