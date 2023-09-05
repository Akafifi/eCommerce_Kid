const sequelize = require('../config/connection.js');


const { Model, DataTypes } = require('sequelize');


class Tag extends Model {}

Tag.init(
  {
    // define columns
    tag_name: DataTypes.INTEGER,
    allowNull: true,
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
  }
);

module.exports = Tag;
