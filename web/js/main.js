//Copyright 2013 ERAS/Educational Research and Services
//Reproduction of this material strictly prohibited.
//Written by Gabrielle Person

'use strict';
/*jslint node:true, indent:2, nomen:true*/
/*
require.config({
  baseUrl : 'web/js/libs',
  paths: {
    app: '..',
    vm: '../vm',
  },
  shim : {
  }
});
*/
require(
  [
    'knockout',
    'vm/main',
    'vm/ticket',
    'vm/user'
  ],
  function (
    ko,
    Main,
    Ticket,
    User
  ) {
    /* main view model here */
    /* console.log('hello world');
    console.log(User.glob);
    var u = new User();
    u.username = "bob";
    console.log(u);
    var u2 = new User({
      'username' : 'bonno'
    });
    console.log(u2);
    //var starter = main();
    //console.log(starter);
    //ko.applyBindings(starter);
*/
    var main = new Main();
    console.log(main.tickets());
    ko.applyBindings(main);
  }
);
