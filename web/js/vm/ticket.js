//Copyright 2013 ERAS/Educational Research and Services
//Reproduction of this material strictly prohibited.
//Written by Gabrielle Person

'use strict';
/*jslint node:true, indent:2, nomen:true*/
/*var nextId = 0;
function makeTicket(contact, assign, subject, stat, description) {
  var d = new Date(),
    ticket = {
      'id' : nextId,
      'createdBy' : contact,
      'date' : d,
      'assignedTo' : assign,
      'subject' : subject,
      'description' : description,
      'stats' : stat
    };
  nextId += 1;
  return ticket;
}

exports.makeTicket = makeTicket;
*/
define(
  ['knockout', 'jquery'],
  function (ko, $) {
    //global area
    var nextId = 0;
    return function (opts) {
      var tick,
        sets = {
          'id' : nextId,
          'createdBy' : 'default user',
          'date' : new Date(),
          'assignedTo' : 'not assigned',
          'subject' : 'no subject',
          'description' : 'no description',
          'stats' : 'Open'
        };
      tick = $.extend({}, sets, opts);
      nextId += 1;
      return tick;
    };
  }
);

/*function makeTicket(contact, assign, subject, stat, description) {
  var d = new Date(),
    ticket = {
      //'id' : nextId,
      'createdBy' : contact,
      'date' : d,
      'assignedTo' : assign,
      'subject' : subject,
      'description' : description,
      'stats' : stat
    };
  //nextId += 1;
  return ticket;
}
*/

