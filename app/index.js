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
    type: 'confirm',
    name: 'browsersync',
    message: 'Would you like to enable browsersync?',
    default: true
  }];

  this.prompt(prompts, function (props) {
    this.browsersync = props.browsersync;

    cb();
  }.bind(this));
};

BoagenGenerator.prototype.app = function app() {
  this.mkdir('app');
  this.mkdir('app/templates');

  this.copy('_package.json', 'package.json');
  this.copy('_bower.json', 'bower.json');
};

BoagenGenerator.prototype.projectfiles = function projectfiles() {
  this.copy('editorconfig', '.editorconfig');
  this.copy('jshintrc', '.jshintrc');
};
