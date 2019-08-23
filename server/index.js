const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

// Datos sobre los teléfonos (mock data). Están definidos en un archivo JSON.
const phonesData = require('./phones.json');

app.get('/api/phones', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(phonesData));
});

app.listen(3001, () =>
  console.log('Express server is running on localhost:3001')
);