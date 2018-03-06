import React, { Component } from 'react';
import smile from '../images/celebration-clipart-emoji-4.png';
import '../css/styles.css';
import '../css/congrats.css';
import {Link, withRouter} from "react-router-dom";

class Congrats extends Component {
    render() {
        return (
            <div className="bg_img">
                <div className="paragraph_container">
                    <p className="congratulations_p">Congratulations! </p>
                    <img className="congratulations_img" src={smile} alt="smile" />
                </div>
                <div className="button_container">
                    <button className="sharefb_button" onclick="location.href='http://www.facebook.com'" type="button">Share on Facebook</button>
                </div>
            </div>
        );
    }
}

export default withRouter(Congrats);
