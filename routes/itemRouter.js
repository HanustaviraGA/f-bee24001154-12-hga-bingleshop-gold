var express = require('express');
var itemRouter = express.Router();

const ItemRepository = require('../src/repository/itemRepository')
const ItemService = require('../src/service/itemService')
const ItemHandler = require('../src/handler/itemHandler')

const itemRepository = new ItemRepository();
const itemService = new ItemService(itemRepository);
const itemHandler = new ItemHandler(itemService);

itemRouter.get('/getitem', itemHandler.getItemByBrand);
itemRouter.post('/additem', itemHandler.createItem);

module.exports = itemRouter;