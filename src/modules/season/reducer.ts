import {
  LoadingState,
  loadingReducer
} from 'decentraland-dapps/dist/modules/loading/reducer'
import {
  FetchTransactionSuccessAction,
  FETCH_TRANSACTION_SUCCESS
} from 'decentraland-dapps/dist/modules/transaction/actions'

import { Authorizations, Address,Rewards, Reward, SeasonID } from './types'
import {
  ChangeSeasonIDRequestAction,
  ChangeSeasonIDSuccessAction,
  ChangeSeasonIDFailureAction,

  CHANGE_SEASONID_REQUEST,
  CHANGE_SEASONID_SUCCESS,
  CHANGE_SEASONID_FAILURE,

} from './actions'

export type SeasonState = {
  data: number
  loading: LoadingState
  error: string | null
}

const INITIAL_STATE = {
  data: 2,
  loading: [],
  error: null
}


type SeasonReducerAction =
  | ChangeSeasonIDRequestAction
  | ChangeSeasonIDSuccessAction
  | ChangeSeasonIDFailureAction
  
  

export function seasonReducer(
  state: SeasonState = INITIAL_STATE,
  action: SeasonReducerAction
) {
  switch (action.type) {
    case CHANGE_SEASONID_REQUEST: {
      return {
        ...state,
        loading: loadingReducer(state.loading, action)
      }
    }
    case CHANGE_SEASONID_SUCCESS: {
      const { seasonID } = action.payload
     


     
      
           
      return {
        loading: loadingReducer(state.loading, action),
        error: null,
        data: seasonID
      }
    }
    case CHANGE_SEASONID_FAILURE: {
      return {
        ...state,
        loading: loadingReducer(state.loading, action),
        error: action.payload.error
      }
    }
    
    default:
      return state
  }
}
