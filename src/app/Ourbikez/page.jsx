import Filter from '@/components/Filter'

import React from 'react'


export default  function OurBikez() {
   
  return (
    <div className=''>
        <div className='relative top-24'>
            <h1 className=' text-red-500 font-sans font-semibold text-xl ml-6'>Our Bikes:</h1>
        </div>
        <div className=' mt-28'>
         <Filter/>
        </div>
        
    </div>
  )
}
