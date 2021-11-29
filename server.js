// Dependencies
const express = require("express");
const path = require("path");

// Express listening on port
const app = express();
const PORT = process.env.PORT || 3001

// Sts up data parsing using Express
app.use(express.static("public"))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
let notes = require("./db/db.json")

// Server listening on port
app.listen(PORT, () => console.log(`Server started on port ${PORT}`))