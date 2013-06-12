//Copyright 2013 ERAS/Educational Research and Services
//Reproduction of this material strictly prohibited.
//Written by Gabrielle Person

'use strict';
/*jslint browser:true, indent:2, nomen:true*/
/*gobals define */

define(
  ['knockout', 'jquery'],
  function (ko, $) {
    //global area
    var glob = 10;
    console.log(glob);
    return function (opts) {
      var self = this,
        sets = {
          'id' : 0,
          'username' : 'default',
          'tickets' : []
        };
      sets = $.extend({}, sets, opts);
      //$.extend(this, sets, opts);
      this.username = ko.observable(sets.username);
      this.addTicket = function (t) {
        self.tickets.push(t)
      }
      /*
      this.username = sets.username;
      this.id = sets.id;
      */
    };
  }
);

/*
var makeContact = function makeContact(username, num) {
  var contact = {
    'name' : username,
    'id' : num
  };
  return contact;
};
*/
