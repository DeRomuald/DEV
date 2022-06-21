const exphbs = require('express-handlebars');
const hbs = exphbs.create({});
const routes = require('./controllers/home-routes');
const express = require('express');
const app = express();
const path = require('path');

const PORT = process.env.PORT || 3001;

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

/* app.engine('handlebars', handlebars({
    layoutsDir: __dirname + '/views/layouts',
})); */

app.get('/', function (req, res) {
    res.render('main', { layout: 'index' });
})

app.use(express.static(path.join(__dirname, 'public')));
app.listen(PORT, () => console.log('listening on 3001'))

