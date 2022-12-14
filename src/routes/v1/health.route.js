/**
 * Import packages
 */
const express = require('express');

/**
 * Import modules
 */
const healthController = require('../../controllers/health.controller');

/**
 * Objects
 */
const router = express.Router();

/**
 * Routes
 */
router
  .route('/')
  .get(healthController.getHealthCheck);

module.exports = router;
