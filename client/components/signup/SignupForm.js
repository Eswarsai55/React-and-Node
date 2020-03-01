import React, { Component } from 'react';
import timezones from '../../data/timezones';
import map from 'lodash/map';
import classname from 'classnames';
import PropTypes from 'prop-types';

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
      [e.target.name]:e.target.value,
    })
  }

  onSubmit(e) {
    e.preventDefault();
    this.setState({ errors: {}, isLoading: true });
    this.props.userSignupRequest(this.state).then().catch(error => {
      this.setState({
        errors: error.response.data,
        isLoading: false,
      })
    })
      
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
        
        <div className={classname("form-group", {'has-error': errors.username})}>
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
        </div>
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

export default SignupForm
