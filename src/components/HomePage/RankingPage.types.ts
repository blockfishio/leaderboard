import { Dispatch } from 'redux'

import { Ranking } from '../../modules/rank/types'
import { fetchRankingsRequest,
   FetchRankingsRequestAction,
  fetchUserRankingRequest,
  FetchUserRankingRequestAction
  } from '../../modules/rank/actions'
import { Wallet } from 'decentraland-dapps/dist/modules/wallet/types'
import { Rewards } from '../../modules/reward/types'
import { claimRewardRequest, ClaimRewardRequestAction } from '../../modules/reward/actions'
export type Props = {
  wallet:Wallet | null
  rankings: Record<string ,Ranking>
  rewards: Record<string ,Rewards>

  onFetchRankings:typeof fetchRankingsRequest
  onFetchUserRanking:typeof fetchUserRankingRequest
  onClaimReward:typeof claimRewardRequest
  isLoading: boolean
  isConnecting: boolean

}

export type MapStateProps = Pick<
  Props,
  'rankings' |'isLoading' | "wallet" | "isConnecting" | "rewards"
>
export type MapDispatchProps = Pick<Props, 'onFetchRankings' | 'onFetchUserRanking' | 'onClaimReward'>
export type MapDispatch = Dispatch<FetchRankingsRequestAction | FetchUserRankingRequestAction | ClaimRewardRequestAction>
