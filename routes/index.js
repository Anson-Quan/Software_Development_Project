var express = require('express');
var router = express.Router();

/* GET Home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Smart Spend App' });
});

/* GET About page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About Us' }); // You would need to create an 'about' view template.
});

/* GET Contact Us page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact Us' }); // You would need to create a 'contact' view template.
});

/* GET Products page. */
router.get('/product', function(req, res, next) {
  res.render('product', { title: 'Products' }); // You would need to create a 'products' view template.
});

/* GET Sign In page. */
router.get('/signin', function(req, res, next) {
  res.render('signin', { title: 'Sign In' }); // You would need to create a 'signin' view template.
});

module.exports = router;
module.exports = router;
