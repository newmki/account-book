/**
 * Controllers
 */
const getHealthCheck = (req, res) => {
  res.send('Server is running.');
} 

module.exports = {
  getHealthCheck,
};
