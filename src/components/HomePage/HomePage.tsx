import React, { useEffect, useState, useCallback } from 'react'

import { Navbar } from '../Navbar'
// import { Footer } from '../Footer'
import { blue_006, Logo, Group1090, image8, blue_011, blue_007, blue_010, blue_008, blue_009, spacey20251 } from '../../images/blue'
import { Select_01, Select_02, Select_03, Select_04, Select_05, Frame_LAND, Frame_LOOT, Chest1, Group978 } from '../../images/blue'
import { SpaceYLogo_floor } from '../../images/blue'
import { Props } from './HomePage.types'
import './HomePage.css'
// import { t } from 'spacey-dapps/dist/modules/translation/utils'
// import { Loader, Page } from 'spacey-ui'
import { locations } from '../../modules/routing/locations'


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
    <>
      <Navbar isFullscreen />
      <div>
        <div className='bg-spacey-image-lg lg:bg-spacey-image-lg md:bg-center overflow-hidden bg-cover'>
          <div className=' md:max-w-1280 container mx-auto md:mt-20'>
            {/* //text-center */}
            <div className=' text-6xl mt-28 '>MARS &<br /> BLOCKCHAIN</div>
            <div className='text-2xl mt-10'>COLONIZING MARS WITH THE<br /> POWER OF BLOCK CHAIN</div>
            <div><img src={Logo} alt="" /></div>
            <div className='text-2xl'>An awesome tower defense game that offers a rich<br /> gaming experience with multiple opportunities to earn<br /> money</div>
            <div className='mt-20 my-20 cursor-pointer'><img src={Group1090} alt="" /></div>
          </div>
        </div>
        <div className='bg-group-image-lg lg:bg-group-image-lg  overflow-hidden bg-cover mt-2 '>
          <div className='md:max-w-1280 container mx-auto mt-8 flex flex-row justify-center items-center'>
            <div className=''><img src={image8} alt="" /></div>
            <div className='flex flex-col mx-5 '>
              <div className='flex flex-row mt-5 '>
                <div className=' bg-group1091-image  overflow-hidden bg-no-repeat w-48 h-72 flex flex-col justify-center items-center'>
                  <div><img src={blue_006} alt="" /></div>
                  <div className='w-40 text-center mt-6'>Lorem ipsum dolor sit Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</div>
                </div>
                <div className=' bg-group1091-image  overflow-hidden bg-no-repeat w-48 h-72 flex flex-col items-center'>
                  <div ><img src={blue_007} alt="" /></div>
                  <div className='w-40 text-center '>Lorem ipsum dolor sit Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</div>
                </div>
                <div className=' bg-group1091-image  overflow-hidden bg-no-repeat w-48 h-72 flex flex-col  items-center'>
                  <div><img src={blue_008} alt="" /></div>
                  <div className='w-40 text-center mt-1'>Lorem ipsum dolor sit Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</div>
                </div>
                <div className=' bg-group1091-image  overflow-hidden bg-no-repeat w-48 h-72 flex flex-col  items-center'>
                  <div className='w-40 h-36'><img src={blue_009} alt="" /></div>
                  <div className='w-40 text-center mt-1'>Lorem ipsum dolor sit Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</div>
                </div>
                <div className=' bg-group1091-image  overflow-hidden bg-no-repeat w-48 h-72 flex flex-col items-center'>
                  <div><img src={blue_010} alt="" /></div>
                  <div className='w-40 text-center mt-1'>Lorem ipsum dolor sit Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</div>
                </div>
              </div>
              <div className='flex flex-row justify-center items-center'>
                <div><img src={blue_011} alt="" /></div>
                <div className='md:w-80 mx-10'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</div>
                <div className='cursor-pointer'><img src={Frame_LAND} alt="" /></div>
              </div>
            </div>
          </div>
        </div>
        <div className='bg-group1071-image-lg lg:bg-group1071-image-lg overflow-hidden bg-cover  '>
          <div className='md:max-w-1280 container mx-auto mt-8 flex flex-row justify-center items-center'>
            <div className='flex flex-col mx-5 '>
              <div className='flex flex-row mt-5 '>
                <div className=' bg-group1091-image  overflow-hidden bg-no-repeat w-48 h-72 flex flex-col items-center'>
                  <div><img src={Select_01} alt="" /></div>
                  <div className='w-40 text-center mt-4'>Lorem ipsum dolor sit Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</div>
                </div>
                <div className=' bg-group1091-image  overflow-hidden bg-no-repeat w-48 h-72 flex flex-col items-center'>
                  <div ><img src={Select_02} alt="" /></div>
                  <div className='w-40 text-center '>Lorem ipsum dolor sit Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</div>
                </div>
                <div className=' bg-group1091-image  overflow-hidden bg-no-repeat w-48 h-72 flex flex-col  items-center'>
                  <div><img src={Select_03} alt="" /></div>
                  <div className='w-40 text-center mt-3'>Lorem ipsum dolor sit Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</div>
                </div>
                <div className=' bg-group1091-image  overflow-hidden bg-no-repeat w-48 h-72 flex flex-col  items-center'>
                  <div className='w-40 h-36'><img src={Select_04} alt="" /></div>
                  <div className='w-40 text-center mt-3'>Lorem ipsum dolor sit Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</div>
                </div>
                <div className=' bg-group1091-image  overflow-hidden bg-no-repeat w-48 h-72 flex flex-col items-center'>
                  <div><img src={Select_05} alt="" /></div>
                  <div className='w-40 text-center mt-3'>Lorem ipsum dolor sit Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</div>
                </div>
              </div>
              <div className='flex flex-row justify-center items-center'>
                <div className='cursor-pointer'><img src={Frame_LOOT} alt="" /></div>
                <div className='md:w-80 mx-10'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</div>
                <div className='w-52 h-52'><img src={Chest1} alt="" /></div>
              </div>
            </div>
            <div className=''><img src={image8} alt="" /></div>
          </div>
        </div>
        <div className='bg-group-image-lg lg:bg-group-image-lg  overflow-hidden bg-cover'>
          <div className='md:max-w-1280 container mx-auto mt-8 flex flex-row justify-center items-center'>
            <div className='mr-10'><img src={image8} alt="" /></div>
            <div className='flex flex-col '>
              <div className='  bg-group1059-image lg:bg-group1059-image overflow-hidden bg-no-repeat h-72 w-1010 flex justify-end items-center'>
                <div className='w-3/4'>Play to Earn:<br />
                  The economic activity of SpaceY2025 currently relies on two functions - fighting and upgrading. A combat requires players to obtain several turrets (NFTs) in order to proceed. The game will give players 15 free turrets which are not NFTs to allow players “free to play”.
                  Players will receive an in-game resource, “gMars”, as the reward for defeating a wave of enemies. gMars can be converted to MetaMars. After that, players can claim their MetaMars to wallets as actual tokens. SpaceY 2025 has a leaderboard mechanism that rewards the highest ranked players with a certain amount of SPAY tokens every month.</div>
              </div>
              <div className='h-60  bg-group1060-image lg:bg-group1059-image  overflow-hidden bg-no-repeat flex '>
                <div className='flex flex-col justify-center items-center ml-10 mr-16'>
                  <div className='flex items-center'>
                    <img src={spacey20251} alt="" className='rounded-full' />
                    <span className='text-2xl ml-4'>SPAY</span>
                  </div>
                  <div className='flex items-center mt-10'>
                    <img src={Group978} alt="" />
                    <span className='text-2xl ml-4'>MetaMars</span>
                  </div>
                </div>
                <div className='flex flex-col justify-start  '>
                  <div className='mt-5'>These are two tokens of SpaceY 2025: </div>
                  <div className='mt-5'>SPAY & MetaMars</div>
                  <div className='mt-5'>SPAY is a MetaSpace governance token. It allows majority holders to have DAO voting rights. It is used to purchase NFTs in SpaceY 2025. </div>
                  <div className='mt-5'>MetaMars is a Token used in SpaceY 2025 for Turret evolution and other features coming in the future. Players are able to obtain MetaMars by defeating waves of aliens in tower defense mode.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-row justify-around items-center pb-20'>
          <div className='flex flex-col '>
            <div className=''><img src={SpaceYLogo_floor} alt="" /></div>
            <div className=''>© 2022 FEROX ADVANCED VEHICLES CORPORATION <br />
              TERMS & CONDITIONS PRIVACY POLICY WEBSITE BY HUMAAN</div>
          </div>
          <div className=''>
            <div>Subscribe to Our Newsletter</div>
            <div className='mt-2'>Email*</div>
            <div className='mt-2 w-50 h-9     ' ><input className='w-full h-full rounded-md bg-gray-900 inp' type="text" /></div>
            <div className='mt-2 w-20 h-9'><button className='w-full h-full inp rounded-md cursor-pointer bg-gray-900'>Submit</button></div>
            {/* <div>Please input the correct email</div> */}
          </div>
          <div className=''>
            <div>Follow Us On:</div>
            <div className='flex flex-row mt-5'>
              <div className='w-8 h-8 bg-gray-400 rounded-full flex justify-center items-center '>
                <a target="_blank" href="https://discord.com/invite/cUeNS8UzGW" rel="noreferrer"><b className='text-black'>in</b></a>
              </div>
              <div className='w-8 h-8 bg-gray-400 rounded-full flex justify-center items-center ml-2'>
                <a target="_blank" href="https://discord.com/invite/cUeNS8UzGW" rel="noreferrer">
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 320 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path className='text-black' d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path></svg>
                </a>
              </div>
              <div className='w-8 h-8 bg-gray-400 rounded-full flex justify-center items-center ml-2'>
                <a target="_blank" href="https://discord.com/invite/cUeNS8UzGW" rel="noreferrer">
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path className='text-black' d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path></svg>
                </a>
              </div>
            </div>
          </div>
          <div>
            <div>123-456-7890 </div>
            <div className='mt-2'>Info@mysite.com </div>
            <div className='mt-2'>500 Terry Francois St</div>
            <div className='mt-2'>San Francisco, CA 94158</div>
          </div>
        </div>
      </div>
    </>
  )

}

export default React.memo(HomePage)
