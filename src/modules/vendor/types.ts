import * as decentraland from './decentraland'


// TODO: Rename to Vendor
export enum Vendors {
  DECENTRALAND = 'spacey2025',

}

export const Disabled = {}

export type ContractName =
  | decentraland.ContractName


export enum TransferType {
  SAFE_TRANSFER_FROM = 0,
  TRANSFER_FROM = 1,
  TRANSFER = 2
}
