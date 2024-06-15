import Image from "next/image";
import { simplifiedProduct } from "../interface";
import Link from "next/link";
import { cilent } from "../lib/sanity";


async function getData(catagory: string){
    const query= `*[_type == "product" && catagory->name == "${catagory}"] {
        _id,
          "imageUrl": image[0].asset->url,
          price,
          name,
          "slug": slug.current,
          "catagoryName": catagory->name
      }` ;
      const data = cilent.fetch(query)
      return data
}

export default async function CatagoryPage({
    params,
  }: {
    params: { catagory: string };
  }){
    const data : simplifiedProduct[]= await getData(params.catagory)

    return(
        <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 sm:px-6  lg:max-w-7xl lg:px-8">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              Our Products for {params.catagory}
            </h2>
          </div>
  
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {data.map((product) => (
              <div key={product._id} className="group relative">
                <div className="aspect-square w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-80">
                  <Image
                    src={product.imageUrl}
                    alt="Product image"
                    className="w-full h-full object-cover object-center lg:h-full lg:w-full"
                    width={300}
                    height={300}
                  />
                </div>
  
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <Link href={`/product/${product.slug}`}>
                        {product.name}
                      </Link>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      {product.catagoryName}
                    </p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">
                    ${product.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }