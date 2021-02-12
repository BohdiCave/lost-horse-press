import React, { Component, useCallback } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {registerUser} from "../../actions/authActions";
import classnames from "classnames";
import $ from 'jquery';
import Foundation from 'foundation-sites';
import "../styles/login.css";

class Register extends Component {
  
  constructor() {
    super();
    this.state = {
      user_login: "",
      user_email: "",
      user_pass: "",
      user_pass2: "",
      errors: {}
    };
  }

  componentDidMount() {
    // If logged in and user navigates to Register page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }
  
  componentWillReceiveProps(nextProps) {
    if(nextProps.errors) {
        this.setState({
            errors: nextProps.errors
        });
    }
  }
  
  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };
  
  onSubmit = e => {
    e.preventDefault();
    const newUser = {
      user_login: this.state.user_login,
      user_email: this.state.user_email,
      user_pass: this.state.user_pass,
      user_pass2: this.state.user_pass2,
      user_registered: Date.now()
    };
    console.log(newUser);
    this.props.registerUser(newUser, this.props.history);
  };
  
  useCallback(node) {
    if ( node !== null ) {
        $(node).foundation();  // Initiate Foundation code at here.
    }
  };

  render() {
    const { errors } = this.state;
    return (
      <div id="register">
        <div className="row">
          <div className="col">
            <Link to="/" className=""> {<em>&larr; Back</em>} </Link>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h3>Register below</h3>
            <p> Already have an account? <em> 
            <Link to="/login">Log in</Link></em></p>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <form noValidate onSubmit={this.onSubmit}>

              <label htmlFor="user_login">Login:</label>
              <input
                onChange={this.onChange}
                value={this.state.user_login}
                error={errors.user_login}
                id="user_login"
                type="text"
                className={classnames("", {invalid: errors.user_login})}
              />
              <span className="red-text">{errors.user_login}</span>

              <label htmlFor="user_email">Email:</label>
              <input
                onChange={this.onChange}
                value={this.state.user_email}
                error={errors.user_email}
                id="user_email"
                type="email"
                className={classnames("", {invalid: errors.user_email})}
              />
              <span className="red-text">{errors.user_email}</span>

              <label htmlFor="user_pass">Password:</label>
              <input
                onChange={this.onChange}
                value={this.state.user_pass}
                error={errors.user_pass}
                id="user_pass"
                type="password"
                className={classnames("", {invalid: errors.user_pass})}
              />
              <span className="red-text">{errors.user_pass}</span>

              <label htmlFor="user_pass2">Confirm Password:</label>
              <input
                onChange={this.onChange}
                value={this.state.user_pass2}
                error={errors.user_pass2}
                id="user_pass2"
                type="password"
                className={classnames("", {invalid: errors.user_pass2})}
              />
              <span className="red-text">{errors.user_pass2}</span>

              <button type="submit" id="signup">Sign up</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
};

Register.propTypes = {
    registerUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect( mapStateToProps, { registerUser } )(withRouter(Register));