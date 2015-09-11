# Grunt Project Template

This Grunt Project Template is pre-built to easily allow for rapid project development.


## Dependencies

The Grunt Project Template requires a number of dependencies to function correctly:

* [Node.js](https://nodejs.org/) - JavaScript runtime built on Chrome's V8 JavaScript engine. 
* [Grunt](http://gruntjs.com/) - JavaScript Task Runner. 
* [Sass](http://sass-lang.com/) - Professional grade CSS extension language. 

In addition, The Grunt Project Template includes the following technologies out of the box:

* [jQuery](https://jquery.com/) - Feature-rich JavaScript library.
* [Normalize](https://necolas.github.io/normalize.css/) - HTML5-ready alternative to CSS resets. 
* [Pure.css](http://purecss.io/grids/) - A set of small, responsive CSS modules. 

The Grunt Project Template makes use of the following grunt tasks:

* [grunt-contrib-connect](https://github.com/gruntjs/grunt-contrib-connect) - Fires up a web server and live-reload. 
* [grunt-contrib-clean](https://github.com/gruntjs/grunt-contrib-clean) - Cleans files and folders. 
* [grunt-contrib-concat](https://github.com/gruntjs/grunt-contrib-concat) - Concatenates files. 
* [grunt-contrib-uglify](https://github.com/gruntjs/grunt-contrib-uglify) - Minifies files with UglifyJS. 
* [grunt-contrib-imagemin](https://github.com/gruntjs/grunt-contrib-imagemin) - Minifies images. 
* [grunt-contrib-sass](https://github.com/gruntjs/grunt-contrib-sass) - Compiles Sass to CSS. 
* [grunt-contrib-watch](https://github.com/gruntjs/grunt-contrib-watch) - Runs tasks whenever file patterns are added, changed or deleted. 
* [grunt-contrib-htmlmin](https://github.com/gruntjs/grunt-contrib-htmlmin) - Minifies HTML. 
* [grunt-postcss](https://github.com/nDmitry/grunt-postcss) - Applies several post-processors to your CSS using PostCSS.


## Installation

Download and install [Node.js](https://nodejs.org/).

Install the Grunt CLI<br/>
```npm install -g grunt-cli```

Install [Sass](http://sass-lang.com/).<br/>
```sudo gem install sass```

Clone the Grunt Project Template to a location of your choice and open it in your terminal.<br/>
```$ git clone https://github.com/Sntax/template.git```<br/>
```$ cd template```

Install required task dependencies.<br/>
```$ npm install```


## File Structure

**HTML** should be done in the `/src/index.html` file. <br/>
Additional HTML files should be placed in the `/src/` directory for minification. <br/>
All minified HTML can be found in the `/dist/` directory. 

**Sass Styling** should be done in the `/src/app/scss/styles.scss` file.<br/>
Additional Sass files should be placed in this directory and added to the `/src/app/scss/app.scss` for compiling and compression. <br/>
All compiled and compressed CSS can be found in the `/dist/css/styles.min.css` file. 

**Custom JavaScript** should be done in the `/src/app/js/scripts.js` file.<br/>
Additional custom JavaScript files should be placed in the `/src/app/js/` directory for uglification and concatination.<br/>
All uglified and concatinated JavaScript can be found in the `/dist/js/scripts.min.js` file. 

**Images** should be placed in the `/src/app/images/` directory for minification.<br/>
All minified images can be found in the `/dist/images/` directory. 

**Custom Fonts** should be placed in the `/lib/fonts/` directory. 

**CSS Library Files** should be given a .scss extension and be placed in the `/lib/scss/` directory and  for compiling and compression. 

**JavaScript Library Files** should be placed in the `/lib/js/` directory for uglification and concatination. 


## Running Tasks

The Grunt Project Template comes with two ready-to-use tasks, `dev` and `dist`.

Running `$ grunt dev` will fire up a web server at `0.0.0.0:1337` and watch your files for any changes. 

If changes are detected in your `/src/` folder, the `$ grunt dev` task will:

* Concatinate and uglify all JavaScript.
* Compile any Sass and apply post-processors to the compiled CSS.
* Minify all HTML.
* Execute a live reload on any browsers open on '0.0.0.0:1337'

Running `$ grunt dist` will not fire up a web server or watch any of your files. 

Instead, it will: 

* Clean any files out of your `/dist/` directory. 
* Concatinate and uglify all JavaScript.
* Compile any Sass and apply post-processors to the compiled CSS.
* Minify all JPEG, PNG, or GIF images in your `/src/app/images/` directory.
* Minify all HTML.


## Additional File Inclusions
The Grunt Project Template comes with the following inclusions to get your project started: 
* A custom .gitignore file to filter out temp files and other unnecessary files & folders.
* An .htaccess file to make use of browser caching.
* A humans.txt file to contains information about those building the current project.
* A basic robots.txt file to give instructions about your project to web robots.

## Credits

Thanks to [Cole Gentry](https://github.com/SomethingNew71) whose insights on proper pathing, file structures, and Scss imports have brought this project to fruition. 
