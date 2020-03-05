import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect} from 'react-redux';
import { logout } from '../actions/logoutAction';
import deleteToken from '../utils/deleteToken';

class NavigationBar extends Component {
  logout(e) {
    e.preventDefault();
    deleteToken();
    this.props.logout();
  }
  render() {
    
    const { isAuthenticated } = this.props.auth;

    const userLinks = (
      <ul className="nav navbar-nav navbar-right">
        <li className="nav-item"><a href="#" onClick= {this.logout.bind(this)}>Logout</a></li>
      </ul>
    );

    const guestLinks = (
      <ul className="nav navbar-nav navbar-right">
        <li className="nav-item"><Link to='/signup'>Sign up</Link></li>
        <li className="nav-item"><Link to='/login'>Login</Link></li>
      </ul>
    )
    return (
      <nav className="navbar navbar-default">
        <div className = "container-fluid">
          <div className="navbar-header">
            <Link to="/" className="navbar-brand">Title</Link>
          </div>
  
          <div className="collapse navbar-collapse">
            {isAuthenticated? userLinks : guestLinks}
          </div>
        </div>
      </nav>
    )
  } 
}
 function mapStateToProps(state) {
   return {
     auth: state.auth
   };
 }

export default connect(mapStateToProps, {logout})(NavigationBar);