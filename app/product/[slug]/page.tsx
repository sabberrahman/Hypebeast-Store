import AddToBag from "@/app/componets/AddToCart";
import ImageGallery from "@/app/componets/ImageGallery";
import { fullProduct } from "@/app/interface";
import { cilent } from "@/app/lib/sanity";
import { Button } from "@/components/ui/button";
import { LucideBug, PopcornIcon, ShoppingCartIcon, Star, Truck } from "lucide-react";


async function getData(slug: string) {
    const query = `*[_type == "product" && slug.current == "${slug}"][0] {
          _id,
            image,
            price,
            name,
            Description,
            "slug": slug.current,
            "catagoryName": catagory->name,
            price_id
     }`;
  
        const data = await cilent.fetch(query);
    
        return data;
  }
  

export default async function ProductPge({
  params,
}: {
  params: { slug: string };
}) {
  const data: fullProduct = await getData(params.slug);

    return (
        <div className='bg-white'>
            <div className='mx-auto max-w-screen-xl px-4 md:px-8'>
                <div className='grid gap-8 md:grid-cols-2'>
                    <ImageGallery images={data.image}/>

                    <div className='md:py-8 thisis2ndCol'>

                      <div className='mb-2 md:mb-3'>
                        <span className="mb-1 inline-block text-gray-500">{data.catagoryName}</span>
                        <h2 className="text-2xl font-bold text-gray-700 lg:text-3xl">{data.name}</h2>
                      </div>

                      <div className="gap-3 mb-6 md:mb-10 flex items-center ">
                        <Button className="rounded-full gap-x-2">
                          <span>4.3</span>
                          <Star className="h-5 w-5 "/>
                        </Button>

                        <span className="text-sm text-gray-500 transition duration-100">54 rating</span>
                      </div>


                      <div className='mb-4'>
                        <div className="flex items-end gap-2">
                          <span className="text-xl font-bold text-gray-800 md:text-2xl">${data.price}</span>
                          <span className='text-red-500 line-through mb-0.5'>${data.price + 30}</span>
                        </div>

                        <span className="text-sm text-gray-500">Incl Vat plus shipping</span>
                      </div>


                      <div className='mb-6 flex items-center gap-2 text-gray-500'>
                        <Truck/>
                        <span className="text-sm">2-4day shipping</span>
                      </div>


                      <div className="flex gap-2.5">
                        <AddToBag 
                        currency="USD"
                        description={data.Description}
                        image={data.image[0]}
                        name={data.name}
                        price={data.price}
                        key={data._id}
                        
                        />
                        <ShoppingCartIcon className="mt-2 ml-1"/>
                      </div>

                      <p className="mt-12 text-base text-gray-500 tracking-wide">
                        {data.Description}
                      </p>








                    </div>

                 </div>

            </div>

        </div>

    )
}