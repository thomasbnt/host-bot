const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/views'));

app.get('/', function(req, res) {
    res.render('views/index');
});

app.listen(8080);
