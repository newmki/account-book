/**
 * Import modulest
 */
const express = require('express');
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
app.get('/', function(req, res) {
    res.send('hello world');
})

/**
 * Routes
 */
app.use('/health', health);

/**
 * start server
 */
app.listen(port, function() {
    console.log(`server port: ${port}`);
})
