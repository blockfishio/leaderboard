

import { VoteService as VoteServiceInterface } from '../services'
import { voteAPI } from './vote/api'
import { Vote } from '../../vote/types'
import { VotingPower } from '../../vote/reducer'
import snapshot from '@snapshot-labs/snapshot.js';
import { Proposal } from '../../proposal/types';


type strategy=
{
  name:string,
  params:{
    address:string,
    symbol:string,
    decimals?:number
  }
}
export class VoteService implements VoteServiceInterface {

  
 async getUserVotingpower (address: string, blockNumber: string|undefined){
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
   const voters=[address]
   const remoteVotingpower:VotingPower[]=await snapshot.utils.getScores(
    space,
    strategies,
    network,
    voters,
    blockNumber?parseInt(blockNumber):undefined
  )

 const res:VotingPower[]=this.parseVotingPower(strategies,remoteVotingpower,address)


return res

}

async getAllVotes(proposal:Proposal){
  const remoteVotes:Record<string,Vote>=await voteAPI.getAllVotes(proposal)
  return remoteVotes
}

parseVotingPower(strategies:strategy[],remoteVotingPower: VotingPower[],voteraddress:string){
  const res:VotingPower[]=[]
  

  strategies.map(
    (strategy,index)=>{
      
      const singleRemoteVotingPower=remoteVotingPower[index]
      for (const key of Object.keys(singleRemoteVotingPower)){
        if (key.toLowerCase()==voteraddress){
          res.push({
            [strategy.name]:singleRemoteVotingPower[key]
          })
          return
        }
      }
      
    }
  )
  return res
}

  

  

}
