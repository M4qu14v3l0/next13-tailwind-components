'use client'
import Image from 'next/image'
import { gsap } from "gsap"
import { useEffect } from 'react' 
import { ScrollTrigger } from 'gsap/ScrollTrigger'


const sections = [
  {value:1 , bg:'bg-green-100' , bg2:'bg-green-400'},
  {value:2 , bg:'bg-yellow-100', bg2:'bg-yellow-400'},
  {value:3 , bg:'bg-blue-100', bg2:'bg-blue-400'},
  {value:4 , bg:'bg-red-100', bg2:'bg-red-400'},
  {value:5 , bg:'bg-white', bg2:'bg-white'},
]


export default function Home() {
  
  gsap.registerPlugin(ScrollTrigger)

  useEffect(() => {
    const ctx = gsap.context(() => {
  
    
    //   const animateIn = () => {
    //   gsap.to('.box' , { opacity: 1, y:0 })
    //   setIsVisible(true)
    // }

    // const animateOut = () => {
    //   gsap.to('.box' , {opacity:0 , y:200 , duration:2})
    // }

    // ScrollTrigger.create({
    //   trigger: '.generalContainer',
    //   start: 'top center',
    //   end: 'bottom center',
    //   toggleActions: 'restart pause reverse none',
    //   scrub: true,
    //   onEnter: animateIn,
    //   onLeave: animateOut,
    //   onEnterBack: animateIn,
    //   onLeaveBack: animateOut,
    //   markers:true,
    // });

      let tl = gsap.timeline({
        paused: true,
        reversed: true,
        defaults: {ease: 'ease'},
        scrollTrigger: {
          trigger: '.generalContainer',
          start: 'top center',
          end: '+=700',
          scrub:1,
          markers: {
            startColor: 'yellow',
            endColor: 'yellow'
          }
        }
      })
      tl
      .from('.box' , {opacity:0 , y:100 , duration:0.5})
      .to('.box', {opacity: 0 , y:0 , duration:0.5})

      let tl2 = gsap.timeline({
        paused: true,
        reversed: true,
        defaults: {ease: 'ease'},
        scrollTrigger: {
          trigger: '.generalContainer',
          start:'+=700 center',
          end: '+=700 ',
          scrub:1,
          markers: {
            startColor: 'pink',
            endColor: 'pink'
          }
        }
      })
      tl2
      .from('.box2' , {opacity:0 , y:100 , duration:0.5})
      .to('.box2', {opacity: 0 , y:0 , duration:0.5})



      ScrollTrigger.create({
        trigger: '.generalContainer',
        pin: true,
        pinSpacer: false,
        pinSpacing: false,
        start: 'top top',
        end: 'bottom center',
        scrub:1,
        markers:true,
        
        // onUpdate: (self) => {
        //   if (self.direction === 1) {
        //     gsap.set('.box', { opacity: 0 })
        //   };
        // },
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
        <div className='generalContainer relative h-[1500px] w-full'>
          <div className='absolute h-full w-full flex flex-col gap-5'>
            {
              sections.map(item => (
                <div className={`h-32 w-full ${item.bg} box relative bg-eyes bg-no-repeat bg-cover bg-[center_top_-200px]`} key={item.value}>
                </div >
              ))
            }
          </div>
          <div className='absolute h-full w-full flex flex-col gap-5'>
            {
              sections.map(item => (
                <div className={`h-32 w-full ${item.bg2} box2 relative bg-eyes`} key={item.value}>
                </div>
              ))
            }
          </div>
        </div>
        <div className='h-[80vh] bg-green-100 w-full'>

      </div>
      </div>
    </main>
  )
}
