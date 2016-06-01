'use strict';

var join = require('path').join;
var yeoman = require('yeoman-generator');
var chalk = require('chalk');

function dashCase(str) {
    return str.replace(/[A-Z]/g, function (match) { return '-' + match.toLowerCase(); });
}

module.exports = yeoman.Base.extend({
  constructor: function () {
    yeoman.Base.apply(this, arguments);
    var text = arguments[0][0];
    this.text = text;
    this.filename = text.toLowerCase();
    this.directoryname = text.toLowerCase();
  },
  js: function () {
    this.bulkCopy('_components.js', 'templates/components/' + this.directoryname + '/' + this.filename + '.js');
  },
  html: function () {
    this.bulkCopy('_components.html', 'templates/components/' + this.directoryname + '/' + this.filename + '.html');
  },
  test: function () {
    this.bulkCopy('_components.spec.js', 'templates/components/' + this.directoryname + '/' + this.filename + '.spec.js');
  }
});
