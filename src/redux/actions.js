import { getNormalaizedDataToTable } from '../components/Table/getNormalaizedDataToTable';
import { ADD_CHECKED_NAMES, SAVE_TABLE_DATA } from './types';
export function addNameToChecked(name) {
  return {
    type: ADD_CHECKED_NAMES,
    payload: name
  }
}

export function fetchData() {
  return async dispatch => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users?_limit=5');
    const json = await response.json();
    const tableData = getNormalaizedDataToTable(json);
    dispatch({ type: SAVE_TABLE_DATA, payload: tableData })
  };
}