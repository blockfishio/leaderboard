




export type UserRankFetchParams = {
    seasonID:number,
    address:string
  
  }
export type ProposalsFetchParams = {
  first:number,
  skip:number,
  state:string
}

export type ProposalFetchParams={
  id:string
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
    title: string
    
  }

  export type Space={
    id:string,
    name:string
  }

  export type RankFetchOptions = {
   
    params: ProposalFetchParams
  }
  
  
