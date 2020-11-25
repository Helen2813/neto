import { combineReducers } from "redux";
import { checkedNamesReducer } from "./checkedNamesReduser";
import { tableDataReducer } from './tableDataReducer';

export const rootReduser = combineReducers({
    data: tableDataReducer,
    checked: checkedNamesReducer
});