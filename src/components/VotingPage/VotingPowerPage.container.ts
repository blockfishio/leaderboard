import { connect } from 'react-redux'
import { isLoadingType } from 'decentraland-dapps/dist/modules/loading/selectors'
import { push, replace } from 'connected-react-router'
import { RootState } from '../../modules/reducer'


  import { fetchVotingpowerRequest, FETCH_VOTINGPOWER_REQUEST } from '../../modules/vote/actions'


import { MapStateProps, MapDispatch, MapDispatchProps } from './VotingPowerPage.type'
import { getData as getVotes,getLoading as getVotesLoading} from '../../modules/vote/selectors'

import { getWallet, isConnecting } from '../../modules/wallet/selectors'

import VotingPage from './VotingPowerPage'
import { VotingPowerFetchParams } from '../../modules/vote/types'

const mapState = (state: RootState): MapStateProps =>{ 
  const votes=getVotes(state)

  return {
  wallet:getWallet(state),
  votingpower:votes.vp,
  isConnecting: isConnecting(state),
  isLoading: isLoadingType(getVotesLoading(state), FETCH_VOTINGPOWER_REQUEST) 
}}

const mapDispatch = (dispatch: MapDispatch): MapDispatchProps => ({
  onNavigate: (path:string) => dispatch(push(path)),
  onFetchUserVotingpower:(options:VotingPowerFetchParams)=>dispatch(fetchVotingpowerRequest(options)),
  onRedirect: path => dispatch(replace(path))



})

export default connect(mapState, mapDispatch)(VotingPage)
