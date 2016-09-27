var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('Hello World');
})
app.get('/billie', function (req, res) {
  console.log('HELLO billie');
})

app.listen(3000,function(){
  console.log('running on port 3000...piz visit http://localhost:3000');
})
