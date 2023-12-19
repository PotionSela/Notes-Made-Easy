// Express import
const express = require("express");
// File system import
const fs = require("fs");
// Path import
const path = require("path");
// Helper method for generating unique ids
const uniqid = require("uniqid");

// Port
const PORT = process.env.PORT || 3001;

// This will create a new app with express
const app = express();

// Adding in Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("Develop/public"));

// Get route which sends back the index.html page
app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "Develop/public/index.html"))
);

// Get route which sends back the notes.html page
app.get("/notes", (req, res) =>
  res.sendFile(path.join(__dirname, "Develop/public/notes.html"))
);

// Get route which reads the db.json file and sends back the parsed JSON data
app.get("/api/notes", function (req, res) {
  fs.readFile("Develop/db/db.json", "utf8", (err, data) => {
    var jsonData = JSON.parse(data);
    console.log(jsonData);
    res.json(jsonData);
  });
});

// Reads the new notes from the request body then adds them to the db.json file
const readThenAppendToJson = (content, file) => {
  fs.readFile(file, "utf8", (err, data) => {
    if (err) {
      console.error(err);
    } else {
      const parsedData = JSON.parse(data);
      parsedData.push(content);
      writeNewNoteToJson(file, parsedData);
    }
  });
};


// This is used to spin up our local server
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);