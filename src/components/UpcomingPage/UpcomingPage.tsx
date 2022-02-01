import React, { useEffect, useState, useCallback } from 'react'
import { Loader, Page } from 'decentraland-ui'
import { t } from 'decentraland-dapps/dist/modules/translation/utils'
import { Navbar } from '../Navbar'
import { Footer } from '../Footer'
import { Props } from './UpcomingPage.type'
import { UserRankFetchParams } from '../../modules/rank/types'


import './PollPage.css'
import { ProposalsFetchParams } from '../../modules/proposal/types'
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

const PollPage = (props: Props) => {
  const {
    proposals,
    wallet,
    isLoading,
    onFetchProposals,
    onNavigate,
  } = props
  useEffect(() => {
    const option: ProposalsFetchParams = {
      first: 5,
      skip: 0,
      state: ''
    }
    setTop(true)
    onFetchProposals(option)
  }, [onFetchProposals])



  const [top, setTop] = useState(false)
  

  // const handleToponClick = () => {
  //   setTop(!top)
  // }
  const handleToponClick = useCallback(() => onNavigate(locations.voting()), [
    onNavigate
  ])
  const handleDataonClick = useCallback(() => onNavigate(locations.fakePage()), [
    onNavigate
  ])

  const handleCreateonClick = useCallback(() => onNavigate(locations.createProposal()), [
    onNavigate
  ])
  return (
    <div className='bg-spacey-heavy'>
      <Navbar isFullscreen />
      {
        <div>
          <div className='mt-34 container  md:max-w-1064 mx-auto'>
          </div>
          <div className='gradientBackgroundFull my-5 '>
            <div className='container mx-auto py-5 flex justify-center md:justify-between flex-col md:flex-row gap-x-2  w-11/12 md:w-full md:max-w-1064 '>
              <div className='text-1xl flex  justify-center content-center items-center'>
                <div className={top ? 'mr-8 cursor-pointer font-size-color action' : 'mr-8 cursor-pointer font-size-color'} onClick={handleToponClick}>Proposals</div>
                <div className={top ? 'cursor-pointer font-size-color ' : 'cursor-pointer font-size-color action'} onClick={handleToponClick}>Voting Power</div>
              </div>
              
            </div>
          </div>
          {
            top ? <div>
             
              <div className='container  md:max-w-1064 mx-auto'>
              <div className='outcomes br-33  hover:bg-spacey-leaderboard-button-highlight cursor-pointer mt-30'  onClick={() => handleDataonClick()}>
                      <div className='px-9 py-2'>
                        <div className='text-2xl'>Token Release</div>
                        <div className='mt-29 flex'>
                          <span className='outactive px-3 flex justify-center content-center items-center'><div>upcoming</div></span>
                          <span className='outpoll px-2 flex justify-center content-center items-center'>POLL</span>
                          <span className='flex justify-center content-center items-center'>Start in 7 days</span>
                        </div>
                      </div>
                    </div>
              </div>
            </div> : null
          }
        </div>
      }
      {isLoading ?

        <Page className='ProposalPage' isFullscreen >
          <Loading />
        </Page>
        : null}
      {/* {!isLoading ?
        <Page className='ProposalPage' isFullscreen >
          <NotFound />
        </Page>

        : null} */}
      <Footer isFullscreen />
    </div>
  )
}



export default React.memo(PollPage)

