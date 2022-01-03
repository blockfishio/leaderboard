import { ContractService as ContractServiceInterface } from '../services'
import { Network, ChainId } from '../../contract/types'
import { TransferType } from '../types'

const network = process.env.REACT_APP_NETWORK! as Network

const contractAddresses = {
  [Network.ROPSTEN]: {
    MANAToken: "0x0Bb7DD2B4C3792Bf259899df4a83a3cD9DC48E58",
    Marketplace: '0xe6741bf1ed6dd3da0f5453922fce930a2b495623',
    AssetSale: '0x254519a142151cb8d7c42798c8ce5a37d6712490',
    Bids: '0x250fa138c0a994799c7a49df3097dc71e37b3d6f',
    SpaceY2025: '0x11aff557bf2c052b4751628a878fd23e05f5d99d',
    DepositGMars: '0x0000000000000000000000000000000000',
    METAMARSToken: '0x0000000000000000000000000000000000'


  },
  [Network.MAINNET]: {
    MANAToken: '0x58fad9e3c3ae54c9ba98c3f0e4bf88ab3e8cf3c5',
    Marketplace: '0x9e78a8bdbddde4bf49c241c0e37f524cfd4dabbe',
    Bids: '0xe479dfd9664c693b2e2992300930b00bfde08233',
    AssetSale: '0xb7edde8207fd4a7214acf66deaf647182db360bc',
    SpaceY2025: '0x46741b56c57b6c2470e9ead3cd6ee13bb2a4fe7b',
    DepositGMars: '0x0000000000000000000000000000000000',
    METAMARSToken: '0x0000000000000000000000000000000000'


  },
  [Network.BSC]: {
    MANAToken: "0x13A637026dF26F846D55ACC52775377717345c06",
    Marketplace: '0x513c944c42a1345E993aE026d5c4acE70d425879',
    AssetSale: '0xb0FbC92561C1B0F336C5f9D91fe96c84C0b00853',
    Bids: '0x250fa138c0a994799c7a49df3097dc71e37b3d6f',
    SpaceY2025: '0x230185C3B02b897B89cb1e62717AD7772b8319DA',
    DepositGMars: '0xB3fE6261382c27323B115AA5B92C66B306F94328',
    METAMARSToken: '0xaC564270B8138eD3B97794f4cabd4858976b433F'


  },

  // [Network.BSCTEST]: {
  //   MANAToken: "0x8718a9E002A9c3EA453466eb5D8e6079e99F14A3",
  //   Marketplace: '0x68e640fC786eEF03F04825Ed790B8d3B53272033',
  //   AssetSale: '0x939F06c7237fBeAee33dE637730bA4E618d491b9',
  //   Bids: '0x250fa138c0a994799c7a49df3097dc71e37b3d6f',
  //   SpaceY2025: '0x37C2c3727aF94eA607465Da8E6C631DDB3010eF8'
  // }


}[network]

const contractAddressesAll = {
  [ChainId.ETHEREUM_ROPSTEN]: {
    MANAToken: "0x108822Db06329a010333aB05f3CCc70A20064b9A",
    Marketplace: '0x6257dB01595c3Da00F168F05DA9a399F3F9b4f4c',
    AssetSale: '0x254519a142151cb8d7c42798c8ce5a37d6712490',
    Bids: '0x250fa138c0a994799c7a49df3097dc71e37b3d6f',
    SpaceY2025: '0x11AFF557bF2c052B4751628a878fd23E05f5d99D',
    ClaimMetamars: '0x0000000000000000000000000000000000000000',
    DepositGMars: '0x0000000000000000000000000000000000000000',
    METAMARSToken: '0x0000000000000000000000000000000000000000'
  },
  [ChainId.ETHEREUM_MAINNET]: {
    MANAToken: '0x58fad9e3c3ae54c9ba98c3f0e4bf88ab3e8cf3c5',
    Marketplace: '0x9e78a8bdbddde4bf49c241c0e37f524cfd4dabbe',
    Bids: '0xe479dfd9664c693b2e2992300930b00bfde08233',
    AssetSale: '0x0D5139FcEa1322E1995b25450F03f4564CEaC7aA',
    SpaceY2025: '0x46741b56c57b6c2470e9ead3cd6ee13bb2a4fe7b',
    ClaimMetamars: '0x0000000000000000000000000000000000000000',
    DepositGMars: '0x0000000000000000000000000000000000000000',
    METAMARSToken: '0x0000000000000000000000000000000000000000'



  },
  // [ChainId.BSC_MAINNET]: {
  //   MANAToken: "0xEbf1CD092aB077bc9B61a8942D993122f7b7dAb8",
  //   Marketplace: '0x732c6f9C7aCD67649750a6efA26fAF3D0d8Ff3e3',
  //   AssetSale: '0x58FaD9E3C3AE54c9BA98c3f0E4bF88aB3E8Cf3c5',
  //   Bids: '0x250fa138c0a994799c7a49df3097dc71e37b3d6f',
  //   SpaceY2025: '0x20198be8e4b0fe976af5c593416cbfcababf2880',
  //   ClaimMetamars: '0x36713D9D13D2b303F3644f4f2293e8Af74A3bd3a',
  //   DepositGMars: '0x9bD6aDEA578E35c7D24aBCE3EffE5a52CA1698f3',
  //   METAMARSToken: '0xCfb7fb8C5BDA4B4e390C83C8e5F1566082aaE809'
  // },
  [ChainId.BSC_MAINNET]: {
    MANAToken: "0x13A637026dF26F846D55ACC52775377717345c06",
    Marketplace: '0x513c944c42a1345E993aE026d5c4acE70d425879',
    AssetSale: '0x0aC354FD5502572e1028428A29b7b5172d7a294C',
    Bids: '0x250fa138c0a994799c7a49df3097dc71e37b3d6f',
    SpaceY2025: '0x230185c3b02b897b89cb1e62717ad7772b8319da',
    ClaimMetamars: '0xB3fE6261382c27323B115AA5B92C66B306F94328',
    DepositGMars: '0xB3fE6261382c27323B115AA5B92C66B306F94328',
    METAMARSToken: '0xaC564270B8138eD3B97794f4cabd4858976b433F'

  },

  // [ChainId.BSC_TESTNET]: {
  //   MANAToken: "0x8718a9E002A9c3EA453466eb5D8e6079e99F14A3",
  //   Marketplace: '0x68e640fC786eEF03F04825Ed790B8d3B53272033',
  //   AssetSale: '0x939F06c7237fBeAee33dE637730bA4E618d491b9',
  //   Bids: '0x250fa138c0a994799c7a49df3097dc71e37b3d6f',
  //   SpaceY2025: '0x37C2c3727aF94eA607465Da8E6C631DDB3010eF8'
  // }

}


