


import { TransferType } from './types'






export interface ContractService {
  contractAddresses: Record<string, string>
  contractAddressesAll: Record<string, Record<string, string>>
  contractSymbols: Record<string, string>
  contractSymbolsAll: Record<string, Record<string, string>>
  contractNames: Record<string, string>
  contractNamesAll: Record<string, Record<string, string>>
  contractCategoriesAll: Record<string, Record<string, string>>

  getTransferType: (address: string) => TransferType
}
export class ContractService { }






export interface ClaimMetamarsService {
  claim: (amount: number,
    fromAddress: string
  ) => Promise<string>
  deposit: (amount: number,
    fromAddress: string
  ) => Promise<string>

}
