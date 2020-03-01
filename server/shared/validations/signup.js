import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';

export default function validateInput(data) {
  let errors = {};

  if (Validator.isEmpty(data.username)) {
    errors.username = 'This Field is required'
  }
  if (Validator.isEmpty(data.email)) {
    errors.email = 'This Field is required'
  }
  if(!Validator.isEmail(data.email)) {
    errors.email = "Email is Invalid"
  }
  if (Validator.isEmpty(data.password)) {
    errors.password = 'This Field is required'
  }
  if (Validator.isEmpty(data.confirmPassword)) {
    errors.confirmPassword = 'This Field is required'
  }
  if (!Validator.equals(data.password,data.confirmPassword)) {
    errors.password = "Passwords not matching"
  }
  if(Validator.isEmpty(data.timezone)) {
    errors.timezone = "This Field is required"
  }
  
  return {
    errors,
    isValid: isEmpty(errors),
  }
}