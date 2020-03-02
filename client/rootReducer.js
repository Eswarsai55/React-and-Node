import { combineReducers } from 'redux';
import flashMessages from './reducers/flashMessages';

// const rehydrated = (state = false, action) => {
//   switch (action.type) {
//     case 'persist/REHYDRATE':
//       return true;
//     default:
//       return state;
//   }
// };


export default combineReducers({
  flashMessages,
})