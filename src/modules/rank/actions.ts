import { action } from 'typesafe-actions'
import {
  Ranking,
  RankFetchOptions,
  UserRankFetchParams

} from './types'

// Fetch NFTs

export const FETCH_RANKINGS_REQUEST = '[Request] Fetch Rankings'
export const FETCH_RANKINGS_SUCCESS = '[Success] Fetch Rankings'
export const FETCH_RANKINGS_FAILURE = '[Failure] Fetch Rankings'



export const fetchRankingsRequest = (options: RankFetchOptions ) =>
  action(FETCH_RANKINGS_REQUEST, {
    options: options,
    timestamp: Date.now()
  })

export const fetchRankingsSuccess = (
  options: RankFetchOptions,
  rankings: Ranking[],
  totalPlayers:number,
  timestamp: number
) =>
  action(FETCH_RANKINGS_SUCCESS, {
    options,
    rankings,
    totalPlayers,
    timestamp
  })
export const fetchRankingsFailure = (
  options: RankFetchOptions,
  error: string,
  timestamp: number
) => action(FETCH_RANKINGS_FAILURE, {
  options,
  error, timestamp
})

export type FetchRankingsRequestAction = ReturnType<typeof fetchRankingsRequest>
export type FetchRankingsSuccessAction = ReturnType<typeof fetchRankingsSuccess>
export type FetchRankingsFailureAction = ReturnType<typeof fetchRankingsFailure>

// Fetch Asset

export const FETCH_USERRANKING_REQUEST = '[Request] Fetch User Ranking'
export const FETCH_USERRANKING_SUCCESS = '[Success] Fetch User Ranking'
export const FETCH_USERRANKING_FAILURE = '[Failure] Fetch User Ranking'

export const fetchUserRankingRequest = (options:UserRankFetchParams) =>
  action(FETCH_USERRANKING_REQUEST, { 
      options:options,
      timestamp: Date.now()
    })
export const fetchUserRankingSuccess = (
    options:UserRankFetchParams,
    ranking: Ranking,
    timestamp:number
    ) =>
  action(FETCH_USERRANKING_SUCCESS, {
    options,  
    ranking,
    timestamp
})
export const fetchUserRankingFailure = (
  options:UserRankFetchParams,
  error: string,
  timestamp:number
) => action(FETCH_USERRANKING_FAILURE, { 
    options,
     error,timestamp })

export type FetchUserRankingRequestAction = ReturnType<typeof fetchUserRankingRequest>
export type FetchUserRankingSuccessAction = ReturnType<typeof fetchUserRankingSuccess>
export type FetchUserRankingFailureAction = ReturnType<typeof fetchUserRankingFailure>




// Fetch Proposals

export const FETCH_PROPOSALS_REQUEST = '[Request] Fetch Proposals '
export const FETCH_PROPOSALS_SUCCESS = '[Success] Fetch Proposals '
export const FETCH_PROPOSALS_FAILURE = '[Failure] Fetch Proposals '

export const fetchProposalsRequest = (options:UserRankFetchParams) =>
  action(FETCH_PROPOSALS_REQUEST, { 
      timestamp: Date.now()
    })
export const fetchProposalsSuccess = (
    proposals:any,
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

export type FetchProposalRequestAction = ReturnType<typeof fetchProposalsRequest>
export type FetchProposalSuccessAction = ReturnType<typeof fetchProposalsSuccess>
export type FetchProposalFailureAction = ReturnType<typeof fetchProposalsFailure>
