"use client"

import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Image from 'next/image';
import Link from 'next/link';
import { client } from '@/lib/sanity';



const fetchProducts = async (query) => {
  // Use your API endpoint to fetch data based on the query
  const data = await client.fetch(`
  *[_type == 'product' && name == '${query}']{
    _id,
    name,
    "slug":slug.current,
    "imageUrl":image[0].asset->url,
    "categoryName":category -> name,
    price,
  }`);
  
  
  return data ;
  
};

const ProductSearch = () => {
  const [inputValue, setInputValue] = useState('');
  
  const { data, isLoading, isError } = useQuery(['products', inputValue], () => fetchProducts(inputValue), {
    enabled: inputValue.trim() !== '', // Only fetch when inputValue is not empty
  });
 
  
  return (
    <div className='flex justify-center items-center flex-col '>
      <h2 className=" text-2xl font-bold tracking-tight text-abc mb-5   ">
       Search:
      </h2>
      <input
        type="text"
        placeholder="Enter product query"
        value={inputValue}
        onChange={(e)=>setInputValue(e.target.value)}
        className=' ml-4 w-80 py-2 rounded-md pl-2 bg-blue-300 dark:bg-violet-900 placeholder:text-black dark:placeholder:text-white mb-3'
      />

      {isLoading && <p className='text-sm font-medium text-blue-500 dark:text-violet-500'>Loading...</p>}
      {isError && <p>Error fetching data</p>}

      {data && (
        <div>
          <h2 className=' ml-4 font-medium text-blue-500 dark:text-violet-500'>Results:</h2>
          <div className=" mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:gap-x-8 mb-4 ml-4">
          {data.map((item, index) => (
        <div key={index} className="group relative mx-2">
          <div className=" aspect-square w-full overflow-hidden rounded-md bg-gray-200 hover:opacity-75 shadow-xl shadow-blue-600 dark:shadow-violet-600">
         {item.imageUrl && (
        <Image
          src={item.imageUrl}
          alt="product image"
          width={300}
          height={300}
          className="w-full h-full object-cover object-center"
        />
      )}
          </div>
          <div className=" flex justify-between mt-4">
            <div className=" text-sm text-gray-500 lg:text-md">
              <Link href={`/product/${item.slug}`} passHref className="font-bold hover:text-primary">{item.name}</Link>
              <p className=" text-sm text-gray-600">{item.categoryName}</p>
            </div>
            
              <p className=" text-sm font-medium text-gray-600 hover:text-primary hover:text-blue-500 dark:hover:text-violet-500">₨{item.price}</p>
            

          </div>
        </div>
      ))}
      </div>
        </div>
      )}
    </div>
  );
};

export default ProductSearch;