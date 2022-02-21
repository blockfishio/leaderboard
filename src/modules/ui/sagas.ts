import { takeEvery, put, select } from 'redux-saga/effects'
import {
  CONNECT_WALLET_SUCCESS,
  ConnectWalletSuccessAction
} from 'decentraland-dapps/dist/modules/wallet/actions'
import {
  CLAIM_REWARD_SUCCESS,
  ClaimRewardSuccessAction
} from '../reward/actions'
import {
  CAST_VOTE_SUCCESS,
  CastVoteSuccessAction
} from '../vote/actions'
import { push, getLocation } from 'connected-react-router'
import { locations } from '../routing/locations'

export function* uiSaga() {
  yield takeEvery(CONNECT_WALLET_SUCCESS, handleConnectWalletSuccess)
  yield takeEvery(CLAIM_REWARD_SUCCESS,handleClaimRewardSuccess)
  yield takeEvery(CAST_VOTE_SUCCESS,handleCastVoteSuccess)

}

function* handleConnectWalletSuccess(_action: ConnectWalletSuccessAction) {
  const location: ReturnType<typeof getLocation> = yield select(getLocation)
  if (location.pathname === locations.signIn()) {
    yield put(push(locations.voting()))
  }
}
function* handleClaimRewardSuccess(_action: ClaimRewardSuccessAction) {
    yield put(push(locations.root()))
    window.location.reload()
}
function* handleCastVoteSuccess(_action: CastVoteSuccessAction) {
  // yield put(push(locations.root()))
  window.location.reload()
}
