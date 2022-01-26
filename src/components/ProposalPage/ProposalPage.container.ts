import { connect } from 'react-redux'
import { isLoadingType } from 'decentraland-dapps/dist/modules/loading/selectors'

import { RootState } from '../../modules/reducer'
import { FETCH_PROPOSAL_REQUEST,
  fetchProposalRequest,
  } from '../../modules/proposal/actions'

import { MapStateProps, MapDispatch, MapDispatchProps } from './ProposalPage.types'
import { getData as getProposals,getLoading as getProposalLoading,getProposalId} from '../../modules/proposal/selectors'
import { getWallet, isConnecting } from '../../modules/wallet/selectors'
import { getData as getVotingpower,getLoading as getVotingpowerLoading} from '../../modules/vote/selectors'

import ProposalPage from './ProposalPage'
import { getProposal } from '../../modules/proposal/utils'
import { VotingPowerFetchParams } from '../../modules/vote/types'
import { fetchVotingpowerRequest, FETCH_VOTINGPOWER_REQUEST } from '../../modules/vote/actions'

const mapState = (state: RootState): MapStateProps =>{ 
  const proposalId=getProposalId(state)
  const proposals=getProposals(state)
  const proposal=getProposal(proposalId,proposals)
  const votingpower=getVotingpower(state)
  return {
  wallet:getWallet(state),
  proposal:proposal,
  proposalId:proposalId,
  votingpower:votingpower,
  isConnecting: isConnecting(state),
  isLoading: isLoadingType(getProposalLoading(state), FETCH_PROPOSAL_REQUEST) ,
  isVPLoading:isLoadingType(getVotingpowerLoading(state),FETCH_VOTINGPOWER_REQUEST)
}}

const mapDispatch = (dispatch: MapDispatch): MapDispatchProps => ({
  onFetchProposal: (proposalId:string) => dispatch(fetchProposalRequest(
    proposalId
  )),
  onFetchVotingpower:(options:VotingPowerFetchParams)=>dispatch(fetchVotingpowerRequest(options))
  
})

export default connect(mapState, mapDispatch)(ProposalPage)
