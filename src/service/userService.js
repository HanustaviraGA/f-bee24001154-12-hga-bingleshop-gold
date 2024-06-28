class UserService{
    constructor(userRepository){
        this.userRepository = userRepository;
    }

    async getAll(){
        return await this.userRepository.getAll();
    }

    async register(body){
        const check = await this.userRepository.getByEmail(body.email);
        if(check){
            return {status: 500, message: "User already exist"}
        }else{
            await this.userRepository.createUser(body);
            return {status: 201, message: "User created"}
        }
    }
}

module.exports = UserService;