import { connect } from 'react-redux'
import { isLoadingType } from 'decentraland-dapps/dist/modules/loading/selectors'

import { RootState } from '../../modules/reducer'
import { FETCH_PROPOSAL_REQUEST,
  fetchProposalRequest, 
  } from '../../modules/proposal/actions'

import { MapStateProps, MapDispatch, MapDispatchProps } from './ProposalFake.types'
import { getData as getProposals,getLoading as getProposalLoading,getProposalId} from '../../modules/proposal/selectors'
import { getData as getVotes,getLoading as getVotesLoading} from '../../modules/vote/selectors'

import { getWallet, isConnecting } from '../../modules/wallet/selectors'

import ProposalFake from './ProposalFake'
import { getProposal } from '../../modules/proposal/utils'
import { push } from 'connected-react-router'
import { castVoteRequest, fetchVotesRequest, fetchVotingpowerRequest, FETCH_VOTINGPOWER_REQUEST } from '../../modules/vote/actions'
import { VotingPowerFetchParams } from '../../modules/vote/types'
import { Proposal } from '../../modules/proposal/types'

const mapState = (state: RootState): MapStateProps =>{ 
  const proposalId=getProposalId(state)
  const proposals=getProposals(state)
  const proposal=getProposal(proposalId,proposals)
  const votes=getVotes(state)
  return {
  wallet:getWallet(state),
  proposal:proposal,
  proposalId:proposalId,
  votingpower:votes.vp,
  votes:votes.votes,
  isConnecting: isConnecting(state),
  isLoading: isLoadingType(getProposalLoading(state), FETCH_PROPOSAL_REQUEST) ,
  isVPLoading:isLoadingType(getVotesLoading(state),FETCH_VOTINGPOWER_REQUEST)
}
}

const mapDispatch = (dispatch: MapDispatch): MapDispatchProps => ({
  onFetchProposal: (proposalId:string) => dispatch(fetchProposalRequest(
    proposalId
  )),
  onNavigate: (path:string) => dispatch(push(path)),
  onFetchVotingpower:(options:VotingPowerFetchParams)=>dispatch(fetchVotingpowerRequest(options)),
  onFetchVotes:(proposal:Proposal) => dispatch(fetchVotesRequest(
    proposal
  )),
  onCastVote:(voteMsg:string)=>dispatch(castVoteRequest(voteMsg))
})

export default connect(mapState, mapDispatch)(ProposalFake)
