import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Books from "./pages/Books";
import NoMatch from "./pages/NoMatch";
// import Navbar from "./components/Navbar";
// import './App.css';

export default function App() {
  return (
    <Router>
        <Switch>
          <Route exact path={["/books", "/catalog"]}>
            <Books />
          </Route>
          {/* <Route exact path="/books/:id"> */}
            {/* <Detail /> */}
          {/* </Route> */}
          <Route exact path="/">
            <Home />
          </Route>
          <Route>
            <NoMatch />
          </Route>
        </Switch>
    </Router>
  );
}