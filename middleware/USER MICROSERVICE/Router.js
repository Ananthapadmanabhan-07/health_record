const express = require('express');
const router = express.Router();
const ActionController = require('./controller/actionController');
const jwtMiddleware = require('./middleware/jwtmiddleware');



router.get('/getuser',jwtMiddleware, ActionController.getAllUsers);
// add user
router.post('/adduser', ActionController.adduser);

// user login
router.post('/login', ActionController.userLogin);

module.exports = router;