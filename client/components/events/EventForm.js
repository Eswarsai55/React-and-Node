import React, { Component } from 'react';
import TextFieldGroup from '../../components/common/TextFieldGroup';
import {connect} from 'react-redux';
import { createEvent } from '../../actions/events/createEvent';


export class EventForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
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

  onSubmit(e) {
    e.preventDefault();
    this.props.createEvent(this.state)
  }
  render() {
    const { errors, isLoading } = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        <h3>Create New Game Event</h3>

        <TextFieldGroup 
          field="title"
          label="Event Title"
          value={this.state.title}
          onChange={this.onChange}
          errors={errors.title}
        />
        
        <div className="form-group">
          <button disabled={isLoading} type="submit" className="btn btn-primary btn-lg">
             Create
          </button>
        </div> 
      </form>
    )
  }
}

export default connect(null,{createEvent})(EventForm);
