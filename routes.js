//Copyright 2013 ERAS/Educational Research and Services
//Reproduction of this material strictly prohibited.
//Written by Gabrielle Person

'use strict';
/*jslint node:true, indent:2, nomen:true*/

var ticket = require('./cntl/ticket.js');

module.exports = function (app) {
  app.get('/ticket', ticket.loadAll);
  app.post('/ticket', ticket.save);
};
