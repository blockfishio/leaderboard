import { Vote } from "../proposal/types"
import { Proposal } from "./types"

export function getProposal(
    
    proposalId: string | null,
    proposals: Record<string, Proposal>
  ): Proposal | null {
    if (!proposalId) {
      return null
    }
  
    return proposalId in proposals ?proposals[proposalId] : null
  }

export function getVPSum(
  votes:Vote[]
):Record<number,string>{
  

  const res:Record<number,string>={}

  votes.forEach((vote)=>{
    const {choice}=vote
    let accum=0.0
    if (res[choice]!==undefined){
       accum=parseFloat(res[choice])
    }
    
    
  })



  return res
}