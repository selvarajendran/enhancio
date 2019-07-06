import React from 'react';
import ReactDOM from 'react-dom';

import GithubList from './components/containers/GithubList';

//top level of React component hierarchy
class App extends React.Component {
  render() {
    return (
      <div className="app">
        <GithubList />
      </div>
    )
  }
}

ReactDOM.render(
    <App/>,
  document.getElementById('app')
)
