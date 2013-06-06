//Copyright 2013 ERAS/Educational Research and Services
//See README for License
//Written by Ryan Lee & Gabrielle Person

'use strict';
/*jslint node:true, indent:2, nomen:true*/
/*globals ko*/

//This weird function is "main" when you're not using
//jquery or requirejs.
(function sysMain() {

  //this is your main VM.
  //You can make it a function and use new
  //or you can use the colon notation
  //or dot.
  var main = {};
  main.currentTemplate = ko.observable('tmp-list');
  
  //your view models must be configured before this line.
  ko.applyBindings(main);
}());
