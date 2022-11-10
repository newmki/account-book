/**
 * Import modules
 */
const { accountService } = require('../services');

/**
 * Controllers
 */
const createAccount = (req, res) => {
  const account = accountService.createAccount(req.body);
  res.send(account);
} 

const getAccounts = (req, res) => {
  const accounts = accountService.getAccounts();
  res.send(accounts);
}

const getAccount = (req, res) => {
  const account = accountService.getAccountById(req.params.accountId);
  res.send(account);
}

module.exports = {
  createAccount,
  getAccounts,
  getAccount,
};
