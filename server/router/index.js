const Router = require('express').Router();
const { ReviewCtrl } = require('../controllers/index')

Router.route('/reviews/:search')
  .get(ReviewCtrl.GET)

module.exports = {
  Router,
}