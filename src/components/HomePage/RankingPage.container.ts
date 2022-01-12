import { connect } from 'react-redux'
import { isLoadingType } from 'decentraland-dapps/dist/modules/loading/selectors'

import { RootState } from '../../modules/reducer'
import { FETCH_RANKINGS_REQUEST,
  fetchRankingsRequest, 
  fetchUserRankingRequest, 
  FETCH_USERRANKING_REQUEST} from '../../modules/rank/actions'

import { MapStateProps, MapDispatch, MapDispatchProps } from './RankingPage.types'
import { getData as getRankings,getLoading as getRankingsLoading} from '../../modules/rank/selectors'
import { getWallet, isConnecting } from '../../modules/wallet/selectors'
import { getData as getReward } from '../../modules/reward/selectors'

import RankingPage from './RankingPage'
import { claimRewardRequest } from '../../modules/reward/actions'

const mapState = (state: RootState): MapStateProps => ({
  rankings: getRankings(state),
  wallet:getWallet(state),
  rewards:getReward(state),
  isConnecting: isConnecting(state),
  isLoading: isLoadingType(getRankingsLoading(state), FETCH_RANKINGS_REQUEST) || isLoadingType(getRankingsLoading(state), FETCH_USERRANKING_REQUEST) 
})

const mapDispatch = (dispatch: MapDispatch): MapDispatchProps => ({
  onFetchRankings: options => dispatch(fetchRankingsRequest(options)),
  onFetchUserRanking:options => dispatch(fetchUserRankingRequest(options)),
  onClaimReward:options=>dispatch(claimRewardRequest(options))
})

export default connect(mapState, mapDispatch)(RankingPage)
