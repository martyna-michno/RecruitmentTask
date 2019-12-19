import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import { fetchAllUsers } from "../services/AllUsersService";

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
          <li><NavLink activeClassName={styles.active} to={"/home"} className={styles.link}>HOME</NavLink></li>
          {this.state.users.map(user => {
            return (
              <li>
                <NavLink activeClassName={styles.active} to={`/users/${user.id}/albums`}
                  key={user.id}
                  className={styles.link}>
                  {user.name}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}

export default Navbar;