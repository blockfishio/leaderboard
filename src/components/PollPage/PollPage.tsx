import React, { useEffect, useState } from 'react'
import { Navbar } from '../Navbar'
import { Footer } from '../Footer'
import { Props } from './PollPage.type'
import { UserRankFetchParams } from '../../modules/rank/types'


import './PollPage.css'
import { ProposalsFetchParams } from '../../modules/proposal/types'

const PollPage = (props: Props) => {
  const {
    proposals,
    wallet,
    isLoading,
    onFetchProposals,
  } = props
  useEffect(() => {
    const option: ProposalsFetchParams = {
      first: 5,
      skip: 0,
      state: ''
    }
    onFetchProposals(option)
  }, [onFetchProposals])

   console.log(proposals);


  const [top, setTop] = useState(true)


  const handleToponClick = () => {
    setTop(!top)

  }
  

  return (
    <div className='bg-spacey-heavy'>
      <Navbar isFullscreen />
      <div>
        <div className='mt-34 container  md:max-w-1064 mx-auto'>
        </div>
        <div className='gradientBackgroundFull my-5 '>
          <div className='container mx-auto py-5 flex justify-center md:justify-between flex-col md:flex-row gap-x-2  w-11/12 md:w-full md:max-w-1064 '>
            <div className='text-1xl flex  justify-center content-center items-center'>
              <div className={top ? 'mr-8 cursor-pointer font-size-color action' : 'mr-8 cursor-pointer font-size-color'} onClick={handleToponClick}>Proposals</div>
              <div className={top ? 'cursor-pointer font-size-color' : 'cursor-pointer font-size-color action'} onClick={handleToponClick}>Voting Power</div>
            </div>
            <div className='text-center text-2xl gap-2  px-11 py-1 rounded-xl bg-spacey-leaderboard-button hover:bg-spacey-leaderboard-button-highlight cursor-pointer'>
              <div>START VOTING</div>
            </div>
          </div>
        </div>
        {
          top ? <div>
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
                  {/* <div className='selectrel'>
                 <div className='gradientBackgroundFull my-5 w-60 flex br-33 cursor-pointer ' onClick={handleSelectonClick}>
                   <div className='px-5 py-1 '>ALL OUTCOMES</div>
                   <div className={select ? 'icon-d3' : 'icon-z3'}></div>
                 </div>
                 <div className={select ? 'selectabs dis-li' : 'selectabs dis-li active'}>
                   <li className='cursor-pointer'>ALL OUTCOMES</li>
                   <li className='cursor-pointer'>ACTIVE OUTCOMES</li>
                   <li className='cursor-pointer'>FINISHED OUTCOMES</li>
                   <li className='cursor-pointer'>PASSED OUTCOMES</li>
                   <li className='cursor-pointer'>REJECTED OUTCOMES</li>
                   <li className='cursor-pointer'>ENACTED OUTCOMES</li>
                 </div>
               </div> */}
                  <div className='gradientBackgroundFull my-5 w-60 flex br-33 '>
                    {/*  onChange={handleSeasonClick} */}
                    <select className="bg-spacey-leaderboard-grey px-5 py-1  w-50 br-33" >
                      <option value="1" className='selectabs dis-li cursor-pointer'>ALL OUTCOMES</option>
                      <option value="1" className='cursor-pointer'>ACTIVE OUTCOMES</option>
                      <option value="1" className='cursor-pointer'>FINISHED OUTCOMES</option>
                      <option value="1" className='cursor-pointer'>PASSED OUTCOMES</option>
                      <option value="1" className='cursor-pointer'>REJECTED OUTCOMES</option>
                      <option value="1" className='cursor-pointer'>ENACTED OUTCOMES</option>
                      {/* <option value="2">2</option> */}
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className='container  md:max-w-1064 mx-auto'>
               {
                 Object.keys(proposals).map(
                   (key)=>{
                     const proposal=proposals[key]
                     return (
                     <div key={proposal.id} className='outcomes br-33  hover:bg-spacey-leaderboard-button-highlight cursor-pointer mt-30'>
                     <div className='px-9 py-2'>
                       <div className='text-2xl'>{proposal.title}</div>
                       {/* <div className='mt-29'>Leading: 3. Slot Price: USD 500 / Commission for Curators: USD 50</div> */}
                       <div className='mt-29'>
                         <span className='outactive px-3 '>{proposal.state}</span>
                         {/* <span className='outpoll px-2'>POLL</span> */}
                         <span>Ends:{proposal.end}</span>
                       </div>
                     </div>
                   </div>)

                   }
                 )


               }



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
          </div> : null
        }
      </div>
      <Footer isFullscreen />
    </div>
  )
}



export default React.memo(PollPage)

