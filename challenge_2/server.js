require('dotenv').config();
var express = require('express');
var bodyParser = require('body-parser');
var generate = require('./middleware/generate');
var multer = require('multer');
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads');
  },
  filename: function (req, file, cb) {
    cb(null, 'input.json');
  }
});
var upload = multer({ storage: storage });

var app = express();
var port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(generate);

app.use(express.static('client'));

app.listen(port, () => { console.log(`Listening on port ${port}`) });

app.get('/', (req, res) => {
  console.log('Received GET request');
  res.sendFile(`${__dirname}/client/index.html`);
});

app.post('/', upload.single('file'), (req, res, next) => {
  console.log('Received POST request');
  res.send(req.csv);
});
