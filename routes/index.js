// Required dependencies
const express = require('express')
const app = express()
const notes = require('./notes')

// Middleware!!!
app.use('/notes', notes)
app.use('/api/notes', notes)

module.exports = app;