import React, { useEffect, useState } from 'react'
import { Navbar } from '../Navbar'
import { Footer } from '../Footer'
import { Props } from './CommunityPage.type'
import { UserRankFetchParams } from '../../modules/rank/types'
import arrowIcon from '../../images/ic_icon@2x.png'
import building from '../../images/Building04.png'
import select04 from '../../images/Select a file name for output files_Camera 1_004.png'
import select09 from '../../images/Select a file name for output files_Camera 1_009.png'
import select24 from '../../images/Select a file name for output files_Camera 2_004.png'
import select29 from '../../images/Select a file name for output files_Camera 2_009.png'

import './CommunityPage.css'

const CommunityPage = (props: Props) => {
  const {
    proposal,
    wallet,
    isLoading,
    onFetchProposal,
    proposalId
  } = props
  useEffect(() => {
    if (!proposal && proposalId) {
      onFetchProposal(proposalId)
    }
  }, [proposal, proposalId, onFetchProposal])

  console.log(proposal);
  

  const [voting, setVoting] = useState(true)
  const [select, setSelect] = useState(false)


  const handleVotingonClick = () => {
    setVoting(!voting)
    console.log(voting);
  }
  const handleSelectonClick = () => {
    setSelect(!select)
  }
  return (
    <div className='bg-spacey-heavy'>
      <Navbar isFullscreen />
      {
        voting ? <div>
          <div className='mt-33 container  md:max-w-1064 mx-auto'>
            <div className='flex flex-row text-4xl md:text-6xl'>
              <div className='mr-9 '>DOA</div>
              <div className='w-8 md:w-12'>
                <img src={arrowIcon} alt="arrow icon" />
              </div>
            </div>
          </div>
          <div className='gradientBackgroundFull my-5'>
            <div className='container mx-auto py-5 flex  justify-center md:justify-between flex-col md:flex-row gap-x-2  w-11/12 md:w-full md:max-w-1064 '>
              <div className='text-2xl '>The virtual world in your hands.</div>
              <div className='text-center text-2xl gap-2  px-11 py-1 rounded-xl bg-spacey-leaderboard-button hover:bg-spacey-leaderboard-button-highlight cursor-pointer' onClick={handleVotingonClick}>
                <div>START VOTING</div>
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
        </div> : <div>
          <div className='mt-34 container  md:max-w-1064 mx-auto'>
          </div>
          <div className='gradientBackgroundFull my-5 '>
            <div className='container mx-auto py-5 flex justify-center md:justify-between flex-col md:flex-row gap-x-2  w-11/12 md:w-full md:max-w-1064 '>
              <div className='text-1xl flex  justify-center content-center items-center'>
                <div className='mr-8 cursor-pointer font-size-color'>Proposals</div>
                <div className='cursor-pointer font-size-color'>Voting Power</div>
              </div>
              <div className='text-center text-2xl gap-2  px-11 py-1 rounded-xl bg-spacey-leaderboard-button hover:bg-spacey-leaderboard-button-highlight cursor-pointer'>
                <div>START VOTING</div>
              </div>
            </div>
          </div>
          <div className='gradientBackgroundFull my-5 container  md:max-w-1064 mx-auto br-33'>
            <div className='container mx-auto py-5 '>
              <div className='flex  justify-center content-center items-center md:justify-between flex-col md:flex-row gap-x-2  w-11/12 md:w-full md:max-w-1064 '>
                <div className='flex justify-center content-center items-center  flex-col md:flex-row   md:max-w-1064'>
                  <div className=' background-e78f32 bor-d'></div>
                  <div>
                    <div className='text-2xl'>Poll</div>
                    <div className='text-1xl'>Ask community members for their opinion on an issue or topic.</div>
                  </div>
                </div>
                <div className='selectrel'>
                  <div className='gradientBackgroundFull my-5 w-60 flex br-33 cursor-pointer ' onClick={handleSelectonClick}>
                    <div className='px-5 py-1 '>ALL OUTCOMES</div>
                    <div className={select ? 'icon-d3' : 'icon-z3'}></div>
                  </div>
                  <div className={select ? 'selectabs dis-li' : 'selectabs dis-li active'} >
                    <li className='cursor-pointer'>ALL OUTCOMES</li>
                    <li className='cursor-pointer'>ACTIVE OUTCOMES</li>
                    <li className='cursor-pointer'>FINISHED OUTCOMES</li>
                    <li className='cursor-pointer'>PASSED OUTCOMES</li>
                    <li className='cursor-pointer'>REJECTED OUTCOMES</li>
                    <li className='cursor-pointer'>ENACTED OUTCOMES</li>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='container  md:max-w-1064 mx-auto'>
            <div className='outcomes br-33  hover:bg-spacey-leaderboard-button-highlight cursor-pointer mt-30'>
              <div className='px-9 py-2'>
                <div className='text-2xl'>Third Party Wearables submission fees</div>
                <div className='mt-29'>Leading: 3. Slot Price: USD 500 / Commission for Curators: USD 50</div>
                <div className='mt-29'>
                  <span className='outactive px-3 '>ACTIVE</span>
                  <span className='outpoll px-2'>POLL</span>
                  <span>Ends in 7 days</span>
                </div>
              </div>
            </div>
            <div className='outcomes br-33  hover:bg-spacey-leaderboard-button-highlight cursor-pointer mt-29'>
              <div className='px-9 py-2'>
                <div className='text-2xl'>Third Party Wearables submission fees</div>
                <div className='mt-29'>Leading: 3. Slot Price: USD 500 / Commission for Curators: USD 50</div>
                <div className='mt-29'>
                  <span className='outactive px-3 '>ACTIVE</span>
                  <span className='outpoll px-2'>POLL</span>
                  <span>Ends in 7 days</span>
                </div>
              </div>
            </div>
            <div className='outcomes br-33  hover:bg-spacey-leaderboard-button-highlight cursor-pointer mt-29'>
              <div className='px-9 py-2'>
                <div className='text-2xl'>Third Party Wearables submission fees</div>
                <div className='mt-29'>Leading: 3. Slot Price: USD 500 / Commission for Curators: USD 50</div>
                <div className='mt-29'>
                  <span className='outactive px-3 '>ACTIVE</span>
                  <span className='outpoll px-2'>POLL</span>
                  <span>Ends in 7 days</span>
                </div>
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

