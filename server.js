const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3001;

//single source of truth
//modify this if someone creates or deletes a note with a write file
//will store here
const notes = []

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'index.html'))
//   })

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'))
})

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'))
})

app.get('/api/notes', (req, res) => {
    const newNote = req.body;
    // Using a RegEx Pattern to remove spaces from newCharacter
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    // new.routeName = newNote.name.replace(/\s+/g, '').toLowerCase();
    // console.log(newNote);
  
    // characters.push(newNote);
    // res.json(newCharacter);
    res.sendFile(path.join(__dirname, 'table.html'))
})

// app.post('/linktohtml', (req, res) => {
//     if ( reservations.length < 6) {
//         reservations.push(req.body)
//         res.json(req.body)
//     } else {
//         waitlist.push(req.body)
//         res.json(req.body)
//     }
// });

app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));