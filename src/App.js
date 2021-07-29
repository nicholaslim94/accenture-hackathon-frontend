import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Landing from "./components/landingPage/Landing";
import Rewards from "./components/rewardsPage/Rewards";
import Register from "./components/register/Register";
import Login from "./components/login/Login";
import WhyVaccinate from "./components/whyVaccinatePage/WhyVaccinate";
import Volunteer from "./components/volunteer/Volunteer";
import Operator from "./operatorComponents/operatorPage/Operator";
import Profile from "./components/profile/Profile";
import ClaimedRewards from "./components/claimedRewards/ClaimedRewards";

import "./App.css";
import Volunteerme from "./components/volunteer/Volunteerme";

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
          <Route exact path="/whyVaccinate">
            <WhyVaccinate />
          </Route>
          <Route exact path="/rewards">
            <Rewards />
          </Route>
          <Route exact path="/volunteer">
            <Volunteer />
          </Route>
          <Route exact path="/profile">
            <Profile />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/myClaimedRewards">
            <ClaimedRewards />
          </Route>
          <Route exact path="/volunteerMe">
            <Volunteerme />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
