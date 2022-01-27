import React, { useEffect, useState, useCallback } from 'react'
import { Loader, Page } from 'decentraland-ui'
import { t } from 'decentraland-dapps/dist/modules/translation/utils'
import { Navbar } from '../Navbar'
import { Footer } from '../Footer'
import { Props } from './VotingPage.type'
import { UserRankFetchParams } from '../../modules/rank/types'
import canvas from '../../images/canvas.png'
import round from '../../images/token_rounded.png'
import './VotingPage.css'
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
    setTop(false)
    onFetchProposals(option)
  }, [onFetchProposals])

  console.log(proposals);


  const [data, setData]: any = useState(proposals)
  const [top, setTop] = useState(true)
  console.log(data);


  // const handleToponClick = () => {
  //   setTop(!top)
  // }
  const handleToponClick = useCallback(() => onNavigate(locations.pollPage()), [
    onNavigate
  ])
  const handleDataonClick = useCallback((id: string) => onNavigate(locations.proposal(id)), [
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
          <div className='ProposalDetailPage'>
            <div className='mt-34 container  md:max-w-1064 mx-auto'></div>
            <div className='gradientBackgroundFull my-5 '>
              <div className='container mx-auto py-5 flex justify-center md:justify-between flex-col md:flex-row gap-x-2  w-11/12 md:w-full md:max-w-1064 '>
                <div className='text-1xl flex  justify-center content-center items-center'>
                  <div className={top ? 'mr-8 cursor-pointer font-size-color action' : 'mr-8 cursor-pointer font-size-color'} onClick={handleToponClick}>Proposals</div>
                  <div className={top ? 'cursor-pointer font-size-color ' : 'cursor-pointer font-size-color action'} onClick={handleToponClick}>Voting Power</div>
                </div>
                <div className='text-center text-2xl gap-2  px-11 py-1 rounded-xl bg-spacey-leaderboard-button hover:bg-spacey-leaderboard-button-highlight cursor-pointer' onClick={handleCreateonClick}>
                  <div>START VOTING</div>
                </div>
              </div>
            </div>
            <div className='container md:max-w-1064 mx-auto my-5'>
              <div className='flex justify-center md:justify-between flex-col md:flex-row'>
                <div className='flex  flex-col md:flex-col mt-30'>
                  <div className='text-2xl'>ADDRESS</div>
                  <div className='flex mt-30 items-center'>
                    <div><img src={canvas} alt="" className='br-33' /></div>
                    <div className='hide text-2xl w-80 ml-3 '>0xBAB298D0Dcb2589a1c24B6c88fb10BD08eFe3265</div>
                  </div>
                </div>
                <div className='flex  flex-col md:flex-col items-center mt-30'>
                  <div className='text-2xl '>TOTAL VOTING POWER</div>
                  <div className='hide text-2xl w-80 ml-3 mt-30'>0xBAB298D0Dcb2589a1c24B6c88fb10BD08eFe3265</div>
                  <div className='px-3 br br-33 w-20 h-10 mt-29 flex items-center justify-center md:justify-center text-3xl'>VP</div>
                </div>
              </div>
            </div>
            <div className='container md:max-w-1064 mx-auto my-5 text-3xl'>DETAILS</div>
            <div className='container md:max-w-1064 mx-auto flex ui grid '>
              <div className='rows flex  container  my-5'>
                <div className='power-left  mx-6 '>
                  <div className='br br-34 flex flex-col  '>
                    <div className='px-10 mt-30'>
                      <div className='flex items-center '>
                        <div className='w-10'><img src={round} alt="" /></div>
                        <div className='text-3xl px-5'><span>SPAY: </span><span className='px-5'>113456</span></div>
                      </div>
                      <div className='flex  mt-30 mb-30 justify-center md:justify-between  items-center'>
                        <div className='text-3xl'>113456</div>
                        <div className='px-3 br br-33 w-20 h-8 flex items-center justify-center md:justify-center text-3xl'>VP</div>
                      </div>
                    </div>
                  </div>
                  <div className=' mt-29 flex justify-end md:justify-end'>
                    <div className='flex background-e78f32 w-40 justify-center md:justify-center h-8 text-2xl br-33 cursor-pointer'>Get SPAY</div>
                  </div>

                </div>
                <div className='power-right mx-6'>
                  <div className='right-top px-10 text-3xl'>
                    <div className='mt-30 '>NFT:</div>
                    <div className='flex mt-30 mb-30 justify-center md:justify-between items-center'>
                      <div>Total:</div>
                      <div>123468</div>
                      <div className='px-3 br br-33 w-20 h-8 flex items-center justify-center md:justify-center text-3xl'>VP</div>
                    </div>
                  </div>
                  <div className='right-main px-10 text-3xl '>
                    <div className='pt-30'>
                      <div >Land:</div>
                      <div className='flex mt-29 justify-center md:justify-between items-center'>
                        <div>123468</div>
                        <div className='px-3 br br-33 w-20 h-8 flex items-center justify-center md:justify-center text-3xl'>VP</div>
                        <div></div>
                        <div></div>
                      </div>
                    </div>
                    <div>
                      <div className='mt-30'>Boarding Pass:</div>
                      <div className='flex mt-29 justify-center md:justify-between items-center'>
                        <div>123468</div>
                        <div className='px-3 br br-33 w-20 h-8 flex items-center justify-center md:justify-center text-3xl'>VP</div>
                        <div></div>
                        <div></div>
                      </div>
                    </div>
                    <div>
                      <div className='mt-30'>Tower:</div>
                      <div className='flex mt-29 justify-center md:justify-between items-center'>
                        <div>123468</div>
                        <div className='px-3 br br-33 w-20 h-8 flex items-center justify-center md:justify-center text-3xl'>VP</div>
                        <div></div>
                        <div></div>
                      </div>
                    </div>
                    <div className='mb-30'>
                      <div className='mt-30'>Building:</div>
                      <div className='flex mt-29 justify-center md:justify-between items-center'>
                        <div>123468</div>
                        <div className='px-3 br br-33 w-20 h-8 flex items-center justify-center md:justify-center text-3xl'>VP</div>
                        <div></div>
                        <div></div>
                      </div>
                    </div>
                  </div>
                  <div className=' mt-29 flex justify-end md:justify-end'>
                    <div className='flex background-e78f32 w-40 justify-center md:justify-center h-8 text-2xl br-33 cursor-pointer'>Get NFT</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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

