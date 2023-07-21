"use client"

import { manImages } from "../imports/imageImports"
import { useState , useEffect } from 'react'
import Image from "next/image";

export default function Home() {

  const [scrollY, setScrollY] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const picturesScroll = () => {
    const index = Math.floor(scrollY / 10) % manImages.length; // 100 / 10  = 1 % 200 = 1
    console.log(index , scrollY);
    return manImages[index];
  }


  return (
    <div>
      <Image
      src={picturesScroll()}
      alt="man"
      className="w-auto h-[100%] fixed top-[52%] left-[50%] transform translate-x-[-50%] translate-y-[-50%]" priority
    />
      <div className="h-[6500px]"></div>
    </div>
  )
}
