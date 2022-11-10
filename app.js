/**
 * Import packages
 */
const express = require('express');
const cors = require('cors');


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
app.use(cors());

/**
 * Routes
 */
app.use('/', health);
app.use('/health', health);

/**
 * Start server
 */
app.listen(port, function() {
    console.log(`server port: ${port}`);
})
