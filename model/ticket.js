//Copyright 2013 ERAS/Educational Research and Services
//Reproduction of this material strictly prohibited.
//Written by Gabrielle Person

'use strict';
/*jslint node:true, indent:2, nomen:true*/
var nextId = 0;

var makeTicket = function (contact, subject, description, person) {
  var d = new Date(),
    ticket = {
      'id' : nextId,
      'createdBy' : contact,
      'assignedTo' : person,
      'subject' : subject,
      'description' : description,
      'stats' : 'Open'
    };
  nextId += 1;
  return ticket;
};

exports.makeTicket = makeTicket;
