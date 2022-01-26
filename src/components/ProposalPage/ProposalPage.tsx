import React ,{useEffect, useState}from 'react'
import { Button, Loader, Page } from 'decentraland-ui'
import { t } from 'decentraland-dapps/dist/modules/translation/utils'

import { Navbar } from '../Navbar'
import { Footer } from '../Footer'

import {Props} from './ProposalPage.types'
import './ProposalPage.css'

import { VotingPowerFetchParams } from '../../modules/vote/types'
import { getVPSum } from '../../modules/vote/utils'

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

const ProposalPage = (props:Props) => {
  const {
    proposal,
    wallet,
    isLoading,
    votingpower,
    isVPLoading,
    onFetchProposal,
    onFetchVotingpower,
    proposalId
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
},[proposal,onFetchVotingpower])




const handleOnvote=()=>{

}

  return (
    <>
      <Navbar isFullscreen />
        {proposal?
        <div>
        <div>{proposal.title}</div>
        <div>{proposal.state}</div>
        <div>{proposal.id}</div>
          <div>{proposal.body}</div>
         


          {
            wallet?(isVPLoading?<div>VPLOADING....</div>:
            
            
            <div>
              {votingpower?.[wallet.address]
              }
            </div>):null
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
