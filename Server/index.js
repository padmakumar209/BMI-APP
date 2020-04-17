// Express App Setup
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Express route handlers

app.post('/bmi/:weight/:height', async (req, res) => {
  const weight = parseInt(req.params.weight);
  const height = parseInt(req.params.height);
  let heightInM = height / 100;
  const bmi = (weight / (heightInM * heightInM)).toFixed(2);
  res.send({ bmi: bmi });
});

app.listen(5000, err => {
  console.log('Listening');
});