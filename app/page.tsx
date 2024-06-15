import Image from "next/image";
import Hero from "./componets/Hero";
import Newst from "./componets/Newst";

export default function Home() {
  return (
   <div className="bg-white pb-6 sm:pb-8 lg:-12">
   <Hero/>
   <Newst/>
   
   </div>
   
  );
}
