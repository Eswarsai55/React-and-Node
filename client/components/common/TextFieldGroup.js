import React, { Component } from 'react';
import classname from 'classnames';
import PropTypes from 'prop-types';

const TextFieldGroup = ({ field, value, label, error, type, onChange}) => {
  return (
    <div>
      <div className={classname("form-group", {'has-error': error})}>
        <label className="control-label">{label}</label>
        <input 
          type={type}
          value = {value} 
          onChange = {onChange} 
          name={field} 
          className="form-control"
        />
        {error && <span className="help-block">{error}</span>}
      </div>
    </div>
  )
}

TextFieldGroup.propTypes = {
  field: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  error: PropTypes.string,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}

export default TextFieldGroup
