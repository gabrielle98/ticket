//Copyright 2013 ERAS/Educational Research and Services
//Reproduction of this material strictly prohibited.
//Written by Gabrielle Person

'use strict';
/*jslint node:true, indent:2, nomen:true*/

var nextId = 2;
var ticket = require('../model/ticket.js');
var db = {
  '0' : ticket.makeTicket('client1', 'test', 'des', {'username' : 'gabrielle', 'id' : 22498461}),
  '1' : ticket.makeTicket('client2', 'subject', 'des2', {'username' : 'ryan', 'id' : 12345}),
};

exports.loadAll = function (req, res, next) {
  res.json(db);
};

exports.load = function (req, res, next) {
  console.log(req.params.id); //will be the id in the url.
  res.send('stub');
  //req.body -> post
  db.nextId = req.body;
  //req.query -> ? / get
};

exports.save = function (req, res, next) {
  console.log(req.body);
  res.send('stub');
};
