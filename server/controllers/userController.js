const db = require('../models/models.js');

const userController = {};

// verifyUser - Obtain username and password from the request body, locate the appropriate user in the database, and then authenticate the submitted password against the password stored in the database.

userController.createUser = (req, res, next) => {
  console.log('in userController.verifyUser');
  const { username, password } = req.body;

  const query = `
  INSERT INTO users (id, password)  
  VALUES
  ($1, $2)
  `;

  db.query(query, [username, password])
    .then((response) => {
      res.locals.id = username;
    })
    .catch((err) => {
      return next({
        log: 'Express error handler caught unknown middleware error',
        status: 400,
        message: {
          err: 'error in userController.createUser - issue with user creation',
        },
      });
    });
};

userController.verifyUser = (req, res, next) => {
  console.log('in userController.verifyUser');

  const { username, password } = req.body;

  const query = `
  SELECT * 
  FROM users u
  WHERE u.id = $1
  `;

  db.query(query, [login_user])
    .then((result) => {
      if (result.rows.length === 0) {
        console.log('no user in DB');
        return next({
          log: 'Express error handler caught unknown middleware error',
          status: 400,
          message: {
            err: 'error in userController.verifyUser - login credentials incorrect',
          },
        });
      } else {
        console.log('check password');
        if ((result.rows[0].password = password)) {
          res.locals.id = resultID;
          return next();
        } else {
          res.redirect('/signup');
        }
      }
    })
    .catch((err) => {
      return next({
        log: 'Express error handler caught unknown middleware error',
        status: 400,
        message: {
          err: 'error in userController.verifyUser - login credentials incorrect',
        },
      });
    });
};

module.exports = userController;
