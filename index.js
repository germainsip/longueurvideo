const { app, BrowserWindow } = require('electron')
const path = require('path')

// fonction de création de fenêtres
// n'oubliez pas l'import de BrowserWindow
function createWindow() {
    const win = new BrowserWindow({
       webPreferences: {
          // charge le fichier preload.js en utillisant l'api path
           preload: path.join(__dirname, 'preload.js')
       }
            
    })

    win.loadFile('index.html')
}


app.on('ready', () => {
   console.log("app est pret !")
   createWindow()
})

