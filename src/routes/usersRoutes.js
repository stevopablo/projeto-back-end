const express = require('express');
const router = express.Router();
const userController = require('../Controller/userController');

router.get('/users', userController.getAllUsers);
router.post('/', userController.createUser);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);

module.exports = router;