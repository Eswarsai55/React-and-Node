import axios from 'axios';

export function userLoginRequest(userdata){
  return dispatch => {
    return axios.post('/api/auth', userdata);
  }
}