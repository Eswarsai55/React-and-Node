import React, { Component } from 'react';
import { connect } from 'react-redux';
import {addFlashMessage} from '../actions/flashMessages';
import { withRouter } from "react-router-dom";



export default function(ComposedComponent) {
  class Authenticate extends Component {

    componentWillMount() {
      if(!this.props.isAuthenticated) {
        this.props.addFlashMessage({
          type: 'error',
          text: 'You need to login to access this page',
        })
        this.props.history.push('/login');
      }
    }

    componentWillUpdate(nextProps) {
      if(!nextProps.isAuthenticated) {
        this.props.history.push('/login');
      }
    }
    render() {
      const { isAuthenticated } = this.props;
      return (
        <ComposedComponent {...this.props}/>
      )
    }
  }

  function mapStateToProps(state) {
      return {
        isAuthenticated: state.auth.isAuthenticated, 
      }
  }

  return withRouter(connect(mapStateToProps, {addFlashMessage})(Authenticate));
}
