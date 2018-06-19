const Sequelize = require("sequelize");
const Promise = require("bluebird");
const { Product, Review } = require("../../db/models");

const ReviewCtrl = {
  getById: (req, res) => {
    let query = {};
    query.product_id = req.params.search;
    Review.findAll({ where: query, order: [["helpful_count", "DESC"]] })
      .then(data => res.status(200).send(data))
      .catch(err => res.status(404).send(err));
  },
  getByName: (req, res) => {
    //req.params.name
    let query = {};
    query.name = req.params.name;
    Product.findAll({ where: query })
      .then(data => res.status(200).send(data))
      .catch(err => res.status(404).send(err));
  }
};

module.exports = {
  ReviewCtrl
};
