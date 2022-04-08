const { app, BrowserWindow } = require('electron');

let mainWindow;

app.on('ready', () => {

    mainWindow = new BrowserWindow({
        width: 480,
        height: 150,
        resizable: false,
        autoHideMenuBar: true,
        alwaysOnTop: true,
        icon: 'img/favicon.png'
    });

    mainWindow.loadURL(`file://${__dirname}/index.html`)

});