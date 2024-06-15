import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./componets/Navbar";
import CartProvider from "./componets/Providers";
import ShoppingCartModal from "./componets/shoppingCartModal";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LookMaxxing dukan",
  description: "মায়ের দুআ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider>
          <Navbar/>
          <ShoppingCartModal/>
        {children}
        </CartProvider>
        
        </body>
    </html>
  );
}
