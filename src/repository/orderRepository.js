const { order } = require('../../models');

class OrderRepository{
    constructor(){  }

    async getAll(){
        const orderList = await order.findAll();
        return orderList;
    }
    
    async createOrder(orderdata) {
        const createdOrder = await order.create({
            transaction_code: orderdata.transaction_code,
            id_user: orderdata.id_user,
            id_item: orderdata.id_item,
            amount: orderdata.amount,
            product_price: orderdata.product_price,
            total_price: orderdata.total_price,
            status: orderdata.status
        });
  
        return createdOrder;
    }
}

module.exports = OrderRepository;