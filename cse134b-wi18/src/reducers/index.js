import { SET_NAME, SET_EMAIL, SET_PLAN, SET_DAY_WEIGHT_CALORIES_HISTORY, SET_GOAL_REACHED, SET_CHATS } from '../constants/action-types.js'

const rootReducer = (state, action) => {
    switch (action.type) {
        case SET_NAME:
            return { ...state, name: action.payload };
        case SET_EMAIL:
            return { ...state, email: action.payload };
        case SET_PLAN:
            return { ...state, plan: action.payload };
        case SET_DAY_WEIGHT_CALORIES_HISTORY:
            return { ...state, progress: { dayWeightCaloriesHistory: action.payload }};
        case SET_GOAL_REACHED:
            return { ...state, goalReached: action.payload};
        case SET_CHATS:
            return { ...state, chats: action.payload};
        default:
            return state;
    }
};

export default rootReducer;