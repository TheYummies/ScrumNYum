const db = require('../modesl/stickiesModels');

const bcrypt = require('bcrypt');
const userController = {};

// verifyUser - Obtain username and password from the request body, locate the appropriate user in the database, and then authenticate the submitted password against the password stored in the database.

userController.verifyUser = (req, res, next) => {
  console.log('in userController.verifyUser');

  const { login_user, login_pw } = req.body;

  const query = `
  SELECT * 
  FROM users u
  WHERE u.id = ${login_user}
  `;

  db.query(query, [])
    .then((result) => {
      if (result.rows.length === 0) {
        console.log('no user in DB')
        return next('error in userController.verifyUser')
      } else {
        const resultID = result._id;
        // bcrypt
        //   .compare(login_user + login_pw, result.password)
          .then((result) => {
            // console.log(result);
            if (result === true) {
              res.locals._id = resultID;
              return next();
            } else {
              res.redirect('/signup');
            }
          })
          .catch((err) => {
            return next('error in userController.verifyUser');
          });
      }
    })
    .catch((err) => {
      return next('error in userController.verifyUser');
    });
};

module.exports = userController;
