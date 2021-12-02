// Dependencies
const express = require("express");
const app = express();
const path = require('path')
const api = require('./routes/index')

// Express listening on port
const PORT = process.env.PORT || 3000

// Sets up data parsing using Express
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// Directs to use public folder
app.use(express.static("public"))
app.use('/api', api)

// Get requests
app.get('/notes', (req, res) =>
    res.sendFile(path.join(__dirname, './public/notes.html'))
)

app.get('/', (req, res) =>
    res.sendFile(path.join(__dirname, './public/index.html'))
)

// Server listening on port
app.listen(PORT, () => console.log(`Server started on port ${PORT}`))