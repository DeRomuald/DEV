const { router } = require("express");
const homeRoutes = require('./home-routes.js')


router.get('/login', (req, res) => {
    res.render('login');
});


// router.get('/homepage', (req, res) => {
//     res.render('homepage');
// });

router.get('/main', (req, res) => {
    res.render('main');
});


module.exports = router;
