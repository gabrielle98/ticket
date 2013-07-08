//Copyright 2012 ERAS/Educational Research and Services
//Reproduction of this material strictly prohibited.
//Written by Ryan Lee

'use strict';
/*jslint node:true, indent:2, nomen:true*/

var express = require('express');
var path = require('path');
var config = require('./libs/config.js');
var app = express();

app.configure(function () {
  app.set('port', process.env.PORT || config.port);
  //app.use(express.favicon(__dirname + '/public/favicon.ico'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.cookieParser());
  //app.use(express.session(config.session));
  app.use(express.static(path.join(__dirname, 'public')));
  //app.use(express.csrf());
  app.use(app.router);
});

app.configure('production', function () {
  console.log('[' + (new Date()).toISOString() + '] (app) Log: Running production mode');
  app.use(function (err, req, res, next) {
    if (!err) { return next(); }
    var date = new Date();
    if (config.log.warn && err.status !== undefined) {
      console.log('[' + date.toISOString() + '] (app) Warn: ' + err.message);
      res.status(err.status);
      if (req.accepted[0].subtype !== 'javascript') {
        return res.sendfile('public/errors/404.html');
      }
      return res.json(err.message);
    }
    console.log('[' + date.toISOString() + '] (app) Error: ' + err.message);
    console.log(err.stack);
    res.status(500);
    return res.json('Server Error');
  });
});

//add your routes here
require('./routes.js')(app);

var server = app.listen(app.get('port'), function () {
  var date = new Date();
  console.log('[' + date.toISOString() + '] (app) Log: Listening on port ' + app.get('port'));
});
