

export type RankFetchParams = {

  seasonID:number,
  topN:number

}


export type UserRankFetchParams = {
    seasonID:number,
    address:string
  
  }

  export type Ranking = {
    Rank:number
    Address:string
    Username:string
    Score:number
    BestWave:number
    
  }

  export type RankFetchOptions = {
   
    params: RankFetchParams
  }
  