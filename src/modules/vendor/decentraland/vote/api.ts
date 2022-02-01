import request ,{gql}from 'graphql-request'

import { Proposal, Vote, VoteWhere } from '../../../vote/types'
import snapshot from '@snapshot-labs/snapshot.js';
import { VotingPower } from '../../../vote/reducer';

class VoteAPI {
  

  
  


  getVotes = async (proposal:Proposal,first: number, skip: number, where: VoteWhere) => {
   
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
    const space='space2025.eth'
    const strategies = [
      {
        name: 'erc20-balance-of',
        params: {
          address: '0x13A637026dF26F846D55ACC52775377717345c06',
          symbol: 'SPAY',
          decimals: 18
        }
      },
        {
          name: "spacey2025",
          params: {
            address: "0x230185C3B02b897B89cb1e62717AD7772b8319DA",
            symbol: "NFT"
          }
        }
    ];
   const network='56'
   let voters=response.votes.reduce((obj, vote) => {
    obj[vote.voter]=vote
    return obj
  }, {} as Record<string,Vote>)
  let addresses=Object.keys(voters)
   const remoteVotingpowers=await snapshot.utils.getScores(
    space,
    strategies,
    network,
    addresses,
    parseInt( proposal.snapshot)
  ) 
  // console.log(remoteVotingpowers)
  for (const remoteVotingpower of remoteVotingpowers){
    for (const k of Object.keys(remoteVotingpower)){
      if (voters[k].votingpower){
        voters[k].votingpower+=remoteVotingpower[k]
      }
      else {
        voters[k].votingpower=remoteVotingpower[k]
      }
    }
  }



    return voters
  }





  getAllVotes = async (proposal: Proposal, block?: number, votesPerChunk = 1000):Promise<Record<string,Vote> > => {
    // const blockNumber = block || (await simpleRpcProvider.getBlockNumber())
    return new Promise((resolve, reject) => {
      let votes:Record<string,Vote> = {}
  
      const fetchVoteChunk = async (newSkip: number) => {
        try {
          const voteChunk = await this.getVotes(proposal, votesPerChunk, newSkip, { proposal: proposal.id })
  
          if (Object.keys(voteChunk).length==0) {
            resolve(votes)
          } else {
            votes = {...votes, ...voteChunk}
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
