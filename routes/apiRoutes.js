const fs = require('fs');
const db = require("../db/db.json");
const { nanoid } = require('nanoid');
const { send } = require('process');
const { response } = require('express');


module.exports = (app) => {
    app.get('/api/notes', (req, res) => {
        let data = fs.readFileSync('./db/db.json'); 
        let notes = JSON.parse(data);
        // console.log(notes);
        res.json(notes);
    });

    app.post('/api/notes', (req, res) => {
        //unique id
        const uniqId = nanoid(5);
        req.body.id = uniqId

        // push data to db
        let newEntry = req.body 
        let data = fs.readFileSync('./db/db.json'); 
        db.push(newEntry);
        // console.log(db)
        let notesStr= JSON.stringify(db);
        
        //write file and display.
        fs.writeFile('./db/db.json', notesStr, function (err) {
            if (err) return console.log(err); 
        });
        response.json(data)
    });

    app.delete('/api/notes/:id', function (req, res) {
        const clickedNote = req.params.id;
        console.log(db.length)
        console.log(clickedNote)
        for(var i = 0; i < db.length; i++) {
            console.log()
            if(db[i].id == clickedNote) {
                db.splice(i, 1);
                console.log(db)
                break;
            }
        }
        let notesStr= JSON.stringify(db);

        fs.writeFile('./db/db.json', notesStr, function (err) {
            if (err) return console.log(err); 
        });
        response.json(data)

    })
}


   
