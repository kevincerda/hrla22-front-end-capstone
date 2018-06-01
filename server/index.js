const express = require('express');
const parser = require('body-parser');
const path = require('path');
const db = require('../db/config/')

const app = express();

app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '/static')));

const PORT = 3000;

app.listen(PORT, (err) => {
  err ? console.log('Error connecting to server: ', err) : console.log('Successfully connected to server on port', PORT);
});