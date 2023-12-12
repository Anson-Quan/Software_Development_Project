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
router.get('/register', function(req, res, next) {
  res.render('register', { title: 'Register' });
});
router.get('/categories', function(req, res, next) {
  res.render('categories', { title: 'Budget Categories' });
});
router.get('/transactions', function(req, res, next) {
  res.render('transactions', { title: 'Transactions' });
});
router.get('/tranhistory', function(req, res, next) {
  res.render('tranhistory', { title: 'Transaction History' });
});

module.exports = router;

