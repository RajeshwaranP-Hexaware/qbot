'use strict';

const express = require('express');
const bodyParser = require('body-parser');
let action = require('./lib/action');

const app = express();
const port = process.env.PORT || 6000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/', (req, res) => {
  console.log('ACTION NAME ', req.body.result.action);
  return action[req.body.result.action](req, res);
});

app.listen(port, function () {
  console.log('AGENT is running my app on  PORT: ' + port);
});