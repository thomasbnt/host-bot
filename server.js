const express = require('express');
const app = express();
const colors = require('colors');

console.log('Serveur web start'.green);

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/views'));

app.get('/', function(req, res) {
    console.log('Un client demande la page index.'.red);
    res.render('pages/index');
});

app.listen(8080);
