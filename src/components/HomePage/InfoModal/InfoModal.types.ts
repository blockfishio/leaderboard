import { claimRewardRequest } from "../../../modules/reward/actions"


export type Props = {
  open:boolean
  // onClaimSpay:typeof ClaimSpayRequest
  handleOpen:()=>void,
  
}

export type MetaData ={
  type: String, 
  claimable: number, 
  remaining: number
}