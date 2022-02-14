import { all } from 'redux-saga/effects'
import { createAnalyticsSaga } from 'decentraland-dapps/dist/modules/analytics/sagas'
import { transactionSaga } from 'decentraland-dapps/dist/modules/transaction/sagas'
import { translationSaga } from './translation/sagas'
import { walletSaga } from './wallet/sagas'
import {proposalSaga} from './proposal/sagas'
import {voteSaga} from './vote/sagas'
import {uiSaga} from './ui/sagas'



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
    proposalSaga(),
    voteSaga(),
    uiSaga()    
  ])
}
