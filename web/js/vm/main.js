//Copyright 2013 ERAS/Educational Research and Services
//Reproduction of this material strictly prohibited.
//Written by Gabrielle Person

'use strict';
/*jslint node:true, indent:2, nomen:true*/

define(['knockout'], function (ko) {
  /*"global variables"*/
  var nextId = 0;
  function Ticket(user, assign) {
    var self = this;
    self.id = nextId;
    self.subject = ko.observable('no subject');
    self.stats = ko.observable('Open');
    self.createdBy = user;
    self.assignedTo = assign;
    self.description = ko.observable('no description');

    nextId = nextId + 1;
    return self;
  }

  function User(username, num) {
    var self = this;
    self.id = num;
    self.name = username;
    return self;
  }

  function List(opts) {
    var self = this,
      usergab = new User('gabrielle', 22498461),
      userryan = new User('ryan', 123456789);

    self.tickets = ko.observableArray([
      new Ticket('client', usergab),
      new Ticket('client 2', usergab)
    ]);

    self.currTicket = ko.observable(self.tickets()[0]);

    self.addTicket = function (user, assigned) {
      self.tickets.push(new Ticket(user, assigned));
    };
    console.log(self);
  }

  ko.applyBindings(new List());
});
