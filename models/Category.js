const sequelize = require('../config/connection')

const { DataTypes, Model } = require('sequelize')


class Category extends Model {}

Category.init({
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  }
},
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'Category',
  }
);

module.exports = Category;
