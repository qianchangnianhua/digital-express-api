// var mongoose = require('mongoose');
//
// mongoose.connect('mongodb://localhost:27017/express-api');
//
// var db = mongoose.connection;
// db.on('error', console.log);
// db.once('open', function() {
//   console.log('success!')
// });
var express = require('express');
var app = express();

app.post('/posts', function(req, res){
  console.log('hello');
});

app.listen(3000, function(){
  console.log('running on port 3000.....');
});
