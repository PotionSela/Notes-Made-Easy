// Express import
const express = require("express");
// File system import
const fs = require("fs");
// Path import
const path = require("path");
// Healper method for generating unique ids
const uniqid = require("uniqid");

// Port
const PORT = process.env.PORT || 3001;

// This will create a new app with express
const app = express();

// Adding in Middleware
appendFile.use(express.json());
appendFile.use(express.urlencoded({ extended: true}));

appendFile.use(express.static("public"));

// Get route which sends back the notes.html page
app.get("/notes", (req, res) => 
    res.sendFile(path.join(__dirname, "Develop/public/notes.html"))
);

// Get route which sends back the index.html page
app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "Develop/public/index.html"))
);



app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
  );