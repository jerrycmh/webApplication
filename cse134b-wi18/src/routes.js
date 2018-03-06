import React from 'react';
import { Route} from 'react-router';
import SignIn from './components/SignIn';
import CreateAccount from "./components/CreateAccount";
import TraineeInfo from "./components/TraineeInfo";
import TrainerInfo from "./components/TrainerInfo";
import PaymentInfo from "./components/PaymentInfo";
import InviteTrainee from "./components/InviteTrainee";
import TraineePlan from "./components/TraineePlan";
import chatSystem from "./components/chatSystem";
import Progress from "./components/Progress";
import Congrats from "./components/Congrats";

export default (
    <div>
        <Route exact path="/" component={SignIn}/>
        <Route path="/CreateAccount" component={CreateAccount}/>
        <Route path="/TraineeInfo" component={TraineeInfo}/>
        <Route path="/TrainerInfo" component={TrainerInfo}/>
        <Route path="/PaymentInfo" component={PaymentInfo}/>
        <Route path="/InviteTrainee" component={InviteTrainee}/>
        <Route path="/TraineePlan" component={TraineePlan}/>
        <Route path="/chatSystem" component={chatSystem}/>
        <Route path="/Progress" component={Progress}/>
        <Route path="/Congrats" component={Congrats}/>
    </div>
);
