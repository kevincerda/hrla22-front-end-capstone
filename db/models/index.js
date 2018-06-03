const Sequelize = require('sequelize');
const { db } = require('../config');

const Product = db.define('product', {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  }
},
{
  timestamps: false
});

const Review = db.define('review', {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  customer_name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  rating: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  date: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  review: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  helpful_count: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  product_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  verified: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
  }
},
{
  timestamps: false
});

Product.hasMany(Review);
Review.belongsTo(Product);

module.exports = {
  ProductList,
  Review,
}