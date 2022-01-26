import { connect } from 'react-redux'
import { isLoadingType } from 'decentraland-dapps/dist/modules/loading/selectors'

import { RootState } from '../../modules/reducer'
import { FETCH_PROPOSAL_REQUEST,
  fetchProposalRequest, 
  } from '../../modules/proposal/actions'

import { MapStateProps, MapDispatch, MapDispatchProps } from './CreatePage.type'
import { getData as getProposals,getLoading as getProposalLoading,getProposalId} from '../../modules/proposal/selectors'
import { getWallet, isConnecting } from '../../modules/wallet/selectors'

import CreatePage from './CreatePage'
import { getProposal } from '../../modules/proposal/utils'

const mapState = (state: RootState): MapStateProps =>{ 
  const proposalId=getProposalId(state)
  const proposals=getProposals(state)
  const proposal=getProposal(proposalId,proposals)
  return {
  wallet:getWallet(state),
  proposal:proposal,
  proposalId:proposalId,
  isConnecting: isConnecting(state),
  isLoading: isLoadingType(getProposalLoading(state), FETCH_PROPOSAL_REQUEST) 
}}

const mapDispatch = (dispatch: MapDispatch): MapDispatchProps => ({
  onFetchProposal: (proposalId:string) => dispatch(fetchProposalRequest(
    proposalId
  )),
  
})

export default connect(mapState, mapDispatch)(CreatePage)
