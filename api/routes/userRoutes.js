const express = require('express');
const userController = require('../controllers/userController.js');
const auth = require('../middleware/auth');

const user = express.Router();

user.get('/', userController.getUsers);
user.get('/:userId', userController.getUser);
user.post('/', userController.createUser);
user.post('/login', userController.login);
user.put('/', userController.replaceUser);
user.patch('/', userController.editUser);
user.delete('/', userController.deleteUser);

user.get('/token/private', auth, (req, res) => {
    res.status(200).send({ message: 'You have access' });
});

module.exports = user;
