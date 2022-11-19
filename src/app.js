/**
 * Import packages
 */
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const httpStatus = require("http-status");

/**
 * Import modules
 */
const routes = require("./routes/v1");
const ApiError = require("./utils/ApiError");

/**
 * Objects
 */
const app = express();

/**
 * Middlewares
 */
// parse json request body
app.use(express.json());

// cors
app.use(cors());
app.options("*", cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

/**
 * Routes
 */
// prefix: api
app.use("/api", routes);

// send back a 404 error for any unknown api request
app.use("*", (req, res) => {
  res.send("Not found");
});

module.exports = app;
