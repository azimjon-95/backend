const { Router } = require('express');

const users = Router();
const { getUsers, Login, Register, deleteUser, updateUser } = require('../controls/login');

users.get('/getUsers', getUsers);
users.post('/postLogin', Login);
users.post('/createUser', Register);
users.delete('/deleteUser', deleteUser);
users.put('/updateUser', updateUser);

module.exports = { users };