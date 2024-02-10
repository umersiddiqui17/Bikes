import React from 'react'

export default function Video() {
  return (
    
      <div className='h-full relative'>
         <video src="/bike.mp4" autoPlay loop muted className='w-full h-full object-cover brightness-90'></video> 
         <div className='w-full h-full absolute inset-0 flex flex-col justify-center items-center '>
          <div className=' flex flex-col justify-center items-center'>
            <span className='md:text-2xl text-black font-semibold font-sans '> Your <span className='text-3xl text-red-600 border-b-2 font-serif'>Journey</span> , Your <span className='text-red-600 text-3xl leading-relaxed border-b-2 font-serif'> Bicycle</span>,</span>
            <span className=' text-2xl border-b-2 border-red-600 font-semibold font-sans '>Your <span className=' text-red-600 text-3xl font-serif '>Way</span>! </span>
          </div>
         
         </div>
      </div>
     
    
  
  )
}
