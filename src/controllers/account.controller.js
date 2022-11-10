/**
 * Controllers
 */
const createAccount = (req, res) => {
  res.send('/api/accounts - POST');
} 

const getAccounts = (req, res) => {
  res.send('/api/accounts - GET');
}

module.exports = {
  createAccount,
  getAccounts,
};
