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
  this.copy('styles/less/buttons.less', 'app/styles/less/buttons.less');
  this.copy('styles/less/classes.less', 'app/styles/less/classes.less');
  this.copy('styles/less/colors.less', 'app/styles/less/colors.less');
  this.copy('styles/less/elements.less', 'app/styles/less/elements.less');
  this.copy('styles/less/fonts.less', 'app/styles/less/fonts.less');
  this.copy('styles/less/form.less', 'app/styles/less/form.less');
  this.copy('styles/less/grid.less', 'app/styles/less/grid.less');
  this.copy('styles/less/helpers.less', 'app/styles/less/helpers.less');
  this.copy('styles/less/image-grid.less', 'app/styles/less/image-grid.less');
  this.copy('styles/less/images.less', 'app/styles/less/images.less');
  this.copy('styles/less/links.less', 'app/styles/less/links.less');
  this.copy('styles/less/lists.less', 'app/styles/less/lists.less');
  this.copy('styles/less/master.less', 'app/styles/less/master.less');
  this.copy('styles/less/mixins.less', 'app/styles/less/mixins.less');
  this.copy('styles/less/navigation.less', 'app/styles/less/navigation.less');
  this.copy('styles/less/normalize.less', 'app/styles/less/normalize.less');
  this.copy('styles/less/print.less', 'app/styles/less/print.less');
  this.copy('styles/less/reuse.less', 'app/styles/less/reuse.less');
  this.copy('styles/less/scaffolding.less', 'app/styles/less/scaffolding.less');
  this.copy('styles/less/shapes.less', 'app/styles/less/shapes.less');
  this.copy('styles/less/svg.less', 'app/styles/less/svg.less');
  this.copy('styles/less/testing.less', 'app/styles/less/testing.less');
  this.copy('styles/less/typography.less', 'app/styles/less/typography.less');
  this.copy('styles/less/variables.less', 'app/styles/less/variables.less');
  this.copy('styles/less/pages/global.less', 'app/styles/less/pages/global.less');
  this.copy('styles/less/pages/home.less', 'app/styles/less/pages/home.less');
  this.copy('styles/less/pages/interior.less', 'app/styles/less/pages/interior.less');
  this.copy('styles/less/pages/demo.less', 'app/styles/less/pages/demo.less');
};

BoagenGenerator.prototype.base = function base() {
  this.copy('index.html', 'app/index.html');
  this.copy('kitchen-sink.html', 'app/kitchen-sink.html');
  this.copy('favicon.ico', 'app/favicon.ico');
  this.copy('apple-touch-icon-precomposed.png', 'app/apple-touch-icon-precomposed.png');
  this.copy('ascii-words.txt', 'app/docs/ascii-words.txt');
  this.copy('helpful-links.txt', 'app/docs/helpful-links.txt');
  this.copy('styles/master.css', 'app/styles/master.css');
  this.copy('scripts/main.js', 'app/scripts/main.js');
  this.copy('scripts/jquery-1.11.0.min.js', 'app/scripts/jquery-1.11.0.min.js');
  this.copy('img/inferno-2.jpg', 'app/img/inferno-2.jpg');
  this.copy('img/subtle_grunge.png', 'app/img/subtle_grunge.png');
};

