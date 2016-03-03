var express = require('express');
var app = express();

//app.use(express.static(__dirname + '/static'));
app.use(express.static('public'))

app.get('/', function (req, res) {

});

app.get('/pages', function (req, res) {
  res.json([
    {
      title: 'main title',
      content: 'Lorem ipsum 1'
    },
    {
      title: 'about title',
      content: 'Lorem ipsum 2'
    },
    {
      title: 'contact title',
      content: 'Lorem ipsum 3'
    }
  ]);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
