import { action } from 'typesafe-actions'
import { Proposal } from '../proposal/types'
import { VotingPower } from './reducer'
import {
 
  Vote,
  VoteMsg,
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
  votingpower:VotingPower[]

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

export const fetchVotesRequest = (proposal:Proposal) =>
  action(FETCH_VOTES_REQUEST, { 
      proposal
    })
export const fetchVotesSuccess = (
    votesRes:Record<string,Vote>
    ) =>
  action(FETCH_VOTES_SUCCESS, {
    votesRes
})
export const fetchVotesFailure = (
  proposal:Proposal,
  error:string
) => action(FETCH_VOTES_FAILURE, { 
     proposal,error })

export type FetchVotesRequestAction = ReturnType<typeof fetchVotesRequest>
export type FetchVotesSuccessAction = ReturnType<typeof fetchVotesSuccess>
export type FetchVotesFailureAction = ReturnType<typeof fetchVotesFailure>

// Cast Votes

export const CAST_VOTE_REQUEST = '[Request] Cast Vote '
export const CAST_VOTE_SUCCESS = '[Success] Cast Vote '
export const CAST_VOTE_FAILURE = '[Failure] Cast Vote '

export const castVoteRequest = (voteMsg:string) =>
  action(CAST_VOTE_REQUEST, { 
      voteMsg
    })
export const castVoteSuccess = (
    
    ) =>
  action(CAST_VOTE_SUCCESS, {
})
export const castVoteFailure = (
 voteMsg:string,
  error:string
) => action(CAST_VOTE_FAILURE, { 
     voteMsg,error })

export type CastVoteRequestAction = ReturnType<typeof castVoteRequest>
export type CastVoteSuccessAction = ReturnType<typeof castVoteSuccess>
export type CastVoteFailureAction = ReturnType<typeof castVoteFailure>