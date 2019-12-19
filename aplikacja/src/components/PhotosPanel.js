import React from 'react'
import { fetchPhotos } from '../services/PhotosService';
import { ShowLoader } from "./Loader.js"

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
            <article className={"article"}>
                <h1>Hello, check photos!</h1>
                {this.state.photos.map(photo => {
                    return (
                        <li>
                            {photo.name}
                        </li>
                    );
                })}
            </article>

            :
            <article className={"article"}>
                <ShowLoader />
            </article>

    }
}

export default PhotosPanel