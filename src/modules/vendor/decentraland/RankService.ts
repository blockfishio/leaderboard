

import { RankService as RankServiceInterface } from '../services'
// import { Vendors } from '../types'
import { rankAPI } from './rank/api'
import { RankFetchParams, Ranking, UserRankFetchParams ,RankingResponse} from '../../rank/types'



export class RankService implements RankServiceInterface {
  async topNRanking (params: RankFetchParams) {
      const remoteRankings=await rankAPI.topNRanking(params)
      const proposals=await rankAPI.getProposals()
      const rankings:Ranking[] = []
      for (const remoteRanking of remoteRankings.Rankings) {
        // const ranking = this.toRanking(remoteRanking)
  
  
        rankings.push(remoteRanking)
      }
      const res:RankingResponse={
        rankings:rankings,
        totalPlayer:remoteRankings.TotalPlayers
      }

      return res
  }
 

  async userRanking (params: UserRankFetchParams) {
    
    const remoteRanking:any=await rankAPI.userRanking(params)
     
    const ranking:Ranking={
      Rank:remoteRanking.Ranking,
      Address:"",
      Username:remoteRanking.Username,
      Score:remoteRanking.Score,
      BestWave:remoteRanking.BestWave,
      Difficulty:remoteRanking.Difficulty
    }
    return ranking



  }
async getProposals(){
  const remoteProposals:string=await rankAPI.getProposals()
  return remoteProposals
}

  

  

  

}
