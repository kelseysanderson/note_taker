const fs = require('fs');
const db = require("../db/db.json");



module.exports = (app) => {
    app.get('/api/notes', (req, res) => {
        let data = fs.readFileSync('./db/db.json'); 
        let notes = JSON.parse(data);
        console.log(notes);
        res.json(notes);
    });

    app.post('/api/notes', (req, res) => {
            let newNotes = req.body;
            db.push(newNotes);
            let notesJSON = JSON.stringify(db)
            fs.writeFile('./db/db.json', notesJSON, function (err) {
                if (err) return console.log(err); 
        });
    });
}


   
