/**
 * Import packages
 */
const express = require('express');

/**
 * Import modules
 */
const healthRoute = require('./health.route');
const accountRoute = require('./account.route');

/**
 * Objects
 */
const router = express.Router();

/**
 * Routes
 */
const defaultRoutes = [
  {
    path: '/health',
    route: healthRoute,
  },
  {
    path: '/accounts',
    route: accountRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
