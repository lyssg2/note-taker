// Required dependencies
const express = require('express')
const router = express.Router()
const data = require('../db/db.json');
const { v4: uuidv4 } = require('uuid')
const fs = require('fs')
const path = require('path')

// GET request for notes
router.get('/', (req, res) => {

    fs.readFile('./db/db.json', 'utf8', (err, data) => {
        var parsed = JSON.parse(data)
        res.json(parsed);
    })
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
                console.log('parse datd', parsedData)
                res.json(parsedData)
                fs.writeFile('./db/db.json', JSON.stringify(parsedData, null, 4), (err) =>
                    err ? console.error(err) : console.log(`Successfully added new note: ${newNote.title}`)
                )
            }
        })
    }
})

module.exports = router;