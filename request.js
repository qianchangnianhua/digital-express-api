var express = require('express');
var  app = express();

app.get('/posts', function(req, res) {
  res.send('GET /posts')
  console.log('GET /posts')
})
app.get('/posts/:id', function(req, res) {
  res.send('GET /posts/:id')
  console.log('GET /posts/:id')
})
app.put('/posts/:id', function(req, res) {
  res.send('PUT /posts/:id')
  console.log('PUT /posts/:id')
})
app.post('/posts/', function(req, res) {
  res.send('POST /posts/')
  console.log('POST /posts')
})
app.delete('/posts/:id', function(req, res) {
  res.send('DELETE /posts/:id')
  console.log('DELETE /posts/:id')
})

app.listen(3000, function() {
  console.log('running on port 3000')
})
