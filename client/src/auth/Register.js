import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../actions/authActions";
import classnames from "classnames";
import "../styles/login.css";

function Register() {
  
  const [register, setRegister] = useState({
      user_login: "",
      user_email: "",
      user_pass: "",
      user_pass2: "",
      errors: {}
  });
  const history = useHistory();

  componentDidMount = () => {
    // If logged in and user navigates to Register page, should redirect them to dashboard
    if (props.auth.isAuthenticated) {
      history.push("/dashboard");
    }
  }
  
  componentWillReceiveProps = (nextProps) => {
    if(nextProps.errors) {
        setRegister({
            errors: nextProps.errors
        });
    }
  }
  
  onChange = e => {
    setRegister({ [e.target.id]: e.target.value });
  };
  
  onSubmit = e => {
    e.preventDefault();
    const newUser = {
      user_login: register.user_login,
      user_email: register.user_email,
      user_pass: register.user_pass,
      user_pass2: register.user_pass2,
      user_registered: Date.now()
    };
    console.log(newUser);
    props.registerUser(newUser, history);
  };

  return (
    <div id="register">
      <div className="row">
        <div className="col">
          <Link to="/" className=""> {<em>&larr; Back</em>} </Link>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h3>Register for Lost Horse Press</h3>
          <p> Already have an account? <em> 
          <Link to="/login">Log in</Link></em></p>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <form noValidate onSubmit={onSubmit}>

            <label htmlFor="user_login">Login:</label>
            <input
              onChange={onChange}
              value={register.user_login}
              error={errors.user_login}
              id="user_login"
              type="text"
              className={classnames("", {invalid: errors.user_login})}
            />
            <span className="red-text">{errors.user_login}</span>

            <label htmlFor="user_email">Email:</label>
            <input
              onChange={onChange}
              value={register.user_email}
              error={errors.user_email}
              id="user_email"
              type="email"
              className={classnames("", {invalid: errors.user_email})}
            />
            <span className="red-text">{errors.user_email}</span>

            <label htmlFor="user_pass">Password:</label>
            <input
              onChange={onChange}
              value={register.user_pass}
              error={errors.user_pass}
              id="user_pass"
              type="password"
              className={classnames("", {invalid: errors.user_pass})}
            />
            <span className="red-text">{errors.user_pass}</span>

            <label htmlFor="user_pass2">Confirm Password:</label>
            <input
              onChange={onChange}
              value={register.user_pass2}
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

Register.propTypes = {
    registerUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect( mapStateToProps, { registerUser } )(Register);