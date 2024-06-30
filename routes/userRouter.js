var express = require('express');
var userRouter = express.Router();

const UserRepository = require('../src/repository/userRepository')
const UserService = require('../src/service/userService')
const UserHandler = require('../src/handler/userHandler')

const userRepository = new UserRepository();
const userService = new UserService(userRepository);
const userHandler = new UserHandler(userService);

/* GET home page. */
userRouter.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

userRouter.get('/get', userHandler.getAll);
userRouter.post('/register', userHandler.register);
userRouter.post('/login', userHandler.login);

module.exports = userRouter;
