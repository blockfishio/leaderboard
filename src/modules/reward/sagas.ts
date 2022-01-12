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
import { fromWei } from 'web3x-es/utils'

export function* rewardSaga() {
  yield takeEvery(FETCH_REWARD_REQUEST, handleFetchRewardRequest)
  yield takeEvery(CLAIM_REWARD_REQUEST, handleClaimRewardRequest)
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
    const total:string=yield call(()=>
    rewardService?.userReward(seasonID,chainId, address)
    )
    const seasonStartTime:number=yield call(()=>
    rewardService?.getSeasonRewardStartTime(seasonID,chainId)
    )
    const UserNextRewardTime:number=yield call(()=>
    rewardService?.getUserNextRewardTime(seasonID,chainId,address)
    )
    const currentTime=Math.floor( Date.now()/1000)
    let claimable=0.0
    let remaining=0.0
    if (currentTime<UserNextRewardTime){
       claimable=0
    }
    else{
    const claimablePortion= Math.floor( (currentTime-UserNextRewardTime)/(3*86400))+1
     claimable=parseFloat( fromWei(total,"ether"))/10*claimablePortion
    const remainingPortion=10-(Math.floor(UserNextRewardTime-seasonStartTime)/(3*86400)+1)
    remaining=parseFloat( fromWei(total,"ether"))/10*remainingPortion
    }

    const res:Rewards={
      claimable: {[seasonID.toString()]:claimable.toString()},
      remaining:{[seasonID.toString()]:remaining.toString()},
      total:{[seasonID.toString()]:fromWei(total,"ether")}
      
    }
    
    yield put(fetchRewardSuccess(address,res ))
  } catch (error:any) {
    yield put(fetchRewardFailure(error.message))
  }
}

function* handleClaimRewardRequest(action: ClaimRewardRequestAction) {
  const { seasonID } = action.payload
  try {
    const { rewardService } = VendorFactory.build(Vendors.DECENTRALAND)

    const address: ReturnType<typeof getAddress> = yield select(getAddress)
    const chainId: ChainId = yield select(getChainId)

    const txHash: string = yield call(() =>
      rewardService?.claim(seasonID,chainId, address!)
    )
    yield put(claimRewardSuccess(seasonID, chainId, txHash))
    // yield put(push(locations.settings()))
  } catch (error:any) {
    yield put(claimRewardFailure(seasonID, error.message))
  }
}

