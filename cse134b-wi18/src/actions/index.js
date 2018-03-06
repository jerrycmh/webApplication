import { SET_NAME, SET_EMAIL, SET_PLAN, SET_DAY_WEIGHT_CALORIES_HISTORY, SET_GOAL_REACHED, SET_CHATS } from '../constants/action-types.js'

export const setEmail = email => ({ type: SET_EMAIL, payload: email });
export const setName = name => ({ type: SET_NAME, payload: name });
export const setPlan = plan => ({ type: SET_PLAN, payload: plan });
export const setDayWeightCaloriesHistory = dayWeightCaloriesHistory => ({ type: SET_DAY_WEIGHT_CALORIES_HISTORY, payload: dayWeightCaloriesHistory });
export const setGoalReached = goalReached => ({ type: SET_GOAL_REACHED, payload: goalReached });
export const setChats = chats => ({ type: SET_CHATS, payload: chats });
