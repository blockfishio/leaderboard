import { takeEvery, call, put, select } from 'redux-saga/effects'
import {
  fetchVotingpowerFailure,
  FetchVotingpowerRequestAction,
  fetchVotingpowerSuccess,
  FetchVotesRequestAction,
  fetchVotesSuccess,
  fetchVotesFailure,
  FETCH_VOTES_REQUEST,
  FETCH_VOTINGPOWER_REQUEST,
  castVoteSuccess,
  castVoteFailure,
  CastVoteRequestAction,
  CAST_VOTE_REQUEST
  
} from './actions'
import { VendorFactory } from '../vendor/VendorFactory'
import { AwaitFn } from '../types'
import { Vendors } from '../vendor'
import { getConnectedProvider } from 'decentraland-dapps/dist/lib/eth'
import { Provider } from 'decentraland-connect'
import { Eth } from 'web3x-es/eth'
import { Wallet } from 'decentraland-dapps/dist/modules/wallet/types'
import { getWallet } from '../wallet/selectors'
import { Address } from 'web3x/address'
import { Message } from './types'
import { sendSnapshotData } from './utils'
import { Personal } from 'web3x/personal'






export function* voteSaga() {
  yield takeEvery(FETCH_VOTINGPOWER_REQUEST, handleFetchVotingpowerRequest)
  yield takeEvery(FETCH_VOTES_REQUEST,handleFetchVotesRequest)
  yield takeEvery(CAST_VOTE_REQUEST,handleCastVoteRequest)
}

function* handleFetchVotingpowerRequest(action: FetchVotingpowerRequestAction) {
  const options=action.payload
  const { address,blocknumber } = options
  try {
    
    const { voteService } = VendorFactory.build(Vendors.DECENTRALAND)
    if (voteService) {
     
      const remoteVotingpower:AwaitFn<typeof voteService.getUserVotingpower > = yield call(()=>voteService.getUserVotingpower(
        address,
        blocknumber!
      ))
      yield put(fetchVotingpowerSuccess(options, remoteVotingpower))

    }

  } catch (error:any) {
    yield put(fetchVotingpowerFailure(action.payload, error.message))
  }
}

function* handleFetchVotesRequest(action: FetchVotesRequestAction) {
  const { proposal } = action.payload
  try {

    const { voteService } = VendorFactory.build(Vendors.DECENTRALAND)
    if (voteService) {
     
      const remoteVotes:AwaitFn<typeof voteService.getAllVotes> = yield call(()=>voteService.getAllVotes(proposal))
      
      yield put(fetchVotesSuccess(remoteVotes))

    }

   

  } catch (error:any) {
    yield put(fetchVotesFailure(proposal, error.message))
  }
}

function* handleCastVoteRequest(action: CastVoteRequestAction) {
  const { voteMsg } = action.payload
  try {
    const provider: Provider | null = yield call(getConnectedProvider)
    if (!provider) {
      throw new Error('Could not connect to provider')
    }
    const eth = new Eth(provider)
    const wallet: Wallet | null = yield select(getWallet)
    const { address } = wallet!
    const sig:string=yield new Personal(provider)
        .sign(voteMsg || '', Address.fromString(address), '')
        
    

    // const sig:string=yield call(()=>eth.sign(Address.fromString( address),voteMsg))
    
      const msg: Message = { address: address, msg: voteMsg, sig }
    yield call(()=>sendSnapshotData(msg))
    yield put(castVoteSuccess())



   

   

  } catch (error:any) {
    yield put(castVoteFailure(voteMsg, error.message))
  }
}