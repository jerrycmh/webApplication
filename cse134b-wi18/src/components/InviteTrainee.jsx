import React, { Component } from 'react';
import '../css/styles.css';
import '../css/invite.css';
import {withRouter} from "react-router-dom";

class InviteTrainee extends Component {

    constructor (props) {
        super(props);
        this.validSubmit = this.validSubmit.bind(this);

    }

    validSubmit() {
        const trainerEmail = document.forms["trainerEmail"]["trainer_email"].value;
        if(trainerEmail == null || trainerEmail == ""){
            alert("Please Enter Your Trainer Email Address! ");
            return false;
        }

        this.props.history.push('/TraineePlan');
        return true;
    }

    render() {
        return (
            <div className="back_img">
                <div className="trainee_invite_welcome">
                    Welcome Trainee! <br /> <br />
                    To get started, choose a trainer by entering their email address <br /> <br />
                    <form name= "trainerEmail" onSubmit={this.validSubmit} action="#">
                        Enter Trainer Email:
                        <input name="trainer_email" type="email" />
                            <input type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        );
    }
}

export default withRouter(InviteTrainee);
