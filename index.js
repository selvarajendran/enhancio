import React from 'react';
import ReactDOM from 'react-dom';

//top level of React component hierarchy
class App extends React.Component {
  render() {
    return (
      <div> 
        Enhancio Task
      </div>
    )
  }
}

ReactDOM.render(
    <App/>,
  document.getElementById('app')
)
