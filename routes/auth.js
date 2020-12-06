const express = require('express');
const router = express.Router();
const { check } = require('express-validator');

const auth = require('../middleware/auth');
const authController = require('../controllers/auth');

// @route GET api/auth
// @desc Get authenticated in user
// @access Private
router.get('/', auth, authController.getAuthenticatedUser);

// @route POST api/auth
// @desc Authenticate a user
// @access Public
router.post('/', [
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Please enter a password with 6 or more characters').isLength({ min: 6 })
], authController.authenticateUser);

module.exports = router;