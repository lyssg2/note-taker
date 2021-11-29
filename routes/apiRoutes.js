// Required dependencies
const router = require('express').Router()
const newData = require('../db/newData')

// GET request for notes
router.get('/notes', (req, res) => {
    res.json(newData)
})

// POST request route
router.post('./api/notes', (req, res) => {
    let newNote = req.body
    notes.push(newNote)
    inputDB()
    console.log(`Successfully added new note: ${newNote.title}`)
})

// Retrieve note with specific title
router.get('/api/notes/:title', (req, res) => {
    res.json(notes[req.params.title])
})

// Retrieve note with specific id
router.get('/api/notes/:id', (req, res) => {
    res.json(notes[req.params.id])
})

// Deletes note with specific title
router.delete('/api/notes/:title', (req, res) => {
    notes.splice(req.params.title, 1)
    inputDB()
    console.log(`Successfully deleted note: ${req.params.title}`)
})

// Deletes note with specific id
router.delete('/api/notes/:id', (req, res) => {
    notes.splice(req.params.id, 1)
    inputDB()
    console.log(`Successfully deleted note: ${req.params.id}`)
})

// Updates database whenever file is added/deleted
let inputDB = () => {
    fs.writeFile("db/db.json", JSON.stringify(notes, '\t'), err => {
        if (err) throw err;
        return true;
    });
}

module.exports = router;