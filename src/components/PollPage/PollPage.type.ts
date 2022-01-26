import { Dispatch } from 'redux'

import { Proposal } from '../../modules/proposal/types'
import { fetchProposalsRequest,
   FetchProposalsRequestAction,
  } from '../../modules/proposal/actions'
import { Wallet } from 'decentraland-dapps/dist/modules/wallet/types'
export type Props = {
  wallet:Wallet | null
  proposals:Record<string,Proposal>
  onFetchProposals:typeof fetchProposalsRequest

  isLoading: boolean
  isConnecting: boolean

}

export type MapStateProps = Pick<
  Props,
  'isLoading' | "wallet" | "isConnecting" | "proposals" 
>
export type MapDispatchProps = Pick<Props, 'onFetchProposals'>
export type MapDispatch = Dispatch<FetchProposalsRequestAction>
