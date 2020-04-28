import React, {Component} from 'react';
import "./style.css";

function GalleryItem(props) {

        return (
            <a href={props.link}>
            <div className="galleryItem">
                <p>{props.title}</p>
                <img src={props.image}></img>
            </div>
            </a>
        )

    }



export default GalleryItem;