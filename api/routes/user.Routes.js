const express = require('express')
const {resetCode} = require('../controllers/user.controller');
const userRoutes = express.Router();

userRoutes.post('/add',resetCode);

module.exports = userRoutes