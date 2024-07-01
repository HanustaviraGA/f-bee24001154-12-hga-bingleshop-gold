class OrderHandler{
    constructor(orderService){
        this.orderService = orderService;
        this.addOrder = this.addOrder.bind(this);
        this.updateOrder = this.updateOrder.bind(this);
    }

    async updateOrder(req, res){
        const body = req.body;
        const order = await this.orderService.updateOrder(body);
        res.status(200).send(order);
    }

    async addOrder(req, res){
        const body = req.body;
        const order = await this.orderService.addOrder(body);
        res.status(200).send(order);
    }
}

module.exports = OrderHandler