import { client } from '@/lib/sanity'
import Image from 'next/image';
import React from 'react'
import Link from 'next/link';

async function getData() {
  const query =`*[_type == "product"][0...4] | order(_createdAt desc){
    _id,
    name,
    "slug":slug.current,
    "imageUrl":image[0].asset->url,
    "categoryName":category -> name,
    price,
      }`
    
    const data = await client.fetch(query)
    return data;
}

export const dynamic =  "force-dynamic"
export default async function Newest() {
  const data = await getData()
  return (
    <section>
     <div className=''>
      <h1 className=' ml-5 mt-5 text-3xl text-red-black font-sans font-bold'>Our <span className=' text-red-500 font-serif border-b-2 border-red-500'>Newest</span> Products<span className='text-red-500'>:</span></h1>
     <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
     {data.map((item, index) => (
        <div key={index} className="group relative mx-2">
          <div className=" aspect-square w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-60">
          <Image
              src={item.imageUrl}
              alt="product image"
              width={300}
              height={350}
              className=" h-full w-full object-contain object-center lg:h-full lg:w-full "
            />
          </div>
          <div className=" flex justify-between mt-4">
            <div className=" text-sm text-gray-500 lg:text-md">
              <Link href={`/product/${item.slug}`} passHref className="font-bold hover:text-primary">{item.name}</Link>
              <p className=" text-sm text-gray-600">{item.categoryName}</p>
            </div>
            
              <p className=" text-sm font-medium text-gray-600 hover:text-primary">₨{item.price}</p>
            

          </div>
        </div>
      ))}
        </div>

     </div>
     </section>
  )
}
