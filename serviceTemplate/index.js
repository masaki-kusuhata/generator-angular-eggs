'use strict';
var yeoman = require('yeoman-generator');

module.exports = yeoman.Base.extend({
  constructor: function () {
    yeoman.Base.apply(this, arguments);
    var text = arguments[0][0];
    this.text = text;
    this.directoryname = text.toLowerCase();
  },
  js: function () {
    this.bulkCopy('_factory.js', 'templates/service/' + this.directoryname + '/_factory.js');
  },
  test: function () {
    this.bulkCopy('_factory.spec.js', 'templates/service/' + this.directoryname + '/_factory.spec.js');
  },
  mock: function () {
    this.bulkCopy('_factory.mock.js', 'templates/service/' + this.directoryname + '/_factory.mock.js');
  }
});
