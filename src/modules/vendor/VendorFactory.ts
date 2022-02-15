import { services as decentraland } from './decentraland'

import { ContractService, RewardService } from './services'
import { Vendors } from './types'

export class VendorFactory {
    static build(vendor: Vendors) {
        switch (vendor) {
            case Vendors.DECENTRALAND:
                return new Vendor<Vendors.DECENTRALAND>(
                    vendor,
                    new decentraland.ContractService()
                )

            default:
                throw new Error(`Invalid vendor "${vendor}"`)
        }
    }
}

export class Vendor<V extends Vendors> {
    constructor(public type: V, public contractService: ContractService) {}
}
