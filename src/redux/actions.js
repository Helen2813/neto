import { ADD_CHECKED_NAMES } from './types';

export function addNameToChecked(name) {
  return {
    type: ADD_CHECKED_NAMES,
    payload: name
  }
}