/**
 * Import packages
 */
const express = require("express");

/**
 * Import modules
 */
const accountController = require("../../controllers/account.controller");

/**
 * Objects
 */
const router = express.Router();

/**
 * Routes
 */
router
  .route("/")
  .post(accountController.createAccount)
  .get(accountController.getAccounts)
  .delete(accountController.deleteAccounts);

router
  .route("/:accountId")
  .get(accountController.getAccount)
  .patch(accountController.updateAccount)
  .delete(accountController.deleteAccount);

router
  .route("/:accountId/history")
  .post(accountController.createAccountLog)
  .get(accountController.getAccountHistory)
  .delete(accountController.deleteAccountHistory);

module.exports = router;
