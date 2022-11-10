/**
 * Import modules
 */
const express = require('express');

/**
 * Objects
 */
const router = express.Router();

/**
 * Middlewares
 */
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});

/**
 * Routes
 */
router.get('/', function(req, res) {
  res.send('Server is running.');
});

module.exports = router;
