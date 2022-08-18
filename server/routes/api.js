const express = require('express');
const router = express.Router();

// import necessary controllers
const workspacesController = require('../controllers/workspacesController.js');
const stickiesController = require('../controllers/stickiesController.js');

// WORKS
router.post('/workspaces', workspacesController.addWorkspace, workspacesController.findWorkspaceID, (req, res) => {
  console.log('end of addWorkspace Route')
  return res.status(200).send();
})

// WORKS
router.delete('/workspaces', workspacesController.deleteWorkspace, (req, res) => {
  console.log('end of deleteWorkspace Route')
  return res.status(200).send();
})

// WORKS
// DO WE HAVE ANY REQUEST TO JUST THE /API ENDPOINT?? - ASK JAVI AND AUTUMN
// router.get('/workspaces', workspacesController.getWorkspaces, (req, res) => {
//   return res.status(200).json({ workspaces: res.locals.workspaces });
// });


/*

STICKIES ROUTERS

*/
// WORKS
router.post('/stickies', stickiesController.createStickies, (req, res) => {
  console.log('end of create stickies route');
  return res.status(200).send();
  // return res.status(200).json({ newStickie: res.locals.newStickie });
})

// WORKS
router.get('/stickies', stickiesController.getStickies, (req, res) => {
  console.log('end of getStickies Route')
  return res.status(200).json({ stickies: res.locals.stickies });
});

router.patch('/stickies', stickiesController.updateStickies, (req, res) => {
  console.log('end of updateStickies Route')
  return res.status(200).send();
})

// WORKS
router.delete('/stickies', stickiesController.deleteStickies, (req, res) => {
  console.log('end of deleteStickies Route')
  return res.status(200).send();
})

module.exports = router;