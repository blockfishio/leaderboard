
export type VotingPowerFetchParams={
  address:string,
  blocknumber?:string
}

  export type Proposal = {
    author: string,
    body: string,
    choices: string[],
    end: number,
    id: string,
    snapshot: string,
    space: Space,
    start: number,
    state: string,
    title: string,
    
  }



  export type Space={
    id:string,
    name:string
  }


  
  
export type VoteWhere ={
    id?: string
    id_in?: string[]
    voter?: string
    voter_in?: string[]
    proposal?: string
    proposal_in?: string[]
}

export type Vote= {
  id: string
  voter: string
  created: number
  space: Space
  votingpower?:number
  proposal: {
    choices: Proposal['choices']
  }
  choice: number
  metadata?: {
    votingPower: string
    verificationHash: string
  }
  _inValid?: boolean
}

export type Votes=Record<string,Vote[]>

export interface Message {
  address: string
  msg: string
  sig: string
}

export enum SnapshotCommand {
  PROPOSAL = 'proposal',
  VOTE = 'vote',
}

export type VoteMsg={
  version:string
  timestamp:string
  space:string
  type:SnapshotCommand
  payload:VotePayload
}

export type VotePayload={
  proposal:string
  choice:number
}

export type VoteSum={
  vp:number,
  count:number
}