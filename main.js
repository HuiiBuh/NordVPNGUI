const { app, BrowserWindow } = require('electron');
const { spawn , fork} = require('child_process');



executeCommand(["nordvpn", "connect"]);

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


function executeCommand(command) {

  let worker = fork("./worker.js");
  worker.send(command);

  worker.on('message', (message) => {
    console.log(`Number of mails sent ${message}`);
  });

  for (let i = 0; i < 400000000000; ++i){
    l = "";
  }


}



/*
function f() {

    let first = false;
    let connecting = false;


    const nordvpn_connect = spawn('nordvpn', ['connect']);

    nordvpn_connect.stdout.on('data', (data) => {

        let output = `${data}`;
        if (output === "\r-" || first){
            first = true;
            if (output.includes("Connecting") || connecting){
                connecting = true;
                if (output.includes("connected")){
                    return true;
                }
            }
        }
    });
}
*/
