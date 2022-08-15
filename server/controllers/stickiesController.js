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

stickiesController.createStickies = () => {
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

stickiesController.getStickies = () => {

}

stickiesController.updateStickies = () => {

}

stickiesController.deleteStickies = () => {

}

stickiesController.saveStickies = () => {

}
