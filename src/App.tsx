import React from "react";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "./redux/store";

function App() {
  const isAuthenticated = useSelector(
    (state: RootState) => state.posts.isAuthenticated
  );

  return (
    <Router>
      <div className="App">
        <Switch>
          {isAuthenticated && (
            <Route path="/home">
              <Home />
            </Route>
          )}
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
