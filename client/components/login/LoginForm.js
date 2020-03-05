import React, { Component } from 'react'
import TextFieldGroup from '../common/TextFieldGroup';
import validateInput from '../../../server/shared/validations/login';
import { withRouter } from "react-router-dom";
import setAuthorizationToken from '../../utils/setAuthorizationToken';
import jwt from 'jsonwebtoken';



export class LoginForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      identifier: '',
      password: '',
      isLoading: false,
      errors:{}
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  isValid() {
    const {errors, isValid} = validateInput(this.state);
      if(!isValid) {
        this.setState({
          errors,
        });
      }
    return isValid;
  }
  
  onSubmit(e) {
    e.preventDefault();
    if (this.isValid()) {
      this.setState({errors: {},isLoading: true});
      this.props.userLoginRequest(this.state).then(response => {
        if (response.data.error) {
          this.setState({
            errors: response.data.error,
            isLoading: false
          })
        } else {
          localStorage.setItem('jwtToken', response.data.token)
          setAuthorizationToken(response.data.token);
          this.props.setCurrentUser(jwt.decode(response.data.token))
          this.props.history.push('/');
          this.props.addFlashMessage({
            type: 'success',
            text: 'Login successful'
          })
        }
      }).catch(error => {
        console.log(error);
        this.setState({
          errors: error.response.data,
          isLoading: false,
        })
      })  
    }  
  }
  render() {
    const { errors, identifier, password, isLoading} = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        <h1>Login</h1>

        {errors.message && <div class="alert alert-danger">{errors.message}</div>}

        <TextFieldGroup
          field="identifier"
          label="Username/email"
          type="text"
          value={identifier}
          error={errors.identifier}
          onChange={this.onChange}
        />
        <TextFieldGroup
          field="password"
          label="Password"
          value={password}
          error={errors.password}
          onChange={this.onChange}
          type="password"
        />
        <div className="form-group">
          <button className="btn btn-lg btn-primary" disabled={isLoading}>Login</button>
        </div>
      </form>
    )
  }
}

export default withRouter(LoginForm)
