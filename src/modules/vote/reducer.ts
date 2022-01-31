import {
  LoadingState,
  loadingReducer
} from 'decentraland-dapps/dist/modules/loading/reducer'

import { Proposal, Vote } from './types'
import {

 
 FetchVotingpowerRequestAction,
 FetchVotingpowerSuccessAction,
 FetchVotingpowerFailureAction,
 FETCH_VOTINGPOWER_REQUEST,
 FETCH_VOTINGPOWER_SUCCESS,
 FETCH_VOTINGPOWER_FAILURE,
 FetchVotesRequestAction,
 FetchVotesSuccessAction,
 FetchVotesFailureAction,
 FETCH_VOTES_REQUEST,
 FETCH_VOTES_SUCCESS,
 FETCH_VOTES_FAILURE,
 CastVoteRequestAction,
 CastVoteSuccessAction,
 CastVoteFailureAction,
 CAST_VOTE_REQUEST,
 CAST_VOTE_SUCCESS,
 CAST_VOTE_FAILURE,



} from './actions'



export type VotingPower=
  Record<string,number>
export type VotingPowerDetail=Record<string,number>
export type VoteState = {
  data:  {
    vp:VotingPower[]
    votes:Record<string,Vote>
  }
  loading: LoadingState
  error: string | null
}

const INITIAL_STATE = {
  loading: [],
  data: {
    vp:[],
    votes:{}
    
  },
  error: null
}

type VoteReducerAction =
  | FetchVotingpowerRequestAction
  | FetchVotingpowerSuccessAction
  | FetchVotingpowerFailureAction
  | FetchVotesRequestAction
  | FetchVotesSuccessAction
  | FetchVotesFailureAction
  | CastVoteRequestAction
  | CastVoteSuccessAction
  | CastVoteFailureAction

  

export function voteReducer(
  state: VoteState = INITIAL_STATE,
  action: VoteReducerAction
): VoteState {
  switch (action.type) {
    
    case FETCH_VOTINGPOWER_REQUEST:
    case FETCH_VOTES_REQUEST:
    case CAST_VOTE_REQUEST:
      {
        return {
          ...state,
          loading: loadingReducer(state.loading, action)
        }
      }
    
    case FETCH_VOTINGPOWER_FAILURE:
    case FETCH_VOTES_FAILURE:
    case CAST_VOTE_FAILURE:
      {
        return {
          ...state,
          loading: loadingReducer(state.loading, action),
          error: action.payload.error
        }
      }
      case FETCH_VOTINGPOWER_SUCCESS:
        {

          const {votingpower}=action.payload
          return {
            ...state,
            loading: loadingReducer(state.loading, action),
            data: {
              ...state.data,
              vp:votingpower
            }
            
              
            
          }
        }
      case FETCH_VOTES_SUCCESS:{
        return {
          ...state,
          loading:loadingReducer(state.loading,action),
          data:{
            ...state.data,
            votes:action.payload.votesRes
          }
        }
      }
      case CAST_VOTE_SUCCESS:{
        return {
          ...state,
          loading:loadingReducer(state.loading,action),
        
        }
      }

      
    
    
   
   
    

    default:
      return state
  }
}
