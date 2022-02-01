import { takeEvery, call, put } from 'redux-saga/effects'
import {
  FETCH_PROPOSALS_REQUEST,
  FetchProposalsRequestAction,
  fetchProposalsSuccess,
  fetchProposalsFailure,
  FETCH_PROPOSAL_REQUEST,
  FetchProposalRequestAction,
  fetchProposalSuccess,
  fetchProposalFailure,
  
} from './actions'
import { VendorFactory } from '../vendor/VendorFactory'
import { AwaitFn } from '../types'
import { Vendors } from '../vendor'



export function* proposalSaga() {
  yield takeEvery(FETCH_PROPOSALS_REQUEST, handleFetchProposalsRequest)
  yield takeEvery(FETCH_PROPOSAL_REQUEST,handleFetchProposalRequest)
}


function* handleFetchProposalsRequest(action: FetchProposalsRequestAction) {
  const { timestamp,options } = action.payload
  try {

    const { proposalService } = VendorFactory.build(Vendors.DECENTRALAND)
    if (proposalService) {
     
      const proposalsRes:AwaitFn<typeof proposalService.getProposals > = yield call(()=>proposalService.getProposals())
      yield put(fetchProposalsSuccess(proposalsRes,timestamp))

    }

   

  } catch (error:any) {
    yield put(fetchProposalsFailure(error.message,timestamp))
  }
}


function* handleFetchProposalRequest(action: FetchProposalRequestAction) {
  const { proposalId } = action.payload
  try {

    const { proposalService } = VendorFactory.build(Vendors.DECENTRALAND)
    if (proposalService) {
     
      const remoteProposal:AwaitFn<typeof proposalService.getProposal > = yield call(()=>proposalService.getProposal(proposalId))
      
      yield put(fetchProposalSuccess(remoteProposal))

    }

   

  } catch (error:any) {
    yield put(fetchProposalFailure(proposalId, error.message))
  }
}
