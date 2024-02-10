import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react'
import { FaCheckDouble } from "react-icons/fa6";

export default function page() {
  return (
    <div className='relative top-28 '>
        <div className='flex justify-center items-center h-full flex-col '>
            <div className='flex justify-center items-center mt-28  rounded-lg px-11 text-primary font-serif font-semibold text-xl'><span><FaCheckDouble className='text-red w-20 h-20 text-red-500'/></span><span className=''>Your Order has been placed</span></div>
             <h1 className='text-red-400 border-b border-black mt-5'>Thank you for shopping with us</h1>
             <Link href="/" passHref>
             <Button variant="destructive" className="mt-8">Go to Home Page</Button>
             </Link>
             
        </div>

    </div>
  )
}
