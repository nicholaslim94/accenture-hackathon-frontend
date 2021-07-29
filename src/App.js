import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Landing from "./components/landingPage/Landing";
import Rewards from "./components/rewardsPage/Rewards";
import Register from "./components/register/Register";
import Login from "./components/login/Login";
import WhyVaccinate from "./components/whyVaccinatePage/WhyVaccinate";
import Volunteer from "./components/volunteer/Volunteer";
import Operator from "./operatorComponents/page/Operator";
import OperatorDashBoard from "./operatorComponents/page/OperatorDashBoard";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
          <Route exact path="/operator">
            <Operator />
          </Route>
          <Route exact path="/operator/dashboard">
            <OperatorDashBoard />
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
