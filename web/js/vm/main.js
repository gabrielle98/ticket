//Copyright 2013 ERAS/Educational Research and Services
//Reproduction of this material strictly prohibited.
//Written by Gabrielle Person

'use strict';
/*jslint node:true, indent:2, nomen:true*/

define(['knockout', '../vm/user', '../vm/ticket'], function (ko, User, Ticket) {
  /*"global variables"*/
/*  var nextId = 0,
    ticket = function (user, assign, sub, stat, desc) {
      var self = this;
      self.id = nextId;
      self.subject = ko.observable(sub);
      self.stats = ko.observable(stat);
      self.createdBy = user;
      self.assignedTo = assign;
      self.description = ko.observable(desc);

      nextId = nextId + 1;
      return self;
    },

    user = function (username, num) {
      var self = this;
      self.id = num;
      self.name = username;
      return self;
    },
*/
  return function (opts) {
    var self = this,
      usergab = new User({
        'username' : 'gabrielle',
        'id' : 22498461
      }),
      userryan = new User({
        'username' : 'ryan',
        'id' : 123456789
      });

    self.tickets = ko.observableArray([
      new Ticket({
        'assignedTo' : usergab,
        'subject' : 'this is the subject',
        'createdBy' : 'client1'
      }),
      new Ticket({
        'assignedTo' : usergab,
        'stats' : 'Closed'
      }),
      new Ticket({
        'assignedTo' : userryan,
        'description' : 'There is a very long description'
      })
    ]);

    self.currTicket = ko.observable(self.tickets()[0]);

    self.newSub = ko.observable('subject here');
    self.newDesc = ko.observable('description here');

    self.goToTicket = function (ticket) {
      self.currTicket = ticket;
    };

    self.addTicket = function () {
      self.tickets.push(new Ticket({
        'subject' : self.newSub(),
        'stats' : 'Open',
        'description' : self.newDesc()
      }));
    };
  };

});
