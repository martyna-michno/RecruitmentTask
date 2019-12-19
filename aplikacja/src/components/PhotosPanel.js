import React from 'react'
import { fetchPhotos } from '../services/PhotosService';
import { ShowLoader } from "./Loader.js"
import { Card, Image} from 'semantic-ui-react'

const Photo = props => {
    const {
      photoId,
      picture,
      name
    } = props;
  
    return (
      <Card>
        <Image src={picture} wrapped ui={false} />
        <Card.Content>
          <Card.Header>{name}</Card.Header>
        </Card.Content>
      </Card>
    );
  };
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
                <Card.Group>
                {this.state.photos.map(photo => (
                  <Photo
                    key={photo.photoId}
                    photoId={photo.photoId}
                    picture={photo.tinyUrl}
                    name={photo.name}
                  />
                ))}
              </Card.Group>
                {/* {this.state.photos.map(photo => {
                    return (
                        <li>
                            {photo.name}
                        </li>
                    );
                })} */}
            </article>

            :
            <article className={"article"}>
                <ShowLoader />
            </article>

    }
}

export default PhotosPanel