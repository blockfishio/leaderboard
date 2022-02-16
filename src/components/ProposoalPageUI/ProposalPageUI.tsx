import React, { useCallback, useEffect, useState } from 'react'
import { Loader, Page } from 'decentraland-ui'
import { t } from 'decentraland-dapps/dist/modules/translation/utils'
import { Navbar } from '../Navbar'
import { Footer } from '../Footer'

import { Props } from './ProposalPageUI.types'
import './ProposalPageUI.css'
import { locations } from '../../modules/routing/locations'
import { SnapshotCommand, VoteSum, VotingPowerFetchParams } from '../../modules/vote/types'
import { generatePayloadData, getVPSum, UserVoted } from '../../modules/vote/utils'

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

const ProposalPage = (props: Props) => {
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
    if (proposal && wallet) {
      const options: VotingPowerFetchParams = {
        address: wallet.address,
        blocknumber: proposal.snapshot
      }
      onFetchVotingpower(options)
    }
  }, [proposal, wallet, onFetchVotingpower])
  useEffect(() => {
    if (proposal) {

      onFetchVotes(proposal)
    }
  }, [proposal, onFetchVotes])


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
      for (const v of Object.values(vp)) {
        userVp += v
      }
      // userVp+=vp[wallet.address] || 0
    }
  }

  let voted = false
  if (votes && wallet?.address) {
    voted = UserVoted(votes, wallet.address)
  }
  let vpSum: Record<number, VoteSum> = {}
  if (votes) {
    vpSum = getVPSum(votes)
  }
  let totalVp = 0
  for (const vp of Object.values(vpSum)) {
    totalVp += vp.vp
  }


  const sourceStr = `\nVoting Target\n    + Spay release date\n\nVoting Options\n    + Yes: Unlock SPAY earlier (from 3/01/2022，36% of Total SPAY about 9M SPAY within one year).\n    + No: Lock SPAY as planned (locked till one of exchanges get listed: Binance, Houbi, Coinbase, FTX）\n\nVoting Weights (VP=Voting Power)\n    + 1 SPAY = 1 VP\n    + 1 Land = 600 VP\n    + 1 Boarding Pass = 1500 VP\n    + 1 NFT 6 VP\n\nSnapshot time (keep SPAY & NFT in your wallet)\n    + FEB 16/22 00:00 UTC\n\nVoting time\n    + 2/16/22 0:00 (UTC)- 2/22/22 0:00 (UTC)`;
// console.log(sourceStr);

function formatHTMLBr(source: string) {
  return source.replace(new RegExp('\n','g'),'<br />')
} 

console.log(formatHTMLBr(sourceStr));

  return (
    <>
      <Navbar isFullscreen />
      {proposal ?
        <div>
          <div className='ProposalDetailPage  mb-30'>
            <div className='mt-34 container  md:max-w-1064 mx-auto'></div>
            <div className='gradientBackgroundFull my-5 '>
              <div className='container py-2 md:max-w-1064 mx-auto flex items-center'>
                <div className='returns flex justify-center flex-row items-center cursor-pointer' onClick={handlePollonClick}><div className='arrow cursor-pointer'></div></div>
                <div className='flex justify-center flex-row items-center px-2 text-2xl box'><div>{proposal.title}</div></div>
              </div>
            </div>
            <div className='flex mt-29 container md:max-w-1064 mx-auto px-10'>
              <span className='outactive px-3 flex justify-center content-center items-center'><div>{proposal.state}</div></span>
              {/* <span className='outpoll px-2 flex justify-center content-center items-center'>POLL</span> */}
            </div>
            <div className='container md:max-w-1064 mx-auto flex ui grid '>
              <div className='rows flex container mt-31'>
                <div className='body-left mx-6'>
                <div dangerouslySetInnerHTML={formatHTMLBr(proposal.body)}></div>

                  {
                    console.log(proposal.body, '换行')
                  }
                </div>
                <div className='body-right'>
                  <div className='right-top mx-6 px-3'>
                    <div><div>CURRENT RESULT</div></div>
                    {
                      proposal.choices.map(
                        (choice, index) => {
                          const percent = (totalVp > 0 ? (vpSum[index + 1]?.vp || 0) / totalVp : 0).toFixed(2) + "%"


                          return <div className='mt-30' key={index}>
                            <div className='text-1xl'>{choice}</div>
                            <div>
                              <div className='message'>{percent}</div>
                              <div className='progress progress--status-0'><div className='progress--bar' style={{ width: percent }}></div></div>
                              <div>{
                                (vpSum[index + 1]?.vp || 0).toString()
                              } VP ({
                                  (vpSum[index + 1]?.count || 0).toString()
                                } votes)</div>
                            </div>
                          </div>
                        }
                      )

                    }
                  </div>
                  <div className='right-main flex flex-col mx-6 px-3 mb-30'>
                    {
                      proposal.choices.map(
                        (choice, index) => {
                          return <div className='mt-29'><button className='ui button ChoiceButton ChoiceButton--status-0 ' onClick={() => {
                            handleOnvote(index + 1)
                          }}>Vote {choice}</button></div>

                        }
                      )
                    }
                    <div className='mt-29 mb-30'>
                      {voted ? <div>Voted with <span></span>{wallet ? userVp : "--"} VP</div>
                        :
                        <div>Vote with <span></span>{wallet ? userVp : "--"} VP</div>
                      }

                    </div>
                  </div>
                  <div className='right-bottom mx-6 px-3 '>
                    <div className='mt-29'>DETAILS</div>
                    <div className='flex justify-between md:justify-between flex-row md:flex-row mt-29'>
                      <div>Created by</div>
                      <a href={"https://bscscan.com/address/" + proposal.author} target="_blank" rel="noreferrer"><img src="" alt="" /> {proposal.author.substring(0, 2) + '...' + proposal.author.substring(38)}</a>
                    </div>
                    <div className='flex justify-center md:justify-between flex-col md:flex-row mt-29'>
                      <div>Started</div>
                      <div>{proposal.start}</div>
                    </div>
                    <div className='flex justify-center md:justify-between flex-col md:flex-row mt-29'>
                      <div>Ends</div>
                      <div>{proposal.end}</div>
                    </div>
                    <div className='flex justify-center md:justify-between flex-col md:flex-row mt-29 mb-30'>
                      <div>Snapshot</div>
                      <a href={"https://snapshot.org/#/space2025.eth/proposal/" + proposalId} target="_blank" rel="noreferrer">
                        <div>
                          {proposal.snapshot}
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        : null}





      {isLoading ?

        <Page className='ProposalPage' isFullscreen >
          <Loading />
        </Page>
        : null}
      {!isLoading && !proposal ?
        <Page className='ProposalPage' isFullscreen >
          <NotFound />
        </Page>

        : null}
      <Footer isFullscreen />
    </>
  )
}

export default React.memo(ProposalPage)
