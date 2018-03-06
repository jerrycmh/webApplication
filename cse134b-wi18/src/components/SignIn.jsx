import React, { Component } from 'react';
import '../css/styles.css';
import {Link, withRouter} from "react-router-dom";
import { connect } from "react-redux";
import { setEmail } from '../actions/index'

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => {
    return {
        setEmail: email => dispatch(setEmail(email))
    };
};

class ConnectedSignIn extends Component {

    constructor (props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(event) {
        event.preventDefault();
        window.setEmail(this.inputEmail.value);
        this.props.history.push('/Progress');
        return true;
    }

    render() {
        return (
            <div className="flex_box justify_center" data-component="login">
                <div id="main_container" className="flex_box flex_col">
                    <div id="login_form_top" className="flex_box flex_row_wrappable justify_space_between" data-component="create">
                        <p id="sign_in_text">Sign in</p>
                        <p id="create_account_text">or
                            <Link to="/CreateAccount"> Create an Account</Link>
                        </p>
                    </div>
                    <div id="social_login_buttons" className="flex_box flex_row justify_center" >
                        <div id="btn_google_signin">
                        <script src="js/google_signin_button.js" type="text/javascript"></script>
                    </div>
                    </div>
                    <p id="or_separator" className="align_to_center">or</p>
                    <form id="login_form" className="flex_box flex_col" data-component="field" onSubmit = {this.onSubmit}>
                        <input type="email" name="email" id="input_email" defaultValue={this.props.email} placeholder="Email" ref={ref => this.inputEmail = ref}/>
                        <input type="password" name="password" id="input_password" placeholder="Password"/>
                        <div id="submit_btn_container" className="flex_box flex_row_wrappable justify_space_between">
                            <div id="remember_me_container">
                                <input type="checkbox" name="remember_me" id="input_remember_me"/>
                                <label htmlFor="input_remember_me">Remember me</label>
                            </div>

                            <button type="submit" id="btn_sign_in">Sign In</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

const SignIn = connect(mapStateToProps, mapDispatchToProps)(ConnectedSignIn);

export default withRouter(SignIn);
