require ('dotenv').config();
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var port = process.env.PORT;
var dbConnection = require('./db');

app.use(express.static('public'));
app.use(bodyParser.json());

app.post('/f1', (req, res) => {
  dbConnection.query(`INSERT INTO users (id) VALUES (NULL)`, (err) => {
    if (err) {
      console.log('error:', err);
    }
  });
  res.status(201).end();
});

app.post('/f2', (req, res) => {
  var body = req.body;
  dbConnection.query(`UPDATE users SET name = '${body.name}', email = '${body.email}', password = '${body.password}' WHERE id = LAST_INSERT_ID()`, (err) => {
    if (err) {
      console.log('error:', err);
    }
  });
  res.status(201).end();
});

app.post('/f3', (req, res) => {
  var body = req.body;
  dbConnection.query(`UPDATE users SET addressLine1 = '${body.addressLine1}', addressLine2 = '${body.addressLine2}', city = '${body.city}', state = '${body.state}', zip = '${body.zip}', phone = '${body.zip}' WHERE id = LAST_INSERT_ID()`, (err) => {
    if (err) {
      console.log('error:', err);
    }
  });
  res.status(201).end;
});

app.post('/purchase', (req, res) => {
  var body = req.body;
  dbConnection.query(`UPDATE users SET creditCard = '${body.creditCard}', expiryDate = '${body.expiryDate}', CVV = '${body.CVV}', billingZip = '${body.billingZip}' WHERE id = LAST_INSERT_ID()`, (err) => {
    if (err) {
      console.log('error:', err);
    }
  });
  res.status(201).end();
});

app.listen(port, () => {console.log(`Listening on port ${port}`)});