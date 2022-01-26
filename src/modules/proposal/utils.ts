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


  // export function getProposalsFetchParams(
  //   start
  // )