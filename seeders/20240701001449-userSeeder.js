'use strict';

const { user } = require('../models');
const crypto = require('crypto');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await user.bulkCreate([
      {
        name: 'Javid Namah',
        email: 'javid@binar.com',
        password: crypto.createHash('md5').update('binar123').digest("hex"),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Rabiatul Adawiah',
        email: 'abby@binar.com',
        password: crypto.createHash('md5').update('binar321').digest("hex"),
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await user.destroy({
      where: {},
      truncate: true
    });
  }
};
