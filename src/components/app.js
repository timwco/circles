import React from 'react';
import { updateTime } from '../helpers/updateTime';

import { Board } from './board';

class App extends React.Component {

  state = { timestamp: 'loading...' };

  constructor () {
    super();
    updateTime((timestamp) => this.setState({ timestamp }));
  }

  render () {
    return (
      <div className="circles-app">
        <h1>Welcome to Circles</h1>
        <hr />
        <h4>Current Time: {this.state.timestamp}</h4>
        <hr />
        <Board />
      </div>
    );
  }

}

export { App };