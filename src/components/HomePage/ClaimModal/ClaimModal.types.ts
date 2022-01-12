import { claimRewardRequest } from "../../../modules/reward/actions"


export type Props = {
  open:boolean
  // onClaimSpay:typeof ClaimSpayRequest
  handleOpen:()=>void,
  onClaimReward: typeof claimRewardRequest,

  seasonID:number,
  claimable:string,
  remaining:string
}

export type MetaData ={
  type: String, 
  claimable: number, 
  remaining: number
}