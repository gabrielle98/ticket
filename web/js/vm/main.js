//Copyright 2013 ERAS/Educational Research and Services
//Reproduction of this material strictly prohibited.
//Written by Gabrielle Person

'use strict';
/*jslint node:true, indent:2, nomen:true*/

define(['knockout'], function (ko) {
  /*"global variables"*/
  int nextId = 0;
  function ticket(user, assign) {
    var self = this,
    self.id = nextId,
    self.subject = ko.observable('no subject'), 
    self.status = "Open",
    self.createdBy = user,
    self.assignedTo = assign,
    self.description = "no description",
    nextId++;
    return self;
  }

  function user(username, num) {
    var self = this,
    self.id = num,
    self.name = username
    return self;
  }

  return function (opts) {
    var self = this,
    var usergab = new user('gabrielle', 22498461);
    self.currTicket = ko.observable();
    self.tickets = ko.observableArray([
      new ticket("client", usergab),
      new ticket('client 2', usergab)
    ]);

    self.addTicket = function(user, assigned) {
      self.tickets.push(new ticket(user, assigned));
    }
    consolelog(self);
  };

  ko.applyBindings(new function());
});
