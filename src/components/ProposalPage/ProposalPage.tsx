import React ,{useEffect, useState}from 'react'
import { Loader, Page } from 'decentraland-ui'
import { t } from 'decentraland-dapps/dist/modules/translation/utils'

import { Navbar } from '../Navbar'
import { Footer } from '../Footer'

import {Props} from './ProposalPage.types'
import './ProposalPage.css'
import { RankFetchOptions,
  UserRankFetchParams,
  Ranking } from '../../modules/rank/types'

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
    onFetchProposal,
    proposalId
  }=props
useEffect(()=>{
  if (!proposal && proposalId){
    onFetchProposal(proposalId)
  }
},[proposal,proposalId,onFetchProposal])

  

  return (
    <>
      <Navbar isFullscreen />
      <Page className='ProposalPage' isFullscreen >
      {isLoading?<Loading />:null}
      {!isLoading && !proposal ? <NotFound /> : null}
</Page>
      <Footer isFullscreen />
    </>
  )
}

export default React.memo(ProposalPage)
