import React, { Component, useCallback } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import classnames from "classnames";
import $ from 'jquery';
import Foundation from 'foundation-sites';
import "../styles/login.css";

class Login extends Component {

  constructor() {
    super();
    this.state = {
      user_login: "",
      user_pass: "",
      errors: {}
    };
  }
  
  componentDidMount() {
    // If logged in and user navigates to Login page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/dashboard"); // push user to dashboard when they login
    }
    
    if (nextProps.errors) {
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
    const userData = {
      user_login: this.state.user_login,
      user_pass: this.state.user_pass
    };
    console.log(userData);
    this.props.loginUser(userData);
  };
  
  useCallback(node) {
    if ( node !== null ) {
        $(node).foundation();  // Initiate Foundation code at here.
    }
  };

  render() {
    const { errors } = this.state;
    return (
        <div id="login">
          <div className="row">
            <div className="col">
              <Link to="/" className="">
                {<em>&larr; Back</em>}
              </Link>
            </div>
          </div>
          <div className="row">
            <div classname="col">    
              <h3>Login to Lost Horse Press</h3>
              <p>Don't have an account? <em><Link to="/register">Register</Link></em></p>
            </div>
          </div>
          <div className="row">
            <form noValidate onSubmit={this.onSubmit}>
                
                <label htmlFor="user_login">Login:</label>
                <input
                  onChange={this.onChange}
                  value={this.state.user_login}
                  error={errors.user_login}
                  id="user_login"
                  type="text"
                  className={classnames("", { invalid: errors.user_login || errors.usernotfound })}
                />
                <span className="red-text">  {errors.user_login} {errors.usernotfound} </span>
                
                <label htmlFor="user_pass">Password:</label>
                <input
                  onChange={this.onChange}
                  value={this.state.user_pass}
                  error={errors.user_pass}
                  id="user_pass"
                  type="password"
                  className={classnames("", {
                    invalid: errors.user_pass || errors.passincorrect
                  })}
                />
                <span className="red-text"> {errors.user_pass} {errors.passincorrect} </span>

                <button type="submit" id="login">Login</button>
            </form>
          </div>
        </div>
    );
  }
}

Login.propTypes = {
    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};
  
const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect( mapStateToProps, { loginUser } )(Login);