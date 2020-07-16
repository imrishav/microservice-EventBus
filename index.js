const express = require('express');
const bodyParse = require('body-parser');
const axios = require('axios');
const app = express();
const { randomBytes } = require('crypto');
const cors = require('cors');
app.use(bodyParse.json());

app.use(cors());

app.post('/events', (req, res) => {
  const event = req.body;

  axios.post('http://localhost:4000/events', event);
  axios.post('http://localhost:4001/events', event);
  axios.post('http://localhost:4002/events', event);

  res.status(200).send({ status: 'OK' });
});

app.listen('4005', () => {
  console.log('Event Bus is Listenning on 4005');
});
