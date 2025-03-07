const express = require('express');
const router = express.Router();
const controller = require('../controllers/accountController');

router.get('/balance', controller.getBalance);
router.get('/details', controller.getDetails);

module.exports = router;