const {
  MANAToken,
  Marketplace,
  Bids,
  AssetSale,
  SpaceY2025,
  DepositGMars,
  METAMARSToken
} = contractAddresses

export type ContractName = keyof typeof contractAddresses

export class ContractService implements ContractServiceInterface {

  static contractAddresses = contractAddresses
  static contractAddressesAll = contractAddressesAll
  contractAddressesAll = contractAddressesAll

  contractAddresses = contractAddresses

  contractSymbolsAll = Object.keys(contractAddressesAll).reduce(function (res, chainId) {
    const {
      MANAToken,
      Marketplace,
      Bids,
      AssetSale,
      SpaceY2025,
      DepositGMars,
      METAMARSToken
    } = contractAddressesAll[parseInt(chainId) as ChainId]

    const contractSymbols = {
      [MANAToken]: 'SPAY',
      [Marketplace]: 'Marketplace',
      [Bids]: 'Bids',
      [AssetSale]: 'Asset Sale',
      [SpaceY2025]: 'SpaceY2025',
      [DepositGMars]: 'Deposit GMars',
      [METAMARSToken]: 'METAMARS'
    }
    return { ...res, [chainId]: contractSymbols }


  }, {})


  contractNamesAll = Object.keys(contractAddressesAll).reduce(function (res, chainId) {
    const {
      MANAToken,
      Marketplace,
      Bids,
      AssetSale,
      SpaceY2025,
      DepositGMars,
      METAMARSToken
    } = contractAddressesAll[parseInt(chainId) as ChainId]

    const contractNames = {
      [MANAToken]: 'MANAToken',

      [Marketplace]: 'Marketplace',
      [Bids]: 'ERC721Bid',
      [AssetSale]: 'AssetSale',
      [SpaceY2025]: 'SpaceY2025 Assets',
      [DepositGMars]: 'Deposit GMars',
      [METAMARSToken]: 'METAMARSToken'
    }
    return { ...res, [chainId]: contractNames }


  }, {})

  contractCategoriesAll = Object.keys(contractAddressesAll).reduce(function (res, chainId) {
  

    const contractCategories = {

    }
    return { ...res, [chainId]: contractCategories }


  }, {})



  contractSymbols = {
    [MANAToken]: 'SPAY',
    [Marketplace]: 'Marketplace',
    [Bids]: 'Bids',
    [AssetSale]: 'Asset Sale',
    [SpaceY2025]: 'SpaceY2025',
    [DepositGMars]: 'Deposit GMars',
    [METAMARSToken]: 'METAMARS'
  } as const

  contractNames = {
    [MANAToken]: 'MANAToken',

    [Marketplace]: 'Marketplace',
    [Bids]: 'ERC721Bid',
    [AssetSale]: 'AssetSale',

    [SpaceY2025]: 'SpaceY2025 Assets',
    [DepositGMars]: 'DepositGMars',
    [METAMARSToken]: 'METAMARS'
  } as const

  contractCategories = {

  } as const


  getTransferType(_address: string) {
    return TransferType.SAFE_TRANSFER_FROM
  }




}
