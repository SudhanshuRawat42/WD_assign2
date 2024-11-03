const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');

// Define user routes here
router.get('/', usersController.getAllUsers);
router.get('/:id', usersController.getUserById);
router.post('/', usersController.createUser); // Ensure createUser exists in usersController
router.put('/:id', usersController.updateUserById);
router.delete('/:id', usersController.deleteUserById);

module.exports = router;
