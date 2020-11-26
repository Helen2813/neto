import { ADD_CHECKED_NAMES, FETCH_DATA, SAVE_TABLE_DATA } from './types';

export function addNameToChecked(name) {
  return {
    type: ADD_CHECKED_NAMES,
    payload: name
  }
}

export function fetchData() {
  return async dispatch => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const json = await response.json();
    dispatch({ type: FETCH_DATA, payload: json })
  };
}

export function saveTableData(data) {
  console.log('saveTableData(data)', data)
  return {
    type: SAVE_TABLE_DATA,
    payload: data
  }
}