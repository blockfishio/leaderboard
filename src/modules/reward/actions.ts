import { action } from 'typesafe-actions'
import { ChainId } from '@dcl/schemas'
import { buildTransactionPayload } from 'decentraland-dapps/dist//modules/transaction/utils'
import { Authorizations,
   AuthorizationsRequest,
    Address,
    Reward
   } from './types'

// Fetch authorization

export const FETCH_REWARD_REQUEST = '[Request] Fetch Reward'
export const FETCH_REWARD_SUCCESS = '[Success] Fetch Reward'
export const FETCH_REWARD_FAILURE = '[Failure] Fetch Reward'

export const fetchRewardRequest = (
  seasonID:number
) => action(FETCH_REWARD_REQUEST, {  seasonID})

export const fetchRewardSuccess = (
  address: string,
  reward: Reward
) => action(FETCH_REWARD_SUCCESS, { address, reward })

export const fetchRewardFailure = (error: string) =>
  action(FETCH_REWARD_FAILURE, { error })

export type FetchRewardRequestAction = ReturnType<
  typeof fetchRewardRequest
>
export type FetchRewardSuccessAction = ReturnType<
  typeof fetchRewardSuccess
>
export type FetchRewardFailureAction = ReturnType<
  typeof fetchRewardFailure
>

// Approve Token

export const CLAIM_REWARD_REQUEST = '[Request] Claim Reward'
export const CLAIM_REWARD_SUCCESS = '[Success] Claim Reward'
export const CLAIM_REWARD_FAILURE = '[Failure] Claim Reward'

export const claimRewardRequest = (
  isAllowed: boolean,
  contractAddress: Address,
  tokenContractAddress: Address
) =>
  action(CLAIM_REWARD_REQUEST, {
    isAllowed,
    contractAddress,
    tokenContractAddress
  })

export const claimRewardSuccess = (
  chainId: ChainId,
  txHash: string,
  address: string,
  isAllowed: boolean,
  contractAddress: Address,
  tokenContractAddress: Address
) =>
  action(CLAIM_REWARD_SUCCESS, {
    ...buildTransactionPayload(chainId, txHash, {
      address,
      isAllowed,
      contractAddress,
      tokenContractAddress
    }),
    address,
    isAllowed,
    contractAddress,
    tokenContractAddress
  })

export const claimRewardFailure = (error: string) =>
  action(CLAIM_REWARD_FAILURE, { error })

export type ClaimRewardRequestAction = ReturnType<typeof claimRewardRequest>
export type ClaimRewardSuccessAction = ReturnType<typeof claimRewardSuccess>
export type ClaimRewardFailureAction = ReturnType<typeof claimRewardFailure>


