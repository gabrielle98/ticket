//Copyright 2013 ERAS/Educational Research and Services
//Reproduction of this material strictly prohibited.
//Written by Gabrielle Person

'use strict';
/*jslint node:true, indent:2, nomen:true*/
var nextId = 0;
function makeTicket(contact, subject, description) {
  var d = new Date(),
    ticket = {
      'id' : nextId,
      'contact' : contact,
      'created' : d,
      'assigned' : false,
      'subject' : subject,
      'description' : description,
      'status' : 'submitted'
    };
  nextId += 1;
  return ticket;
}

exports.makeTicket = makeTicket;
