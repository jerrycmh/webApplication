import { createStore } from 'redux';
import rootReducer from '../reducers/index';


const initialState = {
    name: 'Alice Bob',
    email: '',
    plan: {
        targetLbs: 500,
        targetDate: '2018-12-07',
    },
    progress: {
        dayWeightCaloriesHistory: [
            [1,  1537.8, 800.8],
            [2,  1530.9, 690.5],
            [3,  825.4,   570],
            [4,  511.7, 180.8],
            [5,  811.9, 170.6],
            [6,   908.8, 130.6],
            [7,   507.6, 120.3],
            [8,  612.3, 290.2],
            [9,  616.9, 420.9],
            [10, 512.8, 300.9],
            [11,  705.3,  700.97],
            [12,  768.6,  800.4],
            [13,  504.8,  600.3],
            [14,  550.2,  600.2]
        ]
    },
    goalReached: false,
    chats: [
        {who: 'them', text: "Hi, my name is John, and I'm going to be your personal trainer."}
    ]
};


const persistedState =
    typeof localStorage != 'undefined' && localStorage.getItem('reduxState') ? JSON.parse(localStorage.getItem('reduxState')) : initialState;

const store = createStore(rootReducer, persistedState);
export default store;