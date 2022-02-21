import { Proposal  } from "./types"
// ProposalsFetchParams
export function getProposal(
    
    proposalId: string | null,
    proposals: Record<string, Proposal>
  ): Proposal | null {
    if (!proposalId) {
      return null
    }
  
    return proposalId in proposals ?proposals[proposalId] : null
  }


export function getDayFromNow(date:number):number{
  // console.log(Date.now())
  // console.log(date)
  const day = Math.max(date*1000 - Date.now(), 0) / (24 * 3600 * 1000)

  return Math.floor(day)
}

  // export function getProposalsFetchParams(
  //   start
  // )