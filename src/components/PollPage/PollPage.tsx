import React, { useEffect, useState, useCallback } from 'react'
import { Loader, Page } from 'decentraland-ui'
import { t } from 'decentraland-dapps/dist/modules/translation/utils'
import { Navbar } from '../Navbar'
import { Footer } from '../Footer'
import { Props } from './PollPage.type'
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
      state: 'active'
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
  const handleDataonClick = useCallback((id: string) => onNavigate(locations.proposal(id)), [
    onNavigate
  ])

  const handleFakeonClick = useCallback(() => onNavigate(locations.fakePage()), [
    onNavigate
  ])

  const handleCreateonClick = useCallback(() => onNavigate(locations.createProposal()), [
    onNavigate
  ])
  const starttime=1644969600000
  const endtime=1645488000000
  
  const day=Math.max(starttime-Date.now(),0)/(24*3600*1000)







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
              {/* <div className='text-center text-2xl gap-2  px-11 py-1 rounded-xl bg-spacey-leaderboard-button hover:bg-spacey-leaderboard-button-highlight cursor-pointer' onClick={handleCreateonClick}>
                <div>START VOTING</div>
              </div> */}
            </div>
          </div>
          {
            top ? <div>
              {/* <div className='gradientBackgroundFull my-5 container  md:max-w-1064 mx-auto br-33'>
                <div className='container mx-auto py-5 '>
                  <div className='flex  justify-center content-center items-center md:justify-between flex-col md:flex-row gap-x-2  w-11/12 md:w-full md:max-w-1064 '>
                    <div className='flex justify-center content-center items-center  flex-col md:flex-row   md:max-w-1064'>
                      <div className=' background-e78f32 bor-d'></div>
                      <div>
                        <div className='text-2xl'>Poll</div>
                        <div className='text-1xl'>Ask community members for their opinion on an issue or topic.</div>
                      </div>
                    </div>
                    
                    <div className='gradientBackgroundFull my-5 w-60 flex br-33 '>
                      <select className="bg-spacey-leaderboard-grey px-5 py-1  w-50 br-33" >
                        <option value="1" className='selectabs dis-li cursor-pointer'>ALL OUTCOMES</option>
                        <option value="2" className='cursor-pointer'>ACTIVE OUTCOMES</option>
                        <option value="3" className='cursor-pointer'>FINISHED OUTCOMES</option>
                        <option value="4" className='cursor-pointer'>PASSED OUTCOMES</option>
                        <option value="5" className='cursor-pointer'>REJECTED OUTCOMES</option>
                        <option value="6" className='cursor-pointer'>ENACTED OUTCOMES</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div> */}







              <div className='container  md:max-w-1064 mx-auto'>

              <div className='outcomes br-33  hover:bg-spacey-leaderboard-button-highlight cursor-pointer mt-30'  onClick={() => handleFakeonClick()}>
                      <div className='px-9 py-2'>
                        <div className='text-2xl'>Change on Token Release Date</div>
                        <div className='mt-29 flex'>
                          <span className='outactive px-3 flex justify-center content-center items-center'><div>upcoming</div></span>
                          <span className='outpoll px-2 flex justify-center content-center items-center'>POLL</span>
                          <span className='flex justify-center content-center items-center'>Start in {Math.floor(day)} days</span>
                        </div>
                      </div>
                    </div>





                {
                  Object.values(proposals).map((item: { title: string, body: string, state: string, id: string }, id: any) => (
                    <div className='outcomes br-33  hover:bg-spacey-leaderboard-button-highlight cursor-pointer mt-30' key={id} onClick={() => handleDataonClick(item.id)}>
                      <div className='px-9 py-2'>
                        <div className='text-2xl'>{item.title}</div>
                        <div className='mt-29'>{item.body}</div>
                        <div className='mt-29 flex'>
                          <span className='outactive px-3 flex justify-center content-center items-center'><div>{item.state}</div></span>
                          <span className='outpoll px-2 flex justify-center content-center items-center'>POLL</span>
                          <span className='flex justify-center content-center items-center'>Ends in 7 days</span>
                        </div>
                      </div>
                    </div>
                  ))
                }
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

