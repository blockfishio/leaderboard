import { Vote} from "./types"



export function getVPSum(
  votes:Record<string,Vote>
):Record<number,number>{
  

  const res:Record<number,number>={}

  for (const vote of Object.values(votes)){
    const {choice}=vote
    const vp:number=vote.votingpower || 0
    if (res[choice]){
    res[vote.choice]+=vp
  } else{
    res[choice]=vp
  }
}




  return res
}