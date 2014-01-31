# generator-boagen [![Build Status](https://secure.travis-ci.org/tylerama/generator-boagen.png?branch=master)](https://travis-ci.org/tylerama/generator-boagen)

A generator for [Yeoman](http://yeoman.io).


## Getting Started

### What is Yeoman?

Trick question. It's not a thing. It's this guy:

![](http://i.imgur.com/JHaAlBJ.png)

Basically, he wears a top hat, lives in your computer, and waits for you to tell him what kind of application you wish to create.

Not every new computer comes with a Yeoman pre-installed. He lives in the [npm](https://npmjs.org) package repository. You only have to ask for him once, then he packs up and moves into your hard drive. *Make sure you clean up, he likes new and shiny things.*

```
$ npm install -g yo
```

### Yeoman Generators

Yeoman travels light. He didn't pack any generators when he moved in. You can think of a generator like a plug-in. You get to choose what type of application you wish to create, such as a Backbone application or even a Chrome extension.

To install generator-boagen from npm, run:

```
$ npm install -g generator-boagen
```

Finally, initiate the generator:

```
$ yo boagen
```

### Getting To Know Yeoman

Yeoman has a heart of gold. He's a person with feelings and opinions, but he's very easy to work with. If you think he's too opinionated, he can be easily convinced.

If you'd like to get to know Yeoman better and meet some of his friends, [Grunt](http://gruntjs.com) and [Bower](http://bower.io), check out the complete [Getting Started Guide](https://github.com/yeoman/yeoman/wiki/Getting-Started).

## What This Is

This is a Yeoman Generator which acts as the starting point for all new BOA websites.

## What This Includes

This includes the custom CSS framework, made by Mr. Todd Ladner, built with LESS. It also includes Modernizr, jQuery, and optionally the [Gumby Framework](http://gumbyframework.com). To help with development efficiencies, there are a few [Grunt](http://gruntjs.com) tasks built in. These tasks do things like automatically update the browser(s) as you modify files, hint JavaScript files to help with code cleanliness, compile, concatenate, and uglify LESS and JavaScript files.

## What This Depends On

This generator depends on some excellent front-end-friendly command line tools. Don't be scurrred. To use this generator you must have [NodeJS](http://nodejs.org), [Git](http://git-scm.com/), and [Yeoman](http://yeoman.io) installed and properly configured. If you haven't done that yet please do it now. I'll wait.

## How to Use This

Once you have the dependencies installed and configured, follow these steps to scaffold out a new project, pressing ENTER after each command.
In the terminal:

```
$ cd path/to/new/project/folder
```
Did you follow the steps from Yeoman above? If not you'll need to do this

```
$ npm install -g generator-boagen
```
```
$ yo boagen
```

Then, Yeoman will ask you 3 questions:
1. The name of this project (spaces allowed).
2. Do you want to include the Gumby Framework?
3. Do you want to include the extensions to the Gumby Framework?

Once these questions have been answered, the project and its dependecies will install. Go get a coffee while this happens.

You'll notice you have a lot of files and folders in that project folder now. What we'll be primarily concerned about is the app folder. Open this guy and you will see the index.html file for you to start working in. Similarly, you will see the styles folder with the less files in it, a scripts folder with a starter JavaScript file, and other normal folders for a website project.

To start using the amazingness of Grunt, go back to your command line and execute the following command:

```
$ grunt serve
```


## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)
