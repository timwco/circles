import React from 'react';

class Circle extends React.Component {

  state = { taken: false, mine: false, cName: 'default' }

  constructor () {
    super();
  }

  toggle () {

  }

  genClass () {
    if (this.state.taken) {
      
    }
  }

  render () {
    return (
      <div className="circle" onClick={ this.toggle.bind(this) }></div>
    );
  }

}

export { Circle };