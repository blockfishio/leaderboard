import { createSelector } from 'reselect'
import { createMatchSelector } from 'connected-react-router'
import { locations } from '../routing/locations'
import { RootState } from '../reducer'


export const getState = (state: RootState) => state.proposal
export const getData = (state: RootState) => getState(state).data
export const getLoading = (state: RootState) => getState(state).loading
export const getError = (state: RootState) => getState(state).error

const proposalDetailMatchSelector = createMatchSelector<
  RootState,
  {
    
    proposalId: string
  }
>(locations.proposal( ':proposalId'))



export const getProposalId = createSelector<
  RootState,
  ReturnType<typeof proposalDetailMatchSelector>,
  string | null
>(proposalDetailMatchSelector, match => match?.params.proposalId || null)




