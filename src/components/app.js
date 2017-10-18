import React from 'react';

import { Board } from './board';

class App extends React.Component {

  render () {
    return (
      <div className="circles-app">
        <h1>Welcome to Circles</h1>
        <hr />
        <Board />
      </div>
    );
  }

}

export { App };