import Link from "next/link";
import { simplifiedProduct } from "../interface";
import { cilent } from "../lib/sanity";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

async function getData() {
    const query = `*[_type == "product"]| order(_createdAt desc) 
    {
          _id,
            price,
          name,
            "slug": slug.current,
            "catagoryName": catagory->name,
            "imageUrl": image[0].asset->url
        }` ;
  
    const data = await cilent.fetch(query);
  
    return data;
  }

export default async function Newst(){
    const data: simplifiedProduct[]=await getData()
   return(
    <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:24 lg:max-w-7xl lg:px-8">
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-gray-900">Eid special <span className="text-red-500 text-3xl">25%</span> Off</h2>
               
            </div>

    
       
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {data.map((product)=>(
            <div className="group relative" key={product._id}>
              <div className="aspect-square w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-80">
              <Link href={`/product/${product.slug}`}><Image 
                src={product.imageUrl}
                alt="product image"
                className="w-full h-full object-cover object-center lg:h-full lg:w-full cursor-pointer"
                width={300}
                height={300}
                /> </Link>
                
            
              </div>

              <div className="mt-4 flex justify-between">
                <div >
                  <h3 className="text-sm text-gray-700">
                    <Link href={`/product/${product.slug}`}> {product.name}</Link>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    {product.catagoryName}
                  </p>
                </div>
                <p className="text-sm font-medium text-gray-900">${product.price}</p>
              </div>

              <div>

              </div>
            </div>
          ))}
        </div>
         </div>
    </div>
   )
}