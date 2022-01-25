

import { ProposalService as ProposalServiceInterface } from '../services'
import { proposalAPI } from './proposal/api'
import { Proposal, Vote } from '../../proposal/types'



export class ProposalService implements ProposalServiceInterface {
 
async getProposals(){
  const remoteProposals:Proposal[]=await proposalAPI.getProposals()
  return remoteProposals
}

async getProposal(proposalId:string){
  const remoteProposal:Proposal=await proposalAPI.getProposal(proposalId)
  return remoteProposal
}
  
async getAllVotes(proposalId:string){
  const remoteVotes:Vote[]=await proposalAPI.getAllVotes(proposalId)
  return remoteVotes
}

  

  

}
