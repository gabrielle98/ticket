//Copyright 2013 ERAS/Educational Research and Services
//Reproduction of this material strictly prohibited.
//Written by Gabrielle Person

'use strict';
/*jslint browser:true, indent:2, nomen:true*/
/*globals define*/

define(['knockout', 'jquery', 'vm/user', 'vm/ticket'], function (ko, $, User, ticket) {
  /*"global variables"*/
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

    /*
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
    */

    self.loadTickets = function () {
      //$.get
      var req = $.ajax({
        'url' : '/ticket',
        'type' : 'get',
        'dataType' : 'json',
      }).done(function (tickets) {
        console.log(tickets);
        $.each(tickets, function (i, tick) {
          self.tickets.push(ticket(tick));
        });
      });
    };

    self.tickets = ko.observableArray();
    self.currTicket = ko.observable();

    self.newSub = ko.observable('subject here');
    self.newDesc = ko.observable('description here');

    self.goToTicket = function (ticket) {
      self.currTicket = ticket;
    };

    self.addTicket = function () {
      var tick = ticket({
        'subject' : self.newSub(),
        'stats' : 'Open',
        'description' : self.newDesc(),
        'assignedTo' : usergab
      });
      console.log(tick);
      $.post('/ticket', tick, null, 'json').done(function (res) {
        console.log(res);
      });
      self.tickets.push(tick);
    };
  };

});
