const express = require('express');
const parser = require('body-parser');
const path = require('path');
const helmet = require('helmet');
const { Router } = require('./router');
require('../db/models/');

const app = express();

app.use(helmet());
app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../static')));

app.use('/api', Router);

const PORT = 3000;

app.listen(PORT, (err) => {
  err ? console.log('Error connecting to server: ', err) : console.log('Successfully connected to server on port', PORT);
});