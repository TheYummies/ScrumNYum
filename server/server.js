const path = require('path');
const express = require('express');

const PORT = 3000;

const app = express();

// require routers
const apiRouter = require('./routes/api');

// serve static assets
app.use('/src', express.static(path.resolve(__dirname, '../src')));

// handle parsing request body
app.use(express.json());


app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});

module.exports = app;
