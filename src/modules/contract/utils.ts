import { VendorFactory } from '../vendor/VendorFactory'
import { ContractService } from '../vendor/services'
import { ContractName, Vendors } from '../vendor/types'

export let contractAddresses: ContractService['contractAddresses']
export let contractAddressesAll: ContractService['contractAddressesAll']

export let contractSymbols: ContractService['contractSymbols']
export let contractSymbolsAll: ContractService['contractSymbolsAll']
export let contractNames: ContractService['contractNames']
export let contractNamesAll: ContractService['contractNamesAll']
export let contractCategoriesAll: ContractService['contractCategoriesAll']
export let contractVendors: Record<string, Vendors>

export function buildContracts() {
  const vendors = Object.values(Vendors).map(VendorFactory.build)
  contractAddressesAll = vendors[0].contractService.contractAddressesAll
  contractSymbolsAll = vendors[0].contractService.contractSymbolsAll
  contractNamesAll = vendors[0].contractService.contractNamesAll
  contractCategoriesAll = vendors[0].contractService.contractCategoriesAll

  contractAddresses = vendors.reduce(
    (obj, { contractService }) => ({
      ...obj,
      ...contractService.contractAddresses
    }),
    {} as ContractService['contractAddresses']
  ) as Record<ContractName, string>

  contractSymbols = vendors.reduce(
    (obj, { contractService }) => ({
      ...obj,
      ...contractService.contractSymbols
    }),
    {} as ContractService['contractSymbols']
  )

  contractNames = vendors.reduce(
    (obj, { contractService }) => ({
      ...obj,
      ...contractService.contractNames
    }),
    {} as ContractService['contractNames']
  )

  

  contractVendors = {}
  for (const { type, contractService } of vendors) {
    const addresses: string[] = Object.values(contractService.contractAddresses)
    for (const address of addresses) {
      contractVendors[address] = type as Vendors
    }
  }
}
