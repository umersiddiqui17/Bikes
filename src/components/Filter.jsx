"use client";
import React, { useState } from "react";
import { useQuery } from "react-query";
import Image from "next/image";
import Link from "next/link";
import { client } from "@/lib/sanity";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Slider } from "./ui/slider";

async function getData(category, price) {
  const query = `*[_type == "product" && category->name =='${category}' && price <= ${price}]{
        _id,
        name,
        "slug":slug.current,
        "imageUrl":image[0].asset->url,
        "categoryName":category -> name,
        price,
          }`;

  const data = await client.fetch(query);
  return data;
}
export default function Filter() {
  const [bike, setbike] = useState({ category: "Road", price: 900 });

  const { data, isLoading, isError } = useQuery(
    ["products", bike],
    () => getData(bike.category, bike.price),
    {
      // Only fetch when inputValue is not empty
    }
  );
   
  return (
    <section className="min-h-[1200px] py-10">
      <div className="mx-auto">
        <div className="flex flex-col">
          {/* sidebar */}
          <aside className="bg-yellow-100 w-full p-4 mb-8 xl:w-[300px] xl:h-[84vh] xl:fixed">
            <RadioGroup
              className="flex flex-col gap-6 mb-12"
              defaultValue="Road"
            >
              <div className="flex items-center space-x-2 font-sans font-semibold">
                <RadioGroupItem
                  value="Road"
                  id="Road"
                  onClick={(e) =>
                    setbike({ ...bike, category: e.target.value })
                  }
                />
                <label htmlFor="Road">Road</label>
              </div>
              <div className="flex items-center space-x-2 font-sans font-semibold">
                <RadioGroupItem
                  value="Proffesional"
                  id="Proffesional"
                  onClick={(e) =>
                    setbike({ ...bike, category: e.target.value })
                  }
                />
                <label htmlFor="Proffesional">Proffesional</label>
              </div>
              <div className="flex items-center space-x-2 font-sans font-semibold">
                <RadioGroupItem
                  value="Extreme"
                  id="Extreme"
                  onClick={(e) =>
                    setbike({ ...bike, category: e.target.value })
                  }
                />
                <label htmlFor="Extreme">Extreme</label>
              </div>
            </RadioGroup>
            {/* price slider */}
            <div className="max-w-56">
              <div className="text-lg mb-4 font-medium">
                Max Price:
                <span className="text-red-500 font-sans font-semibold ml-1">
                  {bike.price}
                </span>
                {data &&<span className="ml-2">{data.length >1 ?`${data.length} items`:`${data.length} items`}</span>}
              </div>
              <Slider defaultValue={[900]} max={1000} step={1} onValueChange={(val)=>setbike({...bike,price:val[0]})}/>
            </div>
          </aside>
          {/* bike list */}
          <div className="bg-red-300 w-full xl:w-[1050px] ml-auto">
          {data && (
        <div>
          <h2 className=' ml-4 font-medium text-red-500 '>Results:</h2>
          <div className=" mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:gap-x-8 mb-4 ml-4">
          {data.map((item, index) => (
        <div key={index} className="group relative mx-2">
          <div className=" aspect-square w-full overflow-hidden rounded-md bg-gray-200 hover:opacity-75 shadow-xl lg:h-60">
         {item.imageUrl && (
        <Image
          src={item.imageUrl}
          alt="product image"
          width={300}
          height={300}
          className="w-full h-full object-contain object-center"
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
        </div>
      </div>
    </section>
  );
}
