import React from 'react';
import ReactDOM from 'react-dom';

//import CSSModules from 'react-css-modules';
//import styles from './public/app2.css';  // Why?
//import logo from './logo.svg';  // why???


ReactDOM.render(
  <h1>Hello, world1 !</h1>,
  document.getElementById('root')
);



class App1 extends React.Component {
  render() {
    return <h1>Hello world2</h1>;
  }
};


/*
class App extends React.Component {
   render() {
     return (
       <div className="App">
         <div className="App-header">
           <img src={logo} className="App-logo" alt="logo" />
           <h2>Welcome to Apollo</h2>
         </div>
         <ChannelsList />
       </div>
     );
   }
 }
*/

//export default App;

ReactDOM.render(<App1 />, document.querySelector('#container'));


// Warning: React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: undefined. You likely forgot to export your component from the file it's defined in.


/*
const ChannelsList = () =>
     (<ul>
       <li>Channel 1</li>
       <li>Channel 2</li>
     </ul>);
*/






// Prepare for GraphQL

import {
  ApolloClient,
  gql,
  graphql,
  ApolloProvider,
} from 'react-apollo';

// const client = new ApolloClient();

import { createNetworkInterface } from 'apollo-client';
//import gql from 'graphql-tag';


const client = new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: 'https://api.github.com/graphql',
  }),
});
// see https://github.com/apollographql/apollo-client
// see https://developer.github.com/v4/guides/forming-calls/#the-graphql-endpoint


/*const channelsListQuery = gql`
   query ChannelsListQuery {
     channels {
       id
       name
     }
   }
 `;
 */

const channelsListQuery = gql`
   query ChannelsListQuery {
     channels {
       id
       name
     }
   }
 `;



const ChannelsList = ({ data: {loading, error, channels }}) => {
   if (loading) {
     return <p>Loading ...</p>;
   }
   if (error) {
     return <p>{error.message}</p>;
   }

   return <ul>
     { channels.map( ch => <li key={ch.id}>{ch.name}</li> ) }
   </ul>;
 };

const ChannelsListWithData = graphql(channelsListQuery)(ChannelsList);





class App2 extends React.Component {
   render() {
     return (
                                                <ApolloProvider client={client}>
       <div className="ok">
         <ChannelsListWithData />
       </div>
                                                </ApolloProvider>
     );
   }
 }

ReactDOM.render(<App2 />, document.querySelector('#app2div'));




