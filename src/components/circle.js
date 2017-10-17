import React from 'react';

class Circle extends React.Component {

  state = { taken: false, mine: false, cName: 'circle circle-default' }

  constructor () {
    super();
  }

  toggle () {
    if (this.state.mine) {
      this.setState({ cName: 'circle circle-default', mine: false });
    } else if (!this.state.taken){
      this.setState({ cName: 'circle circle-mine', mine: true });
    }
  }

  render () {
    return (
      <div 
        className={ this.state.cName } 
        onClick={ this.toggle.bind(this) }>
      </div>
    );
  }

}

export { Circle };