import React from 'react';

class Circle extends React.Component {

  state = {}

  constructor (props) {
    super(props);
  }

  componentWillMount() {
    this.state.currentUser = this.props.currentUser;
    this.state.user = this.props.data.user;
    this.state.id = this.props.data.id;
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ user: nextProps.data.user });
    this.setState({ currentUser: nextProps.currentUser });
  }

  getClass () {
    if (this.state.user === this.state.currentUser) {
      return 'circle circle-mine';
    } else if (!this.state.user) {
      return 'circle circle-default';
    } else {
      return 'circle circle-taken';
    }
  }

  toggle () {
    // Updates our game board
    this.props.updateBoard(this);
  }

  render () {
    return (
      <div
        className={ this.getClass() }
        onClick={ this.toggle.bind(this) }>
      </div>
    );
  }

}

export { Circle };