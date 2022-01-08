import { connect } from 'react-redux'
import { isLoadingType } from 'decentraland-dapps/dist/modules/loading/selectors'

import { RootState } from '../../modules/reducer'
import { FETCH_RANKINGS_REQUEST,fetchRankingsRequest, fetchUserRankingRequest } from '../../modules/rank/actions'

import { MapStateProps, MapDispatch, MapDispatchProps } from './RankingPage.types'
import { getData as getRankings,getLoading as getRankingsLoading} from '../../modules/rank/selectors'
import { getWallet, isConnecting } from '../../modules/wallet/selectors'


import RankingPage from './RankingPage'

const mapState = (state: RootState): MapStateProps => ({
  rankings: getRankings(state),
  wallet:getWallet(state),
  isConnecting: isConnecting(state),
  isLoading: isLoadingType(getRankingsLoading(state), FETCH_RANKINGS_REQUEST)
})

const mapDispatch = (dispatch: MapDispatch): MapDispatchProps => ({
  onFetchRankings: options => dispatch(fetchRankingsRequest(options)),
  onFetchUserRanking:options => dispatch(fetchUserRankingRequest(options))
})

export default connect(mapState, mapDispatch)(RankingPage)
