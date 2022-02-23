import React, { useEffect, useState, useCallback } from 'react'
import { Navbar } from '../Navbar'
// import { Footer } from '../Footer'
import { Props } from './HomePage.type'
import Group1090 from '../../images/Group 1090.png'
import Group978 from '../../images/Group978.png'
import Group1091 from '../../images/Group1091.png'
import spacey20251 from '../../images/spacey20251.jpg'
import Frame_LAND from '../../images/Frame_LAND.png'
import Frame_LOOT from '../../images/Frame_LOOT.png'
import SpaceYLogo_blue from '../../images/SpaceYLogo_blue.png'
// import { t } from 'spacey-dapps/dist/modules/translation/utils'
import './HomePage.css'
import { locations } from '../../modules/routing/locations'
// import { Loader, Page } from 'spacey-ui'


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

const HomePage = (props: Props) => {
  const {
    wallet,
    onNavigate,
  } = props



  // const handCreate = useCallback(() => onNavigate(locations.proposals()), [
  //   onNavigate
  // ])


  return (
    <div className='bg-spacey-heavy'>
      <Navbar isFullscreen />
      {
        <div >
          <div className='bg-hero-image-mobile md:bg-center lg:bg-hero-image-lg bg-cover overflow-hidden'>
            <div className='md:max-w-1064 container mx-auto'>
              <div className='mars'>
                <div>MARS & BLOCKCHAIN</div>
              </div>
              <div className='colonizing'>
                <div>COLONIZING MARS WITH THE POWER OF BLOCK CHAIN</div>
              </div>
              <div className='logo_blue'>
              </div>
              <div className='awesome'>An awesome tower defense game that offers a rich gaming experience with multiple opportunities to earn money</div>
              <div className='group1090 cursor-pointer'>
                <img src={Group1090} alt="" />
              </div>
            </div>
          </div>
          <div className='group925 bg-cover bg-center mt '>
            <div className='md:max-w-1064 container mx-auto'>
              <div className='p-absolute w-793 h-578 left-40 top-1050 image8'></div>
              <div>
                <div className='group1091'>
                  <div className=''><img src={Group1091} alt="" /></div>
                  <div className='blue_006'></div>
                  <div className='lorems'>Lorem ipsum dolor sit Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</div>
                </div>
                <div className='group1092'>
                  <div className=''><img src={Group1091} alt="" /></div>
                  <div className='blue_007'></div>
                  <div className='lorems'>Lorem ipsum dolor sit Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</div>
                </div>
                <div className='group1051'>
                  <div className=''><img src={Group1091} alt="" /></div>
                  <div className='blue_008'></div>
                  <div className='lorems'>Lorem ipsum dolor sit Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</div>
                </div>
                <div className='group1052'>
                  <div className=''><img src={Group1091} alt="" /></div>
                  <div className='blue_009'></div>
                  <div className='lorems'>Lorem ipsum dolor sit Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</div>
                </div>
                <div className='group1095'>
                  <div className=''><img src={Group1091} alt="" /></div>
                  <div className='blue_010'></div>
                  <div className='lorems'>Lorem ipsum dolor sit Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</div>
                </div>
              </div>
              <div>
                <div className='p-absolute w-214 h-214 left-872 top-1410 blue_0011'></div>
                <div className='p-absolute w-402 h-313 left-1106 top-1435 font  f-size l-height'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</div>
                <div className='p-absolute w-286 h-105 left-1585 top-1484 cursor-pointer'>
                  <img src={Frame_LAND} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className='group1071 bg-cover bg-center mt '>
            <div className='md:max-w-1064 container mx-auto'>
              <div>
                <div className='p-absolute w-173 h-269 left-59 top-1747'>
                  <div className=''><img src={Group1091} alt="" /></div>
                  <div className='blue_006'></div>
                  <div className='lorems'>Lorem ipsum dolor sit Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</div>
                </div>
                <div className='p-absolute w-173 h-269 left-256 top-1747'>
                  <div className=''><img src={Group1091} alt="" /></div>
                  <div className='blue_007'></div>
                  <div className='lorems'>Lorem ipsum dolor sit Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</div>
                </div>
                <div className='p-absolute w-173 h-269 left-453 top-1747'>
                  <div className=''><img src={Group1091} alt="" /></div>
                  <div className='blue_008'></div>
                  <div className='lorems'>Lorem ipsum dolor sit Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</div>
                </div>
                <div className='p-absolute w-173 h-269 left-650 top-1747'>
                  <div className=''><img src={Group1091} alt="" /></div>
                  <div className='blue_009'></div>
                  <div className='lorems'>Lorem ipsum dolor sit Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</div>
                </div>
                <div className='p-absolute w-173 h-269 left-847 top-1747'>
                  <div className=''><img src={Group1091} alt="" /></div>
                  <div className='blue_010'></div>
                  <div className='lorems'>Lorem ipsum dolor sit Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</div>
                </div>
              </div>
              <div>
                <div className=' p-absolute w-286 h-105 left-59 top-2108 cursor-pointer'>
                  <img src={Frame_LOOT} alt="" />
                </div>
                <div className='p-absolute w-402 h-313 left-414 top-2059 font f-size l-height'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</div>
                <div className='p-absolute w-286 h-290 left-800 top-2000 Chest1'></div>
              </div>
              <div className='p-absolute w-793 h-578 left-1059 top-1660 image8'></div>
            </div>
          </div>
          <div className='group925 bg-cover bg-center mt '>
            <div className='md:max-w-1064 container mx-auto'>
              <div className='p-absolute w-793 h-578 left-40 top-2275 image8 '></div>
              <div className='group1059 p-absolute w-1010 h-269 left-847 top-2310 flex justify-end items-center'>
                <div className='p-absolute w-793 h-214 flex flex-col justify-start  font f-size-18 l-height-22'>
                  <div>Play to Earn:</div>
                  The economic activity of SpaceY2025 currently relies on two functions - fighting and upgrading. A combat requires players to obtain several turrets (NFTs) in order to proceed. The game will give players 15 free turrets which are not NFTs to allow players “free to play”.
                  Players will receive an in-game resource, “gMars”, as the reward for defeating a wave of enemies. gMars can be converted to MetaMars. After that, players can claim their MetaMars to wallets as actual tokens. SpaceY 2025 has a leaderboard mechanism that rewards the highest ranked players with a certain amount of SPAY tokens every month.
                </div>
              </div>
              <div className='group1060 p-absolute w-980 h-222 left-847 top-2600 flex  items-center'>
                <div className='ml-20 mr-30'>
                  <div className='flex items-center'>
                    <img src={spacey20251} alt="" className='b-radius' />
                    <span className='font f-size l-height ml-20'>SPAY</span>
                  </div>
                  <div className='flex items-center mt-20'>
                    <img src={Group978} alt="" />
                    <span className='font f-size l-height ml-20'>MetaMars</span>
                  </div>
                </div>
                <div className='flex flex-col justify-start  font f-size-18 l-height-22'>
                  <div>These are two tokens of SpaceY 2025: </div>
                  <div>SPAY & MetaMars</div>
                  <div className='mt-20'>SPAY is a MetaSpace governance token. It allows majority holders to have DAO voting rights. It is used to purchase NFTs in SpaceY 2025. </div>
                  <div className='mt-20'>MetaMars is a Token used in SpaceY 2025 for Turret evolution and other features coming in the future. Players are able to obtain MetaMars by defeating waves of aliens in tower defense mode.</div>
                </div>
              </div>
            </div>
          </div>
          <div className='flex flex-row justify-between ml-40 mr-30 items-center'> 
            <div className='flex flex-col w-663 '>
              <div className='blue w-435 h-171'><img src={SpaceYLogo_blue} alt="" /></div>
              <div className='mt-40'>© 2022 FEROX ADVANCED VEHICLES CORPORATION <br />
                TERMS & CONDITIONS PRIVACY POLICY WEBSITE BY HUMAAN</div>
            </div>
            <div className=''>
              <div>Subscribe to Our Newsletter</div>
              <div>Email*</div>
              <div><input type="text" /></div>
              <div><button>Submit</button></div>
              {/* <div>Please input the correct email</div> */}
            </div>
            <div className='follow'>
              <div>Follow Us On:</div>
              <div className='flex flex-row'>
                <div className='w-20 h-20 b-radius b-757575 flex justify-center items-center cursor-pointer'>
                  <a target="_blank" href="https://discord.com/invite/cUeNS8UzGW" rel="noreferrer"><b>in</b></a>
                </div>
                <div className='w-20 h-20 b-radius b-757575 flex justify-center items-center cursor-pointer'>
                  <a target="_blank" href="https://discord.com/invite/cUeNS8UzGW" rel="noreferrer"><b>in</b></a>
                </div>
                <div className='w-20 h-20 b-radius b-757575 flex justify-center items-center cursor-pointer'>
                  <a target="_blank" href="https://discord.com/invite/cUeNS8UzGW" rel="noreferrer">
                    <i className='social-icon twitter'></i>
                  </a>
                </div>
              </div>
            </div>
            <div>
              123-456-7890 <br />
              Info@mysite.com <br />
              500 Terry Francois St <br />
              San Francisco, CA 94158
            </div>
          </div>
        </div>
      }

      {/* <Footer isFullscreen />  */}
    </div>
  )
}



export default React.memo(HomePage)

