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
    name: 'gumbyExtensions',
    message: 'Would you like to include Gumby Extensions (InView, ResponsiveComments, Parallax, ResponsiveImages, Shuffle, FitText)?',
    default: false
  }];

  this.prompt(prompts, function (props) {
    this.projectName = props.projectName;
    this.gumby = props.gumby;
    this.gumbyExtensions = props.gumbyExtensions;
    this.customFonts = props.customFonts;

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
  this.mkdir('app/styles/less/pages');
  this.mkdir('app/fonts');
  this.mkdir('app/docs');

  this.copy('_package.json', 'package.json');
  this.copy('bowerrc', '.bowerrc');
  this.copy('_bower.json', 'bower.json');
};

BoagenGenerator.prototype.lessFramework = function lessFramework() {
  this.copy('styles/less/testing.less', 'app/styles/less/testing.less');
  this.copy('styles/less/variables.less', 'app/styles/less/variables.less');
  this.copy('styles/less/colors.less', 'app/styles/less/colors.less');
  this.copy('styles/less/scaffolding.less', 'app/styles/less/scaffolding.less');
  this.copy('styles/less/master.less', 'app/styles/less/master.less');
  this.copy('styles/less/images.less', 'app/styles/less/images.less');
  this.copy('styles/less/svg.less', 'app/styles/less/svg.less');
  this.copy('styles/less/image-grid.less', 'app/styles/less/image-grid.less');
  this.copy('styles/less/shapes.less', 'app/styles/less/shapes.less');
  this.copy('styles/less/buttons.less', 'app/styles/less/buttons.less');
  this.copy('styles/less/lists.less', 'app/styles/less/lists.less');
  this.copy('styles/less/classes.less', 'app/styles/less/classes.less');
  this.copy('styles/less/helpers.less', 'app/styles/less/helpers.less');
  this.copy('styles/less/reuse.less', 'app/styles/less/reuse.less');
  this.copy('styles/less/typography.less', 'app/styles/less/typography.less');
  this.copy('styles/less/links.less', 'app/styles/less/links.less');
  this.copy('styles/less/mixins.less', 'app/styles/less/mixins.less');
  this.copy('styles/less/elements.less', 'app/styles/less/elements.less');
  this.copy('styles/less/grid.less', 'app/styles/less/grid.less');
  this.copy('styles/less/normalize.less', 'app/styles/less/normalize.less');
  this.copy('styles/less/form.less', 'app/styles/less/form.less');
  this.copy('styles/less/print.less', 'app/styles/less/print.less');
  this.copy('styles/less/lesshat.less', 'app/styles/less/lesshat.less');
  this.copy('styles/less/pages/global.less', 'app/styles/less/pages/global.less');
  this.copy('styles/less/pages/home.less', 'app/styles/less/pages/home.less');
  this.copy('styles/less/pages/interior.less', 'app/styles/less/pages/interior.less');
};

BoagenGenerator.prototype.base = function base() {
  this.copy('index.html', 'app/index.html');
  this.copy('favicon.ico', 'app/favicon.ico');
  this.copy('apple-touch-icon-precomposed.png', 'app/apple-touch-icon-precomposed.png');
  this.copy('ascii-words.txt', 'app/docs/ascii-words.txt');
  this.copy('helpful-links.txt', 'app/docs/helpful-links.txt');
  this.copy('styles/master.css', 'app/styles/master.css');
  this.copy('styles/fonts.css', 'app/styles/fonts.css');
  this.copy('scripts/jquery-1.11.0.min.js', 'app/scripts/jquery-1.11.0.min.js');
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
