import React, { Component } from 'react';
import timezones from '../../data/timezones';
import map from 'lodash/map';
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
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  };
  onChange(e){
    this.setState({
      [e.target.name]:e.target.value,
    })
  }

  onSubmit(e){
    e.preventDefault();
    this.props.userSignupRequest(this.state);
  }
  render() {
    const options = map(timezones, (val, key) =>
      <option key={val} value={val}>{key}</option>
    );
    return (
      <form onSubmit={this.onSubmit}>
        <h1>Join our community</h1>

        <div className="form-group">
          <label className="control-label">UserName</label>
          <input value = {this.state.username} onChange = {this.onChange} type="text" name="username" className="form-control"/>
        </div>
        <div className="form-group">
          <label className="control-label">Email</label>
          <input value = {this.state.email} onChange = {this.onChange} type="text" name="email" className="form-control"/>
        </div>
        <div className="form-group">
          <label className="control-label">Password</label>
          <input value = {this.state.password} onChange = {this.onChange} type="text" name="password" className="form-control"/>
        </div>
        <div className="form-group">
          <label className="control-label">ConfirmPassword</label>
          <input value = {this.state.confirmPassword} onChange = {this.onChange} type="text" name="confirmPassword" className="form-control"/>
        </div>
        <div className="form-group">
          <label className="control-label">TimeZone</label>
          <select value = {this.state.timezone} onChange = {this.onChange} type="text" name="timezone" className="form-control">
            <option value="" disabled>Choose Your TimeZone</option>
            {options}
          </select>
        </div>
        <div className="form-group">
          <button className="btn btn-primary btn-lg">
            Sign up
          </button>
        </div> 
      </form>
    )
  }
}


export default SignupForm
