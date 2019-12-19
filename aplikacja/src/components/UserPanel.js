import React from 'react';
import fetchUser from "../services/UserService";
import { fetchAlbums } from "../services/AlbumsService";

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
              <li key={album.albumId}>{album.name}</li>
            );
          })
          }
        </ul>
      </main>
      :
      <main className={"main"}><h1>looooooading...</h1></main>
  }
}

export default UserPanel
