import { ADD_CHECKED_NAMES } from './types';

const initialState = { checked: [] };

export const checkedNamesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CHECKED_NAMES:
      return { ...state, checked: action.payload }
    default: return state
  }
};