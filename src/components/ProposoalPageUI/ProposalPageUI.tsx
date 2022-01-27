import React, { useCallback, useEffect, useState } from 'react'
import { Loader, Page } from 'decentraland-ui'
import { t } from 'decentraland-dapps/dist/modules/translation/utils'
import Returns from '../../images/DAO_04_04.jpg'
import { Navbar } from '../Navbar'
import { Footer } from '../Footer'

import { Props } from './ProposalPageUI.types'
import './ProposalPageUI.css'
import {
  RankFetchOptions,
  UserRankFetchParams,
  Ranking
} from '../../modules/rank/types'
import { locations } from '../../modules/routing/locations'

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
    onFetchProposal,
    proposalId,
    onNavigate
  } = props
  useEffect(() => {
    if (!proposal && proposalId) {
      onFetchProposal(proposalId)
    }
  }, [proposal, proposalId, onFetchProposal])

  // useEffect(()=>{
  //   if (!votings && proposal){
  //     onFetchVotings(proposalId)
  //   }
  // },[proposal,proposalId,votings,onFetchVotings])
  const handlePollonClick = useCallback(() => onNavigate(locations.pollPage()), [
    onNavigate
  ])
  return (
    <>
      <Navbar isFullscreen />
      {proposal ?
        <div>
          <div className='ProposalDetailPage  mb-30'>
            <div className='mt-34 container  md:max-w-1064 mx-auto'></div>
            <div className='gradientBackgroundFull my-5 '>
              <div className='container py-2 md:max-w-1064 mx-auto flex items-center'>
                <div className='returns flex justify-center flex-row items-center cursor-pointer' onClick={handlePollonClick}><div className='arrow cursor-pointer'></div></div>
                <div className='flex justify-center flex-row items-center px-2 text-2xl box'><div>{proposal.title}</div></div>
              </div>
            </div>
            <div className='flex mt-29 container md:max-w-1064 mx-auto px-10'>
              <span className='outactive px-3 flex justify-center content-center items-center'><div>{proposal.state}</div></span>
              <span className='outpoll px-2 flex justify-center content-center items-center'>POLL</span>
            </div>
            <div className='container md:max-w-1064 mx-auto flex ui grid '>
              <div className='rows flex mt-31'>
                <div className='body-left mx-6  '>
                  <p>{proposal.body}</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                    enim ad minim veniam, quis nostrud exercitation ullamco laboris
                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                    enim ad minim veniam, quis nostrud exercitation ullamco laboris
                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                    enim ad minim veniam, quis nostrud exercitation ullamco laboris
                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <div className='body-right'>
                  <div className='right-top mx-6 px-3'>
                    <div><div>CURRENT RESULT</div></div>
                    <div className='mt-30'>
                      <div className='text-1xl'>Yes, I agree.</div>
                      <div>
                        <div className='message'>0%</div>
                        <div className='progress progress--status-0'><div className='progress--bar' style={{ width: "23%" }}></div></div>
                        <div>0 VP (0 votes)</div>
                      </div>
                    </div>
                    <div className='mt-30'>
                      <div>No, I don't agree.</div>
                      <div>
                        <div className='message'>0%</div>
                        <div className='progress progress--status-0'><div className='progress--bar' style={{ width: "43%" }}></div></div>
                        <div>0 VP (0 votes)</div>
                      </div>
                    </div>
                    <div className='mt-30'>
                      <div>Invalid question/options</div>
                      <div>
                        <div className='message'>0%</div>
                        <div className='progress progress--status-0'><div className='progress--bar' style={{ width: "63%" }}></div></div>
                        <div>0 VP (0 votes)</div>
                      </div>
                    </div>
                    <div className='mt-30 mb-30'>
                      <div>Yes, I agree.</div>
                      <div>
                        <div className='message'>0%</div>
                        <div className='progress progress--status-0'><div className='progress--bar' style={{ width: "83%" }}></div></div>
                        <div>0 VP (0 votes)</div>
                      </div>
                    </div>
                  </div>
                  <div className='right-main flex flex-col mx-6 px-3 mb-30'>
                    <div className='mt-29'><button className='ui button ChoiceButton ChoiceButton--status-0 '>Vote Yes, I agree.</button></div>
                    <div className='mt-29'><button className='ui button ChoiceButton ChoiceButton--status-0 '>Vote No, I don't agree.</button></div>
                    <div className='mt-29'><button className='ui button ChoiceButton ChoiceButton--status-0 '>Vote Invalid question/options</button></div>
                    <div className='mt-29'><button className='ui button ChoiceButton ChoiceButton--status-0 '>Vote Yes, I agree.</button></div>
                    <div className='mt-29 mb-30'><div>Voting with <span></span>0 VP</div></div>
                  </div>
                  <div className='right-bottom mx-6 px-3 '>
                    <div className='mt-29'>DETAILS</div>
                    <div className='flex justify-between md:justify-between flex-row md:flex-row mt-29'>
                      <div>Created by</div>
                      <a href=""><img src="" alt="" /> rokusho#9245</a>
                    </div>
                    <div className='flex justify-center md:justify-between flex-col md:flex-row mt-29'>
                      <div>Started</div>
                      <div>Jan 11 12:53</div>
                    </div>
                    <div className='flex justify-center md:justify-between flex-col md:flex-row mt-29'>
                      <div>Ends</div>
                      <div>Jan 11 12:53</div>
                    </div>
                    <div className='flex justify-center md:justify-between flex-col md:flex-row mt-29 mb-30'>
                      <div>Snapshot</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        : null}





      {isLoading ?

        <Page className='ProposalPage' isFullscreen >
          <Loading />
        </Page>
        : null}
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
