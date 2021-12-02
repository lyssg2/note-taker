// Required dependencies
const express = require('express')
const router = express()
const notes = require('./notes')

// Middleware!!!
router.use('/notes', notes)
router.use('/api/notes', notes)

module.exports = router;