import request ,{gql}from 'graphql-request'
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

  getProposals = async (first = 5, skip = 0) => {
    const response: { proposals:any } = await request(
      "https://hub.snapshot.org/graphql",
      gql`
        query getProposals($first: Int!, $skip: Int!) {
          proposals(
            first: $first
            skip: $skip
            orderBy: "end"
            orderDirection: desc
            where: { space_in: "space2025.eth", }
          ) {
            id
            title
            body
            choices
            state
            start
            end
            snapshot
            author
            space {
              id
              name
            }
          }
        }
      `,
      { first, skip, },
    )
    return response.proposals
  }
  
  

  

  

}





export const rankAPI = new RankingAPI()
