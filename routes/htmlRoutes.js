// Required dependencies
const router = require('express').Router()
const newData = require('../db/newData')

// Get request to display notes
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'))
})

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
})

// Returns to homepage if no matching route is found
router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
})



module.exports = router;