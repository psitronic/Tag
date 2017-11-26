var express = require('express');
var router = express.Router();
var User = require('../user/user');

router.get('/', function (request, response, next) {
    response.sendFile('login.html');
  });

// Login endpoint
router.post('/login', function (request, response,next) {
    if (request.body.loginemail && request.body.loginpassword) {
        User.authenticate(request.body.loginemail, request.body.loginpassword, function (error, user) {
          if (error || !user) {
            var error = new Error('Wrong email or password.');
            error.status = 401;
            next(error);
          } else {
            request.session.userId = user._id;
            response.redirect('/content');
          }
        });
      }
    });
    
module.exports = router;