'use strict'
const simple = require('../controllers/simple')
const models = require('../models');
const userController = require('../controllers/user');
const restaurantController = require('../controllers/restaurants');
const restaurantPinController = require('../controllers/restaurant_pins');
const conversationCardController = require('../controllers/conversation_cards');
module.exports = function (app, opts) {
  // Setup routes, middleware, and handlers
  app.get('/', simple)
  app.use('/users', userController);
  app.use('/restaurants', restaurantController);
  app.use('/restaurant_pins',restaurantPinController);
  app.use('/conversation_cards', conversationCardController);

}
