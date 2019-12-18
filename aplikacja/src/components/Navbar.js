import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import { fetchUsers } from "../services/UserService";

class Navbar extends React.Component {
  state = {
    users: []
  };

  componentDidMount() {
    fetchUsers().then(users => {
      this.setState({
        users
      });
    });

  }
  render() {
    return (
      <nav className={styles.sidenav}>
        <ul className={styles.links}>
          {this.state.users.map(user => {
            return (
              <li>
                <NavLink activeClassName={styles.active} to={`users/${user.id}/albums`}>"
                  key={user.id}>
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