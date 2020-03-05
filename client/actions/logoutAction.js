import { LOGOUT_USER } from './types';

export function logout() {
  return dispatch => {
    dispatch({
      type: LOGOUT_USER,
      data: {}
    })
  }
}