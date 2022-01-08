
import { API_VIRTUAL_URL } from '../api'

import { RankFetchParams, UserRankFetchParams } from '../../../rank/types'

class RankingAPI {
  topNRanking = async (params: RankFetchParams) => {
    const rankingsArray = await fetch(API_VIRTUAL_URL + `/ranking/${params.seasonID}/${params.topN}`, {
      method: "GET",
      headers: {
        "Accept": "application/json"
      }
    }).then(response => {
      return response.json()
    })
    return rankingsArray
  }
  userRanking = async (params: UserRankFetchParams) => {
    const ranking = await fetch(API_VIRTUAL_URL + `/userranking/${params.seasonID}/${params.address}`, {
      method: "GET",
      headers: {
        "Accept": "application/json"
      }
    }).then(response => {
      return response.json()
    })
    return ranking
  }
  

  

  

}





export const rankAPI = new RankingAPI()
