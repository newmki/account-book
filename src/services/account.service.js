/**
 * Import modules
 */
const { Account } = require('../models');

/**
 * Services
 */

/**
 * Create account
 * @param {Object} accountBody
 * @returns {Object}
 */
const createAccount = (accountBody) => {
  accountBody['id'] = Account.length;
  Account.push(accountBody);
  return accountBody;
}

/**
 * Get accounts
 * @returns {Array}
 */
const getAccounts = () => {
  return Account;
};

const getAccountById = (id) => {
  if (id >= Account.length) {
    return {}
  }
  return Account[id];
}

module.exports = {
  createAccount,
  getAccounts,
  getAccountById,
};
