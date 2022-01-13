import React from "react";
import {MdClose} from "react-icons/md"
import { Props } from './InfoModal.types'
import ranks from '../../../images/ranks.png'




const InfoModal=( props: Props)=> {
    const {
        open,
        handleOpen ,
        
    }=props

    


    



  return (
    <>
      {open ? (
         <>
         <div
           className="justify-center w-12/12 items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none" 
         >
           <div className="relative w-11/12 md:w-auto  my-6 mx-auto max-w-4xl  ">
             {/*content*/}
             <div className="border-0  relative flex flex-col w-full outline-none focus:outline-none">
               {/*header*/}
        
               <div className="flex items-start justify-between relative">
                 <button
                   className="ml-auto bg-transparent border-0"
                   onClick={() => handleOpen()}
                 >
                   <span className="text-2xl absolute z-50" style={{top: '-16px', right: '-16px'}}>
                     <MdClose className="bg-spacey-login-close rounded-full" />
                   </span>
                 </button>
               </div>
               
               {/*body*/}
               <div className="relative flex-auto">
                   <div className="w-screen md:w-128">
                       <img src={ranks}
                        // layout="responsive"
                        alt="ranks" />
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
export default React.memo(InfoModal)