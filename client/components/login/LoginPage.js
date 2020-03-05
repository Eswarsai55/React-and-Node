import React, { Component } from 'react';
import LoginForm from './LoginForm';
import { connect } from 'react-redux';
import { userLoginRequest, setCurrentUser } from '../../actions/loginAction';
import { addFlashMessage } from '../../actions/flashMessages';


export class LoginPage extends Component {
  render() {
    const {userLoginRequest, addFlashMessage, setCurrentUser} = this.props;
    return (
      <div className="row">
        <div className = "col-md-4 col-md-offset-4">
          <LoginForm userLoginRequest= {userLoginRequest} addFlashMessage = {addFlashMessage} setCurrentUser = {setCurrentUser}/>
        </div>
      </div>
    )
  }
}

export default connect(null, {userLoginRequest, addFlashMessage, setCurrentUser})(LoginPage);
