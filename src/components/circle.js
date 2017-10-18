import React from 'react';

const currentUser = 'tim';

class Circle extends React.Component {

  state = {}

  constructor (props) {
    super(props);
  }

  componentDidMount () {
    this.state.user = this.props.data.user;
    this.state.id = this.props.data.id;
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ user: nextProps.data.user });
  }

  getClass () {
    if (!this.state.user) {
      return 'circle circle-default';
    } else if (this.state.user === currentUser) {
      return 'circle circle-mine';
    } else {
      return 'circle circle-taken';
    }
  }

  toggle () {
    let newUser;

    if (this.state.user === currentUser) {
      newUser = '';
    } else if (!this.state.user) {
      newUser = currentUser;
    } 

    this.setState({ user: newUser }, () => {
      this.props.action(this); // Update board
    })
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