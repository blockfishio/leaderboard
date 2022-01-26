import { action } from 'typesafe-actions'
import { VotingPower } from './reducer'
import {
 
  Vote,
  VotingPowerFetchParams

} from './types'


// Fetch VotngPower

export const FETCH_VOTINGPOWER_REQUEST = '[Request] Fetch VotingPower '
export const FETCH_VOTINGPOWER_SUCCESS = '[Success] Fetch VotingPower '
export const FETCH_VOTINGPOWER_FAILURE = '[Failure] Fetch VotingPower '

export const fetchVotingpowerRequest = (
  options:VotingPowerFetchParams
) =>
  action(FETCH_VOTINGPOWER_REQUEST, options)
export const fetchVotingpowerSuccess = (
  options:VotingPowerFetchParams,
  votingpower:VotingPower

    ) =>
  action(FETCH_VOTINGPOWER_SUCCESS, {
    options,
    votingpower
})
export const fetchVotingpowerFailure = (
  options:VotingPowerFetchParams,
  error:string
) => action(FETCH_VOTINGPOWER_FAILURE, { 
     options,error })

export type FetchVotingpowerRequestAction = ReturnType<typeof fetchVotingpowerRequest>
export type FetchVotingpowerSuccessAction = ReturnType<typeof fetchVotingpowerSuccess>
export type FetchVotingpowerFailureAction = ReturnType<typeof fetchVotingpowerFailure>

// Fetch Votes

export const FETCH_VOTES_REQUEST = '[Request] Fetch Votes '
export const FETCH_VOTES_SUCCESS = '[Success] Fetch Votes '
export const FETCH_VOTES_FAILURE = '[Failure] Fetch Votes '

export const fetchVotesRequest = (proposalId:string) =>
  action(FETCH_VOTES_REQUEST, { 
      proposalId
    })
export const fetchVotesSuccess = (
    votesRes:Vote[]
    ) =>
  action(FETCH_VOTES_SUCCESS, {
    votesRes
})
export const fetchVotesFailure = (
  proposalId:string,
  error:string
) => action(FETCH_VOTES_FAILURE, { 
     proposalId,error })

export type FetchVotesRequestAction = ReturnType<typeof fetchVotesRequest>
export type FetchVotesSuccessAction = ReturnType<typeof fetchVotesSuccess>
export type FetchVotesFailureAction = ReturnType<typeof fetchVotesFailure>