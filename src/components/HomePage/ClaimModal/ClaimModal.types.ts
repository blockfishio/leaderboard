

export type Props = {
  open:boolean
  // onClaimSpay:typeof ClaimSpayRequest
  handleOpen:()=>void,
  total:number,
  remaining:number
}

export type MetaData ={
  type: String, 
  claimable: number, 
  remaining: number
}