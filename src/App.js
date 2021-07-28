import "./App.css";
import React from "react";
import Landing from "./components/landingPage/Landing";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Rewards from "./components/rewardsPage/Rewards";
import Register from "./components/register/Register";
import Login from "./components/login/Login";
import WhyVaccinate from "./components/whyVaccinatePage/WhyVaccinate";
import Volunteer from "./components/volunteer/Volunteer";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
          <Route exact path="/whyVaccinate">
            <WhyVaccinate />
          </Route>
          <Route exact path="/rewards">
            <Rewards />
          </Route>
          <Route exact path="/volunteer">
            <Volunteer />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
