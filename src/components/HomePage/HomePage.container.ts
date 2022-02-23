import { connect } from 'react-redux'
import { isLoadingType } from 'spacey-dapps/dist/modules/loading/selectors'
import { push } from 'connected-react-router'
import { RootState } from '../../modules/reducer'
// import { FETCH_PROPOSAL_REQUEST,
//   fetchProposalsRequest, 
//   } from '../../modules/proposal/actions'

import { MapStateProps, MapDispatch, MapDispatchProps } from './HomePage.type'
// import { getData as getProposals,getLoading as getProposalLoading,} from '../../modules/proposal/selectors'
import { getWallet, isConnecting } from '../../modules/wallet/selectors'

import HomePage from './HomePage'

const mapState = (state: RootState): MapStateProps =>{ 

  return {
  wallet:getWallet(state),
  // isConnecting: isConnecting(state),
  // isLoading: isLoadingType(getProposalLoading(state), FETCH_PROPOSAL_REQUEST) 
}}

const mapDispatch = (dispatch: MapDispatch): MapDispatchProps => ({
  onNavigate: (path:string) => dispatch(push(path)),

})

export default connect(mapState, mapDispatch)(HomePage)
