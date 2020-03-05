import axios from 'axios';
import { SET_CURRENT_USER } from './types';

export function setCurrentUser(user) {
  return dispatch => {
    dispatch({
      type: SET_CURRENT_USER,
      user
    })
  }
}

export function userLoginRequest(userdata){
  return dispatch => {
    return axios.post('/api/auth', userdata)
  }
}