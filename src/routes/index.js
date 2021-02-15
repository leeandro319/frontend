import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "../pages/Home";
import UserInfo from "../pages/UserInfo";
import RepoDetail from "../pages/RepoDetail";
import ErrorPage from '../pages/ErrorPage'

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/userinfo/:usuario+" component={UserInfo} />
    <Route exact path="/repo-detail/:detail+" component={RepoDetail} />
    <Route path="*" component={ErrorPage} />
  </Switch>
);

export default Routes;
