"use client"

import urlFor from "@/lib/sanity"
import Image from "next/image"
import { useState } from "react"


export default function ImageGallery({image}) {
    const [bigimage,setbigimage] = useState(image[0])
    const handlesmallimages = (pic) => {
        setbigimage(pic)
    }
  return (
    <div>
        <div className=" grid gap-4 lg:grid-cols-5">
    <div className=" order-last flex gap-4 lg:order-none lg: flex-col">
      {image.map((pic, index) => (
        <div
          key={index}
          className="mt-6 overflow-hidden rounded-lg bg-gray-100"
        >
          <Image
            src={urlFor(pic).url()}
            alt=""
            width={200}
            height={200}
            onMouseEnter={() => handlesmallimages(pic)}
            className=" h-full w-full object-cover object-center cursor-pointer"
          />
        </div>
      ))}
    </div>
    <div className=" ml-7 mt-7 relative overflow-hidden rounded-lg bg-gray-100 lg:col-span-4">
      <Image
        src={urlFor(bigimage).url()}
        alt=""
        width={500}
        height={200}
        className=" h-full w-full object-contain object-center "
      />
      
    </div>
  </div>
  </div>
  )
}
