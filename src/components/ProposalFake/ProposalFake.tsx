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

const FakeProposalPage = (props: Props) => {
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
  useEffect(() => {
    if (!proposal && proposalId) {
      onFetchProposal(proposalId)
    }
  }, [proposal, proposalId, onFetchProposal])

  useEffect(() => {
    if (wallet) {
      const options: VotingPowerFetchParams = {
        address: wallet.address,
      }
      onFetchVotingpower(options)
    }
  }, [wallet, onFetchVotingpower])
  // useEffect(() => {
  //   if (proposal) {

  //     onFetchVotes(proposal)
  //   }
  // }, [proposal, onFetchVotes])


  const handlePollonClick = useCallback(() => onNavigate(locations.proposals()), [
    onNavigate
  ])

  const handleOnvote = (choice: number) => {
    const voteMsg = JSON.stringify({
      ...generatePayloadData(),
      type: SnapshotCommand.VOTE,
      payload: {
        proposal: proposalId,
        choice: choice,
      },
    })
    onCastVote(voteMsg)
  }

  let userVp = 0
  if (votingpower && wallet?.address) {
    for (const vp of votingpower) {
      
      for (const vpPerContract of Object.values(vp)){
        userVp+=vpPerContract || 0
      }

    }
  }
  let voted = false
  if (votes && wallet?.address) {
    voted = UserVoted(votes, wallet.address)
  }
  


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
                <div className='flex justify-center flex-row items-center px-2 text-2xl box'><div>Change on Token Release Date</div></div>
              </div>
            </div>
            <div className='flex mt-29 container md:max-w-1064 mx-auto px-10'>
              {/* <span className='outactive px-3 flex justify-center content-center items-center'><div>{proposal.state}</div></span> */}
              <span className='outactive px-3 flex justify-center content-center items-center'><div>upcoming</div></span>
              {/* <span className='outpoll px-2 flex justify-center content-center items-center'>POLL</span> */}
            </div>
            <div className='container md:max-w-1064 mx-auto flex ui grid '>
              <div className='rows flex mt-31'>
                <div className='body-left mx-6  '>
                  {/* <p>{proposal.body}</p> */}
                 
<div className='text-3xl'>
Voting Target
</div>
<p>Spay release date</p>
<br />
<div className='text-3xl'>Voting Options</div>
<p>
 Yes: Unlock SPAY earlier (from 3/01/2022，36% of Total SPAY about 9M SPAY within one year).</p>
 <p>
 No: Lock SPAY as planned (locked till one of exchanges get listed: Binance, Houbi, Coinbase, FTX）
</p>
<br />
<div className='text-3xl'>
Voting Weights (VP=Voting Power)</div>
<div>
<div>
 1 SPAY = 1 VP
 </div>
 <div>
 1 Land = 600 VP</div>
 <div>
 1 Boarding Pass = 1500 VP</div>
 <div>
 1 NFT  6 VP
 </div>
 </div>
 <br />
<div className='text-3xl'>
Snapshot time (keep SPAY {"&"} NFT in your wallet) </div><div>
 FEB 16/22 00:00 UTC
</div>
<br />
<div className='text-3xl'>
 Voting time</div>
<div>2/16/22 0:00 (UTC)-
2/22/22 0:00 (UTC)

{/* Results announcement: 2/22/: 0:00 (UTC) */}

</div>
                </div>
                <div className='body-right'>
                  <div className='right-top mx-6 px-3'>
                    <div><div>CURRENT RESULT</div></div>
                    {/* {
                    proposal.choices.map(
                      (choice,index)=>{
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
                      <div className='text-1xl'>Yes</div>
                      <div>
                        <div className='message'>0%</div>
                        <div className='progress progress--status-0'><div className='progress--bar' style={{ width: "0%" }}></div></div>
                        <div>0 VP (0 votes)</div>
                      </div>
                    </div>
                    <div className='mt-30' >
                      <div className='text-1xl'>No</div>
                      <div>
                        <div className='message'>0%</div>
                        <div className='progress progress--status-0'><div className='progress--bar' style={{ width: "0%" }}></div></div>
                        <div>0 VP (0 votes)</div>
                      </div>
                    </div>
                  </div>
                  <div className='right-main flex flex-col mx-6 px-3 mb-30'>
                    {/* {
                      proposal.choices.map(
                        (choice, index) => {
                          return <div className='mt-29'><button disabled className='ui button ChoiceButton ChoiceButton--status-0 ' onClick={() => {
                            handleOnvote(index + 1)
                          }}>Vote {choice}</button></div>

                        }
                      )
                    } */}
                    <div className='mt-29'><button disabled className='ui button ChoiceButton ChoiceButton--status-0 ' >Vote Yes</button></div>
                    <div className='mt-29'><button disabled className='ui button ChoiceButton ChoiceButton--status-0 ' >Vote No</button></div>
                    <div className='mt-29 mb-30'>
                      {/* {voted ? <div>Voted with <span></span>{wallet ? userVp : "--"} VP</div>
                        :
                        <div>Vote with <span></span>{wallet ? userVp : "--"} VP</div>
                      } */}
                      <div>Vote with <span></span>{Math.floor( userVp)} VP</div>
                    </div>
                  </div>
                  <div className='right-bottom mx-6 px-3 '>
                    <div className='mt-29'>DETAILS</div>
                    <div className='flex justify-between md:justify-between flex-row md:flex-row mt-29'>
                      <div>Created by</div>
                      {/* <a href=""><img src="" alt="" /> {proposal.author.substring(0, 2) + '...' + proposal.author.substring(38)}</a> */}
                      {/* <a href=""><img src="" alt="" /> 0x...3265</a> */}
                      <a href=""><img src="" alt="" /> ---------</a>

                    </div>
                    <div className='flex justify-center md:justify-between flex-col md:flex-row mt-29'>
                      <div>StartAt</div>
                      {/* <div>{proposal.start}</div>s */}
                      <div>{"2022-2-16 0:00:00"}</div>
                    </div>
                    <div className='flex justify-center md:justify-between flex-col md:flex-row mt-29'>
                      <div>EndAt</div>
                      {/* <div>{proposal.end}</div> */}
                      <div>{"2022-2-22 0:00:00"}</div>
                    </div>
                    <div className='flex justify-center md:justify-between flex-col md:flex-row mt-29 mb-30'>
                      <div>Snapshot</div>
                      {/* <div>{proposal.snapshot}</div> */}
                      <div>--------</div>
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

export default React.memo(FakeProposalPage)
