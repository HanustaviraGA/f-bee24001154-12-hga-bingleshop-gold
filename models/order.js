'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  order.init({
    transaction_code: DataTypes.STRING,
    id_user: DataTypes.INTEGER,
    id_item: DataTypes.INTEGER,
    amount: DataTypes.FLOAT,
    product_price: DataTypes.FLOAT,
    total_price: DataTypes.FLOAT,
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'order',
  });
  return order;
};