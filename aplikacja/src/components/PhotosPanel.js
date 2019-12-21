import React from 'react';
import { fetchPhotos } from '../services/PhotosService';
import { ShowLoader } from "./Loader.js";
import { Card, Image} from 'semantic-ui-react';
import ScrollUpButton from "react-scroll-up-button";

const Photo = props => {
    const {
      picture,
      name
    } = props;
  
    return (
      <Card>
        <Image src={picture} wrapped ui={false} />
        <Card.Content textAlign="center">
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
                <h1 style={{textAlign: "center"}}>Hello, check photos!</h1>
                <Card.Group centered>
                {this.state.photos.map(photo => (
                  <Photo
                    key={photo.photoId}
                    photoId={photo.photoId}
                    picture={photo.tinyUrl}
                    name={photo.name}
                  />
                ))}
              </Card.Group>
              <div>
        <ScrollUpButton 
        style={{height: 35, width: 35}} />
      </div>
 
            </article>

            :
            <article className={"article"}>
                <ShowLoader />
            </article>

    }
}

export default PhotosPanel