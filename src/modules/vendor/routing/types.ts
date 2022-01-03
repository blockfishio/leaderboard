import * as decentraland from '../decentraland'

import { Vendors } from '../types'

export type Section =
  | decentraland.Section


export const Section = {
  [Vendors.DECENTRALAND]: { ...decentraland.Section },

} as const

export type View =
  | decentraland.View

export const View = {
  [Vendors.DECENTRALAND]: { ...decentraland.View }
} as const