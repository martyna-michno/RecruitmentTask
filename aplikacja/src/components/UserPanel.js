import React from 'react';
import { fetchUser } from "../services/UserService";

class UserPanel extends React.Component {

    state = {
        user: ''
      };

    componentDidMount() {
        fetchUser().then(user => {
            this.setState({
              user
            });
          });

       }
    render(){
        return(
        <h1>Hello everyone, my name is {this.state.user.name}</h1>
        )
        }

}

export default UserPanel
