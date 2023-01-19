const { app, BrowserWindow } = require("electron");
//require('@electron/remote/main').initialize()

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
  });
  win.loadURL("http://localhost:3000");
  //remove o menu superior
  //win.removeMenu();
}

app.whenReady().then(() => {
  createWindow();
});

// app.on('window-all-closed', function(){
//     if(process.platform !== 'darwin'){
//         app.quit()
//     }
// })

// app.on('activate', function(){
//     if(BrowserWindow.getAllWindows().length === 0) createWindow()
// })
