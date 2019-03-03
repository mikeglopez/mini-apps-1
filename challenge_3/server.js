require ('dotenv').config();
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var port = process.env.PORT;

app.use(express.static('public'));
app.use(bodyParser.json());

// app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => {console.log(`Listening on port ${port}`)});