import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// Redux
import { Provider } from "react-redux";
import store from "./store";
// auth
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
// fonts
import './app.css';
// components - pages
import Home from "./components/pages/Home";
import Books from "./components/pages/Books";
import Series from "./components/pages/Series";
import NoMatch from "./components/pages/NoMatch";
import Landing from "./components/pages/Landing";
import About from "./components/pages/About";
import Order from "./components/pages/Order";
// auth components
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import PrivateRoute from "./components/private-route/PrivateRoute";
import Dashboard from "./components/private-route/Dashboard";

// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  
  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());    
    
    // Redirect to login
    window.location.href = "./login";
  }
}

export default function App() {
  return (
  <Provider store={store}>
    <Router>
        <Switch>
          <Route exact path="/"> <Landing /> </Route>
          <Route exact path="/home"> <Home /> </Route>
          <Route exact path="/about"> <About/> </Route>
          <Route exact path="/order"> <Order/> </Route>
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
          <Route exact path={["/books", "/catalog"]}> <Books /> </Route>
          <Route exact path="/series"> <Series/></Route>
          {/* <Route exact path="/books/:id"> <Detail /> </Route> */}
          <Route> <NoMatch /> </Route>
        </Switch>
    </Router>
  </Provider>
  );
}