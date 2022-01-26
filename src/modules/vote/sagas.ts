import { takeEvery, call, put } from 'redux-saga/effects'
import {
  fetchVotingpowerFailure,
  FetchVotingpowerRequestAction,
  fetchVotingpowerSuccess,
  FetchVotesRequestAction,
  fetchVotesSuccess,
  fetchVotesFailure,
  FETCH_VOTES_REQUEST,
  FETCH_VOTINGPOWER_REQUEST
  
} from './actions'
import { VendorFactory } from '../vendor/VendorFactory'
import { AwaitFn } from '../types'
import { Vendors } from '../vendor'




export function* voteSaga() {
  yield takeEvery(FETCH_VOTINGPOWER_REQUEST, handleFetchVotingpowerRequest)
  yield takeEvery(FETCH_VOTES_REQUEST,handleFetchVotesRequest)
}

function* handleFetchVotingpowerRequest(action: FetchVotingpowerRequestAction) {
  const options=action.payload
  const { address,blocknumber } = options
  console.log("request fetch voting power")
  try {
    
    const { voteService } = VendorFactory.build(Vendors.DECENTRALAND)
    if (voteService) {
     
      const remoteVotingpower:AwaitFn<typeof voteService.getVotingpower > = yield call(()=>voteService.getVotingpower(
        address,
        blocknumber
      ))
      yield put(fetchVotingpowerSuccess(options, remoteVotingpower))

    }

  } catch (error:any) {
    yield put(fetchVotingpowerFailure(action.payload, error.message))
  }
}

function* handleFetchVotesRequest(action: FetchVotesRequestAction) {
  const { proposalId } = action.payload
  try {

    const { voteService } = VendorFactory.build(Vendors.DECENTRALAND)
    if (voteService) {
     
      const remoteProposal:AwaitFn<typeof voteService.getAllVotes> = yield call(()=>voteService.getAllVotes(proposalId))
      
      yield put(fetchVotesSuccess(remoteProposal))

    }

   

  } catch (error:any) {
    yield put(fetchVotesFailure(proposalId, error.message))
  }
}