import React from 'react';
import fetchUser from "../services/UserService";
import { fetchAlbums } from "../services/AlbumsService";
import { NavLink } from "react-router-dom";
import styles from "./UserPanel.module.css";
import { ShowLoader } from "./Loader.js"
class UserPanel extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      albums: [],
      user: ''
    };
  }

  componentDidMount() {
    this.loadData(this.props.match.params.id)
  }

  componentWillReceiveProps(props) {
    if (this.props.match.params.id !== props.match.params.id) {
      this.loadData(props.match.params.id)
    }
  }


  loadData(id) {
    fetchUser(id).then((user) => {
      this.setState({ user });
    });
    fetchAlbums(id).then((albums) => {
      this.setState({ albums });
    });
  }

  render() {
    return this.state.user && this.state.albums ?
      <main className={"main"}>
        <h1>Hello everyone, my name is {this.state.user.name}, what about you?</h1><ul>
          {this.state.albums.map(album => {
            return (
              <li>
                <NavLink to={`/users/${this.state.user.id}/albums/${album.albumId}`}
                  key={album.albumId}
                  className={styles.album}
                  activeClassName={styles.active}>
                  {album.name}
                </NavLink>
              </li>
            );
          })
          }
        </ul>
      </main>
      :
      ShowLoader()
  }
}

export default UserPanel
