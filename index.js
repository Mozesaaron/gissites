const { app, BrowserWindow } = require('electron');

// const { MapView } = require("@arcgis/core/views");

// document.addEventListener("DOMContentLoaded", function () {
//   const view = new MapView({
//     container: "mapViewContainer", // ID of the HTML element to hold the map
//     map: {
//       basemap: "streets" // Specify the basemap
//     },
//     center: [-122.4194, 37.7749], // Specify the initial map center coordinates
//     zoom: 12 // Specify the initial zoom level
//   });
// });


function createWindow() {
  // Create the browser window
  const win = new BrowserWindow({
    width: 800,
    height: 600,
  });

  // Load your HTML file
  win.loadFile('index.html');
}

// When the app is ready, create the browser window
app.whenReady().then(createWindow);
