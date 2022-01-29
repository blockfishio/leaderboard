import { connect } from 'react-redux'
import { isLoadingType } from 'decentraland-dapps/dist/modules/loading/selectors'
import { push } from 'connected-react-router'
import { RootState } from '../../modules/reducer'
import { FETCH_PROPOSAL_REQUEST,
  fetchProposalsRequest, 
  } from '../../modules/proposal/actions'

import { MapStateProps, MapDispatch, MapDispatchProps } from './CommunityPage.type'
import { getData as getProposals,getLoading as getProposalLoading,} from '../../modules/proposal/selectors'
import { getWallet, isConnecting } from '../../modules/wallet/selectors'

import CommunityPage from './CommunityPage'

const mapState = (state: RootState): MapStateProps =>{ 
  const proposals=getProposals(state)
  return {
  wallet:getWallet(state),
  isConnecting: isConnecting(state),
  isLoading: isLoadingType(getProposalLoading(state), FETCH_PROPOSAL_REQUEST) 
}}

const mapDispatch = (dispatch: MapDispatch): MapDispatchProps => ({
  onNavigate: (path:string) => dispatch(push(path)),

})

export default connect(mapState, mapDispatch)(CommunityPage)
