import React, { Component } from 'react';
import '../css/styles.css';
import '../css/trainee_info.css'
import profile from '../images/avatar-placeholder.png'
import {withRouter} from "react-router-dom";

class TraineeInfo extends Component {

    constructor (props) {
        super(props);
        this.validInformation = this.validInformation.bind(this);

    }

    validInformation() {
        const age = document.forms["trainee_info"]["age"].value;
        const height = document.forms["trainee_info"]["height"].value;
        const weight = document.forms["trainee_info"]["weight"].value;
        const phone_no = document.forms["trainee_info"]["phone_no"].value;
        const email_address = document.forms["trainee_info"]["email_address"].value;
        const gender = document.forms["trainee_info"]["gender"].value;
        const race = document.forms["trainee_info"]["race"].value;

        if(age == null || age == ""||height == null || height == "" || weight == null || weight == "" || phone_no == null || phone_no == "" || email_address == null || email_address == "" || gender == null || gender == "" || race == null || race == ""){
            alert("Please fill all the requirement part in the form");
            return false;
        }
        this.props.history.push('/PaymentInfo');
        return true;

    }

    render() {
        return (
            <div>
                <div className="uploading">
                    <img className="img" src={profile} alt="picture" />
                    <form>
                        <input type="file" name="upload photo" />
                    </form>
                </div>
                <form name="trainee_info" onSubmit= {this.validInformation} className="form">
                    <input name="age" className="foo" type="number" placeholder="Age" /><br/>

                    <input name="height" className="foo" type="number" placeholder="Height"/><br/>
                    <input name="weight" className="foo" type="number" placeholder="Weight" /><br/>
                    <div>
                        <input name="phone_no" className="foo" type="text" placeholder="Phone Number"/><br/>
                        <input name="email_address" className="foo" type="text" placeholder="Email Address" /><br/>
                    </div>
                    *Gender:
                    <select className="fee" name="gender" id="gender">
                        <option value="">Choose Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select><br/>
                    *Race:
                    <select className="fee" name="race" id="race">
                        <option value="">Choose Race</option>
                        <option value="white">White</option>
                        <option value="asian">Asian</option>
                        <option value="black">African Americans</option>
                        <option value="others">Others</option>
                    </select><br/>
                    More Details:
                    <input className="foo" type="text" value=""/><br/>
                    <input type="submit" value="submit"/>
                </form>
            </div>

        );
    }
}

export default withRouter(TraineeInfo);