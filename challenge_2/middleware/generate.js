var fs = require('fs');

var generate = function (req, res, next) {

  new Promise((resolve, reject) => {
    return fs.readdir('./uploads', (err, files) => {
      if (err) {
        reject(err);
        console.log(err);
      } else {
        resolve(files);
      }
    })
  })
    .then((file) => {
      if (file.length) {
        fs.readFile((`./uploads/${file[0]}`), (err, data) => {
          var jsonStr = data.toString('utf8');
          if (typeof jsonStr === 'string') {
            var jsonObj = jsonStr.split('');
            jsonObj.splice(jsonStr.indexOf(';'), 1);
            jsonObj = jsonObj.join('');
            var jsonObj = JSON.parse(jsonObj);
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

            req.csv = `<!DOCTYPE html>
          <html>
            <head>
              <meta charset="utf-8">
              <title>CSV Report Generator</title>
              <link rel="stylesheet" href="styles.css">
            </head>
            <body>
              <h1>CSV Report Generator</h1>
              <main>
                <form action="/" method="post" enctype="multipart/form-data">
                  <label for="file">Choose a JSON file to convert:</label>
                  <br>
                  <input type="file" id="file" name="file" accept=".json">
                  <br>
                  <input type="submit" value="Submit">
                </form>
                <h1>CSV Report</h1>
                ${output.join('<br>')}
              </main>
              <script src="app.js"></script>
            </body>
          </html>`
          }

        })
      }
    })
    .then(() => {
      setTimeout(() => { next() }, 50);
    })
    .catch((err) => {
      console.log('Error:', err);
    });
}

module.exports = generate;