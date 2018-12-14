const express = require('express');
const catchErrors = require('express-catch-errors');

const router = express.Router();
const { list } = require('./python_libs.service');

router
  .route('/')
  .get(catchErrors(list));


module.exports = router;
