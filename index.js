import React from 'react';
import ReactDOM from 'react-dom';

import GithubList from './components/containers/GithubList';

import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

import GithubUsersList from './reducers/GithubUsersList';

import styled from 'styled-components';

const Application = styled.div`
  width: 60vw;
  margin: 0 auto;
  font-family: sans-serif;

  @media screen and (max-width: 420px){
    width: 90vw;
   }

`;

//Intialize Redux Store
let store = createStore(
  GithubUsersList,
  applyMiddleware(thunk)
);

//top level of React component hierarchy
class App extends React.Component {
  render() {
    return (
      <Application>
        <GithubList />
      </Application>
    )
  }
}

ReactDOM.render(
  <Provider store = { store }>
    <App/>
  </Provider>,
  document.getElementById('app')
)
