// caculator.js

// bring connect into our file
var connect = require('connect');

// load in the accounting module
var accounting = require('accounting');

// load in the url module to parse url parameters
var url = require('url');

// bring in the filesystem module
var fs = require('fs');

// instantiate our app from connect
var app = connect();

// make our calculate addition function
function calculator(req, res) {
  // grab the x and yfrom the url
// URL: http://localhost:3000/lab3.js?method=add&x=16&y=4
var queryString = url.parse(req.url, true).query;
var x= queryString.x;
var y= queryString.y;
if(queryString.method== 'add')
{


  var sum= parseFloat(x) + parseFloat(y);
    res.end( x + '+' + y +'=' + sum );
}
else if(queryString.method== 'multiply')

{
  var mul= parseFloat(x) * parseFloat(y);
  res.end( x + '*' + y +'=' + mul );
}
else if(queryString.method== 'subtract')
{

  var sub= parseFloat(x) - parseFloat(y);
  res.end(x + '-' + y + '=' + sub );
}
else if(queryString.method== 'divide')

{

  var div= parseFloat(x) / parseFloat(y);
  res.end(x + '/' + y + '=' + div );
}
else{
  res.end('error ');
}
}
app.use('/lab3.js', calculator)

// port 3000
app.listen(3000)

// spit out to the console telling us
// that the server is running
console.log('Connect running on port 3000')
