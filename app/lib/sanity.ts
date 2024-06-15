import  ImageUrlBuilder  from "@sanity/image-url"
import { createClient } from "next-sanity";

export const cilent = createClient({
    projectId:'pk9fqffj',
    dataset:'production',
    apiVersion:'2022-03-25',
    useCdn:true,
})

const builder=  ImageUrlBuilder(cilent);

export function urlFor(source:any){
    return builder.image(source)
}