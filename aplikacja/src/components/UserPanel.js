import React from 'react';
import fetchUser from "../services/UserService";
import { fetchAlbums } from "../services/AlbumsService";
import { NavLink } from "react-router-dom";
import styles from "./UserPanel.module.css";
import { ShowLoader } from "./Loader.js"
import { Button, Header, Image, Modal } from 'semantic-ui-react'
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
      <article className={"article"}>
        <h1>Here is list of albums, which author is {this.state.user.name}. Enjoy!</h1>
        <h2>Do you want to see more information about this user?</h2>
        <Modal trigger={<Button color={"blue"}>Click here</Button>} closeIcon>
          <Modal.Header>{this.state.user.name} ({this.state.user.username})</Modal.Header>
          <Modal.Content image>
            <Image centred="true" wrapped size='medium' src='https://iupac.org/wp-content/uploads/2018/05/default-avatar.png' />
            <Modal.Description>
              <Header>Address:</Header>
              <p>
                Street: {this.state.user.street}
        </p>
        <p>
                Suite: {this.state.user.suite}
        </p>
        <p>
                City: {this.state.user.city}
        </p>
        <p>
                Zipcode: {this.state.user.zipcode}
        </p>
        <Header>Information:</Header>
        <p>
            Phone: {this.state.user.phone}
        </p>
        <p>
             Website: {this.state.user.website}
        </p>
        <p>
             Company: {this.state.user.company}
        </p>
            </Modal.Description>
          </Modal.Content>
        </Modal>
        <h3>Click on one album to see its photos:</h3>
        <ul className="links">
          {this.state.albums.map(album => {
            return (
              <li key={album.albumId}>
                <NavLink to={`/users/${this.state.user.id}/albums/${album.albumId}`}
                  className={styles.album}
                  activeClassName={styles.active}>
                  {album.name}
                </NavLink>
              </li>
            );
          })
          }
        </ul>
      </article>
      :
      <article className={"article"}>
        <ShowLoader />
      </article>
  }
  }


export default UserPanel
