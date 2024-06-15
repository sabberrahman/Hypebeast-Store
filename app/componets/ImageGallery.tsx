"use client"

import Image from "next/image"
import { useState } from "react"
import { urlFor } from "../lib/sanity"

interface isAppp {
  images: any
}

export default function ImageGallery({ images }: isAppp) {
  const [bigImage, setBigImage] = useState(images[0]);
 const handleImages=(image:any)=>{
   setBigImage(image)
 }
  
  return (
    <div className="grid gap-4 lg:grid-cols-5">
      <div className="order-last flex gap-4 lg:order-none lg:flex-col">
        {images.map((image: any, idx: any) => (
          <div
            className="overflow-hidden rounded-lg bf-bg-gray-100"
            key={idx}
          >
            <Image
              src={urlFor(image).url()}
              alt="product"
              className="h-full w-full object-cover object-center cursor-pointer"
              width={200}
              height={200}
              onClick={()=>handleImages(image)}
            />
          </div>
        ))}
      </div>

      <div className="overflow-hidden relative rounded-lg bg-gray-100 lg:col-span-4">
        <Image
          src={urlFor(bigImage).url()}
          alt="product"
          className="h-full w-full object-cover object-center cursor-pointer"
          width={500}
          height={500}
        />
        <span className="absolute overflow-hidden left-0 top-0 round-lg bg-red-500 px-3 py-1.5 text-sm uppercase tracking-wider text-white">on sale!</span>
      </div>

      
    </div>
  );
}
