import React, {useState, useEffect} from "react";
import { Link, useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import {loginUser} from "../../actions/authActions";
import classnames from "classnames";
import "../styles/login.css";

export default function Login() {

  const [login, setLogin] = useState({
      user_login: "",
      user_pass: "",
      errors: {}
  });

  const history = useHistory();
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);
  
  useEffect(() => {
    // If logged in and user navigates to Login page, should redirect them to dashboard
    if (auth.isAuthenticated) {
      history.push("/dashboard");
    }
  },[])

  const componentWillReceiveProps = nextProps => {
    if(nextProps.errors) {
        setLogin({
          errors: nextProps.errors
        });
    }
  };

  const onChange = e => {
    setLogin({ [e.target.id]: e.target.value });
  };
  
  const onSubmit = e => {
    e.preventDefault();
    const userData = {
      user_login: login.user_login,
      user_pass: login.user_pass
    };
    dispatch(loginUser(userData));
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
              error={login.errors.user_login}
              id="user_login"
              type="text"
              className={classnames("", { invalid: login.errors.user_login || login.errors.usernotfound })}
            />
            <span className="red-text">  {login.errors.user_login} {login.errors.usernotfound} </span>
            
            <label htmlFor="user_pass">Password:</label>
            <input
              onChange={onChange}
              value={login.user_pass}
              error={login.errors.user_pass}
              id="user_pass"
              type="password"
              className={classnames("", {
                invalid: login.errors.user_pass || login.errors.passincorrect
              })}
            />
            <span className="red-text"> {login.errors.user_pass} {login.errors.passincorrect} </span>

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