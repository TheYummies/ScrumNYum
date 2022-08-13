const path = require('path');
const express = require('express');

const PORT = 3000;

const app = express();

// serve static assets
app.use('/src', express.static(path.resolve(__dirname, '../src')));

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});

module.exports = app;
