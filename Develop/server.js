const express = require('express');
const routes = require('./routes');
const {Sequelize} = require('sequelize');

const sequelize = new Sequelize('ecommerce_db', 'root', 'root321', {
  host: 'localhost',
  dialect: 'mysql'
})

console.log(sequelize)

// import sequelize connection

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);





// sync sequelize models to the database, then turn on the server
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
