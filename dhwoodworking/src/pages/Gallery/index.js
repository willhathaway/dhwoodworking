import React, {Component} from 'react';
import "./style.css";
import GalleryItem from "../../components/GalleryItem";
import galleryArray from "../../galleryArray.json";

class Gallery extends Component {

    state = {
        galleryArray: galleryArray
    }


    render() {
        return (

            <div>
                <h4 className="galleryTitle">Gallery</h4>
                <br></br>
                <div className="gallery">
                    {this.state.galleryArray.map(project => (
                        <GalleryItem
                            key={project.id}
                          title={project.title}
                          link={project.link}
                          image={project.image}
                          />
                    ))}
                </div>
            </div>
        )
    }

}

export default Gallery;