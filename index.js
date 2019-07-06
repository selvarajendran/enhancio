import React from 'react';
import ReactDOM from 'react-dom';

import GithubList from './components/containers/GithubList';

import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

import GithubUsersList from './reducers/GithubUsersList';

//Intialize Redux Store
let store = createStore(
  GithubUsersList,
  applyMiddleware(thunk)
);

//top level of React component hierarchy
class App extends React.Component {
  render() {
    return (
      <div className="app">
        <GithubList store = { store }/>
      </div>
    )
  }
}

ReactDOM.render(
  <Provider store = { store }>
    <App/>
  </Provider>,
  document.getElementById('app')
)
