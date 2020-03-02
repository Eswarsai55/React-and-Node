import React, { Component } from 'react';
import SignupForm from './SignupForm';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { userSignupRequest } from '../../actions/signupAction';
import { addFlashMessage } from '../../actions/flashMessages';
import { withRouter } from "react-router-dom";


export class SignupPage extends Component {

  render() {
    const { userSignupRequest, addFlashMessage } = this.props;
    return (
      <div className="row">
        <div className = "col-md-4 col-md-offset-4">
          <SignupForm userSignupRequest={userSignupRequest} addFlashMessage={addFlashMessage}/>
        </div>
        
      </div>
    )
  }
}

SignupPage.propTypes = {
  userSignupRequest: PropTypes.func.isRequired,
  addFlashMessage: PropTypes.func.isRequired,
}

//connect takes two parameters 1st one is mapstate to props which provides some data from redux store and 2nd one is mapdispatch to props
export default connect(null,{userSignupRequest, addFlashMessage} /*This is short cut of mapdispatch to props and here user 
//signup request is the action type*/)(SignupPage);

