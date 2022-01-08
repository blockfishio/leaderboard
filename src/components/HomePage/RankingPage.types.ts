import { Dispatch } from 'redux'

import { Ranking } from '../../modules/rank/types'
import { fetchRankingsRequest,
   FetchRankingsRequestAction,
  fetchUserRankingRequest,
  FetchUserRankingRequestAction
  } from '../../modules/rank/actions'
import { Wallet } from 'decentraland-dapps/dist/modules/wallet/types'
export type Props = {
  wallet:Wallet | null
  rankings: Record<string ,Ranking>
  onFetchRankings:typeof fetchRankingsRequest
  onFetchUserRanking:typeof fetchUserRankingRequest
  isLoading: boolean
  isConnecting: boolean

}

export type MapStateProps = Pick<
  Props,
  'rankings' |'isLoading' | "wallet" | "isConnecting"
>
export type MapDispatchProps = Pick<Props, 'onFetchRankings' | 'onFetchUserRanking'>
export type MapDispatch = Dispatch<FetchRankingsRequestAction | FetchUserRankingRequestAction>
