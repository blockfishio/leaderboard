import { createSelector } from 'reselect'
import { createMatchSelector } from 'connected-react-router'
import { locations } from '../routing/locations'
import { RootState } from '../reducer'


export const getState = (state: RootState) => state.ranking
export const getData = (state: RootState) => getState(state).data
export const getLoading = (state: RootState) => getState(state).loading
export const getError = (state: RootState) => getState(state).error

const nftDetailMatchSelector = createMatchSelector<
  RootState,
  {
    contractAddress: string
    tokenId: string
  }
>(locations.nft(':contractAddress', ':tokenId'))

export const getContractAddress = createSelector<
  RootState,
  ReturnType<typeof nftDetailMatchSelector>,
  string | null
>(nftDetailMatchSelector, match => match?.params.contractAddress || null)

export const getTokenId = createSelector<
  RootState,
  ReturnType<typeof nftDetailMatchSelector>,
  string | null
>(nftDetailMatchSelector, match => match?.params.tokenId || null)

const assetDetailMatchSelector = createMatchSelector<
  RootState,
  {
    optionId: string
  }
>(locations.asset(':optionId'))

const ownerassetDetailMatchSelector = createMatchSelector<
  RootState,
  {
    optionId: string
  }
>(locations.ownerasset(':optionId'))

export const getOptionId = createSelector<
  RootState,
  ReturnType<typeof assetDetailMatchSelector>,
  string | null
>(assetDetailMatchSelector, match => match?.params.optionId || null)

export const getOwnerAssetOptionId = createSelector<
  RootState,
  ReturnType<typeof ownerassetDetailMatchSelector>,
  string | null
>(ownerassetDetailMatchSelector, match => match?.params.optionId || null)

