// const { sequelize, DataTypes } = require('../config/postgres');
const { user } = require('../../models');

class UserRepository{
    constructor(){  }

    async getAll(){
      const userList = await user.findAll();
      return userList;
    }

    async getByEmail(email){
      return await user.findOne({ where: { email } });
    }

    async getByEmailPassword(email, password){
      return await user.findOne({ where: { email, password } });
    }

    async createUser(userdata) {
      const createdUser = await user.create({
        name: userdata.name,
        email: userdata.email,
        password: userdata.password
      });

      return createdUser;
    }
}

module.exports = UserRepository;