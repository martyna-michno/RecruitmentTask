import React from 'react';
// import { fetchUser } from "../services/UserService";

class UserPanel extends React.Component {

    state = {
        user: {}
      };

    componentDidMount() {

        fetch(`https://jsonplaceholder.typicode.com/users/${this.props.match.params.id}`)
          .then(({ data: user }) => {
            this.setState({ user });
          });

       }


    render(){
        return(
        <h1>Hello everyone, my name is {this.state.user.name}, what about you?</h1>
        )
        }
}

export default UserPanel
