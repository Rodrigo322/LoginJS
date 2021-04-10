const express = require('express');
const userControl = require('../controller/user');
const router = express.Router();

router.post('/user/login', userControl.login);
router.post('/user/create', userControl.create);

module.exports = router;