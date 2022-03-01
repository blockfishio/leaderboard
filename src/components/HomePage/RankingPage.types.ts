import { Dispatch } from 'redux'

import { Ranking } from '../../modules/rank/types'
import { fetchRankingsRequest,
   FetchRankingsRequestAction,
  fetchUserRankingRequest,
  FetchUserRankingRequestAction
  } from '../../modules/rank/actions'
import { Wallet } from 'decentraland-dapps/dist/modules/wallet/types'
import { Rewards } from '../../modules/reward/types'
import { claimRewardRequest, ClaimRewardRequestAction, fetchRewardRequest, FetchRewardRequestAction } from '../../modules/reward/actions'
import { Rankings } from '../../modules/rank/reducer'
import { changeSeasonIDRequest, ChangeSeasonIDRequestAction } from '../../modules/season/actions'
export type Props = {
  wallet:Wallet | null
  rankings: Rankings
  rewards: Record<string ,Rewards>
  seasonID:number

  onFetchRankings:typeof fetchRankingsRequest
  onFetchUserRanking:typeof fetchUserRankingRequest
  onClaimReward:typeof claimRewardRequest
  onFetchReward:typeof fetchRewardRequest
  onChangeSeasonID:typeof changeSeasonIDRequest
  isLoading: boolean
  isConnecting: boolean

}

export type MapStateProps = Pick<
  Props,
  'rankings' |'isLoading' | "wallet" | "isConnecting" | "rewards" | "seasonID"
>
export type MapDispatchProps = Pick<Props, 'onFetchRankings' | 'onFetchUserRanking' | 'onClaimReward' | 'onFetchReward' | 'onChangeSeasonID'>
export type MapDispatch = Dispatch<FetchRankingsRequestAction | FetchUserRankingRequestAction | ClaimRewardRequestAction | FetchRewardRequestAction | ChangeSeasonIDRequestAction>
