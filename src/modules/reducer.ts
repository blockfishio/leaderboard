import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import { History } from 'history'
import { walletReducer as wallet } from 'decentraland-dapps/dist/modules/wallet/reducer'
import { translationReducer as translation } from 'decentraland-dapps/dist/modules/translation/reducer'
import { storageReducer as storage } from 'decentraland-dapps/dist/modules/storage/reducer'
import { transactionReducer as transaction } from 'decentraland-dapps/dist/modules/transaction/reducer'
import { profileReducer as profile } from 'decentraland-dapps/dist/modules/profile/reducer'

import { routingReducer as routing } from './routing/reducer'
import {rankingReducer as ranking} from './rank/reducer'
import { rewardReducer as reward } from './reward/reducer'
import { proposalReducer as proposal } from './proposal/reducer'
import { voteReducer as vote } from './vote/reducer'




export const createRootReducer = (history: History) =>
  combineReducers({
  
    profile,
   routing,
    router: connectRouter(history),
    storage,
    transaction,
    translation,
    wallet,
    ranking,
    proposal,
    vote,
    reward
  })

export type RootState = ReturnType<ReturnType<typeof createRootReducer>>
