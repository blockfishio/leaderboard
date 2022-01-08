

import { RankService as RankServiceInterface } from '../services'
// import { Vendors } from '../types'
import { rankAPI } from './rank/api'
import { RankFetchParams, Ranking, UserRankFetchParams } from '../../rank/types'



export class RankService implements RankServiceInterface {
  async topNRanking (params: RankFetchParams) {
      const remoteRankings=await rankAPI.topNRanking(params)
      const rankings:Ranking[] = []
      for (const remoteRanking of remoteRankings.Rankings) {
        // const ranking = this.toRanking(remoteRanking)
  
  
        rankings.push(remoteRanking)
      }
      
      return [rankings] as const
  }
  // toRanking(asset: AssetFragment): Ranking {
  //   return {
  //     Category: asset.Category,
  //     ImageURL: asset.ImageURL,
  //     Price: asset.Price,
  //     PriceUnit: asset.PriceUnit,
  //     OptionID: asset.OptionID,
  //     Count: asset.Count

  //   }
  // }

  async userRanking (params: UserRankFetchParams) {
    
    const remoteRanking:any=await rankAPI.userRanking(params)
     
    const ranking:Ranking={
      Rank:remoteRanking.Ranking,
      Address:"",
      Username:remoteRanking.Username,
      Score:remoteRanking.Score,
      BestWave:remoteRanking.BestWave
    }
    return ranking



  }


  

  

  

}
