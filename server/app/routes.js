var User = require('./models/user');
var passport = require('passport');
var config = require('../config/index.js');

module.exports = function (app) {

  app.get('/api/users', function (req, res) {
    User.find(function (err, users) {
      if (err)
        res.send(err);

      res.json(users);
    });
  });

  app.get('/', function (req, res) {
    res.sendfile('./public/index.html');
  });

  app.post('/login', passport.authenticate('local-login'), function(req, res) {
    res.send({message: 'ok'});
  });

  app.post('/signup', passport.authenticate('local-signup'), function(req, res) {
    res.send({message: 'ok'});
  });

  //TODO works wrong. Figure out with cookies, token, encoding.
  app.get('/logout', function (req, res) {
    res.cookie(config.token.name.cookie, '', {maxAge: -3600});
    req.logout();
    res.json({
      status:  "OK",
      message: "Logged Out"
    })
  });
};

function isLoggedIn(req, res, next) {

  // if user is authenticated in the session, carry on
  if (req.isAuthenticated())
    return next();

  // if they aren't redirect them to the home page
  res.redirect('/');
}