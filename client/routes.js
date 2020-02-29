import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import  App from './components/App';
import SignupPage from './components/signup/SignupPage';

const store = createStore(
  (state = {}) => state,
  applyMiddleware(thunk)
)

export default (
  <div>
    <Provider store={store}>
      <Router>
        <Route path = "/" component={App}/>
        <Route path = "/signup" component={SignupPage}/>
      </Router>
    </Provider>
  </div> 
)