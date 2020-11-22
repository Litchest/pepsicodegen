


const electron = require("electron");
const url = require("url");
const path = require("path");
const { protocol } = require("electron");



const { app, BrowserWindow } = electron;



let mainWindow;

app.on("ready", () => {

mainWindow = new BrowserWindow ( {width: 1000, height: 600 } );

mainWindow.setMenuBarVisibility(false)
mainWindow.loadURL(
url.format({
    pathname: path.join(__dirname, "main.html"),
    protocol: "file:",
    slashes: true
    
})


);


});
















