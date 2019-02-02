'use strict'
const simple = require('../controllers/simple')
const configured = require('../controllers/configured')
const models = require('../models');
module.exports = function (app, opts) {
  // Setup routes, middleware, and handlers
  app.get('/', simple)
  app.get('/configured', configured(opts))
  //app.use('/users')
}
