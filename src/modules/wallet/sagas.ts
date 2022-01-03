import { takeEvery, all, } from 'redux-saga/effects'
import { createWalletSaga } from 'decentraland-dapps/dist/modules/wallet/sagas'
import {
  CONNECT_WALLET_SUCCESS,

  CHANGE_ACCOUNT,
  CHANGE_NETWORK
} from 'decentraland-dapps/dist/modules/wallet/actions'







const baseWalletSaga = createWalletSaga({
  CHAIN_ID: +(process.env.REACT_APP_CHAIN_ID || 1),
  ALLOWED_IDS: process.env.REACT_APP_ALLOWED_CHAIN_IDS?.split(", ").map(id => parseInt(id))
})

export function* walletSaga() {
  yield all([baseWalletSaga(), fullWalletSaga()])
}

function* fullWalletSaga() {
  yield takeEvery(CONNECT_WALLET_SUCCESS, handleWallet)
  yield takeEvery(CHANGE_ACCOUNT, handleWallet)
  yield takeEvery(CHANGE_NETWORK, handleWallet)
}

function* handleWallet(
) {
  // const chainId: ChainId = yield select(getChainId)


  // const { MANAToken, Marketplace,
  //   AssetSale } = contractAddresses

  

  // TODO: VendorFactory.build().contractService.getAllowances()
  // TODO: VendorFactory.build().contractService.getApprovals()

  
}
