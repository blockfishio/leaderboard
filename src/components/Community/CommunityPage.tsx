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
import { t } from 'decentraland-dapps/dist/modules/translation/utils'
import './CommunityPage.css'
import { locations } from '../../modules/routing/locations'
import { Loader, Page } from 'decentraland-ui'


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

const CommunityPage = (props: Props) => {
  const {
    wallet,
    isLoading,
    onNavigate,
  } = props



  const handCreate = useCallback(() => onNavigate(locations.pollPage()), [
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
                  <div className='text-3xl'>What is the Decentraland DAO?</div>
                  <div className='mt-31 font-size'>DAO stands for "Decentralized Autonomous Organization". The De-centraland DAO owns the most important smart contracts and assets
                    that make up Decentraland – the LAND Contract, the Estates Contract,
                    Wearables, Content Servers and the Marketplace. It also owns a sub-stantial purse of MANA which allows it to be truly autonomous as well
                    as subsidize various operations and initiatives throughout Decen-traland.</div>
                </div>
                <div ><img src={building} alt="Build icon" /></div>
              </div>
              <div className='flex flex-row justify-center container md:justify-between'>
                <div ><img src={select04} alt="select icon" /></div>
                <div className='flex flex-col'>
                  <div className='text-3xl'><div>Why has the DAO been created?</div><div>How is it relevant to me?</div></div>
                  <div className='mt-31 font-size'>Decentraland is the first fully decentralized virtual world. It was always
                    part of the original vision to hand over control to the people who
                    create and play in this virtual space. In short – you, the users. Through
                    the DAO, you are in control of the policies created to determine how
                    the world behaves: for example, what kinds of wearable items are al-lowed (or disallowed) after the launch of the DAO, moderation of
                    content, LAND policy and auctions, among others.</div>
                </div>
              </div>
              <div className='flex flex-row justify-center container md:justify-between mt-31'>
                <div className='flex flex-col'>
                  <div className='text-3xl'>How does the DAO work?</div>
                  <div className='mt-31 font-size'>The community will propose and vote on policy updates, future LAND
                    auctions, whitelisting of NFT contracts to be allowed inside the World,
                    Builder and Marketplace, and whatever the community deems relevant.
                    Voting takes place on the Decentraland DAO's governance interface,
                    powered by Aragon.</div>
                </div>
                <div><img src={select09} alt="select icon" /></div>
              </div>
              <div className='flex flex-row justify-center container md:justify-between mt-31'>
                <div className='flex flex-col'>
                  <div className='text-3xl'>What kinds of things will you get to determine?</div>
                  <div className='mt-31 font-size'>
                    <div className='flex items-center'>
                      <div className='background-e78f32 bor-rediuo '></div>
                      <div>Over the coming year we’ll be scheduling votes to decide on a rangeof issues, including (but not limited to)</div>
                    </div>
                    <div className='mt-30 flex items-center'>
                      <div className=' background-e78f32 bor-rediuo '></div>
                      <div>Upgrading LAND and Estates to add more features and protocol up-grades</div>
                    </div>
                    <div className='mt-30 flex items-center'>
                      <div className=' background-e78f32 bor-rediuo '></div>
                      <div>Specifics and dates of future LAND auctions.</div>
                    </div>
                    <div className='mt-30 flex items-center'>
                      <div className=' background-e78f32 bor-rediuo '></div>
                      <div>Size of marketplace fees, which are always in MANA that gets burnt.</div>
                    </div>
                    <div className='mt-30 flex items-center'>
                      <div className=' background-e78f32 bor-rediuo '></div>
                      <div>Primary sale fees, which are always in MANA that gets burnt.</div>
                    </div>
                    <div className='mt-30 flex items-center'>
                      <div className=' background-e78f32 bor-rediuo '></div>
                      <div>Addition and replacement of community-run content servers.</div>
                    </div>
                    <div className='mt-30 flex items-center'>
                      <div className=' background-e78f32 bor-rediuo '></div>
                      <div>Allocation of MANA grants to development efforts.</div>
                    </div>
                    <div className='mt-30 flex items-center'>
                      <div className=' background-e78f32 bor-rediuo '></div>
                      <div>Addition of new wearables to the Decentraland World, Builder and
                        Marketplace.</div>
                    </div>
                    <div className='mt-30 flex items-center'>
                      <div className=' background-e78f32 bor-rediuo '></div>
                      <div>Replacing members of the Security Council.</div>
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
                  <div className='text-3xl'>What about MANA?</div>
                  <div className='mt-31 font-size '>MANA has already been fully decentralized, in the sense that the private key that
                    con-trolled its smart contract has been thrown away</div>
                </div>
                <div></div>
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
      {!isLoading ?
        <Page className='ProposalPage' isFullscreen >
          <NotFound />
        </Page>
        : null}
      <Footer isFullscreen />
    </div>
  )
}



export default React.memo(CommunityPage)

