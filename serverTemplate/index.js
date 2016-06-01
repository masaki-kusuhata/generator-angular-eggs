'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');

module.exports = yeoman.Base.extend({
  constructor: function () {
    yeoman.Base.apply(this, arguments);
    var text = arguments[0][0];
    this.text = text;
    this.directoryname = text.toLowerCase();
  },
  js: function () {
    this.bulkCopy('_api.js', 'templates/server/'+ this.directoryname +'/_api.js');
    this.bulkCopy('_data.json', 'templates/server/'+ this.directoryname +'/_data.json');
  }
});
