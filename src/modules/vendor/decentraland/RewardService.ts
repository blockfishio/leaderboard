

import { RewardService as RewardServiceInterface } from '../services'
// import { Vendors } from '../types'
import { rankAPI } from './rank/api'
import { RankFetchParams, Ranking, UserRankFetchParams } from '../../rank/types'
import { ContractFactory } from '../../contract/ContractFactory'
import { Reward } from '../../../contracts/Reward'
import { ContractService } from './ContractService'
import { ChainId } from '../../contract/types'
import { Address } from 'web3x-es/address'




export class RewardService implements RewardServiceInterface {
  async claim (seasonID: number,chainId:ChainId,
    fromAddress:string){
    const reward=await ContractFactory.build(
      Reward,
      ContractService.contractAddressesAll[chainId].Reward
    )
    if (!fromAddress) {
      throw new Error('Invalid address. Wallet must be connected.')
    }
    const from=Address.fromString(fromAddress)

    return reward.methods.claim(seasonID).send({from}).getTxHash()
  }

  async userReward (seasonID: number, chainId:ChainId, fromAddress: string) {
    const reward=await ContractFactory.build(
      Reward,
      ContractService.contractAddressesAll[chainId].Reward
    )
    if (!fromAddress) {
      throw new Error('Invalid address. Wallet must be connected.')
    }
    const from=Address.fromString(fromAddress)
    return reward.methods.userRewards(seasonID,from).call()
  }

  async getSeasons(chainId:ChainId)  {
    const reward=await ContractFactory.build(
      Reward,
      ContractService.contractAddressesAll[chainId].Reward
    )
    return reward.methods.getSeasons().call()
  }
  
  async getSeasonRewardStartTime(seasonID:number,chainId:ChainId) {
    const reward=await ContractFactory.build(
      Reward,
      ContractService.contractAddressesAll[chainId].Reward
    )
    return reward.methods.seasonRewardStartTime(seasonID).call()
  }

  async getUserNextRewardTime(seasonID:number,chainId:ChainId,fromAddress:string) {
    const reward=await ContractFactory.build(
      Reward,
      ContractService.contractAddressesAll[chainId].Reward
    )
    if (!fromAddress) {
      throw new Error('Invalid address. Wallet must be connected.')
    }
    const from=Address.fromString(fromAddress)

    return reward.methods.nextRewardTime(seasonID,from).call()
  }


}
