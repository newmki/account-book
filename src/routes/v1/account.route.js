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

router
  .route('/:accountId')
  .get(accountController.getAccount);

module.exports = router;
