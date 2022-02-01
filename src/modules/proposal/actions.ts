import { action } from 'typesafe-actions'
import {
  Proposal,
  ProposalsFetchParams,
 

} from './types'

// Fetch Proposals

export const FETCH_PROPOSALS_REQUEST = '[Request] Fetch Proposals '
export const FETCH_PROPOSALS_SUCCESS = '[Success] Fetch Proposals '
export const FETCH_PROPOSALS_FAILURE = '[Failure] Fetch Proposals '

export const fetchProposalsRequest = (options:ProposalsFetchParams) =>
  action(FETCH_PROPOSALS_REQUEST, { 
      options,
      timestamp: Date.now()
    })
export const fetchProposalsSuccess = (
    proposals:Proposal[],
    timestamp:number
    ) =>
  action(FETCH_PROPOSALS_SUCCESS, {
    proposals,
    timestamp
})
export const fetchProposalsFailure = (
  error:any,
  timestamp:number
) => action(FETCH_PROPOSALS_FAILURE, { 
     error,timestamp })

export type FetchProposalsRequestAction = ReturnType<typeof fetchProposalsRequest>
export type FetchProposalsSuccessAction = ReturnType<typeof fetchProposalsSuccess>
export type FetchProposalsFailureAction = ReturnType<typeof fetchProposalsFailure>

// Fetch Proposal

export const FETCH_PROPOSAL_REQUEST = '[Request] Fetch Proposal '
export const FETCH_PROPOSAL_SUCCESS = '[Success] Fetch Proposal '
export const FETCH_PROPOSAL_FAILURE = '[Failure] Fetch Proposal '

export const fetchProposalRequest = (proposalId:string) =>
  action(FETCH_PROPOSAL_REQUEST, { 
      proposalId
    })
export const fetchProposalSuccess = (
    proposal:Proposal
    ) =>
  action(FETCH_PROPOSAL_SUCCESS, {
    proposal
})
export const fetchProposalFailure = (
  proposalId:string,
  error:string
) => action(FETCH_PROPOSAL_FAILURE, { 
     proposalId,error })

export type FetchProposalRequestAction = ReturnType<typeof fetchProposalRequest>
export type FetchProposalSuccessAction = ReturnType<typeof fetchProposalSuccess>
export type FetchProposalFailureAction = ReturnType<typeof fetchProposalFailure>

