import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

import  App from './components/App';
import SignupPage from './components/signup/SignupPage';
import LoginPage from './components/login/LoginPage';
import NewEventPage from './components/events/NewEventPage';

import setAuthorizationToken from './utils/setAuthorizationToken';
import jwt from 'jsonwebtoken';
import {setCurrentUser} from './actions/loginAction';


const middleware = [thunk];
//const intialState = {};
export const store = createStore(
  rootReducer,// where we combine all the reducersfor different actions to dispatch on redux
  //intialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

if(localStorage.jwtToken) {
  setAuthorizationToken(localStorage.jwtToken);
  store.dispatch(setCurrentUser(jwt.decode(localStorage.jwtToken)))

}

export default (
  <div>
    <Provider store={store}>
      <Router>
        <Route path = "/" component={App}/>
        <Route path = "/signup" component={SignupPage}/>
        <Route path = "/login" component={LoginPage}/>
        <Route path = "/new-event" component={NewEventPage}/>
      </Router>
    </Provider>
  </div> 
)