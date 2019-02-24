require('dotenv').config();
var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static('client'));

app.listen(port, () => {console.log(`Listening on port ${port}`)});

app.get('/', (req, res) => {
  console.log('Received GET request');
  res.sendFile(`${__dirname}/client/index.html`);
});

app.post('/generate', (req, res) => {
  console.log('Received POST request');
  var input = JSON.parse(req.body.input);
  res.send(`<link rel="stylesheet" href="styles.css"><main>${convert(input).join('<br>')} <br><a href='/'>Go Back</a></main>`);
});


var convert = function(obj) {
  var keys = Object.keys(obj); // retrieve all parent tree's keys
  keys.splice(keys.indexOf('children'), 1)
  keys = keys.join(',');

  var output = [];

  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  // add each value to the array
  // for each child
  // add each value to the array
  var checkChildren = function(child) {
    var vals = [];
    for(var key in child) { // add each value to array
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
  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

  checkChildren(obj);
  output.unshift(keys);
  return output;
}