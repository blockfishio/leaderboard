
import { ContractFactory } from '../../contract/ContractFactory'
import { ClaimMetamarsService as ClaimMetamarsServiceInterface } from '../services'
import { ChainId } from '../../contract/types'
import { Address } from 'web3x-es/address'


import { ClaimMetamars } from '../../../contracts/ClaimMetamars'
import { DepositGMars } from '../../../contracts/DepositGMars'
import { ContractService } from './ContractService'

export class ClaimMetamarsService implements ClaimMetamarsServiceInterface {
  async claim(amount: number,
    fromAddress: string
  ) {
    const claimMetamars = await this.getClaimMetamarsContract(ChainId.BSC_MAINNET)
    if (!fromAddress) {
      throw new Error('Invalid address. Wallet must be connected.')
    }
    const from = Address.fromString(fromAddress)
    return claimMetamars.methods
      .claimToken(
        amount
      )
      .send({ from })
      .getTxHash()
  }

  async deposit(amount: number,
    fromAddress: string
  ) {
    const depositGMars = await this.getDepositGMarsContract(ChainId.BSC_MAINNET)
    if (!fromAddress) {
      throw new Error('Invalid address. Wallet must be connected.')
    }
    const from = Address.fromString(fromAddress)
    return depositGMars.methods
      .depositGMars(
        amount
      )
      .send({ from })
      .getTxHash()
  }


  private getClaimMetamarsContract(chainId: ChainId) {
    return ContractFactory.build(
      ClaimMetamars,
      ContractService.contractAddressesAll[chainId].ClaimMetamars
    )
  }

  private getDepositGMarsContract(chainId: ChainId) {
    return ContractFactory.build(
      DepositGMars,
      ContractService.contractAddressesAll[chainId].DepositGMars
    )
  }



}
