'use client'
import Image from 'next/image'

import { gsap } from "gsap"
import { useState, useEffect , useRef, useLayoutEffect } from 'react' 
import { ScrollTrigger } from 'gsap/ScrollTrigger'


const sections = [
  {value:1 , bg:'bg-green-100'},
  {value:2 , bg:'bg-yellow-100'},
  {value:3 , bg:'bg-blue-100'},
]

const sections2 = [
  {value:1 , bg:'bg-green-400'},
  {value:2 , bg:'bg-yellow-400'},
  {value:3 , bg:'bg-blue-400'},
]


export default function Home() {

  
  const container = useRef(null)
  gsap.registerPlugin(ScrollTrigger)
  
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {

    const tl = gsap.timeline()
      tl.from(".box", {
      y:100,
      ease:"none",
      duration:2
    })
    .from(".box2", {
      y:100,
      ease:"none",
      duration:2
    })

    ScrollTrigger.create({
      animation: tl,
      trigger: ".container-box",
      start: "top center",
      end: "bottom 50%",
      pin:true,
      pinSpacing: false,
      scrub:1,
      toggleActions: "restart pause reverse pause",
      markers: true,
    })

    })
    return () => {
      ctx.revert()
    }
  }, [])



  return (
    <main className="bg-black h-full text-white">
      <div className='h-[500px] flex flex-row items-center justify-center'>
        <p>
        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum,  comes from a line in section 1.10.32
        </p>
        <p>
        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum,  comes from a line in section 1.10.32
        </p>

      </div>
      <div className='h-[500px] mb-[300px] flex flex-col items-center gap-5 container-box' ref={container}>
        {
          sections.map((item , index) => (
            <div className={`h-5 w-10 flex justify-center items-center box text-black ${item.bg}`} key={index}>
              <p>{item.value}</p>
            </div>
          ))
        }
        {
          sections2.map((item , index) => (
            <div className={`h-5 w-10 flex justify-center items-center box2 text-black ${item.bg}`} key={index}>
              <p>{item.value}</p>
            </div>
          ))
        }
      </div>

      <div className='h-[500px] flex flex-col items-center justify-center'>
        <p>
        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum,  comes from a line in section 1.10.32
        </p>
        <br/>
        <p>
        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum,, comes from a line in section 1.10.32
        </p>
      </div>
    </main>
  )
}
