import React, { Component } from 'react';
import '../css/styles.css';
import '../css/Progress.css';
import {Link, withRouter} from "react-router-dom";

class Progress extends Component {

    constructor (props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        this.showCongratulate = this.showCongratulate.bind(this);
        this.drawChart =this.drawChart.bind(this);
    }

    static chart_options = {
        chart: {
            title: 'My Stats',
            subtitle: 'for the past thirty days'
        },
        width: 600,
        height: 320,
        axes: {
            x: {
                0: {side: 'bottom'}
            }
        }
    };

    onSubmit(event) {
        event.preventDefault();

        const weight = parseFloat(this.inputWeight.value);
        const calories = parseFloat(this.inputCalories.value);

        if (isNaN(weight) || isNaN(calories)) {
            return false;
        }

        const dayWeightCaloriesHistory = window.getDayWeightCaloriesHistory();


        window.setDayWeightCaloriesHistory([...dayWeightCaloriesHistory, [dayWeightCaloriesHistory.length+1, weight, calories]]);

        this.drawChart();

        if (weight <= window.getPlan().targetLbs) {
            window.setGoalReached(true);
        }

        return false;
    }

    showCongratulate() {
        for (const li of this.ulGoalsList.getElementsByTagName('li')) {
            li.style = 'text-decoration: line-through;';
        }

        this.divCongratulationsContainer.style = 'display: block;';
    }

    drawChart() {
        const dayWeightCaloriesHistory = window.getDayWeightCaloriesHistory();

        const data = new window.google.visualization.DataTable();
        data.addColumn('number', 'Day');
        data.addColumn('number', 'Weight (lbs.)');
        data.addColumn('number', 'Calories (cal)');

        data.addRows(dayWeightCaloriesHistory);

        const chart = new window.google.charts.Line(document.getElementById('chart'));
        chart.draw(data, window.google.charts.Line.convertOptions(Progress.chart_options));
    }


render() {
    window.google.charts.load('current', {'packages':['line']});
    window.google.charts.setOnLoadCallback(this.drawChart);

    return (

        <div className="flex_box flex_row justify_center">
            <div id="main_container1" className="flex_box flex_row_wrappable justify_center">
                <div>
                    <h1>My Plan</h1>
                    <h2>Goals</h2>
                    <ul id="goals_list" ref={ref => this.ulGoalsList = ref}>
                        <li>{window.getPlan().targetLbs} lbs by {window.getPlan().targetDate}</li>
                    </ul>
                    <div id="congratulations_container" ref={ref => this.divCongratulationsContainer = ref}>
                        <h3>Congratulations! You reached your goal!</h3>
                        <form action="#" method="post">
                            <Link to="/Congrats">
                                Finish Program
                            </Link>
                        </form>
                    </div>
                    <h1>Todo Today</h1>
                    <form id="form_progress" onSubmit={this.onSubmit} ref={ref => this.formProgress = ref}>
                        <h2>Exercise</h2>
                        <div>
                            <input id="1" name="1" type="checkbox" />
                            <label htmlFor="1">1 push up</label>
                        </div>
                        <div>
                            <input id="2" name="2" type="checkbox"/>
                            <label htmlFor="2">Walk at least five minutes between couch and fridge.</label>
                        </div>
                        <h2>Diet</h2>
                        <div>
                            <input id="3" name="3" type="checkbox" />
                            <label htmlFor="3">Breakfast: 1 Costco Apple Cinamon Muffin</label>
                        </div>
                        <h2>My Stats Today</h2>
                        <div>
                            <input id="input_weight" type="number" name="weight" placeholder="Weight (lbs)" ref={ref => this.inputWeight = ref}/>
                        </div>
                        <div>
                            <input id="input_calories" type="number" name="calories" placeholder="Calories (Cal)" ref={ref => this.inputCalories = ref}/>
                        </div>
                        <button type="submit">Done for Today</button>
                    </form>
                    <p>
                        <Link to="/chatSystem">
                            Chat With Trainer
                        </Link>
                    </p>
                </div>
                <div>
                    <h1>My Progress</h1>

                    <div id="chart"></div>
                </div>
            </div>
        </div>
    );
}
}

export default withRouter(Progress);
