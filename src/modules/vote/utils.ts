import { Vote,Message} from "./types"



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
  const response = await fetch("https://hub.snapshot.org/api/message", {
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