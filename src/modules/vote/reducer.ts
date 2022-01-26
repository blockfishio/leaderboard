import {
  LoadingState,
  loadingReducer
} from 'decentraland-dapps/dist/modules/loading/reducer'

import { Proposal } from './types'
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


} from './actions'



export type VotingPower=
  Record<string,number>
export type VoteState = {
  data: VotingPower
  loading: LoadingState
  error: string | null
}

const INITIAL_STATE = {
  loading: [],
  data: {
    
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

  

export function voteReducer(
  state: VoteState = INITIAL_STATE,
  action: VoteReducerAction
): VoteState {
  switch (action.type) {
    
    case FETCH_VOTINGPOWER_REQUEST:
    case FETCH_VOTES_REQUEST:
      {
        return {
          ...state,
          loading: loadingReducer(state.loading, action)
        }
      }
    
    case FETCH_VOTINGPOWER_FAILURE:
    case FETCH_VOTES_FAILURE:
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
            data: 
             votingpower
            
              
            
          }
        }
    
    
   
   
    

    default:
      return state
  }
}
