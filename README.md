# boagen [![Build Status](https://travis-ci.org/tylerama/boagen.png?branch=master)](https://travis-ci.org/tylerama/boagen)

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

You are now going to see all of your changes update on the fly, as you make them.

## Benefits of using me

The power of all of this is super obvious when you're developing a new project. The benefits are:
1. Automatically start with the latest CSS/LESS Framework files made by Todd.
2. Automatically start with the latest JavaScript files (minimum - jQuery, Modernizr).
3. Using the GRUNT SERVE task, all open windows will update as you change any html, less, or js file. This means no switching to a window to refresh, this also means that you can watch different browsers update at the same time.
4. LESS files are automatically compiled, and if there are errors the terminal will say where the error is.
5. JavaScript files are Linted using JSHint. What is JSHint? It is a tool that ensures code quality and consistency. You can read more at [JSHint](http://jshint.com). If there are any errors or use of bad practices, the terminal will alert to these spots.
6. Using the GRUNT SERVE task, there is a server started on your machine which runs the project. This minimizes cross-domain problems, and gives you a live shot of how the page will act.

## Bonus Points
If you want to get some bonus efficiency points, I have build the following tasks:

```
$ grunt build
```
When this command is executed a number of efficiency jobs get done. You'll notice in the base index.html file some weird commented areas:
```
<!-- build:js scripts/main.js -->
    <script src="scripts/main.js"></script>
    <!-- endbuild -->
```
This is an example of a build block. What this says is that all of the files in this build block will get concatenated into one main.js file in the scripts folder. They get concatenated in the order that they appear here. There are a couple more of these build blocks in the file (css, js).

Also, all images in the img folder will be optimized (over 86KB can be saved just by optimizing the two images this generator ships with!), all of the generated CSS and JavaScript files will also be minified and uglified. If that's not enough, the index.html file will be optimized too, allowing for maximum kb savings.

Last, but not least, The CSS and JavaScript files that were just minified and uglified are renamed to be prefixed with a build code. The references to these files in index.html are replaced with the new name. Why? This guarantees that you will not be using a cached version of the file.

*NOTE* If you plan on importing most of your files and code into a CMS (Kentico, for example), a lot of this build task may be useless. What would be of benefit in that situation would be to set up a new task to just concatenate the files that you want, and perhaps uglify certain ones.

This brings us to the next task...

```
$ grunt cms
```
I have set up one last task which takes a few files that will for sure be imported into a CMS the way they are, and copied these into a new folder named cms-files. This is one that will likely evolve into something that includes more files when we work with this process some more. But it's there for you to use, look at, and play with.

## Power User
Want some power? Try writing some JavaScript tests. Or maybe add more grunt tasks, whatever suits your workflow. There are a billion resources, don't be afraid!

## Collaboration
In order to keep our projects and process up to date, use this generator. Do you have a good piece of workflow that you think everyone would benefit from? Open an issue on this repository, or create a pull request to add it in. Keeping local files and copying and pasting is bad, source control is good. Using git we can keep track of the changes made as well as see the evolution of this project generator. Not to mention we will be able to ensure that every new project start the same, keeping our websites consistent and up to date.

We don't want to have a bunch of versions of Todd's beautiful framework running around each with a life of their own.

## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)
