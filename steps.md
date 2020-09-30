# Steps taken

based on http://krasimirtsonev.com/blog/article/The-bare-minimum-to-work-with-React

The bare minimum to work with React

A tutorial less sophisticaed that one using WebPack

```sh

sudo npm update -g
npm i babel-cli
```
```
# ./node_modules/.bin/babel ./hw.jsx
# git mv hw.js hw.jsx
# ./node_modules/.bin/babel ./hw.jsx  # wont work yet
npm i babel-cli babel-preset-react
# ./node_modules/.bin/babel ./hw.jsx  #wont work
cat .babelrc
echo '{ "presets": ["react"] }' > .babelrc
./node_modules/.bin/babel ./hw.jsx   # works

touch package.json

# to make "import", etc work on browser:
npm i babel-cli babel-preset-react babel-preset-es2015

echo '{ "presets": ["react", "es2015"] }' > .babelrc
./node_modules/.bin/babel ./hw.jsx   # works


#   bundler    vs.    build system    vs.   task runner
#   .            gulp      .
#   .            grunt     .
#   webpack      webpack   .            # loaders
#   browserify   .       .              # requires  # no transpiler
#   babelify?


npm i react react-dom babel-preset-react babel-preset-es2015 browserify babelify
# echo ... # same
./node_modules/.bin/browserify ./hw.jsx -o ./bundle.js -t babelify

# We no longer use babel-cli
removed from packags.json:
          "babel-cli": "^6.24.1",
# next: uglify (to minify) + watcher

npm i react react-dom babel-preset-react babel-preset-es2015 watchify babelify

./node_modules/.bin/watchify ./hw.jsx -o ./bundle.js -t babelify -v
# use &

mkdir public

npm i
npm run build
npm run watch
```


To actually run on browser:
Dont forget the following inside the JSX file:

```jsx
`import React from 'react';
import ReactDOM from 'react-dom';`
```

Also make an HTML file:
`<script src="app.js"></script>`
dont forget to add a `<div>` with the right name: `id="container"`  or `is="root"`



## TODO
next steps:

1.
Use for test + webpack  (web server, etc)
http://krasimirtsonev.com/blog/article/a-modern-react-starter-pack-based-on-webpack

1.5
move things into the src folder

2.
Use  ?

3. Use CircleCI

4.
Pure ES2016

5.
Do practice some ES2016







================
Next day:
```sh
npm install css-loader --save-dev
```


========================
make a folder
```sh
npm init
<enter>

npm install -S webpack`


./node_modules/webpack/bin/webpack.js
# will miss webpack.config.js

#why?
#npm install -g webpack

touch webpack.config.js
```
COPY/PASTE IT  from https://gist.github.com/learncodeacademy/25092d8f1daf5e4a6fd3
edit source name, etc. `ENTRY=""`
make sure q.js requires a few other js files.

now run again
```
touch webpack.config.js
```

intesresting. It copies the modeuils files. How does it know?
but keeps them in separate funcitons!
nice trick.

```sh
NODE_ENV=produciton     ./node_modules/webpack/bin/webpack.js
```

now it's tiny.


It doesnt recognise this first:  OccurenceOrderPlugin
```sh
npm install -S jquery
```

lodash = ?    is undescoreJS

```sh
var $ = require('jquery')

$(...). ...
```
The module code is not in global scope.



It can detect and use the SAME jquery

Interesting:
not noeed to mention jquery or module names in webpack.config.js

Webpack; by definitin: generates STATIC files.


`export default `...
(for webpack)

You can also add HTML.
I didn't.
