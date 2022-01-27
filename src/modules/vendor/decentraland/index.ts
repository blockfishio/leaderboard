import { ContractService } from './ContractService'

import { RankService} from './RankService'
import {RewardService} from './RewardService'
import {ProposalService} from './ProposalService'
import {VoteService} from './VoteService'


export * from './routing'

export * from './ContractService'
export * from './RewardService'
export * from './ProposalService'
export * from './VoteService'



export const services = {
  ContractService,
 RewardService,
  RankService,
  ProposalService,
  VoteService
}
