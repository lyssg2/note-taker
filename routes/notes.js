// Required dependencies
const express = require('express')
const router = express.Router()
let data = require('../db/db.json');
const { v4: uuidv4 } = require('uuid')
const fs = require('fs')


// GET request for notes
router.get('/', (req, res) => {
    res.json(data);
})

// POST request route
router.post('/', (req, res) => {
    const { title, text } = req.body
    if (req.body) {
        const newNote = {
            title,
            text,
            id: uuidv4(),
        }
        data.push(newNote)
        res.json(data)
    }
})

router.delete('/:id', (req, res) => {
    const found = data.some(obj => obj.id === req.params.id);
    if (found) {
        data = data.filter(obj => obj.id !== req.params.id);
        res.json(data);
    } else {
        res.status(400).json(data);
    };
});


module.exports = router;