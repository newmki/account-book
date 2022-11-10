/**
 * Import packages
 */
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

/**
 * Import modules
 */
const health = require('./health');

/**
 * Objects
 */
const app = express();

/**
 * Constants
 */
const port = 3000;

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
// For Health Check
app.use('/api/health', health);

// Default route
app.get("*", (req, res) => {
  res.send("PAGE NOT FOUND");
});

/**
 * Start server
 */
app.listen(port, function() {
    console.log(`server port: ${port}`);
})
