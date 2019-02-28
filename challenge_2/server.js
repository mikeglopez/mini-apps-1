require('dotenv').config();
var express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer();
// In case you omit the options object, the files
// will be kept in memory and never written to disk.

var app = express();
var port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('client'));

app.listen(port, () => { console.log(`Listening on port ${port}`) });

app.get('/', (req, res) => {
  console.log('Received GET request');
  res.sendFile(`${__dirname}/client/index.html`);
});


app.post('/', upload.single('file'), (req, res) => {
  console.log('Received POST request');
  var json = req.body.json; // JSON string
  var report = generate(json); // CSV formatted string
  res.send(report);
});

var generate = function (jsonStr) {
  if (typeof jsonStr === 'string') {
    var jsonObj = JSON.parse(jsonStr); // JSON object
    var keys = Object.keys(jsonObj);
    keys.splice(keys.indexOf('children'), 1)
    keys = keys.join(',');
    var output = [];

    var checkChildren = function (child) {
      var vals = [];
      for (var key in child) {
        if (key !== 'children') {
          if (typeof child[key] === 'string' || typeof child[key] === 'number') {
            vals.push(child[key]);
          }
        }
        if (key === 'children') {
          output.push(vals.join(','));
          if (Array.isArray(child.children) && child.children.length) {
            for (var i = 0; i < child.children.length; i++) {
              checkChildren(child.children[i]);
            }
          }
        }
      }
    }

    checkChildren(jsonObj);
    output.unshift(keys);
    output = output.join('\n');

    return output;
  }
}