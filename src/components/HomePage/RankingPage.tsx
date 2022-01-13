import React ,{useEffect, useState}from 'react'
import { fromWei } from 'web3x-es/utils'

import { Page } from 'decentraland-ui'
import { Navbar } from '../Navbar'
import { Footer } from '../Footer'
import {MdClose} from "react-icons/md"
import arrowIcon from '../../images/ic_icon@2x.png'
import infoIcon from '../../images/info@3x.png'
import mars from '../../images/mars.png'
import token from '../../images/token_rounded.png'
import {Props} from './RankingPage.types'
import './RankingPage.css'
import { RankFetchOptions,
  UserRankFetchParams,
  Ranking } from '../../modules/rank/types'
import { ClaimModal } from './ClaimModal'
import { InfoModal} from './InfoModal'

const HomePage = (props:Props) => {
  const {
    onFetchRankings,
    onFetchUserRanking,
    onClaimReward,
    rankings,
    wallet,
    rewards
  }=props
useEffect(()=>{
    const options:RankFetchOptions={
      params:{
        seasonID:1,
        topN:50

      }
    }
    onFetchRankings(options)

},[onFetchRankings])
useEffect(()=>{
  if(wallet && !rankings[wallet.address]){
    const params:UserRankFetchParams={
      seasonID:1,
      address:wallet.address
    }
    onFetchUserRanking(params)
  }

},[wallet,onFetchUserRanking])
  const [isClaimOpen, setClaimOpen] = useState(false)
  const [isInfoOpen, setInfoOpen] = useState(false)
  // const [claim, setClaim] = useState<MetaData>({type: "", claimable: 0, remaining: 0})
  const handleToggleClaimModal = () => {
    setClaimOpen(!isClaimOpen)
};
const handleToggleInfoModal = () => {
  setInfoOpen(!isInfoOpen)
};
const getLeadBoradData = () => {
  let totalRecords = 300
  let records = []
  for (let i = 1; i <= totalRecords; i++) {
    records.push({
      "rank": i, 
      "name": "ASDF dadsd", 
      "wallet": "******2345",
      "score": 1000000 - i, 
      "wave": Math.floor(100 - i / 10), 
      "token_rewards": 1000 -i, 
      "mars_rewards": 800 -i,
      "difficulty_level":i%8

    })
  }
  return records
}
const getRealLeadBoradData = (rankings:Record<string,Ranking>) => {
  const rankingArr=Object.values(rankings)
  let records = []
  for (let i = 0; i < rankingArr.length; i++) {
    if(rankingArr[i].Rank<=50 && rankingArr[i].Rank>0){
    records.push({
      "rank": rankingArr[i].Rank, 
      "name": rankingArr[i].Username.length==0?"Mars":rankingArr[i].Username.length, 
      // "name": "Mars", 

      "wallet": rankingArr[i].Address.substr(0,4)+"..."+rankingArr[i].Address.substr( rankingArr[i].Address.length-4,4),
      "score": rankingArr[i].Score, 
      "wave": rankingArr[i].BestWave, 
      "token_rewards": 1000 -i, 
      "mars_rewards": 800 -i,
      "difficulty_level":i%8
    })
  }}
  records.sort((a,b)=>(a.rank>b.rank)?1:((a.rank<b.rank)?-1:0))
  return records
}


let records=null;
  records = getRealLeadBoradData(rankings)
  // records = getLeadBoradData()

  const getAbberv=(address:string)=>{
    return address.substr(0,4)+"..."+address.substr( address.length-4,4)
  }



  let claims = {
    "spray": {
      type:"spray", 
      claimable: 9999, 
      remaining: 9999
    }, 
    "mars": {
      type:"mars", 
      claimable: 88888, 
      remaining: 8888
    }
  }

  const leaderBoardStyle = {
    "rank1": "bg-spacey-leaderboard-orange", 
    "rank2": "bg-spacey-leaderboard-orange-light", 
    "rank3": "bg-spacey-leaderboard-orange-lighter", 
    "rank_grey": "bg-spacey-leaderboard-grey",
    "rank_me": "bg-spacey-leaderboard-blue", 
  }

  const resizeFont = (rank: number) => {
    if (rank >= 1000 && rank < 100000) {
      return "text-xs tracking-tight py-3"
    } 
    if (rank >= 100000) {
      return "text-xs tracking-tighter py-3"
    }
  }

  const handleSeasonClick = (event:any) => {
    //output the option value 
    // console.log(event.target.value)
  }
  const getDifficulty = (level: number) => {
    switch(level){
      case 1: 
         return {
          "text": "VERY EASY", 
          "cssClass": "bg-spacey-leaderboard-very-easy"
         }
     case 2: 
         return {
          "text": "EASY", 
          "cssClass": "bg-spacey-leaderboard-easy"
         }
    case 3: 
         return {
          "text": "MEDIUM", 
          "cssClass": "bg-spacey-leaderboard-medium"
        }
    case 4: 
        return {
         "text": "HARD", 
         "cssClass": "bg-spacey-leaderboard-hard"
        }
    case 5: 
        return {
         "text": "VERY HARD", 
         "cssClass": "bg-spacey-leaderboard-very-hard"
        }
    case 6: 
        return {
         "text": "INSANE", 
         "cssClass": "bg-spacey-leaderboard-insane"
        }
    case 7: 
        return {
         "text": "IMPOSSIBLE", 
         "cssClass": "bg-spacey-leaderboard-impossible"
        }
    default: 
      return {
        "text": "VERY EASY", 
        "cssClass": "bg-spacey-leaderboard-very-easy"
      }
    }
  }
  const userRank={
    "rank":wallet?(rankings[wallet.address]?rankings[wallet.address].Rank:0):0, 
      "name": wallet?(rankings[wallet.address]?(rankings[wallet.address].Username.length>0?rankings[wallet.address].Username:"Guest"):"Guest"):"Guest", 
    "wallet":getAbberv( wallet?(rankings[wallet.address]?rankings[wallet.address]?.Address:"0x00000000000"):"0x0000000000"),
      "score": wallet?(rankings[wallet.address]?rankings[wallet.address].Score:0):0,
      "wave": wallet?(rankings[wallet.address]?rankings[wallet.address].BestWave:0):0,
      "total_rewards": wallet?(rewards[wallet.address]?(rewards[wallet.address].total["1"]?rewards[wallet.address].total["1"]:"0"):"0"):"0" ,
      "token_rewards": wallet?(rewards[wallet.address]?(rewards[wallet.address].claimable["1"]?rewards[wallet.address].claimable["1"]:"0"):"0"):"0" ,
      "mars_rewards": wallet?(rewards[wallet.address]?(rewards[wallet.address].remaining["1"]?rewards[wallet.address].remaining["1"]:"0"):"0"):"0" 
  }
  /**
   * 
   * @param index used to determine the style. rank1 = 0, rank2 = 1, rank3 = 2, me = -1
   * @param position 
   * @returns 
   */
  const getStyle = (index:Number, position:Number = 1) => {
    if (index === 0){
      if (position === 0) 
        return leaderBoardStyle["rank1"] + " rounded-tl-lg"
      else if (position === 2)
         return leaderBoardStyle["rank1"] + " rounded-tr-lg"
      else return leaderBoardStyle["rank1"]

    }
    if (index === 1)
        return leaderBoardStyle["rank2"];
    if (index === 2)
        return leaderBoardStyle["rank3"];
    if (index === -1)
        return leaderBoardStyle["rank_me"];
    else return leaderBoardStyle["rank_grey"];
  }
  return (
    <>
      <Navbar isFullscreen />
      {/* <Page className="SignInPage" isFullscreen> */}
      {
        records?
        <div>
      <div className="mt-32 container mx-auto md:max-w-1064  ">
        <div className="flex flex-col md:flex-row text-center justify-center md:justify-between gap-4 md:gap-0">
            <div className="flex flex-row font-bankgothic text-4xl md:text-6xl ">
              <div>Leader Board</div>
              <div className=" w-8 md:w-12">
              <img src={arrowIcon} 
              // layout="fill" 
              alt="arrow icon"/>
              </div>
            </div>
            <div className="flex flex-row font-bankgothic text-4xl md:text-5xl items-center  gap-4">
              <div>Claim</div>
              <div>
                <div className="flex flex-row bg-spacey-leaderboard-button hover:bg-spacey-leaderboard-button-highlight cursor-pointer px-4 py-2  rounded-xl jutisfy-between gap-2  items-center"  onClick={(event) => {
                  // setClaim(claims['spray']);
                   setClaimOpen(true);
                  }}> 
                   <div className="w-4 md:w-8">
                     <img
                      src={token} 
                      // layout="responsive" 
                      alt="token Rounded" />
                     </div>
                   <div className="text-base">SPAY</div>
                 </div>
              </div>
             
            </div>
        </div>
      </div>
      <div className="gradientBackgroundFull my-5" >
        <div className="container mx-auto py-5 flex flex-col md:flex-row gap-x-2  w-11/12 md:w-full md:max-w-1064 ">
        <div className="flex flex-row">
              <div className="mr-2 font-bankgothic text-lg  flex-col flex md:flex-row content-center">
                  <div className="text-5xl text-spacey-leaderboard-yellow mr-16">Price Pool: </div>
                  <div  className="w-4 md:w-12 flex content-center">
                  <img
                      src={token} 
                      // layout="responsive" 
                      alt="token Rounded"  />  
                  </div> 
                  <div className="text-5xl text-spacey-leaderboard-yellow">
                    100,000.00
                  </div>
                 </div>
               </div>
        </div>
      </div>
      <div>
        <div className="container  mx-auto py-3  flex flex-row gap-x-2  w-11/12 md:w-full md:max-w-1064 justify-between">
          <div className="flex flex-row">
            <div className="">
               <div>The prize pool contains 80% SPAY income of each season and MetaMars with the same value as SPAY.
               </div>
               <div className="mt-2">
                Your seasonal rewards will be unlocked within 30 days (10% of total rewards every 3 days).
               </div>
            </div>
            <div className="w-16 md:w-8 ml-4 mt-4 cursor-pointer" onClick={(event) => {setInfoOpen(true)}} >
              <img className="w-4 h-4" src={infoIcon} 
              // layout="responsive" 
              alt="info icon"/>

            </div>
            </div>
       
              <div className="flex flex-row items-center ">
                  <div className="text-xl mr-4">
                    Season
                  </div>
                  <div className="text-xl px-3  mr-6">
                    <select className="bg-spacey-leaderboard-grey px-3 py-1" onChange={handleSeasonClick}>
                      <option value="1">S1</option>
                      {/* <option value="2">2</option> */}
                    </select>
                  </div>
              </div>
            
        </div>
      </div>
      <div>
      <div className="container md:max-w-1064 mx-auto">
          <div className="grid grid-cols-17 gap-2 font-bankgothic pr-6 text-xs md:text-base">
            <div className="bg-spacey-leaderboard-grey text-center  py-2 rounded-xl col-span-1 self-end" >#</div>
            <div className="bg-spacey-leaderboard-grey rounded-xl py-2 pl-2 col-span-3 self-end">NAME</div>
            <div  className="bg-spacey-leaderboard-grey rounded-xl py-2 pl-2 col-span-3 self-end">WALLET</div>
            <div className="bg-spacey-leaderboard-grey  rounded-xl py-2 pl-2  col-span-3 self-end">SCORE</div>
            <div className="bg-spacey-leaderboard-grey rounded-xl py-2  col-span-4 self-end flex flex-row justify-between px-2">
              <div>
                WAVES
              </div>
              <div>
                DIFFICULTY
              </div>
            </div>
            <div className="col-span-3 bg-triangle-bg bg-spacey-leaderboard-grey  py-2 rounded-xl self-end bg-auto bg-no-repeat bg-left-top">

              <div className="ml-12 text-center md:text-xl text-xs">Reward</div>
              <div className="flex flex-row justify-evenly py-2">
                <div className="ml-4 w-4 md:w-8">
                   <img src={token} 
                  //  layout="responsive"
                    alt="token Rounded"/>
                </div>
             
              </div>
            </div>
          </div>
         
         <div className="overflow-y-scroll max-h-96 md:max-h-120 pr-2 mt-2 relative" id="leaderboard">
          {records.map(({rank, name, wallet, score, wave, token_rewards, difficulty_level}, id) => (
          <div className="grid grid-cols-17 gap-2 font-bankgothic text-xs md:text-base" key={id}>
            <div className={"text-center py-2 col-span-1 self-end " + getStyle(id, 0) } >{rank}</div>
            <div className={" py-2 pl-2 col-span-3 self-end "  + getStyle(id)}>{name}</div>
            <div  className={" py-2 pl-2 col-span-3 self-end " + getStyle(id)}>{wallet}</div>
            <div className={"py-2 pl-2 col-span-3 self-end " + getStyle(id)}>{score}</div>
            <div className={"flex flex-row justify-between py-2 px-2 col-span-4 self-end " + getStyle(id)}>
              <div className="w-8"> 
              {wave}
              </div>
              <div className={"rounded w-1/2 align-middle pt-1 text-xs px-2 text-center " + getDifficulty(difficulty_level).cssClass}>
                {getDifficulty(difficulty_level).text}
              </div>
            </div>
            <div className={"col-span-3 py-2 self-end bg-auto bg-no-repeat bg-left-top " + getStyle(id, 2)}>
              <div className="flex flex-row justify-evenly ">
                <div className="ml-4 w-4 md:w-8 ">
                  {token_rewards}
                </div>
          
              </div>
            </div>
            </div>
          ))}

           {/** my score section */}
           <div className="grid grid-cols-17 gap-2 font-bankgothic absolute bottom-0 sticky">
            <div className={"text-center py-2 col-span-1 self-end " + getStyle(-1) + " " + resizeFont(4555) } >{userRank.rank}</div>
            <div className={" py-2 pl-2 col-span-3 self-end "  + getStyle(-1)}>{userRank.name}</div>
            <div  className={" py-2 pl-2 col-span-3 self-end " + getStyle(-1)}>{userRank.wallet}</div>
            <div className={"py-2 pl-2 col-span-3 self-end " + getStyle(-1)}>{userRank.score}</div>
     
            <div className={"flex flex-row justify-between py-2 px-2 col-span-4 self-end " + getStyle(-1)}>
            <div className="w-8"> 
                {userRank.wave}
              </div>
              <div className={"rounded w-1/2 align-middle pt-1 text-xs px-2 text-center " + getDifficulty(2).cssClass}>
                {getDifficulty(2).text}
              </div>
            </div>
            <div className={"col-span-3 py-2 self-end bg-auto bg-no-repeat bg-left-top " + getStyle(-1)}>
              <div className="flex flex-row justify-evenly ">
                <div className="ml-4 w-4 md:w-8 ">
                 {userRank.total_rewards}
                </div>
           
              </div>
            </div>
            </div>
           {/** my score section end*/}
           </div>
        </div>
      </div>
      <ClaimModal
       open={isClaimOpen} 
       handleOpen={handleToggleClaimModal}
      claimable={userRank.token_rewards || "0"}
      remaining={userRank.mars_rewards || "0"}
      onClaimReward={onClaimReward}
      seasonID={1}
         />
      {<InfoModal open={isInfoOpen} handleOpen={handleToggleInfoModal} />}
    </div>:null
      }
      {/* </Page> */}
      <Footer isFullscreen />
    </>
  )
}

export default React.memo(HomePage)
