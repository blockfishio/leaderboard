import { takeEvery, call, put } from 'redux-saga/effects'
import {
  FETCH_RANKINGS_REQUEST,
  FetchRankingsRequestAction,
  fetchRankingsSuccess,
  fetchRankingsFailure,
  FETCH_USERRANKING_REQUEST,
  FetchUserRankingRequestAction,
  fetchUserRankingSuccess,
  fetchUserRankingFailure,
  fetchProposalsSuccess,
  

} from './actions'
import { VendorFactory } from '../vendor/VendorFactory'
import { AwaitFn } from '../types'
import { Vendors } from '../vendor'



export function* rankingSaga() {
  yield takeEvery(FETCH_USERRANKING_REQUEST, handleFetchUserRankingRequest)
  yield takeEvery(FETCH_RANKINGS_REQUEST, handleFetchRankingsRequest)
}

function* handleFetchUserRankingRequest(action: FetchUserRankingRequestAction): any {
  const { options, timestamp } = action.payload
  // const { address } = options
  // console.log(view, view == View.OFFICAL)
  try {
    const { rankService } = VendorFactory.build(Vendors.DECENTRALAND)
    if (rankService) {
      const 
        ranking
      : AwaitFn<typeof rankService.userRanking> = yield call(() =>
        rankService.userRanking(options)
      )
      yield put(
        fetchUserRankingSuccess(options, ranking, timestamp))
      

    }
  } catch (error:any) {
    yield put(fetchUserRankingFailure(options, error.message, timestamp))
  }
}

function* handleFetchRankingsRequest(action: FetchRankingsRequestAction) {
  const { options,timestamp } = action.payload
  const {params} = options
  try {

    const { rankService } = VendorFactory.build(Vendors.DECENTRALAND)
    if (rankService) {
      const rankingRes: AwaitFn<typeof rankService.topNRanking> = yield call(() =>
        rankService.topNRanking(params))
      const proposalsRes:AwaitFn<typeof rankService.getProposals > = yield call(()=>rankService.getProposals())
      yield put(fetchRankingsSuccess(options,rankingRes.rankings,rankingRes.totalPlayer, timestamp))
      yield put(fetchProposalsSuccess(proposalsRes,timestamp))

    }

    // const [nft, order]: AwaitFn<typeof nftService.fetchOne> = yield call(() =>
    //   nftService.fetchOne(contractAddress, tokenId)
    // )

  } catch (error:any) {
    yield put(fetchRankingsFailure(options, error.message,timestamp))
  }
}


