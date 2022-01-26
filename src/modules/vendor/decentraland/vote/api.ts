import request ,{gql}from 'graphql-request'
import { API_VIRTUAL_URL } from '../api'

import { RankFetchParams, UserRankFetchParams } from '../../../rank/types'
import { Proposal, Vote, VoteWhere } from '../../../proposal/types'

class VoteAPI {
  

  
  


  getVotes = async (first: number, skip: number, where: VoteWhere) => {
    const response: { votes:Vote[] } = await request(
      "https://hub.snapshot.org/graphql",
      gql`
        query getVotes($first: Int, $skip: Int, $where: VoteWhere) {
          votes(first: $first, skip: $skip, where: $where) {
            id
            voter
            created
            choice
            space {
              id
              name
            }
            proposal {
              choices
            }
            metadata
          }
        }
      `,
      { first, skip, where },
    )
    return response.votes
  }





  getAllVotes = async (proposalId: string, block?: number, votesPerChunk = 1000):Promise<Vote[]> => {
    // const blockNumber = block || (await simpleRpcProvider.getBlockNumber())
    return new Promise((resolve, reject) => {
      let votes:Vote[] = []
  
      const fetchVoteChunk = async (newSkip: number) => {
        try {
          const voteChunk = await this.getVotes(votesPerChunk, newSkip, { proposal: proposalId })
  
          if (voteChunk.length === 0) {
            resolve(votes)
          } else {
            votes = [...votes, ...voteChunk]
            fetchVoteChunk(newSkip + votesPerChunk)
          }
        } catch (error) {
          reject(error)
        }
      }
  
      fetchVoteChunk(0)
    })
  }
  

  

}





export const voteAPI = new VoteAPI()
