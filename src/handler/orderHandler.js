class OrderHandler{
    constructor(orderService){
        this.orderService = orderService;
        this.addOrder = this.addOrder.bind(this);
    }

    async addOrder(req, res){
        const body = req.body;
        const order = await this.orderService.addOrder(body);
        res.status(200).send(order);
    }
}

module.exports = OrderHandler