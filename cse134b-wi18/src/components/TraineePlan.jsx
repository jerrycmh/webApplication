import React, { Component } from 'react';
import '../css/styles.css';
import '../css/TraineePlan.css';
import {Link, withRouter} from "react-router-dom";

class TraineePlan extends Component {
    constructor (props) {
        super(props);
        this.nextPage = this.nextPage.bind(this);
    }

    nextPage() {
        const targetLbs = this.inputTargetWeight.value;
        const targetDate = this.inputTargetDate.value;

        window.setPlan({targetLbs: targetLbs, targetDate: targetDate})

        this.props.history.push('/Progress');
        return false;
    }


    render() {
        return (
            <div id="inputFields">

                <form action="#" onSubmit={this.nextPage}>
                    <div className="welcome">
                        <br />
                        <h2> Welcome Trainee! Make A Detailed Plan For Yourself! </h2>
                        <br />
                    </div>
                    <div id="specialStyle">
                        <label htmlFor="tarWeight">Goal:</label>
                        <input type="number" id="tarWeight" name="target_weight" placeholder="Target Weight" ref={ref => this.inputTargetWeight = ref}/>
                    </div>
                    <div id="specialStyle">
                        <label htmlFor="tarDate">Target Date:</label>
                        <input type="date" id="tarDate" name="target_date" ref={ref => this.inputTargetDate = ref}/>
                    </div>
                    <div id="specialStyle">
                        <label> Exercise Frequency: </label>
                        <select name="freq">
                            <option value="daily">Daily</option>
                            <option value="weekly">Weekly</option>
                            <option value="weekly">Monthly</option>
                            <option value="weekly">Yearly</option>
                            <option value="MWF">MWF</option>
                            <option value="TTH">TTH</option>
                        </select>
                    </div>
                    <div id="specialStyle">
                        <label> Calorie Cap: </label>
                        <input type="number" id="calorie" name="cals" placeholder="Calories/Day"/>
                    </div>
                    <div className="exerciseBox">
                        <label> Exercise Plan: </label>
                        <input type="text" id="exercisePlan" name="plan" placeholder="Exercise Plan..."/>
                    </div>
                    <div className="exerciseBox">
                        <label> Exercise Plan: </label>
                        <input type="text" id="diet" name="diet" placeholder="Diet Restrictions"/>
                    </div>


                    <div className="submitButt">
                        <input type="submit" value="Submit"/>
                    </div>
                </form>

                <div className="submitButt">
                    <Link to="/chatSystem">
                        Chat With Trainer
                    </Link>
                </div>
            </div>
        );
    }
}

export default withRouter(TraineePlan);
