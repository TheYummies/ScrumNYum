// might need to update models js file before this works
const db = require('../models/models.js');

const workspacesController = {};

const createErr = (errInfo) => {
  const { method, type, err } = errInfo;
  return {
    log: `workspacesController.${method} ${type}: ERROR: ${
      typeof err === 'object' ? JSON.stringify(err) : err
    }`,
    message: {
      err: `workspacesController.${method}: Incorrect data received`,
    },
  };
};

// adding workspace to workspace table but not returning anything
workspacesController.addWorkspace = (req, res, next) => {
  const query = 'INSERT INTO workspaces (id, workspace_password) VALUES ($1, $2)';
  db.query(query, [req.body.id, req.body.workspace_password])
    .then(() => {return next()});
}

// deleting workspace from workspace table but not returning anything
workspacesController.deleteWorkspace = (req, res, next) => {
  const query = 'DELETE FROM workspaces WHERE workspaces.id = $1';
  db.query(query, req.body.id)
    .then(() => {return next()});
}

// getting workspace from workspace table and returning it
workspacesController.getWorkspace = (req, res, next) => {
  const query = 'SELECT * from workspaces WHERE workspaces.id = $1';
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

// update workspace in workspace table but not returning anything
workspacesController.updateWorkspace = (req, res, next) => {

}
