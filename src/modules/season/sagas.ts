import { Eth, SendTx } from 'web3x-es/eth'
import { Address } from 'web3x-es/address'
import { all, put, call, select, takeEvery } from 'redux-saga/effects'
import { ChainId } from '../contract/types'
import { Provider } from 'decentraland-connect'
import { Wallet } from 'decentraland-dapps/dist/modules/wallet/types'
import { getConnectedProvider } from 'decentraland-dapps/dist/lib/eth'

import { ERC20, ERC20TransactionReceipt } from '../../contracts/ERC20'
import { ERC721, ERC721TransactionReceipt } from '../../contracts/ERC721'
import { getWallet,getAddress,getChainId } from '../wallet/selectors'

import {
  ChangeSeasonIDRequestAction,
  CHANGE_SEASONID_REQUEST,
  changeSeasonIDSuccess,
  changeSeasonIDFailure,
} from './actions'
import { VendorFactory, Vendors } from '../vendor'
import { Reward, Rewards } from './types'
import { fromWei } from 'web3x-es/utils'

export function* seasonSaga() {
  yield takeEvery(CHANGE_SEASONID_REQUEST, handleChangeSeasonIDRequest)
}

function* handleChangeSeasonIDRequest(
  action: ChangeSeasonIDRequestAction
) {
  const {seasonID} = action.payload
  try {
    
    
    yield put(changeSeasonIDSuccess(seasonID ))
  } catch (error:any) {
    yield put(changeSeasonIDFailure(error.message))
  }
}


