const express = require('express');
const router = express.Router();
const ActionController = require('./controller/actionController');





// hospital registration
router.post('/hospitalRegistration', ActionController.hospitalRegistration);

module.exports = router;