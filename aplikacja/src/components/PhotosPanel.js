import React from 'react'
import { fetchPhotos } from '../services/PhotosService';

class PhotosPanel extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
        };
    }

    componentDidMount() {
        fetchPhotos(this.props.match.params.albumId).then((photos) => {
            this.setState({ photos });
        });
    }

    render() {
        return this.state.photos ?
            <main className={"main"}>
                <h1>Hello, check photos!</h1>
                {this.state.photos.map(photo => {
                    return (
                        <li>
                            {photo.name}
                        </li>
                    );
                })}
            </main>
            :
            <main className={"main"}><h1>looooooading...</h1></main>
        }
      }

export default PhotosPanel