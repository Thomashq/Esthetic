const {app, BrowserWindow} = require('electron');
let mainWindow;

async function createWindow(){
    const win = await new BrowserWindow({
        width: 800,
        heigth: 800
    })
}

app.whenReady().then(() => {
    createWindow()
})

module.exports = app;