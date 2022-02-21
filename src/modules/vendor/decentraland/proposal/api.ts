import request ,{gql}from 'graphql-request'
import { API_VIRTUAL_URL } from '../api'

import { RankFetchParams, UserRankFetchParams } from '../../../rank/types'
import { Proposal,VoteWhere } from '../../../proposal/types'
import {Vote} from '../../../vote/types'

const SNAPSHOT_GRAPHQL_URL=process.env.REACT_APP_SNAPSHOT_GRAPHQL_URL || ''

class ProposalAPI {
  

  getProposals = async (first = 5, skip = 0,state='') => {
    // console.log(SNAPSHOT_GRAPHQL_URL)
    // console.log(process.env)
    const response: { proposals:any } = await request(
      SNAPSHOT_GRAPHQL_URL,
      gql`
        query getProposals($first: Int!, $skip: Int!,$state:String!) {
          proposals(
            first: $first
            skip: $skip
            orderBy: "end"
            orderDirection: desc
            where: { space_in: "space2025.eth",state:$state,created_gte:1644968278
 }
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
      { first, skip, state},
    )
    return response.proposals
  }
  
  
  getProposal = async (id: string): Promise<Proposal> => {
    const response: { proposal: Proposal } = await request(
      SNAPSHOT_GRAPHQL_URL,
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
