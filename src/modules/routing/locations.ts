
export const locations = {
  root: () => '/',
  signIn: () => '/sign-in',
  settings: () => '/settings',
  partners: () => '/partners',
  bids: () => '/bids',
  claim: () => '/claim',
  deposit: () => '/deposit',
  community: () => '/community',
  createProposal: () => '/create',
  pollPage: () => '/poll',

  proposal: (
    proposalId: string = ':proposalId'
  ) => `/proposal/${proposalId}`,

 
 
  nft: (
    contractAddress: string = ':contractAddress',
    tokenId: string = ':tokenId'
  ) => `/contracts/${contractAddress}/tokens/${tokenId}`,
  asset: (
    optionId: string = ':optionId',
  ) => `/asset/${optionId}`,
  ownerasset: (
    optionId: string = ':optionId',
  ) => `/ownerasset/${optionId}`,
  parcel: (x: string = ':x', y: string = ':y') => `/parcels/${x}/${y}/detail`,
  estate: (estateId: string = ':estateId') => `/estates/${estateId}/detail`,
  sell: (
    contractAddress: string = ':contractAddress',
    tokenId: string = ':tokenId'
  ) => `/contracts/${contractAddress}/tokens/${tokenId}/sell`,
  buy: (
    contractAddress: string = ':contractAddress',
    tokenId: string = ':tokenId'
  ) => `/contracts/${contractAddress}/tokens/${tokenId}/buy`,
  buyasset: (
    optionId: string = ':optionId',
  ) => `/asset/${optionId}/buy`,
  cancel: (
    contractAddress: string = ':contractAddress',
    tokenId: string = ':tokenId'
  ) => `/contracts/${contractAddress}/tokens/${tokenId}/cancel`,
  transfer: (
    contractAddress: string = ':contractAddress',
    tokenId: string = ':tokenId'
  ) => `/contracts/${contractAddress}/tokens/${tokenId}/transfer`,
  rename: (
    contractAddress: string = ':contractAddress',
    tokenId: string = ':tokenId'
  ) => `/contracts/${contractAddress}/tokens/${tokenId}/rename`,
  bid: (
    contractAddress: string = ':contractAddress',
    tokenId: string = ':tokenId'
  ) => `/contracts/${contractAddress}/tokens/${tokenId}/bid`,
  activity: () => `/activity`
}
