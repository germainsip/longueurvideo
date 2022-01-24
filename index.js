const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");
const ffmpeg = require("fluent-ffmpeg");


let win

// fonction de création de fenêtres
// n'oubliez pas l'import de BrowserWindow
function createWindow() {
  win = new BrowserWindow({
    webPreferences: {
      // charge le fichier preload.js en utillisant l'api path
      preload: path.join(__dirname, "preload.js"),
    },
  });

  win.loadFile("index.html");
}

// ouverture de la fenêtre
app.on("ready", () => {
  console.log("app est pret !");
  createWindow();
});
// action à l'envoie du chemin à partir de la vue
ipcMain.on("video:submit", (event, path) => {
   // utilisation de fluent-ffmpeg
  ffmpeg.ffprobe(path, (err, metadata) => {
     // on envoie la durée à la vue
     win.webContents.send('video:metadata',metadata.format.duration);
  });
});
