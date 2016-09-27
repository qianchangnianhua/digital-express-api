var express = require('express')
var app = express()

app.get('/:name', function (req, res) {
  var username = req.params.name;
  var page = "<html>" +
              "<body>" +
              "<h1>" + username + "的购物车" + "</h1>" +
              "</body>" +
              "</html>"
  res.send(page);
})
app.post('/:name',function(req,res){
 res.send("a POST request received" + req.params.name)
})
app.get('/about.html', function (req, res) {
  var page = "<html>" +
              "<body>" +
              "<h1>About.html</h1>" +
              "</body>" +
              "</html>"
  res.send(page);
  console.log('HELLO billie');
})

app.listen(3000,function(){
  console.log('running on port 3000...piz visit http://localhost:3000');
})
