import React from 'react';
import fetchUser from "../services/UserService";
import {fetchAlbums} from "../services/AlbumsService";

class UserPanel extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      albums: [],
      user: ''
    };
  }

  componentDidMount() {
    fetchUser(this.props.match.params.id).then((user) => {
      this.setState({ user });
    });
    fetchAlbums(this.props.match.params.id).then((albums) => {
      this.setState({ albums });
    });
  }

  componentWillUpdate() {
    fetchUser(this.props.match.params.id).then((user) => {
      this.setState({ user });
    });
    fetchAlbums(this.props.match.params.id).then((albums) => {
      this.setState({ albums });
    });
  }

  render() {
    return this.state.user && this.state.albums ?
      <main className={"main"}>
        <h1>Hello everyone, my name is {this.state.user.name}, what about you?
{this.state.albums.map(album => {
          return (
            <li key={album.albumId}>{album.name}</li>
          );
        })
          }
        </h1>
      </main>
      : <main className={"main"}><h1>looooooading...</h1></main>
  }
}

export default UserPanel
