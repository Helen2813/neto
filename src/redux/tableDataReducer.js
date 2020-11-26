import { FETCH_DATA, SAVE_TABLE_DATA } from './types';

const initialState = { tableData: [], fetchedData: [] };

export const tableDataReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_DATA:
      return { ...state, fetchedData: action.payload }
    
    case SAVE_TABLE_DATA:
      return { ...state, tableData: action.payload }

    default: return state;
  }
};
