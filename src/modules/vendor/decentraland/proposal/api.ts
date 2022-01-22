import request ,{gql}from 'graphql-request'
import { API_VIRTUAL_URL } from '../api'

import { RankFetchParams, UserRankFetchParams } from '../../../rank/types'
import { Proposal } from '../../../proposal/types'

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
  

  

}





export const proposalAPI = new ProposalAPI()
