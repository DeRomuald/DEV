const exphbs = require('express-handlebars');
const hbs = exphbs.create({});
const routes = require('./controllers/home-routes');
const express = require('express');
const app = express();
const path = require('path');

const PORT = process.env.PORT || 3001;

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');


app.get('/', function (req, res) {
    res.render('main', { layout: 'index' });
})

app.get('/starter', function (req, res) {
    res.render('starter');
});

app.get('/login', function (req, res) {
    res.render('login');
});

app.get('/homepage', function (req, res) {
    res.render('homepage');
});


app.use(express.static(path.join(__dirname, 'public')));
app.listen(PORT, () => console.log('listening on 3001'))

