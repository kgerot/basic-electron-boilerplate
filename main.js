const { app, BrowserWindow, nativeTheme } = require('electron')
var path = require('path')

// create the window for the application
const createWindow = (mode) => {
    // settings
    const win = new BrowserWindow({
        minWidth: 650, // minimum window width when resized
        minHeight: 400, // maximum window height when resized
        webPreferences: {
            nodeIntegration: true, // has node
            contextIsolation: false,
            additionalArguments: [mode] // mode for dark or light
        },
        show: false,
        useContentSize: true,
        icon: path.join(__dirname, '/src/icons/blue-logo.png')
    })
    // files required for current window (last must be index)
    win.loadFile(`src/page2.html`); 
    win.loadFile('src/index.html');
    win.maximize();
    win.show();
}

// Create the window once the ready event is triggered
app.whenReady().then(() => {
    const mode = nativeTheme.shouldUseDarkColors ? 'dark' : "light"; // gets native theme
    createWindow(mode)
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      app.quit()
    }
})