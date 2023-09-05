// import our database connection from config.js
const sequelize = require('../config/connection');

// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');


// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init({
  product_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.DECIMAL,
    allowNull: false,
  },
  stock: {
    type: DataTypes.INTEGER
  },
  category_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  }
},
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'Product',
  }
);

module.exports = Product;
