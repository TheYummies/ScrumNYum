const express = require('express');
const router = express.Router();
// import necessary controllers

router.get('/', (req, res) => {
  return res.status(200).json({ })
});

module.exports = router;