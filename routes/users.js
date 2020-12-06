const express = require('express');
const router = express.Router();
const { check } = require('express-validator');

const auth = require('../middleware/auth');
const userController = require('../controllers/users');

// @route POST api/users
// @desc Register user
// @access Public
router.post('/', [
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Please enter a password with 6 or more characters').isLength({ min: 6 })
], userController.registerUser);

// @route DELETE api/users
// @desc Delete user
// @access Private
router.delete('/', auth, userController.deleteUser);

module.exports = router;