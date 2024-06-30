class ItemHandler{
    constructor(itemService){
        this.itemService = itemService;
        this.getItemByBrand = this.getItemByBrand.bind(this);
        this.createItem = this.createItem.bind(this);
    }

    async getItemByBrand(req, res){
        const body = req.body;
        try {
            const result = await this.itemService.getItemByBrand(body);
            res.status(200).send(result);
        } catch (error) {
            res.status(500).send(error.message);
        }
    }

    async createItem(req, res){
        const body = req.body;
        const createdItem = await this.itemService.createItem(body);
        res.status(createdItem.status).send({
            message: createdItem.message
        });
    }
}

module.exports = ItemHandler