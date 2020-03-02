import { ADD_FLASH_MESSAGE } from './types';

export function addFlashMessage(message) {
  return dispatch => {
    dispatch({type: ADD_FLASH_MESSAGE, message})
  }
  // return {
  //     type: ADD_FLASH_MESSAGE,
  //     message,
  // }
}