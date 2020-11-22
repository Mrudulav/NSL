// require express
var express = require('express');
var path    = require('path');

// create our router object
var router = express.Router();

// export our router
module.exports = router;

// route for our homepage
router.get('/', function(req, res) {
  res.render('pages/home');
});

// route for our attackmap
router.get('/attackmap', function(req, res) {
  res.render('pages/attackmap');
});
//route for our GIR page

router.get('/gir', function(req, res) {
  res.render('pages/gir');
});

//route for our AMT page

router.get('/amt', function(req, res) {
  res.render('pages/amt');
});

//route for our TMP page

router.get('/tmp', function(req, res) {
  res.render('pages/tmp');
});

//route for our Abstract page
router.get('/abstract', function(req, res) {
  res.render('pages/abstract');
});

//route for our Psuedocode page
router.get('/code', function(req, res) {
  res.render('pages/code');
});


//route for our supporting artifacts page
router.get('/sa', function(req, res) {
  res.render('pages/sa');
});
//route for our Tools page
router.get('/tools', function(req, res) {
  res.render('pages/tools');
});

//route for our preparation page
router.get('/prep', function(req, res) {
  res.render('pages/prep');
});
//route for our engage page
router.get('/engage', function(req, res) {
  res.render('pages/engage');
});
//route for our presence page
router.get('/presence', function(req, res) {
  res.render('pages/presence');
});
//route for our consequence page
router.get('/consequence', function(req, res) {
  res.render('pages/consequence');
});
// route for our about page
router.get('/about', function(req, res) {
  var users = [
    { name: 'abc', email: 'holly@scotch.io', avatar: 'http://placekitten.com/300/300'},
    { name: 'def', email: 'chris@scotch.io', avatar: 'http://placekitten.com/400/400'},
    { name: 'ghi', email: 'Ado@scotch.io', avatar: 'http://placekitten.com/500/500'},
    { name: 'jfk', email: 'Samantha@scotch.io', avatar: 'http://placekitten.com/700/700'}
  ];

  res.render('pages/about', { users: users });
});

router.get('/contact', function(req, res) {
  res.render('pages/contact');
});

router.post('/contact', function(req, res) {
  res.send('Thanks for contacting us, ' + req.body.name + '! We will respond shortly!');
});