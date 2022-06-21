const router  = require("express").Router();
const homeRoutes = require('./home-routes.js')


router.get('/login', (req, res) => {
    res.render('login');
});


router.get('/homepage', (req, res) => {
    res.render('homepage');
});

router.get('/main', (req, res) => {
    res.render('main');
});

router.get('/starter', (req, res) => {
    res.render('starter');
});



module.exports = router;
