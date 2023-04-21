const express = require('express');
const { inspect } = require('util');
// const useMongodb = require('./middlewares/use_mongodb');

const module1Router = require('./module_1/router');

require('dotenv').config();

const app = express();

app.use(express.json());

console.log('env', inspect(process.env));

// app.use(useMongodb);

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.use('/module_1', module1Router);

module.exports = app;
