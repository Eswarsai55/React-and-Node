import React from 'react';
import { BrowserRouter as Router, Route, IndexRoute } from 'react-router-dom';

import  App from './components/App';
import SignupPage from './components/signup/SignupPage';

export default (
  <Router>
    <Route path = "/" component={App}/>
    <Route path = "/signup" component={SignupPage}/>
  </Router>
)