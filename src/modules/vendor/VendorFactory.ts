import { services as decentraland } from './decentraland'

import {
  ContractService,
 RankService,
  ClaimMetamarsService
} from './services'
import { Vendors } from './types'

export class VendorFactory {
  static build(vendor: Vendors) {
    switch (vendor) {
      case Vendors.DECENTRALAND:
        return new Vendor<Vendors.DECENTRALAND>(
          vendor,
          new decentraland.ContractService(),
          new decentraland.ClaimMetamarsService(),
          new decentraland.RankService(),
          
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
  
    public claimMetamarsService?: ClaimMetamarsService,
    public rankService?:RankService
  ) { }
}
