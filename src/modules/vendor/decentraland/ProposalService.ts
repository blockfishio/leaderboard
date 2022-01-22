

import { ProposalService as ProposalServiceInterface } from '../services'
import { proposalAPI } from './proposal/api'
import { Proposal } from '../../proposal/types'



export class ProposalService implements ProposalServiceInterface {
 
async getProposals(){
  const remoteProposals:Proposal[]=await proposalAPI.getProposals()
  return remoteProposals
}

async getProposal(proposalId:string){
  const remoteProposal:Proposal=await proposalAPI.getProposal(proposalId)
  return remoteProposal
}
  

  

  

}
