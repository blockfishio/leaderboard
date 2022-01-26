

import { VoteService as VoteServiceInterface } from '../services'
import { voteAPI } from './vote/api'
import { Proposal, Vote } from '../../proposal/types'
import { VotingPower } from '../../vote/reducer'
import snapshot from '@snapshot-labs/snapshot.js';



export class VoteService implements VoteServiceInterface {
 
 async getVotingpower (address: string, blockNumber: string){
    const space='space2025.eth'
    const strategies = [
      {
        name: 'erc20-balance-of',
        params: {
          address: '0x13A637026dF26F846D55ACC52775377717345c06',
          symbol: 'DAI',
          decimals: 18
        }
      }
    ];
   const network='56'
   const voters=[address]
   const remoteVotingpower:VotingPower[]=await snapshot.utils.getScores(
    space,
    strategies,
    network,
    voters,
    blockNumber
  )


return remoteVotingpower[0]

}

async getAllVotes(proposalId:string){
  const remoteVotes:Vote[]=await voteAPI.getAllVotes(proposalId)
  return remoteVotes
}

  

  

}
