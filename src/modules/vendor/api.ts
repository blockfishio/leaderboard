import { MAX_QUERY_SIZE as decentralandMaxQuerySize } from './decentraland/api'

import { Vendors } from './types'

export const MAX_PAGE = 10000
export const PAGE_SIZE = 24

export function getMaxQuerySize(vendor: Vendors) {
  switch (vendor) {
    case Vendors.DECENTRALAND:
      return decentralandMaxQuerySize

  }
}
