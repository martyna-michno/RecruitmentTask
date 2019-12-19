import React from 'react';
import fetchUser from "../services/UserService";

class UserPanel extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
    };
  }

  componentDidMount() {
    fetchUser(this.props.match.params.id).then((user) => {
      this.setState({ user });
    });

  }

  componentWillUpdate() {
    fetchUser(this.props.match.params.id).then((user) => {
      this.setState({ user });
    });

  }

  render() {
    return this.state.user ?
      <main className={"main"}> <h1>Hello everyone, my name is {this.state.user.name}, what about you?</h1></main>
      : <main className={"main"}><h1>looooooooooooading...</h1></main>
  }
}

export default UserPanel
