const { BrowserWindow, app } = require('electron')
// const express = require('./server/server.js')

let mainWindow = null

function main() {
  
  // express
<<<<<<< HEAD
  mainWindow = new BrowserWindow({ width: 800, height: 600 })
  mainWindow.loadURL(`http://localhost:8080/`)
=======
  mainWindow = new BrowserWindow({ width: 1200, height: 800 })
  mainWindow.loadURL(`http://localhost:3000/`)
>>>>>>> ee4506f98996d2e33cf66f9f9dccb229331b6910
  mainWindow.on('close', event => {
    mainWindow = null
  })
}

app.on('ready', main)