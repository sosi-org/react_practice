Steps taken


sudo npm update -g
npm i babel-cli
# ./node_modules/.bin/babel ./component.jsx
# git mv hw.js hw.jsx
# ./node_modules/.bin/babel ./hw.jsx  # wont work yet
npm i babel-cli babel-preset-react
# ./node_modules/.bin/babel ./hw.jsx  #wont work
cat .babelrc
echo '{ "presets": ["react"] }' > .babelrc
./node_modules/.bin/babel ./hw.jsx   # works
