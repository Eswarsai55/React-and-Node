import React, { Component } from 'react';
import { connect } from 'react-redux';
import FlashMessage from './FlashMessage';
import PropTypes from 'prop-types';
import { deleteFlashMessage } from '../../actions/flashMessages';


export class FlashMessagesList extends Component {
  render() {
    const {deleteFlashMessage} = this.props;
    const messages = this.props.messages.map(message => 
      <FlashMessage key={message.id} message={message} deleteFlashMessage={deleteFlashMessage}/>
    );
    return (
      <div>
        {messages}
        
      </div>
    )
  }
}

FlashMessagesList.propTypes = {
  messages: PropTypes.array.isRequired,
}

function mapStateToProps(state){// takes a slice of  your global state
  return {
    messages: state.flashMessages,
  }

}

export default connect(mapStateToProps , { deleteFlashMessage })(FlashMessagesList);
