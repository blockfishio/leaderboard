import React, { useEffect, useState, useCallback } from 'react'
import { Navbar } from '../Navbar'
import { Footer } from '../Footer'
import { Props } from './CommunityPage.type'
import arrowIcon from '../../images/ic_icon@2x.png'
import building from '../../images/Building04.png'
import select04 from '../../images/Select a file name for output files_Camera 1_004.png'
import select09 from '../../images/Select a file name for output files_Camera 1_009.png'
import select24 from '../../images/Select a file name for output files_Camera 2_004.png'
import select29 from '../../images/Select a file name for output files_Camera 2_009.png'
// import { t } from 'decentraland-dapps/dist/modules/translation/utils'
import './CommunityPage.css'
import { locations } from '../../modules/routing/locations'
// import { Loader, Page } from 'decentraland-ui'


// const Loading = () => (
//   <div className="nft-center">
//     <Loader active size="huge" />
//   </div>
// )

// const NotFound = () => (
//   <div className="nft-center">
//     <p className="secondary-text">{t('global.not_found')}&hellip;</p>
//   </div>
// )

const CommunityPage = (props: Props) => {
  const {
    wallet,
    isLoading,
    onNavigate,
  } = props



  const handCreate = useCallback(() => onNavigate(locations.proposals()), [
    onNavigate
  ])


  return (
    <div className='bg-spacey-heavy'>
      <Navbar isFullscreen />
      {
        <div>
          <div className='mt-33 container  md:max-w-1064 mx-auto'>
            <div className='flex flex-row text-4xl md:text-6xl'>
              <div className='mr-9 '>DAO</div>
              <div className='w-8 md:w-12'>
                <img src={arrowIcon} alt="arrow icon" />
              </div>
            </div>
          </div>
          <div className='gradientBackgroundFull my-5'>
            <div className='container mx-auto py-5 flex  justify-center md:justify-between flex-col md:flex-row gap-x-2  w-11/12 md:w-full md:max-w-1064 '>
              <div className='text-2xl '>The virtual world in your hands.</div>
              <div className='text-center text-2xl gap-2  px-11 py-1 rounded-xl bg-spacey-leaderboard-button hover:bg-spacey-leaderboard-button-highlight cursor-pointer' onClick={handCreate}>
                <button className='ui'>START VOTING</button>
              </div>
            </div>
          </div>
          <div>
            <div className='container md:max-w-1064 mx-auto relative mt-33'>
              <div className='flex flex-row justify-center container md:justify-between'>
                <div className='flex flex-col'>
                  <div className='text-3xl'>What is the SpaceY 2025 DAO?</div>
                  <div className='mt-31 font-size'>DAO stands for "Decentralized Autonomous Organization". The SpaceY 2025 DAO governs the most important smart contracts and assets used in the SpaceY 2025 universe. 
</div>
                </div>
                <div ><img src={building} alt="Build icon" /></div>
              </div>
              <div className='flex flex-row justify-center container md:justify-between'>
                <div ><img src={select04} alt="select icon" /></div>
                <div className='flex flex-col'>
                  <div className='text-3xl'><div>What is the purpose of the DAO? </div><div>How Does it affect me?</div></div>
                  <div className='mt-31 font-size'>By circumventing the need for human intervention or centralized coordination, DAOs are often referred to as “trustless” systems. A DAO’s trustless decision-making frameworks are generally intended to help make governance accessible to everyone, rather than a select few. Through the DAO the community can propose and vote on-chain governance proposals to determine SpaceY 2025 features now and for the future.</div>
                </div>
              </div>
              {/* <div className='flex flex-row justify-center container md:justify-between mt-31'>
                <div className='flex flex-col'>
                  <div className='text-3xl'>How does the DAO work?</div>
                  <div className='mt-31 font-size'>The community will propose and vote on policy updates, future LAND
                    auctions, whitelisting of NFT contracts to be allowed inside the World,
                    Builder and Marketplace, and whatever the community deems relevant.
                    Voting takes place on the Decentraland DAO's governance interface,
                    powered by Aragon.</div>
                </div>
                <div><img src={select09} alt="select icon" /></div>
              </div> */}
              <div className='flex flex-row justify-center container md:justify-between mt-31'>
                <div className='flex flex-col'>
                  <div className='text-3xl'>What type of things will you get to help to determine?</div>
                  <div className='mt-31 font-size'>
                    <div className='flex items-center'>
                      <div className='background-e78f32 bor-rediuo '></div>
                      <div>Over the coming year we will be scheduling votes to decide on a range of issues including but not limited to: </div>
                    </div>
                    <div className='mt-30 flex items-center'>
                      <div className=' background-e78f32 bor-rediuo '></div>
                      <div>Future Island features {"&"} protocol upgrades</div>
                    </div>
                    <div className='mt-30 flex items-center'>
                      <div className=' background-e78f32 bor-rediuo '></div>
                      <div>Dates for future Island sales</div>
                    </div>
                    <div className='mt-30 flex items-center'>
                      <div className=' background-e78f32 bor-rediuo '></div>
                      <div>Allocation of SPAY for community grants</div>
                    </div>
                    <div className='mt-30 flex items-center'>
                      <div className=' background-e78f32 bor-rediuo '></div>
                      <div>Moderation of content among others</div>
                    </div>
                   
                  </div>
                </div>
                <div className='flex flex-col'>
                  <div className='img-font '><img src={select29} alt="" /></div>
                  <div className='img-font mt-33'><img src={select24} alt="" /></div>
                </div>
              </div>
              <div className='flex flex-row justify-center container md:justify-between mt-31'>
                <div className='flex flex-col justify-center container'>
                  {/* <div className='text-3xl'>What about MANA?</div> */}
                  <div className='mt-31 font-size '>The DAO is your platform for greater authority and influence over the development of SpaceY 2025 and we urge you to exercise your right to vote & positively shape our virtual world!


</div>
                </div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      }
      
      <Footer isFullscreen />
    </div>
  )
}



export default React.memo(CommunityPage)

