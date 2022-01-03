// import { NFTCategory } from '../nft/types'
// import { getSearchCategory, getSearchWearableCategory } from '../routing/search'
import { Vendors, Disabled } from './types'



export function getOriginURL(vendor: Vendors) {
  switch (vendor) {
    case Vendors.DECENTRALAND:
      return 'https://market.decentraland.org'

    default:
      throw new Error(`Base URL for ${vendor} not implemented`)
  }
}

export function isVendor(vendor: string) {
  return Object.values(Vendors).includes(vendor as Vendors)
}

export function isPartner(vendor: string) {
  return isVendor(vendor) && vendor !== Vendors.DECENTRALAND
}

export function getPartners(): Vendors[] {
  const disabledVendors = Object.values(Disabled)

  return Object.values(Vendors).filter(
    vendor => isPartner(vendor) && !disabledVendors.includes(vendor)
  )
}
