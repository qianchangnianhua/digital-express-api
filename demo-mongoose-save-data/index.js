var express = require('express');

var app = express();
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/express-api');

var db = mongoose.connection;
db.on('error', console.log);
db.once('open', function() {
  console.log(' success!')
});

var Schema = mongoose.Schema;

var PostSchema = new Schema(
  {
    title: String,
    content: String
  }
);

var Post = mongoose.model('Post', PostSchema);



app.post('/posts', function(req, res){
  console.log('run post.save()');
  var post = new Post({title:"myTitle", content: "myConent"})
  post.save(function(err){
    if(err) return console.log(err);
    console.log('saved');
  });
});

app.listen(3000, function(){
  console.log('running on port 3000.....');
});

// var express = require('express');
// var app = express();
// var mongoose = require('mongoose');
//
// mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://localhost:27017/express-api');
//
// var db = mongoose.connection;
// db.on('error', console.log);
// db.once('open', function() {
//   console.log('success!')
// });
//
// // db.once('open', function() {
// //   var post = new Post({title: 'mongoose usage'});
// //   post.save(function(err){
// //     if(err) console.log(err);
// //   })
// //   console.log('success!');
// // });
//
//
// var Post = require('./models/post');
//
//
//
//
//
// app.post('/posts', function(req, res){
//   var post = new Post({title:'myTitle',content:'myContent'});
//   post.save(function(){
//     console.log('saved!');
//   })
// });
//
// app.listen(3000, function(){
//   console.log('running on port 3000.....');
// });
