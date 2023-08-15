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

//-- ------------------

router.delete('/notes/:id', (req, res) => {
  const noteId = parseInt(req.params.id);

  // Find the index of the note with the specified ID
  const noteIndex = notes.findIndex(note => note.id === noteId);

  if (noteIndex === -1) {
    return res.status(404).json({ error: 'Note not found.' });
  }

  // Remove the note from the array
  notes.splice(noteIndex, 1);

  res.status(204).end(); // 204 No Content - Successful deletion
});


module.exports = router;
