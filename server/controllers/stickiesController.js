const db = require('../models/models.js');

const stickiesController = {};

const createErr = (errInfo) => {
  const { method, type, err } = errInfo;
  return {
    log: `stickiesController.${method} ${type}: ERROR: ${
      typeof err === 'object' ? JSON.stringify(err) : err
    }`,
    message: {
      err: `stickiesController.${method}: Incorrect data received`,
    },
  };
};

stickiesController.createStickies = (req, res, next) => {
  const fields = ['id', 'description', 'snack_id', 'assigned_id', 'workspace_id'];
  const values = [];

  for (const field of fields) {
    if (Object.prototype.hasOwnProperty.call(req.body, field)) {values.push(req.body[field]);}
    else values.push('');
  }

  const query = 'INSERT INTO stickies (id, description, snack_id, assigned_id, workspace_id) VALUES ($1, $2, $3, $4, $5) RETURNING *';
  db.query(query, values)
    .then(() => {return next()})
    .catch((err) => {return next(
      createErr({
        method: 'createStickies',
        type: 'middleware error',
        err: err,
      })
    );
  });
}

// get all stickies and return that data
stickiesController.getStickies = (req, res, next) => {
  const query = 'SELECT * FROM stickies WHERE stickies.id = $1';
  db.query(query, req.body.id)
    .then((data) => {
      res.locals.workspace = data.rows;
      return next();
    })
    .catch((err) => {return next(
      createErr({
        method: 'getWorkspace',
        type: 'middleware error',
        err: err,
      })
    );
  });
}

// update a stickie and return that data
stickiesController.updateStickies = (req, res, next) => {
  const fields = ['id', 'description', 'snack_id', 'assigned_id', 'workspace_id'];
  const values = [];

  for (const field of fields) {
    if (Object.prototype.hasOwnProperty.call(req.body, field)) {values.push(req.body[field]);}
    else values.push('');
  }

  const query = 'UPDATE stickies SET (description, snack_id, assigned_id, workspace_id) WHERE stickies.id = $1';
  db.query(query, values)
    .then(() => {return next()})
    .catch((err) => {return next(
      createErr({
        method: 'updateStickies',
        type: 'middleware error',
        err: err,
      })
    );
  });
}

// delete a stickie but not returning anything
stickiesController.deleteStickies = (req, res, next) => {
  const query = 'DELETE FROM workspaces WHERE stickies.id = $1';
  db.query(query, req.body.id)
    .then(() => {return next()});
}
