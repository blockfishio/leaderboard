import React, { useCallback, useEffect, useState } from 'react'
import { Loader, Page } from 'decentraland-ui'
import { t } from 'decentraland-dapps/dist/modules/translation/utils'
import Returns from '../../images/DAO_04_04.jpg'
import { Navbar } from '../Navbar'
import { Footer } from '../Footer'

import { Props } from './ProposalFake.types'
import './ProposalFake.css'
import { locations } from '../../modules/routing/locations'
import { SnapshotCommand, VotingPowerFetchParams } from '../../modules/vote/types'
import { generatePayloadData, UserVoted } from '../../modules/vote/utils'

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

const ProposalFake = (props: Props) => {
  const {
    proposal,
    wallet,
    isLoading,
    votes,
    votingpower,
    onFetchProposal,
    onCastVote,
    onFetchVotes,
    onFetchVotingpower,
    proposalId,
    onNavigate,
  } = props
  // useEffect(() => {
  //   if (!proposal && proposalId) {
  //     onFetchProposal(proposalId)
  //   }
  // }, [proposal, proposalId, onFetchProposal])

  // useEffect(() => {
  //   if (proposal && wallet) {
  //     const options: VotingPowerFetchParams = {
  //       address: wallet.address,
  //       blocknumber: proposal.snapshot
  //     }
  //     onFetchVotingpower(options)
  //   }
  // }, [proposal, wallet, onFetchVotingpower])
  // useEffect(() => {
  //   if (proposal) {

  //     onFetchVotes(proposal)
  //   }
  // }, [proposal, onFetchVotes])


  const handlePollonClick = useCallback(() => onNavigate(locations.proposals()), [
    onNavigate
  ])

  // const handleOnvote = (choice: number) => {
  //   const voteMsg = JSON.stringify({
  //     ...generatePayloadData(),
  //     type: SnapshotCommand.VOTE,
  //     payload: {
  //       proposal: proposalId,
  //       choice: choice,
  //     },
  //   })
  //   onCastVote(voteMsg)
  // }

  // let userVp = 0
  // if (votingpower && wallet?.address) {
  //   for (const vp of votingpower) {
  //     console.log(vp)
  //     console.log(wallet.address)
  //     userVp += vp[wallet.address] || 0
  //   }
  // }
  // let voted = false
  // if (votes && wallet?.address) {
  //   voted = UserVoted(votes, wallet.address)
  // }
  return (
    <>
      <Navbar isFullscreen />
      {
        <div>
          <div className='ProposalDetailPage  mb-30'>
            <div className='mt-34 container  md:max-w-1064 mx-auto'></div>
            <div className='gradientBackgroundFull my-5 '>
              <div className='container py-2 md:max-w-1064 mx-auto flex items-center'>
                <div className='returns flex justify-center flex-row items-center cursor-pointer' onClick={handlePollonClick}><div className='arrow cursor-pointer'></div></div>
                {/* <div className='flex justify-center flex-row items-center px-2 text-2xl box'><div>{proposal.title}</div></div> */}
                <div className='flex justify-center flex-row items-center px-2 text-2xl box'><div>text</div></div>
              </div>
            </div>
            <div className='flex mt-29 container md:max-w-1064 mx-auto px-10'>
              {/* <span className='outactive px-3 flex justify-center content-center items-center'><div>{proposal.state}</div></span> */}
              <span className='outactive px-3 flex justify-center content-center items-center'><div>active</div></span>
              <span className='outpoll px-2 flex justify-center content-center items-center'>POLL</span>
            </div>
            <div className='container md:max-w-1064 mx-auto flex ui grid '>
              <div className='rows flex mt-31'>
                <div className='body-left mx-6  '>
                  {/* <p>{proposal.body}</p> */}
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                    enim ad minim veniam, quis nostrud exercitation ullamco laboris
                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                    enim ad minim veniam, quis nostrud exercitation ullamco laboris
                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                    enim ad minim veniam, quis nostrud exercitation ullamco laboris
                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <div className='body-right'>
                  <div className='right-top mx-6 px-3'>
                    <div><div>CURRENT RESULT</div></div>
                    {/* {
                      proposal.choices.map(
                        (choice, index) => {
                          return <div className='mt-30' key={index}>
                            <div className='text-1xl'>{choice}</div>
                            <div>
                              <div className='message'>0%</div>
                              <div className='progress progress--status-0'><div className='progress--bar' style={{ width: "23%" }}></div></div>
                              <div>0 VP (0 votes)</div>
                            </div>
                          </div>
                        }
                      )
                    } */}
                    <div className='mt-30' >
                      <div className='text-1xl'>c1</div>
                      <div>
                        <div className='message'>0%</div>
                        <div className='progress progress--status-0'><div className='progress--bar' style={{ width: "23%" }}></div></div>
                        <div>0 VP (0 votes)</div>
                      </div>
                    </div>
                    <div className='mt-30' >
                      <div className='text-1xl'>c1</div>
                      <div>
                        <div className='message'>0%</div>
                        <div className='progress progress--status-0'><div className='progress--bar' style={{ width: "23%" }}></div></div>
                        <div>0 VP (0 votes)</div>
                      </div>
                    </div>
                  </div>
                  <div className='right-main flex flex-col mx-6 px-3 mb-30'>
                    {/* {
                      proposal.choices.map(
                        (choice,index)=>{
                          return  <div className='mt-29'><button disabled className='ui button ChoiceButton ChoiceButton--status-0 ' onClick={ ()=>{
                            handleOnvote(index+1)
                          } }>Vote {choice}</button></div>

                        }
                      )
                    } */}
                    <div className='mt-29'><button disabled className='ui button ChoiceButton ChoiceButton--status-0'>Vote c1</button></div>
                    <div className='mt-29'><button disabled className='ui button ChoiceButton ChoiceButton--status-0'>Vote c2</button></div>

                    <div className='mt-29 mb-30'>
                      {/* {voted ? <div>Voted with <span></span>{wallet ? userVp : "--"} VP</div>
                        :
                        <div>Vote with <span></span>{wallet ? userVp : "--"} VP</div>
                      } */}
                      <div>Vote with <span></span>-- VP</div>
                    </div>
                  </div>
                  <div className='right-bottom mx-6 px-3 '>
                    <div className='mt-29'>DETAILS</div>
                    <div className='flex justify-between md:justify-between flex-row md:flex-row mt-29'>
                      <div>Created by</div>
                      {/* <a href=""><img src="" alt="" /> {proposal.author.substring(0, 2) + '...' + proposal.author.substring(38)}</a> */}
                      <a href=""><img src="" alt="" /> 0x...3265</a>
                    </div>
                    <div className='flex justify-center md:justify-between flex-col md:flex-row mt-29'>
                      <div>Started</div>
                      {/* <div>{proposal.start}</div> */}
                      <div>1643013000</div>
                    </div>
                    <div className='flex justify-center md:justify-between flex-col md:flex-row mt-29'>
                      <div>Ends</div>
                      {/* <div>{proposal.end}</div> */}
                      <div>1643444100</div>
                    </div>
                    <div className='flex justify-center md:justify-between flex-col md:flex-row mt-29 mb-30'>
                      <div>Snapshot</div>
                      {/* <div>{proposal.snapshot}</div> */}
                      <div>14661001</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      }





      {/* {isLoading ?

        <Page className='ProposalPage' isFullscreen >
          <Loading />
        </Page>
        : null}
      {!isLoading && !proposal ?
        <Page className='ProposalPage' isFullscreen >
          <NotFound />
        </Page>

        : null} */}
      <Footer isFullscreen />
    </>
  )
}

export default React.memo(ProposalFake)