// Doing this separately just because it's a lot and annoying
BoagenGenerator.prototype.fonts = function fonts() {
  this.copy('fonts/icon-font.eot', 'app/fonts/icon-font.eot');
  this.copy('fonts/icon-font.svg', 'app/fonts/icon-font.svg');
  this.copy('fonts/icon-font.ttf', 'app/fonts/icon-font.ttf');
  this.copy('fonts/icon-font.woff', 'app/fonts/icon-font.woff');
  this.copy('fonts/Lato-Italic.eot', 'app/fonts/Lato-Italic.eot');
  this.copy('fonts/Lato-Italic.svg', 'app/fonts/Lato-Italic.svg');
  this.copy('fonts/Lato-Italic.ttf', 'app/fonts/Lato-Italic.ttf');
  this.copy('fonts/Lato-Italic.woff', 'app/fonts/Lato-Italic.woff');
  this.copy('fonts/Lato-Regular.eot', 'app/fonts/Lato-Regular.eot');
  this.copy('fonts/Lato-Regular.svg', 'app/fonts/Lato-Regular.svg');
  this.copy('fonts/Lato-Regular.ttf', 'app/fonts/Lato-Regular.ttf');
  this.copy('fonts/Lato-Regular.woff', 'app/fonts/Lato-Regular.woff');
  this.copy('fonts/MedulaOne-Regular.eot', 'app/fonts/MedulaOne-Regular.eot');
  this.copy('fonts/MedulaOne-Regular.svg', 'app/fonts/MedulaOne-Regular.svg');
  this.copy('fonts/MedulaOne-Regular.ttf', 'app/fonts/MedulaOne-Regular.ttf');
  this.copy('fonts/MedulaOne-Regular.woff', 'app/fonts/MedulaOne-Regular.woff');
  this.copy('fonts/FiraSansOT-Regular.eot', 'app/fonts/FiraSansOT-Regular.eot');
  this.copy('fonts/FiraSansOT-Regular.svg', 'app/fonts/FiraSansOT-Regular.svg');
  this.copy('fonts/FiraSansOT-Regular.ttf', 'app/fonts/FiraSansOT-Regular.ttf');
  this.copy('fonts/FiraSansOT-Regular.woff', 'app/fonts/FiraSansOT-Regular.woff');
  this.copy('fonts/FiraSansOT-RegularItalic.eot', 'app/fonts/FiraSansOT-RegularItalic.eot');
  this.copy('fonts/FiraSansOT-RegularItalic.svg', 'app/fonts/FiraSansOT-RegularItalic.svg');
  this.copy('fonts/FiraSansOT-RegularItalic.ttf', 'app/fonts/FiraSansOT-RegularItalic.ttf');
  this.copy('fonts/FiraSansOT-RegularItalic.woff', 'app/fonts/FiraSansOT-RegularItalic.woff');
  this.copy('fonts/FiraSansOT-Bold.eot', 'app/fonts/FiraSansOT-Bold.eot');
  this.copy('fonts/FiraSansOT-Bold.svg', 'app/fonts/FiraSansOT-Bold.svg');
  this.copy('fonts/FiraSansOT-Bold.ttf', 'app/fonts/FiraSansOT-Bold.ttf');
  this.copy('fonts/FiraSansOT-Bold.woff', 'app/fonts/FiraSansOT-Bold.woff');
  this.copy('fonts/FiraSansOT-BoldItalic.eot', 'app/fonts/FiraSansOT-BoldItalic.eot');
  this.copy('fonts/FiraSansOT-BoldItalic.svg', 'app/fonts/FiraSansOT-BoldItalic.svg');
  this.copy('fonts/FiraSansOT-BoldItalic.ttf', 'app/fonts/FiraSansOT-BoldItalic.ttf');
  this.copy('fonts/FiraSansOT-BoldItalic.woff', 'app/fonts/FiraSansOT-BoldItalic.woff');
  this.copy('fonts/FiraSansOT-Light.eot', 'app/fonts/FiraSansOT-Light.eot');
  this.copy('fonts/FiraSansOT-Light.svg', 'app/fonts/FiraSansOT-Light.svg');
  this.copy('fonts/FiraSansOT-Light.ttf', 'app/fonts/FiraSansOT-Light.ttf');
  this.copy('fonts/FiraSansOT-Light.woff', 'app/fonts/FiraSansOT-Light.woff');
  this.copy('fonts/FiraSansOT-LightItalic.eot', 'app/fonts/FiraSansOT-LightItalic.eot');
  this.copy('fonts/FiraSansOT-LightItalic.svg', 'app/fonts/FiraSansOT-LightItalic.svg');
  this.copy('fonts/FiraSansOT-LightItalic.ttf', 'app/fonts/FiraSansOT-LightItalic.ttf');
  this.copy('fonts/FiraSansOT-LightItalic.woff', 'app/fonts/FiraSansOT-LightItalic.woff');
  this.copy('fonts/FiraSansOT-Medium.eot', 'app/fonts/FiraSansOT-Medium.eot');
  this.copy('fonts/FiraSansOT-Medium.svg', 'app/fonts/FiraSansOT-Medium.svg');
  this.copy('fonts/FiraSansOT-Medium.ttf', 'app/fonts/FiraSansOT-Medium.ttf');
  this.copy('fonts/FiraSansOT-Medium.woff', 'app/fonts/FiraSansOT-Medium.woff');
  this.copy('fonts/FiraSansOT-MediumItalic.eot', 'app/fonts/FiraSansOT-MediumItalic.eot');
  this.copy('fonts/FiraSansOT-MediumItalic.svg', 'app/fonts/FiraSansOT-MediumItalic.svg');
  this.copy('fonts/FiraSansOT-MediumItalic.ttf', 'app/fonts/FiraSansOT-MediumItalic.ttf');
  this.copy('fonts/FiraSansOT-MediumItalic.woff', 'app/fonts/FiraSansOT-MediumItalic.woff');
  this.copy('fonts/FiraSansOT-preview.html', 'app/fonts/FiraSansOT-preview.html');
  this.copy('fonts/FiraMonoOT-Bold.eot', 'app/fonts/FiraMonoOT-Bold.eot');
  this.copy('fonts/FiraMonoOT-Bold.svg', 'app/fonts/FiraMonoOT-Bold.svg');
  this.copy('fonts/FiraMonoOT-Bold.ttf', 'app/fonts/FiraMonoOT-Bold.ttf');
  this.copy('fonts/FiraMonoOT-Bold.woff', 'app/fonts/FiraMonoOT-Bold.woff');
  this.copy('fonts/FiraMonoOT-Regular.eot', 'app/fonts/FiraMonoOT-Regular.eot');
  this.copy('fonts/FiraMonoOT-Regular.svg', 'app/fonts/FiraMonoOT-Regular.svg');
  this.copy('fonts/FiraMonoOT-Regular.ttf', 'app/fonts/FiraMonoOT-Regular.ttf');
  this.copy('fonts/FiraMonoOT-Regular.woff', 'app/fonts/FiraMonoOT-Regular.woff');
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

BoagenGenerator.prototype.gruntfile = function gruntfile() {
  this.copy('Gruntfile.js', 'Gruntfile.js');
};

BoagenGenerator.prototype.projectfiles = function projectfiles() {
  this.copy('editorconfig', '.editorconfig');
  this.copy('jshintrc', '.jshintrc');
  this.copy('jshintignore', '.jshintignore');
};
