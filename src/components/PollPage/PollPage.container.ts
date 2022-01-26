import { connect } from 'react-redux'
import { isLoadingType } from 'decentraland-dapps/dist/modules/loading/selectors'

import { RootState } from '../../modules/reducer'
import { FETCH_PROPOSAL_REQUEST,
  fetchProposalsRequest, 
  } from '../../modules/proposal/actions'

import { MapStateProps, MapDispatch, MapDispatchProps } from './PollPage.type'
import { getData as getProposals,getLoading as getProposalLoading} from '../../modules/proposal/selectors'
import { getWallet, isConnecting } from '../../modules/wallet/selectors'

import PollPage from './PollPage'
import { ProposalsFetchParams } from '../../modules/proposal/types'

const mapState = (state: RootState): MapStateProps =>{ 
  const proposals=getProposals(state)
  return {
  wallet:getWallet(state),
  proposals:proposals,
  isConnecting: isConnecting(state),
  isLoading: isLoadingType(getProposalLoading(state), FETCH_PROPOSAL_REQUEST) 
}}

const mapDispatch = (dispatch: MapDispatch): MapDispatchProps => ({
  onFetchProposals: (option:ProposalsFetchParams) => dispatch(fetchProposalsRequest(option)),
  
})

export default connect(mapState, mapDispatch)(PollPage)
