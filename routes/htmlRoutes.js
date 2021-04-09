//single source of truth
//modify this if someone creates or deletes a note with a write file
//will store here
const fs = require('fs');
const path = require('path');

module.exports = (app) => {

    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/index.html'))
    })

    app.get('/notes', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/notes.html'))
    })

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/index.html'))
    })
};

