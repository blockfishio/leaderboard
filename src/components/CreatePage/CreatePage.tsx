import React, { useEffect, useState } from 'react'
import { Navbar } from '../Navbar'
import { Footer } from '../Footer'
import { Props } from './CreatePage.type'
import { UserRankFetchParams } from '../../modules/rank/types'


import './CreatePage.css'

const CreatePage = (props: Props) => {
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

  console.log(props);


  const [data, setData] = useState('')
  const [area, setArea] = useState('')

  const handleDataonChange = (e: any) => {
    setData(e.target.value)
  }
  const handleAreaonChange = (e: any) => {
    setArea(e.target.value)
  }

  return (
    <div className='bg-spacey-heavy'>
      <Navbar isFullscreen />
      {
        <div>
          <div className='mt-34 container  md:max-w-1064 mx-auto'></div>
          <div className='gradientBackgroundFull my-5'>
            <div className='container mx-auto py-5 flex  justify-center md:justify-between flex-col md:flex-row gap-x-2  w-11/12 md:w-full md:max-w-1064 '>
              <div className='text-4xl '>Create a community poll</div>
              <div className='text-center text-2xl gap-2  px-11 py-1 rounded-xl bg-spacey-leaderboard-button hover:bg-spacey-leaderboard-button-highlight cursor-pointer' >
                <div>SUBMIT A PROPOSAL</div>
              </div>
            </div>
          </div>
          <div className='my-5 container  md:max-w-1064 mx-auto '>
            <div className='mt-31'>
              <label className='text-3xl'>Title</label>
              <div className='mt-29 font-size'>The question you would like to ask the community.</div>
              <div>
                <div className='title mt-29'>
                  <input className='title-inp br-33 container py-3' type="text" placeholder='    Enter your question here' name='data' value={data} onChange={(e) => { handleDataonChange(e) }} />
                </div>
                <p className={data.length > 100 ? 'message mt-29 active' : 'message mt-29'}>{data.length < 100 ? '(' + data.length + 'out of 100 characters)' : 'Title field is too short(' + data.length + 'out of 100 characters)'}</p>
              </div>
            </div>
            <div className='mt-31'>
              <label className='text-3xl' htmlFor="">Description</label>
              <div className='mt-29 font-size'>A brief description of your question. Feel free to explain your motivation for polling the community, elaborate on
                the optional responses, or link to any relevant resources that might help inform voters.
              </div>
              <div>
                <div className='mt-29'>
                  <textarea name="" id="" placeholder='   A brief description of your question' className='textarea title-inp br-33 container py-3' value={area} onChange={(e) => { handleAreaonChange(e) }} ></textarea>
                </div>
                <p className={area.length > 100 ? 'message mt-29 active' : 'message mt-29'}>{area.length < 100 ? '(' + area.length + 'out of 7000 characters)' : 'Title field is too short(' + data.length + 'out of 7000 characters)'}</p>
              </div>
            </div>
            <div className='mt-31 w-80'>
              <label className='text-3xl'>Options</label>
              <div>
                <div className='mt-30'><input className='title-inp br-33 w-80  py-3' type="text" placeholder='  Vote option 1' /></div>
                <div className='mt-30'><input className='title-inp br-33 w-80 py-3'  type="text" placeholder='  Vote option 2' /></div>
              </div>
              <button></button>
            </div>
          </div>

        </div>
      }
      <Footer isFullscreen />
    </div>
  )
}



export default React.memo(CreatePage)

