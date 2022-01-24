const { ipcRenderer } = require("electron");

window.addEventListener("DOMContentLoaded", () => {
  document.querySelector("form").addEventListener("submit", (event) => {
    event.preventDefault();
    //const file = document.querySelector("input").files[0];
    //console.log(file);

    const { path } = document.querySelector("input").files[0];
    console.log(path);

    ipcRenderer.send("video:submit", path);
  });
});

ipcRenderer.on("video:metadata", (event, duration) => {
  document.querySelector(
    "#result"
  ).innerHTML = `Le film dure ${duration} secondes`;
});
