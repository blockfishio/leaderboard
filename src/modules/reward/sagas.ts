import { Eth, SendTx } from 'web3x-es/eth'
import { Address } from 'web3x-es/address'
import { all, put, call, select, takeEvery } from 'redux-saga/effects'
import { ChainId } from '@dcl/schemas'
import { Provider } from 'decentraland-connect'
import { Wallet } from 'decentraland-dapps/dist/modules/wallet/types'
import { getConnectedProvider } from 'decentraland-dapps/dist/lib/eth'

import { ERC20, ERC20TransactionReceipt } from '../../contracts/ERC20'
import { ERC721, ERC721TransactionReceipt } from '../../contracts/ERC721'
import { getWallet,getAddress,getChainId } from '../wallet/selectors'
import { AwaitFn } from '../types'
import {
  callAllowance,
  callIsApprovedForAll,
  getTokenAmountToApprove
} from './utils'
import {
  FetchRewardRequestAction,
  ClaimRewardRequestAction,
  FETCH_REWARD_REQUEST,
  CLAIM_REWARD_REQUEST,
  fetchRewardSuccess,
  fetchRewardFailure,
  claimRewardSuccess,
  claimRewardFailure,
} from './actions'
import { VendorFactory, Vendors } from '../vendor'
import { Reward, Rewards } from './types'

export function* rewardSaga() {
  yield takeEvery(FETCH_REWARD_REQUEST, handleFetchRewardRequest)
  // yield takeEvery(CLAIM_REWARD_REQUEST, handleClaimRewardRequest)
}

function* handleFetchRewardRequest(
  action: FetchRewardRequestAction
) {
  const {seasonID} = action.payload
  try {
    const { rewardService } = VendorFactory.build(Vendors.DECENTRALAND)
    const address: ReturnType<typeof getAddress> = yield select(getAddress)
    if (address==undefined){
      throw new Error("Empty address");
    }
    
    const chainId: ChainId = yield select(getChainId)
    const claimable:string=yield call(()=>
    rewardService?.userReward(seasonID,address)
    )
    const res:Reward={
      [seasonID]:claimable
    }
    
    yield put(fetchRewardSuccess(address,res ))
  } catch (error:any) {
    yield put(fetchRewardFailure(error.message))
  }
}

// function* handleClaimRewardRequest(action: ClaimRewardRequestAction) {
//   try {
//     const { isAllowed, contractAddress, tokenContractAddress } = action.payload

//     const provider: Provider | null = yield call(getConnectedProvider)
//     if (!provider) {
//       throw new Error('Could not connect to provider')
//     }
//     const eth = new Eth(provider)

//     const wallet: Wallet | null = yield select(getWallet)
//     const { address } = wallet!
//     const amount = isAllowed ? getTokenAmountToApprove() : 0

//     const tokenContract = new ERC20(
//       eth,
//       Address.fromString(tokenContractAddress)
//     )
//     const transaction: SendTx<ERC20TransactionReceipt> = yield call(() =>
//       tokenContract.methods
//         .approve(Address.fromString(contractAddress), amount)
//         .send({ from: Address.fromString(address) })
//     )
//     const transactionHash: string = yield call(() => transaction.getTxHash())
//     const chainId: ChainId = yield select(getChainId)
//     yield put(
//       allowTokenSuccess(
//         chainId,
//         transactionHash,
//         address,
//         isAllowed,
//         contractAddress,
//         tokenContractAddress
//       )
//     )
//   } catch (error) {
//     yield put(allowTokenFailure(error.message))
//   }
// }

