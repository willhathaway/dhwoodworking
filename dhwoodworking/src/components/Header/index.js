import React, {Component} from 'react';
import "./style.css";

class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="titleDiv">
                <a className="title" href="/">DANIEL HATHAWAY WOODWORKING</a>
                </div>
                <div className="links">
                <a className="galleryLink" href="/gallery">Gallery</a>
                <a className="contactLink" href="/contact">Contact</a>
                </div>
            </div>
        )
    }
}

export default Header;