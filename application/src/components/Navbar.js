import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import { fetchAllUsers } from "../services/AllUsersService";
import { Icon }  from 'semantic-ui-react'

class Navbar extends React.Component {
  state = {
    users: []
  };

  componentDidMount() {
    fetchAllUsers().then(users => {
      this.setState({
        users
      });
    });

  }
  render() {
    return (
      <nav className={styles.sidenav}>
        <ul className={styles.links}>
          <NavLink activeClassName={styles.active} exact strict to={"/"} className={styles.link} key="home"><p><Icon name='home' size="big"/></p>Home</NavLink>
          {this.state.users.map(user => {
            return (
                <NavLink activeClassName={styles.active} to={`/users/${user.id}/albums`}
                  key={user.id}
                  className={styles.link}>
                  {user.name}
                </NavLink>
            );
          })}
        </ul>
      </nav>
    );
  }
}

export default Navbar;