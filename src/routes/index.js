import React from 'react'
import {Switch, Route} from 'react-router-dom'

import Home from '../pages/Home'
import UserInfo from '../pages/UserInfo'

const Routes = () => (
  <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/userinfo' component={UserInfo}/>
  </Switch>
)

export default Routes;