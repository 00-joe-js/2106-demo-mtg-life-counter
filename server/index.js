const path = require('path');
const express = require('express');
const app = express();
module.exports = app;

// Static file-serving middleware
app.use(express.static(path.join(__dirname, '..', 'public')));

// Sends our index.html (the "single page" of our SPA)
app.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, '..', 'client', 'index.html'));
});

// Error catching endware
app.use((err, req, res, next) => {
  console.error(err, typeof next)
  console.error(err.stack)
  res.status(err.status || 500).send(err.message || 'Internal server error.')
});
