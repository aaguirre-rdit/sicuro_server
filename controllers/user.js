'use strict';

const express = require('express');
const models = require('../models');

const router = express();

router.get('/', async(req, res, next) => {
  res.send('users API');
});
module.exports = router;
