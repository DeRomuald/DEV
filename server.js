
//const routes = require('./controllers/');
const routes = require('./controllers/home-routes');
const express = require('express');
const path = require('path');
const session = require('express-session');
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});

const app = express();
const PORT = process.env.PORT || 3001;

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
    secret: 'Super secret secret',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};

app.use(session(sess));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(require('./controllers/'));

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening on 3001'));
});


//const hbs = exphbs.create({});

//const express = require('express');
//const app = express();
//const sequelize = require('../DEV/config/connections');


//const PORT = process.env.PORT || 3001;

//app.engine('handlebars', hbs.engine);
//app.set('view engine', 'handlebars');


/* app.get('/', function (req, res) {
    res.render('main', { layout: 'index' });

app.get('/', function (req, res) {
    res.render('main');
})

app.get('/starter', function (req, res) {
    res.render('starter');
});

app.get('/login', function (req, res) {
    res.render('login');
});

app.get('/homepage', function (req, res) {
    res.render('homepage');
}); */

//const session = require('express-session');

//const SequelizeStore = require('connect-session-sequelize')(session.Store);

/* const sess = {
    secret: 'Super secret secret',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
}; */

//app.use(session(sess));

//app.use(express.static(path.join(__dirname, 'public')));
//app.listen(PORT, () => console.log('listening on 3001'))

