import React, { Component } from 'react';
import SignupForm from './SignupForm';
import { connect } from 'react-redux';
import { userSignupRequest } from '../../actions/signupAction';

export class SignupPage extends Component {
  render() {
    const { userSignupRequest } = this.props;
    return (
      <div className="row">
        <div className = "col-md-4 col-md-offset-4">
          <SignupForm userSignupRequest={userSignupRequest}/>
        </div>
        
      </div>
    )
  }
}
//connect takes two parameters 1st one is mapstate to props which provides some data from redux store and 2nd one is mapdispatch to props
export default connect(null, { userSignupRequest /*This is short cut of mapdispatch to props and here user 
signup request is the action type*/})(SignupPage);
