import { Eth } from 'web3x-es/eth'
import { Address } from 'web3x-es/address'
import { toBN } from 'web3x-es/utils'
import { ERC20 } from '../../contracts/ERC20'
import { ERC721 } from '../../contracts/ERC721'
import { Privileges, AuthorizationDefinition, Authorizations } from './types'



export async function callAllowance(
  eth: Eth,
  tokenContractAddress: string,
  contractAddress: string,
  walletAddress: string
) {

  const contract = new ERC20(eth, toAddress(tokenContractAddress))
  const result = await contract.methods
    .allowance(toAddress(walletAddress), toAddress(contractAddress))
    .call()
  return parseInt(result, 10)
}








export async function callIsApprovedForAll(
  eth: Eth,
  tokenContractAddress: string,
  contractAddress: string,
  walletAddress: string
) {
  const contract = new ERC721(eth, toAddress(tokenContractAddress))
  return contract.methods
    .isApprovedForAll(toAddress(walletAddress), toAddress(contractAddress))
    .call()
}

export function getTokenAmountToApprove() {
  return toBN(2).pow(toBN(180))
}

function toAddress(address: string) {
  return Address.fromString(address)
}


