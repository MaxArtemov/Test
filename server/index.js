var express = require('express');
var app = express();
const path = require('path');

//app.use(express.static(path.join('../'+ __dirname, 'public')))
// app.use('../', express.static('public'));
//pp.use('/static', express.static(__dirname + '/public'));
app.use(express.static('../public'));
app.get('*', function (req, res) {
  // and drop 'public' in the middle of here
  console.log(path.join(__dirname, '../public', 'index.html'))
  res.sendFile(path.join(__dirname, '../public', 'index.html'))
})

app.listen(3000,  () => {
  console.log('Example app listening on port 3000!');
});