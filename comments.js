// Create Web server with Express
const express = require('express');
const app = express();
app.use(express.json());

// Create array of comments
const comments = [
  { id: 1, author: 'John', text: 'Hello!' },
  { id: 2, author: 'Amy', text: 'Hi!' },
  { id: 3, author: 'Dave', text: 'Howdy!' }
];

// Get all comments
app.get('/comments', (req, res) => {
  res.send(comments);
});

// Get a comment by id
app.get('/comments/:id', (req, res) => {
  const comment = comments.find(c => c.id === parseInt(req.params.id));
  if (!comment) return res.status(404).send('The comment with the given ID was not found.');
  res.send(comment);
});
