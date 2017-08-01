import React from 'react';
import ReactDOM from 'react-dom';



ReactDOM.render(
  <h1>Hello, world1 !</h1>,
  document.getElementById('root')
);



class App extends React.Component {
  render() {
    return <h1>Hello world2</h1>;
  }
};

ReactDOM.render(<App />, document.querySelector('#container'));
