import { createSelector } from 'reselect'
import { isPending } from 'decentraland-dapps/dist/modules/transaction/utils'
import { Transaction } from 'decentraland-dapps/dist/modules/transaction/types'
import { RootState } from '../reducer'
// import { getTransactionsByType } from '../transaction/selectors'
import { getAddress } from '../wallet/selectors'
import { SeasonState } from './reducer'
import { Authorizations } from './types'

export const getState = (state: RootState) => state.season
export const getData = (state: RootState) => getState(state).data
export const getLoading = (state: RootState) => getState(state).loading
export const isLoading = (state: RootState) => getLoading(state).length > 0
export const getError = (state: RootState) => getState(state).error



// export const getAuthorizations = createSelector<
//   RootState,
//   RewardState['data'],
//   string | undefined,
//   Authorizations
// >(getData, getAddress, (data, address) =>
//   address && address in data ? data[address] : EMPTY_ADDRESS_STATE
// )


