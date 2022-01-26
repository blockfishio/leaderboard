import { Dispatch } from 'redux'

import { Proposal } from '../../modules/proposal/types'
import { fetchProposalRequest,
   FetchProposalRequestAction,
  
  } from '../../modules/proposal/actions'
import { Wallet } from 'decentraland-dapps/dist/modules/wallet/types'
import { fetchVotingpowerRequest, FetchVotingpowerRequestAction } from '../../modules/vote/actions'
import { VotingPower } from '../../modules/vote/reducer'
export type Props = {
  wallet:Wallet | null
  proposal:Proposal | null
  proposalId:string | null
  votingpower:VotingPower | null
  onFetchProposal:typeof fetchProposalRequest
  onFetchVotingpower:typeof fetchVotingpowerRequest

  isLoading: boolean
  isConnecting: boolean
  isVPLoading:boolean

}

export type MapStateProps = Pick<
  Props,
  'isLoading' | "wallet" | "isConnecting" | "proposal" | "proposalId" | "votingpower" | "isVPLoading"
>
export type MapDispatchProps = Pick<Props, 'onFetchProposal' | 'onFetchVotingpower'>
export type MapDispatch = Dispatch<FetchProposalRequestAction | FetchVotingpowerRequestAction>
