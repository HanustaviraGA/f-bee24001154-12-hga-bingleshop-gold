const { item } = require('../../models');
const { Op } = require('sequelize');

class ItemRepository{
    constructor(){  }

    async getItemByBrand(brandname) {
        return await item.findAll({
            where: {
                brand: {
                    [Op.like]: `%${brandname}%`
                }
            }
        });
    }

    async getItemByBrandName(brand) {
        return await item.findOne({ where: { brand } });
    }

    async getItemById(id) {
        return await item.findOne({ where: { id } });
    }

    async createItem(itemdata){
        const createdItem = await item.create({
            brand: itemdata.brand,
            type: itemdata.type,
            stock: itemdata.stock,
            price: itemdata.price
        });
    
        return createdItem;
    }

    // Update
    async updateStock(itemdata) {
        const updatedItem = await item.update({
            stock: itemdata.stock
        }, {
            where: {
                id: itemdata.id
            }
        });
        return updatedItem;
    }
}

module.exports = ItemRepository;