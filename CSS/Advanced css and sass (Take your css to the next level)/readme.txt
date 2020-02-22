Tips
====
1. Search for clip path maker
2. To install sass and run it
> npm install node-sass --save-dev
- Under package.json > scripts
 "complie:sass": "node-sass sass/main.scss css/style.css" <<< add -w can watch the file changes and compile directly
 "complie:sass": "node-sass [input sass file] [output css file]"

3. To auto reload browser when file changes
> npm install live-server -g
- Command line Interface go to main directory
> live-server

4. Guidelines for CSS and SASS
> CSS Naming BEM
> SASS 7 - 1 Pattern

5.coverr.co <<< Great animation video for background

6. sizzy <<< to test website in various devices

7. 
min-resolution: 192dpi) and (min-width: 37.5em)
^^^ For Windows

(-webkit-min-deivce-pixel-ratio: 2) and (min-width: 37.5em)
^^^ For OS X

8. Four Steps of CSS Building
- Compilation
- Concatenation
- Prefixing
- Compressing

npm install concat --save-dev
npm install autoprefixer --save-dev
npm install postcss-cli --save-dev
npm install node-sass --save-dev
npm install npm-run-all --save-dev


Under Script
------------

"compile:sass": "node-sass sass/main.scss css/style.comp.css",
"concat:css": "concat -o css/style.concat.css css/icon-font.css css/style.comp.css",
"prefix:css": "postcss --use autoprefixer -b \"last 10 versions\" css/style.concat.css -o css/style.prefix.css",
"compress:css": "node-sass css/style.prefix.css css/style.css --output-style compressed",
"build:css": "npm-run-all compile:sass concat:css prefix:css compress:css"

> npm run build:css

9. Another use case of npm-run-all
"devserver": "live-server",
"start": "npm-run-all --parallel devserver watch:sass",

10.) icomoon.io <<< Free SVG Icon

11.) Best way to use SVG Icon
<svg class="search__icon">
    <use xlink:href="img/sprite.svg#icon-manifying-glass"></use>
</svg>