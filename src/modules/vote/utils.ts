import { Vote,Message, VoteSum} from "./types"


const SNAPSHOT_API_URL=process.env.REACT_APP_SNAPSHOT_API_URL || ''

export function getVPSum(
  votes:Record<string,Vote>
):Record<number,VoteSum>{
  

  const res:Record<number,VoteSum>={}

  for (const vote of Object.values(votes)){
    const {choice}=vote
    const vp:number=vote.votingpower || 0
    if (res[choice]){
    res[choice].vp+=vp
    res[choice].count+=1
  } else{
    const newChoiceRes:VoteSum={
      vp:vp,
      count:1
    }
    res[choice]=newChoiceRes
  }
}




  return res
}

/**
 * Returns data that is required on all snapshot payloads
 */
 export const generatePayloadData = () => {
  return {
    version: "0.1.3",
    timestamp: (Date.now() / 1e3).toFixed(),
    // space: PANCAKE_SPACE,
    space: "space2025.eth",

  }
}

/**
 * General function to send commands to the snapshot api
 */
 export const sendSnapshotData = async (message: Message) => {
  const response = await fetch(SNAPSHOT_API_URL, {
    method: 'post',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(message),
  })

  if (!response.ok) {
    const error = await response.json()
    throw new Error(error?.error_description)
  }

  const data = await response.json()
  return data
}

export const UserVoted = (votes:Record<string,Vote>,address:string)=>{
  for (const vote of Object.values(votes)){
    if (vote.voter.toLowerCase() == address.toLowerCase()){
      return true
    }

    }
    return   false

}