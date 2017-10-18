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
    this.setClass();
  }

  setClass () {
    if (!this.state.user) {
      this.setState({ cName: 'circle circle-default' });
    } else if (this.state.user === currentUser) {
      this.setState({ cName: 'circle circle-mine' });
    } else {
      this.setState({ cName: 'circle circle-taken' });
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
      this.setClass(this.state.user);
      this.props.action(this); // Update board
    })
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