import { all } from 'redux-saga/effects'
import { createAnalyticsSaga } from 'decentraland-dapps/dist/modules/analytics/sagas'
import { transactionSaga } from 'decentraland-dapps/dist/modules/transaction/sagas'
import { translationSaga } from './translation/sagas'
import { rewardSaga } from './reward/sagas'
import { walletSaga } from './wallet/sagas'
import {rankingSaga} from './rank/sagas'
import {uiSaga} from './ui/sagas'
import { seasonSaga } from './season/sagas'


const analyticsSaga = createAnalyticsSaga()
// const profileSaga = createProfileSaga({
//   peerUrl: process.env.REACT_APP_PEER_URL!
// })

export function* rootSaga() {
  yield all([
    analyticsSaga(),
    transactionSaga(),
    translationSaga(),
    walletSaga(),
    rankingSaga(),
    rewardSaga(),
    uiSaga(),
    seasonSaga()    
  ])
}
