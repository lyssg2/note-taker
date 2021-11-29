// Dependencies
const express = require("express");
const path = require("path");
const fs = require("fs")

// Express listening on port
const app = express();
const PORT = process.env.PORT || 3001

// Sets up data parsing using Express
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// Requires routes
require('./routes/apiRoutes')(app)
require('./routes/htmlRoutes')

// Directs to use public folder
app.use(express.static("public"))

// Server listening on port
app.listen(PORT, () => console.log(`Server started on port ${PORT}`))