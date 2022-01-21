import {
  LoadingState,
  loadingReducer
} from 'decentraland-dapps/dist/modules/loading/reducer'

import { Ranking } from './types'
import {

 FetchRankingsRequestAction,
 FetchRankingsSuccessAction,
 FetchRankingsFailureAction,
 FETCH_RANKINGS_REQUEST,
 FETCH_RANKINGS_SUCCESS,
 FETCH_RANKINGS_FAILURE,
 FetchUserRankingRequestAction,
 FetchUserRankingSuccessAction,
 FetchUserRankingFailureAction,
 FETCH_USERRANKING_REQUEST,
 FETCH_USERRANKING_SUCCESS,
 FETCH_USERRANKING_FAILURE,
 FETCH_PROPOSALS_SUCCESS,
 FetchProposalSuccessAction
} from './actions'



export type Rankings={
  totalPlayer:number
  rankings:Record<string,Ranking>,
  proposals?:any
}
export type RankingState = {
  data: Rankings
  loading: LoadingState
  error: string | null
}

const INITIAL_STATE = {
  loading: [],
  data: {
    totalPlayer:0,
    rankings:{},
    proposals:null
  },
  error: null
}

type RankingReducerAction =
  | FetchUserRankingRequestAction
  | FetchUserRankingSuccessAction
  | FetchUserRankingFailureAction
  | FetchRankingsRequestAction
  | FetchRankingsSuccessAction
  | FetchRankingsFailureAction 
  | FetchProposalSuccessAction
  

export function rankingReducer(
  state: RankingState = INITIAL_STATE,
  action: RankingReducerAction
): RankingState {
  switch (action.type) {
    case FETCH_RANKINGS_REQUEST:
    case FETCH_USERRANKING_REQUEST:
      {
        return {
          ...state,
          loading: loadingReducer(state.loading, action)
        }
      }
    case FETCH_RANKINGS_FAILURE:
    case FETCH_USERRANKING_FAILURE:
      {
        return {
          ...state,
          loading: loadingReducer(state.loading, action),
          error: action.payload.error
        }
      }
    case FETCH_USERRANKING_SUCCESS: {
      const { ranking,options } = action.payload
      return {
        ...state,
        loading: loadingReducer(state.loading, action),
        data: {
          ...state.data,
          rankings:{
            ...state.data.rankings,
            [options.address]: {
              ...ranking,
              Address:options.address
            }
          }
          
        },
        error: null
      }
    }
    case FETCH_RANKINGS_SUCCESS: {
      return {
        ...state,
        loading: loadingReducer(state.loading, action),
        data: {
          totalPlayer:action.payload.totalPlayers,
          rankings:{
            ...state.data.rankings,
          ...action.payload.rankings.reduce((obj, ranking) => {
            obj[ranking.Address] = ranking
            return obj
          }, {} as Record<string, Ranking>)}
        }
      }
    }
    case FETCH_PROPOSALS_SUCCESS: {
      return {
        ...state,
        loading: loadingReducer(state.loading, action),
        data: {
          ...state.data,
          proposals:action.payload.proposals
        }
      }
    }
    

    default:
      return state
  }
}
