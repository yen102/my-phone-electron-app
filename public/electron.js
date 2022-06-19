const path = require('path');

const { app, BrowserWindow, ipcMain } = require('electron');
const ip = require('ip')
const isDev = require('electron-is-dev');
const net = require('net');
const {verifyAndroid} = require('../src/utils/verifyAndroid');
let socketServer;
let clientSocket;
function createWindow() {
  // Create the browser window.
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: true,
      preload: path.join(__dirname, "preload.js")
    },
  });

  // and load the index.html of the app.
  // win.loadFile("index.html");
  win.loadURL(
    isDev
      ? 'http://localhost:3000'
      : `file://${path.join(__dirname, '../build/index.html')}`
  );
  // Open the DevTools.
  if (isDev) {
    win.webContents.openDevTools({ mode: 'detach' });
  }
  ipcMain.on('getMyQR', (event,args) =>  {
    const data = ip.address() + ":" + "6000";
    win.webContents.send('myQR', data)
  })
  socketServer = net.createServer((socket) => {
    if (clientSocket != null) {
      socket.write('already connected to other phone!\n');
      socket.destroy();
    } else {
      clientSocket = socket
      clientSocket.write("Hello ")

      clientSocket.on('data', (data) => {
        console.log('---------data' + data)
        const verifyRes = verify(data);
        ipcMain.webContents.send('verifyRes', verifyRes);
      })
    
      clientSocket.on('error', (error) => {
        console.log('-----------error', error)
      })

      clientSocket.on('close', () => {
        console.log('-------------close')
      })
    }
    
  });
  socketServer.listen(6000, '192.168.0.118', () => {
      console.log('----------Listening...')
  })

  socketServer.on('connection', (socket) => {
      console.log('-----client', socket)
  })


  socketServer.on('close', () => {
    console.log('-------------close')
  })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(createWindow);

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
