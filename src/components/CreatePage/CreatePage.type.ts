import { Dispatch } from 'redux'

import { Proposal } from '../../modules/proposal/types'
import { fetchProposalRequest,
   FetchProposalRequestAction,
  
  } from '../../modules/proposal/actions'
import { Wallet } from 'decentraland-dapps/dist/modules/wallet/types'
export type Props = {
  wallet:Wallet | null
  proposal:Proposal | null
  proposalId:string | null
  onFetchProposal:typeof fetchProposalRequest

  isLoading: boolean
  isConnecting: boolean
  history:any
}

export type MapStateProps = Pick<
  Props,
  'isLoading' | "wallet" | "isConnecting" | "proposal" | "proposalId"
>
export type MapDispatchProps = Pick<Props, 'onFetchProposal'>
export type MapDispatch = Dispatch<FetchProposalRequestAction>
