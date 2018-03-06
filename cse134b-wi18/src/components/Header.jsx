import React, { Component } from 'react';
import fat from '../images/logo.png';
import '../css/styles.css';

class Header extends Component {
    render() {
        return (
            <header id="top_bar" className="flex_box flex_row justify_center" data-component="Header">
                <div className="flex_box flex_row_wrappable align_center" data-component="logo">
                    <img id="logo_img" src= {fat} alt="logo"/>
                    <h1 className="header_title">Fat2Fit</h1>
                </div>
            </header>
        );
    }
}

export default Header;
