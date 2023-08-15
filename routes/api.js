const express = require('express');
const router = express.Router();

// Sample initial data for existing notes
let notes = [
  { id: 1, title: 'Note 1', text: 'This is the first note.' },
  { id: 2, title: 'Note 2', text: 'This is the second note.' },
];

// GET Route to retrieve existing notes
router.get('/notes', (req, res) => {
  res.json(notes);
});

// POST Route to create a new note
router.post('/notes', (req, res) => {
  const { title, text } = req.body;

  if (!title || !text) {
    return res.status(400).json({ error: 'Title and text are required.' });
  }

  const newNote = { id: notes.length + 1, title, text };
  notes.push(newNote);

  res.status(201).json(newNote);
});

module.exports = router;
