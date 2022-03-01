import { action } from 'typesafe-actions'
import { ChainId } from '@dcl/schemas'
// import { buildTransactionPayload } from 'decentraland-dapps/dist//modules/transaction/utils'
import { Authorizations,
   AuthorizationsRequest,
    Address,
    Rewards
   } from './types'

// Change SeasonID

export const CHANGE_SEASONID_REQUEST = '[Request] Change SeasonID'
export const CHANGE_SEASONID_SUCCESS = '[Success] CHANGE_SEASONID'
export const CHANGE_SEASONID_FAILURE = '[Failure] CHANGE_SEASONID'

export const changeSeasonIDRequest = (
  seasonID:number
) => action(CHANGE_SEASONID_REQUEST, {  seasonID})

export const changeSeasonIDSuccess = (
  seasonID:number
) => action(CHANGE_SEASONID_SUCCESS, {seasonID })

export const changeSeasonIDFailure = (error: string) =>
  action(CHANGE_SEASONID_FAILURE, { error })

export type ChangeSeasonIDRequestAction = ReturnType<
  typeof changeSeasonIDRequest
>
export type ChangeSeasonIDSuccessAction = ReturnType<
  typeof changeSeasonIDSuccess
>
export type ChangeSeasonIDFailureAction = ReturnType<
  typeof changeSeasonIDFailure
>

