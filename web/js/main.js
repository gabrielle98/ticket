//Copyright 2013 ERAS/Educational Research and Services
//Reproduction of this material strictly prohibited.
//Written by Gabrielle Person

'use strict';
/*jslint node:true, indent:2, nomen:true*/
require(
  [
    'knockout',
    'vm/main'
  ],
  function (
    ko,
    Main
  ) {
    var main = new Main();
    console.log(main.tickets());
    ko.applyBindings(main);
  }
);
