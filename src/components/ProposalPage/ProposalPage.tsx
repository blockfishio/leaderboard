import React ,{useEffect, useState}from 'react'
import { Button, Loader, Page } from 'decentraland-ui'
import { t } from 'decentraland-dapps/dist/modules/translation/utils'

import { Navbar } from '../Navbar'
import { Footer } from '../Footer'

import { Props } from './ProposalPage.types'
import './ProposalPage.css'

import { VotingPowerFetchParams } from '../../modules/vote/types'
import { getVPSum,generatePayloadData,sendSnapshotData } from '../../modules/vote/utils'
import {Message,SnapshotCommand } from '../../modules/vote/types'

const Loading = () => (
  <div className="nft-center">
    <Loader active size="huge" />
  </div>
)

const NotFound = () => (
  <div className="nft-center">
    <p className="secondary-text">{t('global.not_found')}&hellip;</p>
  </div>
)

const ProposalPage = (props: Props) => {
  const {
    proposal,
    wallet,
    isLoading,
    votingpower,
    isVPLoading,
    onFetchProposal,
    onFetchVotingpower,
    onFetchVotes,
    votes,
    proposalId,
    onCastVote
  }=props
useEffect(()=>{
  if (!proposal && proposalId){
    onFetchProposal(proposalId)
  }
},[proposal,proposalId,onFetchProposal])

useEffect(()=>{
  if (proposal && wallet){
    const options:VotingPowerFetchParams ={
      address:wallet.address,
      blocknumber:proposal.snapshot
    }
    onFetchVotingpower(options)
  }
},[proposal,wallet,onFetchVotingpower])
useEffect(()=>{
  if (proposal ){
    
    onFetchVotes(proposal)
  }
},[proposal,onFetchVotes])
let vpSum:Record<number,number>={}
if(votes){
vpSum= getVPSum(votes)
}




const handleOnvote=(choice:number)=>{
    const voteMsg = JSON.stringify({
      ...generatePayloadData(),
      type: SnapshotCommand.VOTE,
      payload: {
        proposal: proposalId,
        choice: choice,
      },
    })
    onCastVote(voteMsg)
}
  return (
    <>
      <Navbar isFullscreen />
      {proposal ?
        <div>
          <div>{proposal.title}</div>
          <div>{proposal.state}</div>
          <div>{proposal.id}</div>
          <div>{proposal.body}</div>
          {
            proposal.choices.map(
              (choice,index)=>{
                return <div key={index}>
                  
                  <Button onClick={
                    ()=>{
                    handleOnvote(index+1)
                    
                    }}>{choice}</Button>
                  
                  
                   vp: {vpSum[index+1] || 0}</div>
              }
            )
          }
         

          <div>My Votingpower:</div>
          {
            wallet?(isVPLoading?<div>VPLOADING....</div>:
            
            
            <div>
              {votingpower?.map( (vp)=>{return vp[wallet.address]})
              }
            </div>):<div>--</div>
          }
          

</div>
         :null }
      
      
      


      {isLoading?
      
      <Page className='ProposalPage' isFullscreen >
      <Loading />
      </Page>
      :null}
      {!isLoading && !proposal ? 
      <Page className='ProposalPage' isFullscreen >
      <NotFound />
      </Page>
      
      : null}
      <Footer isFullscreen />
    </>
  )
}

export default React.memo(ProposalPage)
