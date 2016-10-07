var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/express-api');

var db = mongoose.connection;
db.on('error', console.log);
db.once('open', function() {
  console.log('success!')
});
