class UserHandler{
    constructor(userService){
        this.userService = userService;
        this.getAll = this.getAll.bind(this);
        this.register = this.register.bind(this);
        this.login = this.login.bind(this);
    }

    async getAll(req, res) {
        try {
            const result = await this.userService.getAll();
            // res.render('index', { title: 200 });
            res.status(200).send(result);
        } catch (error) {
            res.status(500).send(error.message);
        }
    }

    async login(req, res){
        const body = req.body;
        const createdUser = await this.userService.login(body);
        res.status(createdUser.status).send({
            message: createdUser.message
        });
    }

    async register(req, res){
        const body = req.body;
        const createdUser = await this.userService.register(body);
        res.status(createdUser.status).send({
            message: createdUser.message
        });
    }
}

module.exports = UserHandler;