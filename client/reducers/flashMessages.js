import { ADD_FLASH_MESSAGE, SIGNUP_FAILURE } from "../actions/types";
import shortid from 'shortid';
import Store from '../store/flashmessages';

export const intialState = Store;

export default function(state = intialState, action = {}){
  switch(action.type) {
    case ADD_FLASH_MESSAGE: 
      return Object.assign({}, state, { 
        id: shortid.generate(),
        type: action.message.type,
        text: action.message.text,
        });
    default: return state;
  }
}