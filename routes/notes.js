// Required dependencies
const express = require('express')
const router = require('express').Router()
let data = require('../db/db.json');
const { v4: uuidv4 } = require('uuid')
const fs = require('fs')
const util = require('util')
const readFromFile = util.promisify(fs.readFile)


// GET request for notes
router.get('/', (req, res) => {
    readFromFile('./db/db.json')
        .then((data) => res.json(JSON.parse(data)))
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
        fs.readFile(data, 'utf8', (err, data) => {
            if (err) {
                console.log('Please see error', err)
            } else {
                const parsedData = JSON.parse(data)
                parsedData.push(newNote)
                res.json(parsedData)
                fs.writeFile(data, JSON.stringify(parsedData, null, 4), (err) =>
                    err ? console.error(err) : console.log(`Successfully added new note: ${newNote.title} to ${data}`)
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