var express = require('express');
var orderRouter = express.Router();

const OrderRepository = require('../src/repository/orderRepository')
const OrderService = require('../src/service/orderService')
const OrderHandler = require('../src/handler/orderHandler')

// Need item & user repository to define item's data
const ItemRepository = require('../src/repository/itemRepository')
const UserRepository = require('../src/repository/userRepository')

const orderRepository = new OrderRepository();
const itemRepository = new ItemRepository();
const userRepository = new UserRepository();

const orderService = new OrderService(orderRepository, itemRepository, userRepository);
const orderHandler = new OrderHandler(orderService);

orderRouter.post('/addorder', orderHandler.addOrder);

module.exports = orderRouter;