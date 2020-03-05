import isEmpty from "lodash/isEmpty"
import {SET_CURRENT_USER} from '../actions/types';

const intialState = {
  isAuthenticated: false,
  user: {

  }
}

export default(state = intialState,action) => {
  switch(action.type) {
    case SET_CURRENT_USER: 
      return Object.assign({},state, {
        isAuthenticated: !isEmpty(action.user),
        user: action.user
      })
    default: return state
  }
}