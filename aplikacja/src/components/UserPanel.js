import React from 'react';
// import { fetchUser } from "../services/UserService";

class UserPanel extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
    };
  }
  
  componentDidMount() {
    fetch(`https://jsonplaceholder.typicode.com/users/${this.props.match.params.id}`)
    .then(response => {
      if (response.ok) {
          return response.json();
      }
  })
      .then((user) => {
        this.setState({ user });
      });

  }

  componentWillUpdate(){
    fetch(`https://jsonplaceholder.typicode.com/users/${this.props.match.params.id}`)
    .then(response => {
      if (response.ok) {
          return response.json();
      }
  })
      .then((user) => {
        this.setState({ user });
      });

  }

    render() {
        return this.state.user ?
          <h1>Hello everyone, my name is {this.state.user.name}, what about you?</h1>
        : <h1>looooooooooooading...</h1>
    
      }
}

export default UserPanel
