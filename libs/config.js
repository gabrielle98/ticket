'use strict';
/*jslint node:true, indent:2, nomen:true*/
var config = {};
/*
Save this for part 6
config.database = {
  'user' : '',
  'password' : '',
  'host' : 'localhost',
  'database' : ''
};
*/
config.port = 8080;
config.host = '.localhost';
config.session = {
  'secret' : 'edits secret',
  'cookie' : {
    'domain' : '.localhost'
  }
};
/*
config.email = {
  'user' : '',
  'password' : '',
  'host' : '',
  'ssl' : ''
};
*/
config.log = {};
config.log.warn = true;
module.exports = config;
