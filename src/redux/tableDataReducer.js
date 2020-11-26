import { SAVE_TABLE_DATA } from './types';

const initialState = { tableData: [] };

export const tableDataReducer = (state = initialState, action) => {
  switch(action.type) {
    case SAVE_TABLE_DATA:
      return { ...state, tableData: action.payload }
    default: return state;
  }
};
