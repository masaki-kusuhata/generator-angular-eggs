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
    this.bulkCopy('_components.js', 'templates/components/' + this.directoryname + '/_components.js');
  },
  html: function () {
    this.bulkCopy('_components.html', 'templates/components/' + this.directoryname + '/_components.html');
  },
  test: function () {
    this.bulkCopy('_components.spec.js', 'templates/components/' + this.directoryname + '/_components.spec.js');
  }
});
