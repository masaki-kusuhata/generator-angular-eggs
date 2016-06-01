'use strict';

var join = require('path').join;
var yeoman = require('yeoman-generator');
var chalk = require('chalk');

module.exports = yeoman.Base.extend({
  constructor: function () {
    yeoman.Base.apply(this, arguments);
    var templateName = arguments[0][0];
    var text = arguments[0][1];
    this.name = text.toLowerCase();
    this.className = text.charAt(0).toUpperCase() + text.slice(1);
    var templateUrl = this.destinationRoot() + '/templates/server';
    this.serviceTemplateUrl =  templateUrl + '/' + templateName + '/';
  },
  js: function () {
    this.copy(this.serviceTemplateUrl + '_api.js', 'server/api/'+this.name+'.js');
    this.copy(this.serviceTemplateUrl + '_data.json', 'server/data/'+this.name+'.json');
  }
});
