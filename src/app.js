/**
 * Import packages
 */
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const routes = require('./routes/v1');

/**
 * Import modules
 */

/**
 * Objects
 */
const app = express();

/**
 * Middlewares
 */
// cors
app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

/**
 * Routes
 */
app.use('/api', routes);

// Default route
app.get("*", (req, res) => {
  res.send("PAGE NOT FOUND");
});

module.exports = app;
