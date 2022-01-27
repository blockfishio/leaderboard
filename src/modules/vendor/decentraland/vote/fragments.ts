
import { Ranking } from '../../../rank/types'





export type AssetFields = Omit<Ranking, 'activeOrderId' | 'owner'>
export type AssetFragment = Omit<AssetFields, 'vendor'>
export type AssetCountFragment = {
  OptionID: string,
  Count: number
}
