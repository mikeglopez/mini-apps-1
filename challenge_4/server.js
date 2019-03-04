require('dotenv').config();
var express = require('express');
var app = express();
var port = process.env.PORT;

app.use(express.static('client/dist'));

app.listen(port, () => console.log(`Listening on port ${port}.`));