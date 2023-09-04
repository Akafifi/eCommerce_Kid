const express = require('express');
const routes = require('./Develop/routes');
const sequelize = require('./Develop/config/connection')
const { Sequelize, DataTypes } = require('sequelize')

console.log(sequelize)

// import sequelize connection

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

const Category = sequelize.define('Category', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,

  }
})


const Product = sequelize.define('Product', {
  name: {
    type: DataTypes.STRING,
  },
  price: {
    type: DataTypes.DECIMAL,
    allowNull: false,
  },
  stock: {
    type: DataTypes.INTEGER
  },
  category_id: {
    tpye: DataTypes.INTEGER,
    allowNull: false,
  }
})





// sync sequelize models to the database, then turn on the server
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
