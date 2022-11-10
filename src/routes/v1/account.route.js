/**
 * Import packages
 */
const express = require('express');

/**
 * Import modules
 */
const accountController = require('../../controllers/account.controller');

/**
 * Objects
 */
const router = express.Router();

/**
 * Routes
 */
router
  .route('/')
  .post(accountController.createAccount)
  .get(accountController.getAccounts);

module.exports = router;
