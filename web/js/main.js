//Copyright 2013 ERAS/Educational Research and Services
//Reproduction of this material strictly prohibited.
//Written by Gabrielle Person

'use strict';
/*jslint node:true, indent:2, nomen:true*/
require.config({
  baseUrl : 'web/js/libs',
  paths: {
    app: '..',
    vm: '../vm',
  },
  shim : {
  }
});
require(
  [
    'knockout',
    'vm/main'
  ],
  function (
    ko,
    Main
  ) {
    /* main view model here */
    //console.log('hello world');
    var main = new Main();
    console.log(main);
  }
);
