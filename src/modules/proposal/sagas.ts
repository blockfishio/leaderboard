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
  const { timestamp } = action.payload
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
     
      const proposalsRes:AwaitFn<typeof proposalService.getProposal > = yield call(()=>proposalService.getProposal(proposalId))
      const votesRes:AwaitFn<typeof proposalService.getAllVotes> = yield call(()=>proposalService.getAllVotes(proposalId))
      console.log(votesRes)
      yield put(fetchProposalSuccess(proposalsRes))

    }

   

  } catch (error:any) {
    yield put(fetchProposalFailure(proposalId, error.message))
  }
}
