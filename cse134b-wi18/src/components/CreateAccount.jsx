import React, { Component } from 'react';
import '../css/styles.css';
import '../css/create_account.css';
import {Link, withRouter} from 'react-router-dom';

class CreateAccount extends Component {

    constructor (props) {
        super(props);
        this.validForm = this.validForm.bind(this);
        this.identifyPage = this.identifyPage.bind(this);
    }

    validForm() {
        const firstname = document.forms["accountForm"]["firstname"].value;
        const lastname = document.forms["accountForm"]["lastname"].value;
        const email = document.forms["accountForm"]["email"].value;
        const password = document.forms["accountForm"]["password"].value;
        const confirmpassword = document.forms["accountForm"]["confirmpassword"].value;
        const checkbox = document.forms["accountForm"]["checkbox"].checked;
        if(firstname == null || firstname == "" || lastname == null || lastname == "" || email == null || email == "" || password == "" || password == null || confirmpassword == "" || confirmpassword == null ){
            alert("Please fill the form");
            return false;
        }

        if(password != confirmpassword){
            alert("Password not match!");
            return false;
        }

        if(checkbox != true ){
            alert("Agree with the terms in order to move on");
            return false;
        }

        window.setName(firstname + ' ' + lastname);
        window.setEmail(email);

        this.identifyPage();

        return false;
    }

    identifyPage() {
        const id = document.forms["accountForm"]["selectTrain"].value;
        if(id == "trainee"){
            this.props.history.push('/TraineeInfo');
        }
        else{
            this.props.history.push('/TrainerInfo');
        }
    }

    render() {
        return (
            <div className="flex_box justify_center">
                <div id="main_container" className="flex_box flex_col">
                    <p>Create an Account</p>
                    <form name="accountForm" onSubmit={this.validForm} className="flex_box flex_col">
                        <input type="text" className="foo" name="firstname" placeholder="First Name" /><br />
                        <input type="text" className="foo" name="lastname" placeholder="Last Name" /><br />
                        <input type="email" className="foo" name="email" placeholder="Email" /><br />
                        <input type="password" className="foo" name="password" placeholder="Password" /><br />
                        <input type="password" className="foo" name="confirmpassword" placeholder="Confirm Password" /><br />
                        <label className="fee">I am a</label>
                        <select className="fee" name="selectTrain">
                            <option value="trainee">Trainee</option>
                            <option value="trainer">Trainer</option>
                        </select><br/>
                        <input type="checkbox" className="fee" name="checkbox" value="agree" />I agree with terms<br />
                        <button type="submit">CREATE</button>
                    </form>

                    <div className="create_login">
                        <Link to="/"> Login </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(CreateAccount);