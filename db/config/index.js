const Sequelize = require('sequelize');

const db = new Sequelize('adb', '', '', {
  host: 'localhost',
  dialect: 'postgres',
});

db.authenticate()
  .then(() => {
    console.log('Successfully connected to database');
  })
  .catch(err => {
    console.log('Unable to connect to the database', err);
  });

db.sync()

module.exports = {
  db: db
}