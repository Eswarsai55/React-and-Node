import React, { Component } from 'react';
import {Col,Row} from 'reactstrap';
import LoginForm from './LoginForm';
import { connect } from 'react-redux';
import { userLoginRequest } from '../../actions/loginAction';
import { addFlashMessage } from '../../actions/flashMessages';


export class LoginPage extends Component {
  render() {
    const {userLoginRequest, addFlashMessage} = this.props;
    return (
      <div className="row">
        <div className = "col-md-4 col-md-offset-4">
          <LoginForm userLoginRequest= {userLoginRequest} addFlashMessage = {addFlashMessage}/>
        </div>
      </div>
    )
  }
}

export default connect(null, {userLoginRequest, addFlashMessage})(LoginPage);
