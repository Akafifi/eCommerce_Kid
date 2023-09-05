const sequelize = require('../config/connection')
const { DataTypes, Model } = require('sequelize')

class ProductTag extends Model {}

ProductTag.init({
    // define columns
    product_id: DataTypes.INTEGER,
    allowNull: false
  }, {
    tag_id: DataTypes.INTEGER,
    allowNull: false,
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'ProductTag',
  }
);

module.exports = ProductTag;
