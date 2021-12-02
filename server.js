// Dependencies
const express = require("express");
const notes = require('./routes/notes');
const index = require('./routes');
const path = require('path')
const api = require('./routes/index')

// Express listening on port
const app = express();
const PORT = process.env.PORT || 5000

// Sets up data parsing using Express
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// Requires routes
app.use('/api', notes);
app.use('/', index);

// Directs to use public folder
app.use(express.static("public"))
app.use('api', api)

// Get requests
app.get('/', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/index.html'))
)

app.get('/notes', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/notes.html'))
)

// Handles invalid user requests
app.get('*', (req, res) =>
    res.sendFile(path.join(__dirname, 'public/index.html'))
);

// Server listening on port
app.listen(PORT, () => console.log(`Server started on port ${PORT}`))