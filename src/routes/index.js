import React from 'react'
import {Switch, Route} from 'react-router-dom'

import Home from '../pages/Home'
import UserInfo from '../pages/UserInfo'
import RepoDetail from '../pages/RepoDetail'

const Routes = () => (
  <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/userinfo/:usuario+' component={UserInfo}/>
      <Route path='/repo-detail/:detail+' component={RepoDetail}/>
  </Switch>
)

export default Routes;