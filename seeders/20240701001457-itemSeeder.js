'use strict';

const { item } = require('../models');

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
    await item.bulkCreate([
      {
        brand: 'Sanco Premium',
        type: 'Minyak Goreng',
        stock: 10,
        price: 25000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        brand: 'Coca Cola',
        type: 'Softdrink',
        stock: 17,
        price: 12000,
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
    await item.destroy({
      where: {},
      truncate: true
    });
  }
};
