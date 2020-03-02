import React, { Component } from 'react';
import timezones from '../../data/timezones';
import map from 'lodash/map';
import classname from 'classnames';
import { withRouter } from "react-router-dom";
import validateInput from '../../../server/shared/validations/signup';
import TextFieldGroup from '../../components/common/TextFieldGroup';
import PropTypes  from 'prop-types';


export class SignupForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      confirmPassword:'',
      timezone: '',
      errors: {},
      isLoading: false,
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  };
  onChange(e){
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  isValid() {
   const { errors, isValid} =  validateInput(this.state);
   if (!isValid) {
     this.setState( { errors });
   }

   return isValid;
  }

  onSubmit(e) {
    e.preventDefault();

    if(this.isValid()) {
      this.setState({ errors: {}, isLoading: true });
      this.props.userSignupRequest(this.state).then((response) => {
        if (response.error) {
          this.setState({
            errors: error.response.data,
            isLoading: false,
          })
        }
        this.props.history.push('/');
        this.props.addFlashMessage({
          type: 'success',
          text: 'You signed up successfully',
        })
      }).catch(error => {
        console.log(error);
        this.setState({
          errors: error,
          isLoading: false,
        }) 
      })
    }     
  }
  render() {
    const options = map(timezones, (val, key) =>
      <option key={val} value={val}>{key}</option>
    );
    const { errors, isLoading } = this.state;
    //console.log(errors)
    return (
      <form onSubmit={this.onSubmit}>
        <h1>Join our community</h1>

        <TextFieldGroup 
          label = "UserName"
          onChange = {this.onChange}
          field="username"
          error={errors.username}
          value={this.state.username}
        />
        <TextFieldGroup 
          label = "Email"
          onChange = {this.onChange}
          field="email"
          error={errors.email}
          value={this.state.email}
        />
        <TextFieldGroup 
          label = "Password"
          onChange = {this.onChange}
          field="password"
          error={errors.password}
          value={this.state.password}
        />
        <TextFieldGroup 
          label = "Confirm Password"
          onChange = {this.onChange}
          field="confirmPassword"
          error={errors.confirmPassword}
          value={this.state.confirmPassword}
        />
        
        {/* <div className={classname("form-group", {'has-error': errors.username})}>
          <label className="control-label">UserName</label>
          <input value = {this.state.username} onChange = {this.onChange} type="text" name="username" className="form-control"/>
          {errors.username && <span className="help-block">{errors.username}</span>}
        </div>
        <div className={classname("form-group", {'has-error': errors.email})}>
          <label className="control-label">Email</label>
          <input value = {this.state.email} onChange = {this.onChange} type="text" name="email" className="form-control"/>
          {errors.email && <span className="help-block">{errors.email}</span>}
        </div>
        <div className={classname("form-group", {'has-error': errors.password})}>
          <label className="control-label">Password</label>
          <input value = {this.state.password} onChange = {this.onChange} type="text" name="password" className="form-control"/>
          {errors.password && <span className="help-block">{errors.password}</span>}
        </div>
        <div className={classname("form-group", {'has-error': errors.confirmPassword})}>
          <label className="control-label">ConfirmPassword</label>
          <input value = {this.state.confirmPassword} onChange = {this.onChange} type="text" name="confirmPassword" className="form-control"/>
          {errors.confirmPassword && <span className="help-block">{errors.confirmPassword}</span>}
        </div> */}
        <div className={classname("form-group", {'has-error': errors.confirmPassword})}>
          <label className="control-label">TimeZone</label>
          <select value = {this.state.timezone} onChange = {this.onChange} type="text" name="timezone" className="form-control">
            <option value="" disabled>Choose Your TimeZone</option>
            {options}
          </select>
          {errors.timezone && <span className="help-block">{errors.timezone}</span>}
        </div>
        <div className="form-group">
          <button disabled={isLoading} className="btn btn-primary btn-lg">
            Sign up
          </button>
        </div> 
      </form>
    )
  }
}

SignupForm.contextType = {
  router: PropTypes.object.isRequired,
}
export default withRouter(SignupForm);
