var generate = function(req, res, next) {
  if (typeof req.body.input === 'string') {
    var obj = JSON.parse(req.body.input);
    var keys = Object.keys(obj);
    keys.splice(keys.indexOf('children'), 1)
    keys = keys.join(',');
    var output = [];

    var checkChildren = function(child) {
      var vals = [];
      for(var key in child) {
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

    checkChildren(obj);
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
          <form action="/" method="post">
            <textarea name="input" placeholder="Enter JSON data here..."></textarea>
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
  next();
}

module.exports = generate;