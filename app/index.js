'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');


var BoagenGenerator = module.exports = function BoagenGenerator(args, options, config) {
  yeoman.generators.Base.apply(this, arguments);

  this.on('end', function () {
    this.installDependencies({ skipInstall: options['skip-install'] });
  });

  this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
};

util.inherits(BoagenGenerator, yeoman.generators.Base);

BoagenGenerator.prototype.askFor = function askFor() {
  var cb = this.async();

  // have Yeoman greet the user.
  console.log(this.yeoman);

  var prompts = [{
    name: 'projectName',
    message: 'What would you like to call this project?'
  }, {
    type: 'confirm',
    name: 'gumby',
    message: 'Would you like to include Gumby?',
    default: false
  }, {
    type: 'confirm',
    name: 'browsersync',
    message: 'Would you like to include browsersync?',
    default: true
  }];

  this.prompt(prompts, function (props) {
    this.projectName = props.projectName;
    this.gumby = props.gumby;
    this.browsersync = props.browsersync;

    cb();
  }.bind(this));
};

BoagenGenerator.prototype.app = function app() {
  this.mkdir('app');
  this.mkdir('app/bower_components');
  this.mkdir('app/img');
  this.mkdir('app/scripts');
  this.mkdir('app/styles');
  this.mkdir('app/styles/less');
  this.mkdir('app/fonts');

  this.copy('_package.json', 'package.json');
  this.copy('_bower.json', 'bower.json');
};

// BoagenGenerator.prototype.dist = function dist() {
//   this.mkdir('dist');
//   this.mkdir('dist/bower_components');
//   this.mkdir('dist/scripts');
//   this.mkdir('dist/styles');
//   this.mkdir('dist/img');
// };

// BoagenGenerator.prototype.test = function test() {
//   this.mkdir('test');
//   this.mkdir('test/bower_components');
//   this.mkdir('test/spec');
// };

BoagenGenerator.prototype.projectfiles = function projectfiles() {
  this.copy('editorconfig', '.editorconfig');
  this.copy('jshintrc', '.jshintrc');
};
