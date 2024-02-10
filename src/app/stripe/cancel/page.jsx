import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react'
import { RxCross2 } from "react-icons/rx";

export default function page() {
  return (
    <div className='relative top-28 '>
        <div className='flex justify-center items-center h-full flex-col '>
            <div className='flex justify-center items-center mt-28 bg-red-200 rounded-lg px-11 text-primary font-serif font-semibold text-xl'><span><RxCross2 className='text-red w-20 h-20 text-red-500'/></span>Something went wrong</div>
             <Link href="/" passHref>
             <Button variant="destructive" className="mt-8">Go to Home Page</Button>
             </Link>
             
        </div>

    </div>
  )
}
