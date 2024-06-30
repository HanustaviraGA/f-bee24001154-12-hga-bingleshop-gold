class OrderService{
    constructor(orderRepository, itemRepository, userRepository){
        this.orderRepository = orderRepository;
        this.itemRepository = itemRepository;
        this.userRepository = userRepository;
    }

    async getAll(){
        return await this.orderRepository.getAll();
    }

    async addOrder(body){
        const itemdata = await this.itemRepository.getItemById(body.id_item);
        if(parseFloat(itemdata.stock) > 0){   
            const userdata = await this.userRepository.getByEmail(body.email);
            let data = {
                transaction_code: this.generateRandomCode(),
                id_user: userdata.id,
                id_item: body.id_item,
                amount: body.amount,
                product_price: itemdata.price,
                total_price: parseFloat(itemdata.price) * body.amount,
                status: "1"
            }
            // Update stock in item
            await this.itemRepository.updateStock({id: itemdata.id, stock: itemdata.stock - body.amount});
            await this.orderRepository.createOrder(data);
            return data;
        }else{
            return {status: 404, message: "Item ran out of stock"}
        }
    }

    // Utility
    generateRandomCode() {
        const prefix = 'BGL';
        const date = new Date();
        const formattedDate = `${String(date.getDate()).padStart(2, '0')}${String(date.getMonth() + 1).padStart(2, '0')}${String(date.getFullYear()).slice(-2)}`;
        const uniqueCode = this.generateUniqueCode(5);
        return `${prefix}-${formattedDate}-${uniqueCode}`;
    }

    generateUniqueCode(length) {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        let result = '';
        for (let i = 0; i < length; i++) {
          const randomIndex = Math.floor(Math.random() * characters.length);
          result += characters[randomIndex];
        }
        return result;
    }
}

module.exports = OrderService;