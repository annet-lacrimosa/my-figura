# my-figura
/* npm install --global gulp-cli */

default task:
	+1) watch scss/less, js, font's svg, html
	+2) scss/less to css,                                      -->  npm install --save-dev gulp-sass
			           			                                       -->  npm install --save-dev gulp-less
	+3) autoprefixer,                                          -->  npm install --save-dev gulp-autoprefixer
	+4) generate sourcemaps

start localhost:
	+1) livereload / browsersync for changes in css, js, html  -->  npm install --save-dev gulp-livereload
															   -->  npm install --save-dev gulp-connect

deploy markup structure:
  +1) deploy markup structure,                               -->  npm install gulp-git --save

finish project:
	+1) prettify css, js,                                      -->  npm install --save-dev gulp-cssbeautify
				          		                                       -->  npm install --save-dev gulp-js-prettify
	+2) optimize images (png, jpg, svg)                        -->  npm install --save-dev gulp-imagemin


Additional:
	+1) js es6 to es5,                                         -->  npm install --save-dev gulp-babel babel-preset-es2015
	+2) minify css, js,                                        -->  npm install --save-dev gulp-clean-css
				        	                                           -->  npm install --save-dev gulp-uglify pump
	+3) html includes,                                         -->  npm install --save-dev gulp-file-include
	+4) svg icons to fonts,                                    -->  npm install --save-dev gulp-iconfont gulp-iconfont-css
	+5) Console notifications                                  -->  npm install --save-dev gulp-notify



** GULP COMMANDS: **

  1. MAIN

    1) 'gulp', 'gulp localhost' - start watching the project with SCSS on localhost which address specified in terminal window.
    2) 'gulp localhost:less' - start watching the project with LESS on localhost which address specified in terminal window.
    3) 'gulp localhost:includes' - start watching the project with SCSS and HTML includes on localhost which address specified in terminal window.
    4) 'gulp localhost:incless' - start watching the project with LESS and HTML includes on localhost which address specified in terminal window.
    5) 'gulp dist' - complete the project, prettify output CSS and JS files, minify images (JPG, PNG, GIF, SVG).
    6) 'gulp dist:minify' - complete the project, minify output CSS and JS files, minify images (JPG, PNG, GIF, SVG).
    7) 'gulp minify' - minify output CSS and JS files.
    8) 'gulp prettify' - prettify output CSS and JS files.


  2. PERIPHERAL

    1) 'gulp optimize' - minify images (JPG, PNG, GIF, SVG).
    2) 'gulp watch' - start watching the project with SCSS.
    3) 'gulp watch:less' - start watching the project with LESS.
    4) 'gulp watch:includes' - start watching the project with HTML includes.
    5) 'gulp babel' - compile javascript format EcmaScript 6 to EcmaScript 5.
    6) 'gulp iconfont' - generate icon font from SVG icons and add SCSS include with specified icon names.
    7) 'gulp iconfont:less' - generate icon font from SVG icons and add LESS include with specified icon names.
    8) 'gulp deploy' - clone remote repository from GIT with full markup structure.


  3. SINGLE COMMANDS

    1) 'gulp scss' - compile SCSS files to CSS.
    2) 'gulp less' - compile LESS files to CSS.
    3) 'gulp fileinclude' - compile HTML includes to clear HTML.


    DESCRIPTIONS:

      1) Getting started
          First of all install GULP and NPM to your computer (npm is bundled with node, gulp: $ npm install --global gulp-cli).
          Then you should to install local modules: make command "$ npm install" from folder where your gulpfile.js is placed.
          You able don't use all possibilities of this gulp assembly. For example, if you need just less compiling, you can remove scss folder,
          sourceicons and includes. But if you decide to add something in the middle of project development, you can easily create 
          necessary folder and just write needed command.
          If you need, you can clone remote repository from GIT with full markup structure using command 2.8.

      2) HTML includes
          It will be useful if you have a lot pages with the similar components from page to page.
          For beginning you should to create folder "includes" in your markup and put into this folder your HTML files which will be contain code patterns.
          These patterns should to be into a folder "templates" inside folder "includes" (includes/templates/header.html).
          After compiling you will get clear HTML in your root markup folder.
          You can compile your HTML templates using different commands: 1.3 (default case with SCSS), 1.4 (for LESS), 2.4

      3) Icon font
          Icon fonts allow you to use SVG icons as font-face and don't waste your time to difficult on-line generation.
          For start make sure that your icons consist of only one color. Then you should to create folder "sourceicons" in your markup
          and put your icons in this folder.
          In the folder "sourceicons" you should to create folder "template" with CSS template file - _icons.css (sourceicons/template/_icons.css).
          It have to consist form CSS template: http://prntscr.com/f5ib1f.
          After generation you will get icon font in following formats: 'ttf', 'eot', 'woff', 'woff2', 'svg' into "fonts" folder
          and SCSS or LESS include named _icons.scss/_icons.less, in "scss/base" (or "less/base") directory.
          Then just include these styles into your main SCSS/LESS file.
          For using icon font you should to add on your element two classes: <i class="icon [icon_name]"></i> - "icon" as a key of icon font 
          and unique icon name as the second class. All time when you want to add new icon to your icon font-face you should to stop gulp watching
          and provide corresponding gulp command: 2.6 (default case with SCSS include) or 2.7 (for LESS include).
