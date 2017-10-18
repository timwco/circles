import React from 'react';

class Circle extends React.Component {

  state = { id: 0, taken: false, mine: false, cName: 'circle circle-default' }

  constructor (props) {
    super(props);
    this.state.taken = this.props.cData.user ? true : false;
    this.state.id = this.props.cData.id;
  }

  toggle () {
    if (this.state.mine) {
      this.setState({ cName: 'circle circle-default', mine: false });
    } else if (!this.state.taken){
      this.setState({ cName: 'circle circle-mine', mine: true });
    }
    this.props.action(this); // Update board
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