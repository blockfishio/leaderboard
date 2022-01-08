import React from "react";
import {MdClose} from "react-icons/md"
import { Props,MetaData } from './ClaimModal.types'





const ClaimModal=( props: Props)=> {
    const {
        open,
        handleOpen ,
        total,
        remaining
        // onClaimSpay
    }=props

  return (
    <>
      {open ? (
        <>
          <div
            className="justify-center w-12/12 items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-11/12 md:w-auto  my-6 mx-auto max-w-4xl  bg-cover bg-spacey-leaderboard-grey border-spacey-leaderboard-yellow border-4">
              {/*content*/}
              <div className="border-0  relative flex flex-col w-full outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 relative">
                 
                </div>
                {/*body*/}
                <div className="relative px-24 py-6 flex-auto">
                  <div>
                  <h3 className="text-4xl mx-auto text-center font-bankgothic">
                     Total Amount:{total}
                     {/* { 
                        // claim.type == "mars" && " MetaMars: " +  claim.claimable
                        "MetaMars:"
                     }

                     { 
                        // claim.type == "spray" && " MetaSpray: " +  claim.claimable
                        "MetaSpay:"
                     } */}
                  </h3>
                   <h3 className="text-3xl mx-auto text-center  font-bankgothic mt-2">
                     Claimable Amount:{remaining}

                     {/* { 
                        // claim.type == "mars" && " MetaMars "
                        "MetaMars:"

                     }

                     { 
                        // claim.type == "spray" && " MetaSpray "
                        "MetaSpay:"
                     } */}
                      {/* amount: {claim.claimable} */}
                   </h3>
                  </div>
                  <div className="my-4 text-lg leading-relaxed flex flex-row justify-center	 gap-x-10 font-bankgothic mt-20">
                      <div className="flex flex-col justify-center" >
                        
                        <div className="mx-auto  bg-spacey-leaderboard-button px-8 py-2  rounded-xl  hover:bg-spacey-leaderboard-button-highlight cursor-pointer" onClick={() => alert('Confirmed')}>
                          Confirm
                        </div>
                        
                      </div>
                      <div className="flex flex-col justify-center">
                         
                          <div className="mx-auto  bg-spacey-leaderboard-button px-8 py-2  rounded-xl  hover:bg-spacey-leaderboard-button-highlight cursor-pointer"  onClick={() => handleOpen()}>
                            Cancel
                          </div>
                      
                      </div>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
export default React.memo(ClaimModal)