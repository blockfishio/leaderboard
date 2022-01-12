
export type Address = string
export type SeasonID = string

export type Privilege = Record<Address, boolean>
export type Privileges = Record<Address, Privilege>

export type Reward=Record<SeasonID,string>
export type Rewards={
  claimable:Partial<Reward>
  remaining:Partial<Reward>
  total:Partial<Reward>
}

export type Authorizations = {
  allowances: Partial<Privileges>
  approvals: Partial<Privileges>
}

export type AuthorizationDefinition = Record<Address, Address[]>
export type AuthorizationsRequest = {
  allowances: AuthorizationDefinition
  approvals: AuthorizationDefinition
}

