const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 1280,
    height: 800,
    minHeight: 900,
    minWidth: 1500,
    frame: false, // para ocultar la barra de título
    
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: true, // ten cuidado con esto por seguridad
      contextIsolation: true,
      darkTheme: true
    },
    autoHideMenuBar: true
  });

  win.maximize();
  win.loadURL('http://localhost:5173'); // si estás en modo desarrollo
  // win.loadFile('build/index.html'); // para producción
}



app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});

ipcMain.on('minimize', () => {
  BrowserWindow.getFocusedWindow()?.minimize();
});

ipcMain.on('maximize', () => {
  const win = BrowserWindow.getFocusedWindow();
  if (win.isMaximized()) {
    win.unmaximize();
  } else {
    win.maximize();
  }
});

ipcMain.on('close', () => {
  BrowserWindow.getFocusedWindow()?.close();
});