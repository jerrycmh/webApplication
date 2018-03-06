import React, { Component } from 'react';
import '../css/styles.css';
import {withRouter} from "react-router-dom";
import '../css/payment_info.css';

class PaymentInfo extends Component {

    constructor (props) {
        super(props);
        this.validForm = this.validForm.bind(this);

    }

    validForm() {
        const name = document.forms["paymentInfo"]["name"].value;
        const card_num = document.forms["paymentInfo"]["card_num"].value;
        const cvv = document.forms["paymentInfo"]["cvv"].value;

        if(name == "" || card_num == "" || cvv == ""){
            alert("Please Complete the card information!");
            return false;
        }

        this.props.history.push('/InviteTrainee');
        return true;
    }

    render() {
        return (
            <div>
                <div className="pay_text">
                    <p>Payment Information</p>
                </div>

                <div className="card_info">
                    <form name="paymentInfo" onSubmit= {this.validForm} action="#">
                        <fieldset className="field-card-style">
                            <legend>Card Information</legend>
                            <input name="name" type="text" placeholder="Name" /><br/>
                            <div className="form-group" id="card-number-field">
                                <input name="card_num" type="text" className="form-control" id="cardNumber" placeholder="Card Number" />
                            </div>
                            <div className="form-group CVV">
                                <input name="cvv" type="text" className="form-control" id="cvv" placeholder="CVV" />
                            </div>
                            <div name="date" className="form-group" id="expiration-date">

                                <label>Expiration Date</label>
                                <select>
                                    <option value="01">January</option>
                                    <option value="02">February </option>
                                    <option value="03">March</option>
                                    <option value="04">April</option>
                                    <option value="05">May</option>
                                    <option value="06">June</option>
                                    <option value="07">July</option>
                                    <option value="08">August</option>
                                    <option value="09">September</option>
                                    <option value="10">October</option>
                                    <option value="11">November</option>
                                    <option value="12">December</option>
                                </select>
                                <select>
                                    <option value="18"> 2018</option>
                                    <option value="19"> 2019</option>
                                    <option value="20"> 2020</option>
                                    <option value="21"> 2021</option>
                                    <option value="22"> 2022</option>
                                    <option value="23"> 2023</option>
                                </select>
                            </div>
                        </fieldset>
                        <div className="billing_info">
                            <fieldset className="field-billing-style">
                                <legend>Billing Address</legend>
                                <input type="text" placeholder="Name" /><br />
                                <input type="text" placeholder="Address" /><br />
                                <input type="text" placeholder="City" /><br />
                                <input type="text" placeholder="State" /><br />
                                <input type="text" placeholder="Zip" />
                            </fieldset>
                        </div>
                        <input type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        );
    }
}

export default withRouter(PaymentInfo);
