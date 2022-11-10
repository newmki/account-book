/**
 * Import modules
 */
const app = require('./app');
const config = require('./config/config');

/**
 * Constants
 */
const port = config.port


/**
 * Start server
 */
app.listen(port, function() {
    console.log(`server port: ${port}`);
})
