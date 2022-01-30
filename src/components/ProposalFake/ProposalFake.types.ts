import { Dispatch } from 'redux'

import { Proposal } from '../../modules/proposal/types'
import { fetchProposalRequest,
   FetchProposalRequestAction,
  
  } from '../../modules/proposal/actions'
import { Wallet } from 'decentraland-dapps/dist/modules/wallet/types'
import { fetchVotingpowerRequest,
   FetchVotingpowerRequestAction,
   fetchVotesRequest,
   FetchVotesRequestAction,
   castVoteRequest,
   CastVoteRequestAction

   } from '../../modules/vote/actions'
import { VotingPower } from '../../modules/vote/reducer'
import { Vote } from '../../modules/vote/types'
import { CallHistoryMethodAction } from 'connected-react-router'
export type Props = {
  wallet:Wallet | null
  proposal:Proposal | null
  proposalId:string | null
  votingpower:VotingPower[] | null
  votes:Record<string,Vote> | null
  onFetchProposal:typeof fetchProposalRequest
  onFetchVotingpower:typeof fetchVotingpowerRequest
  onFetchVotes:typeof fetchVotesRequest
  onCastVote:typeof castVoteRequest
  onNavigate: (path: string) => void

  isLoading: boolean
  isConnecting: boolean
  isVPLoading:boolean

}

export type MapStateProps = Pick<
  Props,
  'isLoading' | "wallet" | "isConnecting" | "proposal" | "proposalId" | "votingpower" | "isVPLoading" | "votes"
>
export type MapDispatchProps = Pick<Props, 'onFetchProposal' | 'onFetchVotingpower' | 'onFetchVotes' | 'onCastVote' | 'onNavigate'>
export type MapDispatch = Dispatch<FetchProposalRequestAction | FetchVotingpowerRequestAction | FetchVotesRequestAction | CastVoteRequestAction | CallHistoryMethodAction>
