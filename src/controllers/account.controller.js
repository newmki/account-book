/**
 * Import modules
 */
const { accountService } = require("../services");

/**
 * Controllers
 */
const createAccount = (req, res) => {
  const ret = accountService.createAccount(req.body);

  res.send(ret);
};

const getAccounts = (req, res) => {
  const ret = accountService.getAccounts(req.query.tag);

  res.send(ret);
};

const deleteAccounts = (req, res) => {
  const ret = accountService.deleteAccounts();

  res.send(ret);
};

const createAccountLog = (req, res) => {
  const ret = accountService.createAccountLog(req.params.accountId, req.body);

  res.send(ret);
};

const getAccount = (req, res) => {
  const ret = accountService.getAccount(req.params.accountId);

  res.send(ret);
};

const updateAccount = (req, res) => {
  const ret = accountService.updateAccount(req.params.accountId, req.body);

  res.send(ret);
};

const deleteAccount = (req, res) => {
  const id = req.params.accountId;
  const ret = accountService.deleteAccount(id);

  res.send(ret);
};

const getAccountHistory = (req, res) => {
  const ret = accountService.getAccountHistory(
    req.params.accountId,
    req.query.tag
  );

  res.send(ret);
};

const deleteAccountHistory = (req, res) => {
  const ret = accountService.deleteAccountHistory(req.params.accountId);

  res.send(ret);
};

module.exports = {
  createAccount,
  getAccounts,
  deleteAccounts,
  createAccountLog,
  getAccount,
  updateAccount,
  deleteAccount,
  getAccountHistory,
  deleteAccountHistory,
};
