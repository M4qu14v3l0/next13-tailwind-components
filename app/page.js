'use client'
import Image from 'next/image'
import { useEffect, useState , useRef } from 'react' 
import Atropos from 'atropos/react';
import 'atropos/css'
import { gsap } from "gsap"
import { ScrollTrigger } from 'gsap/ScrollTrigger'


const sections = [
  {value:1 , bg:'bg-green-100' , bg2:'bg-green-400'},
  {value:2 , bg:'bg-yellow-100', bg2:'bg-yellow-400'},
  {value:3 , bg:'bg-blue-100', bg2:'bg-blue-400'},
  {value:4 , bg:'bg-red-100', bg2:'bg-red-400'},
  {value:5 , bg:'bg-white', bg2:'bg-white'},
]



export default function Home() {


  let boxOfBoxes = useRef(null)
  let generalContainer = useRef(null)

  const [ bgState , setBgState ] = useState(true);
  const [ opacity , setOpacity ] = useState(false);


  gsap.registerPlugin(ScrollTrigger)

  useEffect(() => {
    const ctx = gsap.context(() => {
      let tl = gsap.timeline({
        paused: true,
        reversed: true,
        defaults: {ease: 'ease'},
        scrollTrigger: {
          trigger: generalContainer.current,
          start: 'top',
          end: '+=1500',
          scrub:0.6,
          markers: {
            startColor: 'yellow',
            endColor: 'yellow'
          }
        }
      })

      tl
      .fromTo(boxOfBoxes.current , {opacity:0 , duration:1} , {opacity: 1, duration:1.5, onStart: () => setOpacity(true)}) 
      .fromTo(boxOfBoxes.current , {opacity:1 , duration:1} , {opacity: 0, duration:1.5 , onComplete: () => setBgState(false)}) 
      .fromTo(boxOfBoxes.current , {opacity:0 , duration:1} , {opacity: 1 , duration:1.5 , onReverseComplete: () => setBgState(true)})
      .fromTo(boxOfBoxes.current , {opacity:1 , duration:1} , {opacity: 0 , duration:1.5})


      ScrollTrigger.create({
        trigger: generalContainer.current ,
        pin: true,
        pinSpacer: false,
        pinSpacing: false,
        start: 'top top',
        end: 'bottom center',
        scrub:1,
        markers:true,

      })

    })
    return () => {
      ctx.revert()
    }
  }, [])



  return (
    <main className=" text-white w-full">
      <div className='h-[100vh] w-full' >
        <div className='h-[500px] flex justify-center items-center w-[70%] mx-auto'>
        Hey guys! so happy the first installment of this series (Where to Apply Eyeshadow) was so well received! Thank you all for your support! 😀

In the second installment of the Eyeshadow Tutorials for Asian Eyes series, we discuss the Vertical Gradient Method of eyeshadow application.

The Vertical Gradient Method is widely used on Asian models I often see in Japanese, Taiwanese, or any other magazines that showcase Asian models.

While there are no rules when it comes to makeup, the Vertical Gradient Method is one easy method of eye makeup application, and looks great on people with limited lid space, have heavily hooded eyelids, or have monolids.

The Vertical Gradient Method is basically dividing the lid horizontally, most commonly into 3 sections and with the darkest color placed nearest to the eyelashes.
        </div>
        <div className='relative h-[1500px] w-full' ref={generalContainer}>
          <div className='absolute h-full w-full pt-[40px]'>
            <Atropos 
              className="w-[95%] h-[70%] mx-auto"
              rotateXMax={5}
              rotateYMax={5}
              highlight={false}
              duration={300}
              >
              <div className={`flex flex-col justify-center items-center gap-1 ${opacity ? '' : 'invisible'}`}  ref={boxOfBoxes}>
                {
                  sections.map(item => (
                    <div className={`h-32 w-[70%] mx-auto  ${bgState ? item.bg : item.bg2} relative`} key={item.value}>
                    </div >
                  ))
                }
              </div>
            </Atropos>
          </div>
        </div>
        <div className='h-[80vh] w-full'>

      </div>
      </div>
    </main>
  )
}
