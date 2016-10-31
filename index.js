const express = require('express');

const app = express();

app.use(express.static(__dirname + '/views'));

app.get('/', function(req, res) {
    res.render('index.ejs');
});

app.listen(8080);