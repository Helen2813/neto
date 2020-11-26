import { combineReducers } from "redux";
import { checkedNamesReducer } from "./checkedNamesReducer";
import { tableDataReducer } from './tableDataReducer';

export const rootReduser = combineReducers({
    data: tableDataReducer,
    checked: checkedNamesReducer
});