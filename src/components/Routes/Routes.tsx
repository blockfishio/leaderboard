import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Intercom from 'decentraland-dapps/dist/components/Intercom'

import { locations } from '../../modules/routing/locations'




import { SignInPage } from '../SignInPage'
import { RankingPage } from '../HomePage'
import { ProposalPageUI } from '../ProposoalPageUI'
import { CreatePage } from '../CreatePage'
import { CommunityPage } from '../Community'
import { PollPage } from '../PollPage'

const Routes = () => {
  const APP_ID = process.env.REACT_APP_INTERCOM_APP_ID
  return (
    <>
      <Switch>

        {/* <Route exact path={locations.bid()} component={BidPage} /> */}
        


        <Route exact path={locations.root()} component={RankingPage} />

        <Route exact path={locations.signIn()} component={SignInPage} />
        <Route exact path={locations.proposal()} component={ProposalPageUI} />
        <Route exact path={locations.createProposal()} component={CreatePage} />
        <Route exact path={locations.community()} component={CommunityPage} />
        <Route exact path={locations.pollPage()} component={PollPage} />


        <Redirect to={locations.root()} />
      </Switch>
      {APP_ID ? (
        <Intercom appId={APP_ID} settings={{ alignment: 'right' }} />
      ) : null}
    </>
  )
}

export default Routes
