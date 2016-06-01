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
    var templateUrl = this.destinationRoot() + '/templates/resource';
    this.resourcesTemplateUrl =  templateUrl + '/' + templateName + '/';
  },
  prompting: function () {
    var done = this.async();

    var prompts = [{
      type: 'input',
      name: 'directory',
      message: 'What do you want to do a directory?',
      default: 'service/' + this.name
    }];

    this.prompt(prompts, function (props) {
      this.directory = props.directory;

      done();
    }.bind(this));
  },
  js: function () {
    this.copy(this.resourcesTemplateUrl + '_factory.js', 'app/'+this.directory+'/'+this.name+'.js');
  },
  test: function () {
    this.copy(this.resourcesTemplateUrl + '_factory.spec.js', 'test/'+this.directory+'/'+this.name+'.spec.js');
  },
  mock: function () {
    this.copy(this.resourcesTemplateUrl + '_factory.mock.js', 'test/'+this.directory+'/'+this.name+'.mock.js');
  }
});
