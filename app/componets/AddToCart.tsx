"use client";

import { useShoppingCart } from "use-shopping-cart";
import { urlFor } from "../lib/sanity";
import { Button } from "@/components/ui/button";

export interface productCart {
    name: string;
    description: string;
    price: number;
    currency: string;
    image: any; 
    key: string;
    sku?: string; 
  }
  
  export default function AddToBag({
    currency,
    description,
    image,
    name,
    price,
    key,
  }: productCart) { // Prop drilling
    const { addItem, handleCartClick } = useShoppingCart();
  
   
    const product = {
      sku: '', 
      name,
      description,
      price,
      currency,
      image: urlFor(image).url(),
      key,
    };
  
    return (
      <Button onClick={() => { addItem(product); handleCartClick(); }}>
        Add To Cart
      </Button>
    );
  }