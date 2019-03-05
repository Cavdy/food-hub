const express = require('express');
const loginController = require('../controllers/Login');

const router = express.Router();

router.post('/', loginController.getLogin);
module.exports = router;
