const { app, BrowserWindow } = require("electron/main")

app.disableHardwareAcceleration()
app.commandLine.appendSwitch("disable-gpu-sandbox")
app.commandLine.appendSwitch("ignore-gpu-blacklist")
app.commandLine.appendSwitch("no-sandbox")

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
  })

  win.loadFile("index.html")
}

app.whenReady().then(() => {
  createWindow()

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit()
  }
})
