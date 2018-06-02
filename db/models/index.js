const Sequelize = require('sequelize');
const db = require('../config');

const ProductList = Sequelize.define('product', {
  id: Sequelize.INTEGER,
  name: Sequelize.STRING
});

const Review = Sequelize.define('review', {
  id: Sequelize.INTEGER,
  customer_id: Sequelize.INTEGER,
  rating: Sequelize.INTEGER,
  title: Sequelize.STRING,
  date: Sequelize.STRING,
  review: Sequelize.STRING,
  helpful_count: Sequelize.INTEGER,
  product_id: Sequelize.INTEGER,
});

module.exports.ProductList = ProductList;
module.exports.Review = Review;