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

// Adding in Middleware
appendFile.use(express.json());
appendFile.use(express.urlencoded({ extended: true}));

appendFile.use(express.static("public"));