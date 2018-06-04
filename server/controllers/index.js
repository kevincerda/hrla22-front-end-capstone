const Sequelize = require('sequelize');
const Promise = require('bluebird');
const { Product, Review } = require('../../db/models');

const ReviewCtrl = {
  'GET': (req, res) => {
    let query = {};
    if (typeof JSON.parse(req.params.search) === 'number') {
      query.product_id = req.params.search;
    }
    Review.findAll({ where: query, order: [['helpful_count', 'DESC']] })
      .then(data => res.status(200).send(data))
      .catch(err => res.status(404).send(err));
  }
};

module.exports = {
  ReviewCtrl,
}