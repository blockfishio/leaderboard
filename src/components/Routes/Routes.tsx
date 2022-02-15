import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'


import { locations } from '../../modules/routing/locations'



const Routes = () => {
  return (
    <>
      <Switch>



        <Redirect to={locations.root()} />
      </Switch>

    </>
  )
}

export default Routes
