import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Books from "./pages/Books";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Navbar from "./components/Navbar";
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <OffCanvasWrapper />
        <Switch>
          <Route exact path={["/books", "/catalog"]}>
            <Catalog />
          </Route>
          <Route exact path="/books/:id">
            <Detail />
          </Route>
          <Route>
            <NoMatch />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;