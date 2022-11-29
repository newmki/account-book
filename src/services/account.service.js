/**
 * Import modules
 */
const { Account } = require(`../models`);

/**
 * Utils
 */
const returnObject = (message, data = {}) => {
  return {
    message,
    data,
  };
};

const getAccountIndexById = (id) => {
  const index = Account.findIndex((value) => value.id === Number(id));

  return index;
};

const getAccountOrHistoryByTag = (Array, tag) => {
  const filtered = Array.filter((value) => value.tags.includes(tag));

  return filtered;
};

/**
 * Services
 */

/**
 * Create account
 * @param {Object} body
 * @returns {Object}
 */
const createAccount = (body) => {
  const {
    title,
    balance,
    tags,
    accountName,
    accountNumber,
    accountHistory,
    description,
  } = body;

  if (
    !title ||
    !balance ||
    !tags ||
    !accountName ||
    !accountNumber ||
    !accountHistory
  ) {
    return returnObject(`Wrong body`);
  }

  let account = {
    id: Account.length,
    title,
    balance,
    tags,
    accountName,
    accountNumber,
    accountHistory,
  };
  if (description) {
    account["description"] = description;
  }
  Account.push(account);

  return returnObject(`Account created`, account);
};

/**
 * Get accounts
 * @returns {Object}
 */
const getAccounts = (tag) => {
  if (tag === undefined) {
    return returnObject(`These are all accounts`, Account);
  }

  return returnObject(
    `These are ${tag} tag accounts`,
    getAccountOrHistoryByTag(Account, tag)
  );
};

/**
 * Delete all accounts
 * @returns {Object}
 */
const deleteAccounts = () => {
  Account.splice(0, Account.length);

  return returnObject(`Deleted all accounts`);
};

const getAccount = (id) => {
  /**
   * Get account by id
   * @param {Number} id
   * @returns {Object}
   */
  const index = getAccountIndexById(id);

  if (index === -1) {
    return returnObject(`Couldn't find account`);
  }

  return returnObject(`Found account`, Account[index]);
};

/**
 * Update account
 * @param {Number} id
 * @param {Object} body
 * @returns {Object}
 */
const updateAccount = (id, body) => {
  const index = getAccountIndexById(id);

  if (index === -1) {
    return returnObject(`Couldn't find account`);
  }
  const { title, balance, tags, accountName, accountNumber, description } =
    body;

  if (title) Account[index].title = title;
  if (balance) Account[index].balance = balance;
  if (tags) Account[index].tags = tags;
  if (accountName) Account[index].accountName = accountName;
  if (accountNumber) Account[index].accountNumber = accountNumber;
  if (description) Account[index].description = description;

  return returnObject(`Account is updated`, Account[index]);
};

/**
 * Delete account
 * @param {Number} id
 * @returns {Object}
 */
const deleteAccount = (id) => {
  const index = getAccountIndexById(id);

  if (index === -1) {
    return returnObject(`Couldn't find account`);
  }

  const deleteAccountObject = Account.splice(index, 1);

  return returnObject(`Account ${index} is deleted`, deleteAccountObject);
};

/**
 * Create account history
 * @param {Number} id
 * @returns {Object}
 */
const createAccountLog = (id, body) => {
  const index = getAccountIndexById(id);
  if (index === -1) {
    return returnObject(`Couldn't find account`);
  }
  const selectedAccount = Account[index];

  let history = selectedAccount.accountHistory;
  if (history === undefined) {
    return returnObject(`Couldn't find account history`);
  }

  // Calculate account balance
  if (body.type !== "출금" && body.type !== "입금") {
    return returnObject(`Wrong type. Put 입금 or 출금`);
  } else if (body.type === "출금") {
    selectedAccount.balance -= body.amount;
  } else if (body.type === "입금") {
    selectedAccount.balance += body.amount;
  }

  // Push History
  selectedAccount.accountHistory.push(body);
  history = selectedAccount.accountHistory;

  return returnObject(`It's history of account ${index}`, history);
};

/**
 * Get account history
 * @param {Number} id
 * @returns {Object}
 */
const getAccountHistory = (id, tag) => {
  const index = getAccountIndexById(id);
  if (index === -1) {
    return returnObject(`Couldn't find account`);
  }

  const history = Account[index].accountHistory;
  if (history === undefined) {
    return returnObject(`Couldn't find account history`);
  }

  if (tag === undefined) {
    return returnObject(`It's history of account ${index}`, history);
  }

  return returnObject(
    `It's history of account ${index} of ${tag} tag`,
    getAccountOrHistoryByTag(history, tag)
  );
};

/**
 * Delete account history
 * @param {Number} id
 * @returns {Object}
 */
const deleteAccountHistory = (id) => {
  const index = getAccountIndexById(id);
  if (index === -1) {
    return returnObject(`Couldn't find account`);
  }

  const history = Account[index].accountHistory;
  if (history === undefined) {
    return returnObject(`Couldn't find account history`);
  }

  Account[index].accountHistory.splice(0, history.length);
  return returnObject(`History of account ${index} is deleted`);
};

module.exports = {
  createAccount,
  getAccounts,
  deleteAccounts,
  getAccount,
  updateAccount,
  deleteAccount,
  createAccountLog,
  getAccountHistory,
  deleteAccountHistory,
};
