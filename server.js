const exphbs = require('express-handlebars');
const hbs = exphbs.create({});
const routes = require('./controllers/home-routes');

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

