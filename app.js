//Copyright 2013 ERAS/Educational Research and Services
//Reproduction of this material strictly prohibited.
//Written by Gabrielle Person

'use strict';
/*jslint node:true, indent:2, nomen:true*/
var Contact = require('./contact.js');
var Ticket = require('./ticket.js');

var password = 'abc123';
var user1 = {
  'name' : 'ryan',
  'id' : 22498461,
  'password' : password,
  'ticket' : Ticket.makeTicket(Contact.makeContact('John Doe', '858-555-5555', 'example@edits.net'), 'very important issue', 'there is a problem and this is what it is')
};
var user2 = {};
user2.name = 'gabrielle';
user2.id = 10;
user2.password = password;
user2.ticket = Ticket.makeTicket(Contact.makeContact('Jane Doe', '858-111-1111', 'examplemail@edits.net'), 'another very important issue', 'there is another problem and this is the description');

var array = [];
array[0] = user1.ticket;
array[1] = user2.ticket;
array[2] = Ticket.makeTicket(Contact.makeContact('name', 'phone number', 'email address'), 'subject line', 'description');
array[3] = Ticket.makeTicket(Contact.makeContact('another name', 'phone', 'email'), 'subject', 'description');
array[4] = Ticket.makeTicket(Contact.makeContact('name', 'phone', 'email'), 'title', 'problem');

//console.log(user1);
//console.log(user2);
console.log(array);
