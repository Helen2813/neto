import { combineReducers } from "redux";
import { usersReducer } from './usersReducer';

export const rootReduser = combineReducers({
    users: usersReducer
});