class ItemService{
    constructor(itemRepository){
        this.itemRepository = itemRepository;
    }

    async getAllItem(){
        const item = await this.itemRepository.getAllItem();
        if(item){
            return {status: 200, data: item}
        }else{
            return {status: 404, message: "No item"}
        }
    }

    async getItemByBrand(body){
        const item = await this.itemRepository.getItemByBrand(body.brand);
        if(item){
            return {status: 200, data: item}
        }else{
            return {status: 404, message: "Item not found"}
        }
    }

    async createItem(body){
        const item = await this.itemRepository.getItemByBrandName(body.brand);
        if(item){
            return {status: 500, message: "Item already exist"}
        }else{
            await this.itemRepository.createItem(body);
            return {status: 201, message: "Item created"}
        }
    }
    
}

module.exports = ItemService;