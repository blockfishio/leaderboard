
export const View = {
  MARKET: 'market',
  ACCOUNT: 'account',
  // HOME_WEARABLES: 'home_wearables',
  HOME_LAND: 'home_land',
  // HOME_ENS: 'home_ens',
  HOME_BOARDINGPASS: "home_boardingpass",
  OFFICAL: "offical",
  COMMUNITY: "community",
  LOAD_MORE: 'load_more',
  OFFICAL_LOAD_MORE: 'offical_load_more',
  COMMUNITY_LOAD_MORE: 'community_load_more',
  ATLAS: 'atlas',
} as const

export type View = typeof View[keyof typeof View]
