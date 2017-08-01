Steps taken

# based on http://krasimirtsonev.com/blog/article/The-bare-minimum-to-work-with-React

sudo npm update -g
npm i babel-cli
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
