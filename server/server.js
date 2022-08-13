const path = require('path');
const express = require('express');

// import controllers
const userController = require('./controllers/userController.js');

const PORT = 3000;

const app = express();

// serve static assets
app.use('/src', express.static(path.resolve(__dirname, '../src')));

// get routes
app.get(['/', '/login', '/signup'], (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, '../src/index.html'));
});

app.get(
  ['/listings', '/settings'],
  /*TO DO: INSERT MIDDLEWARE HERE*/ (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname, '../src/index.html'));
  }
);

// login to sign up

app.post('/login', userController.verifyUser, (req, res) => {
  res.redirect('/listings');
});

app.post(
  '/signup',
  /* TO DO: INSERT MIDDLEWARE */ (req, res) => {
    res.redirect('/listings');
  }
);

// local error handler
app.use('*', (req, res) => {
  return res.status(404).send('Not Found');
});

// global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error hath occured!' },
  };
  const errorObj = Object.assign(defaultErr, err);
  return res.status(errorObj.status).send(errorObj);
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});

module.exports = app;
