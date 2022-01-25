import {
  LoadingState,
  loadingReducer
} from 'decentraland-dapps/dist/modules/loading/reducer'

import { Proposal } from './types'
import {

 FetchProposalsRequestAction,
 FetchProposalsSuccessAction,
 FetchProposalsFailureAction,
 FETCH_PROPOSALS_REQUEST,
 FETCH_PROPOSALS_SUCCESS,
 FETCH_PROPOSALS_FAILURE,
 FetchProposalRequestAction,
 FetchProposalSuccessAction,
 FetchProposalFailureAction,
 FETCH_PROPOSAL_REQUEST,
 FETCH_PROPOSAL_SUCCESS,
 FETCH_PROPOSAL_FAILURE,
 FetchVotesRequestAction,
 FetchVotesSuccessAction,
 FetchVotesFailureAction,
 FETCH_VOTES_REQUEST,
 FETCH_VOTES_SUCCESS,
 FETCH_VOTES_FAILURE


} from './actions'



export type Proposals={
  proposals:Record<string,Proposal>,
}
export type ProposalState = {
  data: Record<string,Proposal>
  loading: LoadingState
  error: string | null
}

const INITIAL_STATE = {
  loading: [],
  data: {
    
  },
  error: null
}

type ProposalReducerAction =
  | FetchProposalsRequestAction
  | FetchProposalsSuccessAction
  | FetchProposalsFailureAction
  | FetchProposalRequestAction
  | FetchProposalSuccessAction
  | FetchProposalFailureAction
  | FetchVotesRequestAction
  | FetchVotesSuccessAction
  | FetchVotesFailureAction
  

export function proposalReducer(
  state: ProposalState = INITIAL_STATE,
  action: ProposalReducerAction
): ProposalState {
  switch (action.type) {
    case FETCH_PROPOSALS_REQUEST:
    case FETCH_PROPOSAL_REQUEST:
    case FETCH_VOTES_REQUEST:
      {
        return {
          ...state,
          loading: loadingReducer(state.loading, action)
        }
      }
    case FETCH_PROPOSALS_FAILURE:
    case FETCH_PROPOSAL_FAILURE:
    case FETCH_VOTES_FAILURE:
      {
        return {
          ...state,
          loading: loadingReducer(state.loading, action),
          error: action.payload.error
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
    case FETCH_PROPOSAL_SUCCESS: {
      const {proposal}=action.payload
      console.log(proposal)
      return {
        ...state,
        loading: loadingReducer(state.loading, action),
        data: {
          ...state.data,
          [action.payload.proposal.id]:action.payload.proposal
        }
      }
    }
   
    

    default:
      return state
  }
}