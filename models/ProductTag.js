const sequelize = require('../config/connection')
const { DataTypes, Model } = require('sequelize')

class ProductTag extends Model {}

ProductTag.init({
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    product_id: { 
      type: DataTypes.INTEGER,
      references: {
        model: 'Product',
        key: 'id',
      },
  },
    tag_id: {
      type: DataTypes.INTEGER,
      references: {
      model: 'Tag',
      key: 'id',
    }
  },
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
