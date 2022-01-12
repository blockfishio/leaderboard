


import { ChainId } from '../contract/types';
import { RankFetchParams, Ranking, UserRankFetchParams } from '../rank/types';
import { TransferType } from './types'




export interface RankService{
  topNRanking:(
    params:RankFetchParams
  )=>Promise<readonly [Ranking[]]>
  userRanking:(
    params:UserRankFetchParams
  )=>Promise< Ranking>
}

export interface ContractService {
  contractAddresses: Record<string, string>
  contractAddressesAll: Record<string, Record<string, string>>
  contractSymbols: Record<string, string>
  contractSymbolsAll: Record<string, Record<string, string>>
  contractNames: Record<string, string>
  contractNamesAll: Record<string, Record<string, string>>
  contractCategoriesAll: Record<string, Record<string, string>>

  getTransferType: (address: string) => TransferType
}
export class ContractService { }



export interface RewardService {
  userReward:(seasonID:number,
    chainId:ChainId,
    useraddress:string)=>Promise<string>
  getSeasons:(chainId:ChainId)=>Promise<number[]>
  claim:(seasonID:number,chainId:ChainId,useraddress:string)=>Promise<string>
  getSeasonRewardStartTime:(seasonID:number,
    chainId:ChainId,
    )=>Promise<number>
    getUserNextRewardTime:(seasonID:number,
      chainId:ChainId,
      useraddress:string)=>Promise<number>
}


export interface ClaimMetamarsService {
  claim: (amount: number,
    fromAddress: string
  ) => Promise<string>
  deposit: (amount: number,
    fromAddress: string
  ) => Promise<string>

}
