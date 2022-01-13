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
  FetchRewardRequestAction,
  FetchRewardSuccessAction,
  FetchRewardFailureAction,
  ClaimRewardRequestAction,
  ClaimRewardSuccessAction,
  ClaimRewardFailureAction,
  FETCH_REWARD_REQUEST,
  FETCH_REWARD_SUCCESS,
  FETCH_REWARD_FAILURE,
  CLAIM_REWARD_REQUEST,
  CLAIM_REWARD_SUCCESS,
  CLAIM_REWARD_FAILURE,
  fetchRewardSuccess,
  fetchRewardFailure,
  claimRewardSuccess,
  claimRewardFailure,
} from './actions'

export type RewardState = {
  data: Record<string, Rewards>
  loading: LoadingState
  error: string | null
}

const INITIAL_STATE = {
  data: {},
  loading: [],
  error: null
}
export const EMPTY_ADDRESS_STATE: Rewards = {
  claimable:{},
  remaining:{},
  total:{}
}

type RewardReducerAction =
  | FetchRewardRequestAction
  | FetchRewardSuccessAction
  | FetchRewardFailureAction
  | ClaimRewardRequestAction
  | ClaimRewardSuccessAction
  | ClaimRewardFailureAction
  
  

export function rewardReducer(
  state: RewardState = INITIAL_STATE,
  action: RewardReducerAction
) {
  switch (action.type) {
    case FETCH_REWARD_REQUEST: {
      return {
        ...state,
        loading: loadingReducer(state.loading, action)
      }
    }
    case FETCH_REWARD_SUCCESS: {
      const { address, rewards } = action.payload
      const addressState = state.data[address] || EMPTY_ADDRESS_STATE


      const claimable={...addressState.claimable}
      const remaining={...addressState.remaining}
      const total={...addressState.total}


      let season:SeasonID
      for(season in rewards.claimable){
       claimable[season]=rewards.claimable[season]
       }
       for(season in rewards.remaining){
        remaining[season]=rewards.remaining[season]
        }
        for(season in rewards.remaining){
          total[season]=rewards.total[season]
          }
        
      
           
      return {
        loading: loadingReducer(state.loading, action),
        error: null,
        data: {
          ...state.data,
          [address]: {claimable,remaining,total}
        }
      }
    }
    case FETCH_REWARD_FAILURE: {
      return {
        ...state,
        loading: loadingReducer(state.loading, action),
        error: action.payload.error
      }
    }
    // case FETCH_TRANSACTION_SUCCESS: {
    //   const transaction = action.payload.transaction

    //   switch (transaction.actionType) {
    //     case ALLOW_TOKEN_SUCCESS: {
    //       const {
    //         address,
    //         isAllowed,
    //         contractAddress,
    //         tokenContractAddress
    //       } = transaction.payload
    //       const addressState = state.data[address] || EMPTY_ADDRESS_STATE

    //       const allowances = {
    //         ...addressState.allowances,
    //         [contractAddress]: {
    //           ...addressState.allowances[contractAddress],
    //           [tokenContractAddress]: isAllowed
    //         }
    //       }

    //       return {
    //         ...state,
    //         data: {
    //           ...state.data,
    //           [address]: {
    //             ...addressState,
    //             allowances
    //           }
    //         }
    //       }
    //     }
    //     case APPROVE_TOKEN_SUCCESS: {
    //       const {
    //         address,
    //         isApproved,
    //         contractAddress,
    //         tokenContractAddress
    //       } = transaction.payload
    //       const addressState = state.data[address] || EMPTY_ADDRESS_STATE

    //       const approvals = {
    //         ...addressState.approvals,
    //         [contractAddress]: {
    //           ...addressState.approvals[contractAddress],
    //           [tokenContractAddress]: isApproved
    //         }
    //       }

    //       return {
    //         ...state,
    //         data: {
    //           ...state.data,
    //           [address]: {
    //             ...addressState,
    //             approvals
    //           }
    //         }
    //       }
    //     }
    //     default:
    //       return state
    //   }
    // }
    default:
      return state
  }
}
