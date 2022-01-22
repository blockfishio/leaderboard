import { ContractService } from './ContractService'

import { RankService} from './RankService'
import {RewardService} from './RewardService'
import {ProposalService} from './ProposalService'

export * from './routing'

export * from './ContractService'
export * from './RewardService'
export * from './ProposalService'


export const services = {
  ContractService,
 RewardService,
  RankService,
  ProposalService
}
