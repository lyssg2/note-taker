// Required dependencies
const express = require('express')
const router = express.Router()
const data = require('../db/db.json');
const { v4: uuidv4 } = require('uuid')
const fs = require('fs')
    // const util = require('util')
    // const readFromFile = util.promisify(fs.readFile)


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
        fs.readFile('./db/db.json', 'utf8', (err, data) => {
            if (err) {
                console.log('Please see error', err)
            } else {
                const parsedData = JSON.parse(data)
                parsedData.push(newNote)
                res.json(parsedData)
                fs.writeFile('./db/db.json', JSON.stringify(parsedData, null, 4), (err) =>
                    err ? console.error(err) : console.log(`Successfully added new note: ${newNote.title}`)
                )
            }
        })
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