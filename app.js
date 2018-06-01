'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const dialogflow = require('dialogflow');

let action = require('./lib/action');
let service = require('./service/api');

const app = express();
const port = process.env.PORT || 6000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/', (req, res) => {
  console.log('ACTION NAME ', req.body.result.action);
  return action[req.body.result.action](req, res);
});

app.post('/dialogflow', (req, res) => {
  let data = req.body.data;
  service.callApi("https://api.api.ai/v1/query?v=20150910", "POST", data, "aa3c4bf166e14cdbaa1d46d3a3fbe4b4")
    .then(body => {
      console.log('SUCCESS FROM DILAOGFLOW ', JSON.stringify(body));
      return res.json(body);
    })
    .catch(err => {
      console.log('ERROR FROM DILAOGFLOW ', JSON.stringify(err));
      return res.json(err);
    })
});

app.listen(port, function () {
  console.log('AGENT is running my app on  PORT: ' + port);
});