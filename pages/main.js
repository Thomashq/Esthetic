const {app, BrowserWindow} = require('electron');
let mainWindow;

function createWindow(){
    const win = new BrowserWindow({
        width: 800,
        heigth: 800
    })
}

// app.whenReady().then(() => {
//     createWindow()
// })

module.exports = app;