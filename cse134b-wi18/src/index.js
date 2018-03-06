import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import routes from './routes';
import Header from "./components/Header";
import store from './store/index';
import {setName, setEmail, setPlan, setDayWeightCaloriesHistory, setGoalReached, setChats} from './actions/index'

// import registerServiceWorker from './registerServiceWorker';

store.subscribe(()=>{
    localStorage.setItem('reduxState', JSON.stringify(store.getState()))
})

window.getName = () => store.getState().name;
window.getEmail = () => store.getState().email;
window.getPlan = () => store.getState().plan;
window.getDayWeightCaloriesHistory = () => store.getState().progress.dayWeightCaloriesHistory;
window.getGoalReached = () => store.getState().goalReached;
window.getChats = () => store.getState().chats;

window.setName = p => store.dispatch(setName(p));
window.setEmail = p => store.dispatch(setEmail(p));
window.setPlan = p => store.dispatch(setPlan(p));
window.setDayWeightCaloriesHistory = p => store.dispatch(setDayWeightCaloriesHistory(p));
window.setGoalReached = p => store.dispatch(setGoalReached(p));
window.setChats = p => store.dispatch(setChats(p));

const Container = () => {
    // NOTE DO NOT CHANGE THE SPACING OR YOU WILL BREAK THE BUILD :)
    // TODO: put the redux provider here
    return(
        <div>
        <Header/>
        <Router>
            {routes}
        </Router>
        </div>
    );
};

ReactDOM.render(<Provider store={store}><Container/></Provider>, document.getElementById('root'));
// registerServiceWorker();
