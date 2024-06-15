"use client"
import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useShoppingCart } from "use-shopping-cart";

export default function Navbar(){
  const links=[
    {name:'Home',href:'/'},
    {name:'Men',href:'/Men'},
    {name:'woman',href:'/Woman'},
    {name:'Teen',href:'/Teen'},
  ]
  const { handleCartClick } = useShoppingCart();
  const pathName= usePathname()
    return (
        <>
          <header className='mb-8 border-b'>
              <div className='flex items-center justify-between mx-auto sm:px-6 px-4 max-w-2xl lg:max-w-7xl'>
                <Link href='/'>
                  <h1 className='text-2xl md:text-3xl font-bold '>Look<span className="text-primary">Maxing</span></h1>
                </Link>
                <nav className="hidden gap-12 lg:flex 2xl:ml-16">
                  {links.map(( link , id)=>(
                    <div key={id} className=""> 
                      {pathName === link.href ? (
                        <Link className="text-lg font-semibold text-primary" href={link.href}>
                          {link.name}
                        </Link>
                      ):(
                        <Link className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-primary"  href={link.href}>
                          {link.name}
                        </Link>
                      )}
                    </div>

                  ))}
                  
                </nav>
                <div className="flex divide-x border-r sm:border-l">
                  <Button variant={'outline'} className="flex flex-col gap-y-1.5 h-12 w-12 sm:h-20 md:h-24 md:w-24 rounded-none"
                 onClick={() => handleCartClick()} >
                    <ShoppingBag/>
                    <span className="hidden sm:block text-xs font-semibold text-gray-500">Cart</span>
                  </Button>
                </div>
              </div>
          </header>
        </>
    )
}

