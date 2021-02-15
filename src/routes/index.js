import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "../pages/Home";
import UserInfo from "../pages/UserInfo";
import RepoDetail from "../pages/RepoDetail";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/userinfo/:usuario+" component={UserInfo} />
    <Route exact path="/repo-detail/:detail+" component={RepoDetail} />
  </Switch>
);

export default Routes;
