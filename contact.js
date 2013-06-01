//Copyright 2013 ERAS/Educational Research and Services
//Reproduction of this material strictly prohibited.
//Written by Gabrielle Person

'use strict';
/*jslint node:true, indent:2, nomen:true*/
var makeContact = function makeContact(name, phone, email) {
  var contact = {
    'name' : name,
    'phone' : phone,
    'email' : email,
    'id' : Math.round(Math.random() * 100)
  };
  return contact;
};

//var Contact = require('./contact.js');
//Conact.makeContact === undefined
//Contact(name, phone, email)

//var Contact = require('./contact.js');
//Conact.makeContact === undefined
//Contact.newContact(...);
exports.makeContact = makeContact;
