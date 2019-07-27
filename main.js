const { app, BrowserWindow } = require('electron');

let win;

function createWindow () {
  // Create the browser window.
  win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  });

  // and load the index.html of the app.
  win.loadFile('server.html');
  win.setMenuBarVisibility(false);

  // Emitted when the window is closed.
  win.on('closed', () => {
    win = null
  })
}

//Create the basic window
app.on('ready', createWindow);


// Quit when all windows are closed.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
});

//Recreate the window on start for darwin
app.on('activate', () => {
  if (win === null) {
    createWindow()
  }
});
