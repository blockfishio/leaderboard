import request ,{gql}from 'graphql-request'
import { API_VIRTUAL_URL } from '../api'

import { RankFetchParams, UserRankFetchParams } from '../../../rank/types'
import { Proposal, Vote, VoteWhere } from '../../../proposal/types'

class ProposalAPI {
  

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
  
  
  getProposal = async (id: string): Promise<Proposal> => {
    const response: { proposal: Proposal } = await request(
      "https://hub.snapshot.org/graphql",
      gql`
        query getProposal($id: String) {
          proposal(id: $id) {
            id
            title
            body
            choices
            start
            end
            snapshot
            state
            author
            space {
              id
              name
            }
          }
        }
      `,
      { id },
    )
    if (response.proposal==null){
        throw new Error('Not found')
    }
    return response.proposal
  }

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
    console.log(proposalId)
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





export const proposalAPI = new ProposalAPI()