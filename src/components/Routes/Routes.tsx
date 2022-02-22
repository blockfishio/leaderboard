import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'


import { locations } from '../../modules/routing/locations'
import { HomePage } from '../HomePage'



const Routes = () => {
  return (
    <>
      <Switch>

        <Route exact path={locations.root()} component={HomePage} />

        <Redirect to={locations.root()} />
      </Switch>

    </>
  )
}

export default Routes
