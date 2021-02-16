import React, {useState} from "react";
import { Link, useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import classnames from "classnames";
import "../styles/login.css";

function Login() {

  const [login, setLogin] = useState({
      user_login: "",
      user_pass: "",
      errors: {}
  });
  const history = useHistory();

  componentDidMount = () => {
    // If logged in and user navigates to Login page, should redirect them to dashboard
    if (props.auth.isAuthenticated) {
      history.push("/dashboard");
    }
  }

  componentWillReceiveProps = (nextProps) => {
    if (nextProps.auth.isAuthenticated) {
      history.push("/dashboard"); // push user to dashboard when they login
    }
    
    if (nextProps.errors) {
      setLogin({
        errors: nextProps.errors
      });
    }
  }

  onChange = e => {
    setLogin({ [e.target.id]: e.target.value });
  };
  
  onSubmit = e => {
    e.preventDefault();
    const userData = {
      user_login: login.user_login,
      user_pass: login.user_pass
    };
    props.loginUser(userData);
  };

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
        <div className="col">    
          <h3>Login to Lost Horse Press</h3>
          <p>Don't have an account? <em><Link to="/register">Register</Link></em></p>
        </div>
      </div>
      <div className="row">
        <form noValidate onSubmit={onSubmit}>
            
            <label htmlFor="user_login">Login:</label>
            <input
              onChange={onChange}
              value={login.user_login}
              error={errors.user_login}
              id="user_login"
              type="text"
              className={classnames("", { invalid: errors.user_login || errors.usernotfound })}
            />
            <span className="red-text">  {errors.user_login} {errors.usernotfound} </span>
            
            <label htmlFor="user_pass">Password:</label>
            <input
              onChange={onChange}
              value={login.user_pass}
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

Login.propTypes = {
    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};
  
const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect( mapStateToProps, { loginUser })(Login);