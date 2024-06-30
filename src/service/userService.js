const crypto = require('crypto')

class UserService{
    constructor(userRepository){
        this.userRepository = userRepository;
    }

    async getAll(){
        return await this.userRepository.getAll();
    }

    async login(body){
        let hash = crypto.createHash('md5').update(body.password).digest("hex")
        const check = await this.userRepository.getByEmailPassword(body.email, hash);
        if(check){
            return {status: 200, message: "Login successfull"}
        }else{
            return {status: 500, message: "Login failed"}
        }
    }

    async register(body){
        const check = await this.userRepository.getByEmail(body.email);
        if(check){
            return {status: 500, message: "User already exist"}
        }else{
            let hash = crypto.createHash('md5').update(body.password).digest("hex")
            let data = {name: body.name, email: body.email, password:hash}
            await this.userRepository.createUser(data);
            return {status: 201, message: "User created"}
        }
    }
}

module.exports = UserService;