import { services as decentraland } from './decentraland'

import {
  ContractService,
 RankService,
 RewardService,
 ProposalService,
 VoteService
} from './services'
import { Vendors } from './types'

export class VendorFactory {
  static build(vendor: Vendors) {
    switch (vendor) {
      case Vendors.DECENTRALAND:
        return new Vendor<Vendors.DECENTRALAND>(
          vendor,
          new decentraland.ContractService(),
          new decentraland.RewardService(),
          new decentraland.RankService(),
          new decentraland.ProposalService(),
          new decentraland.VoteService(),
          
        )

      default:
        throw new Error(`Invalid vendor "${vendor}"`)
    }
  }
}

export class Vendor<V extends Vendors> {
  constructor(
    public type: V,
    public contractService: ContractService,
    public rewardService?:RewardService, 
    public rankService?:RankService,
    public proposalService?: ProposalService,
    public voteService?:VoteService

  ) { }
}
