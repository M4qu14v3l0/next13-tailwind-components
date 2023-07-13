'use client'

//components
import Banner_card from "./designSystem/banner_card"


//gsap
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect , useRef } from "react";





export default function Home() {

  //plugin register
  gsap.registerPlugin(ScrollTrigger)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const elementsSelected = gsap.utils.toArray('.card-test')
      console.log(elementsSelected)
      elementsSelected.forEach((card , index) => {
        const itemAppear = gsap.timeline({
          paused:true,
          reversed:true,
          defaults: {ease:'ease'},
          scrollTrigger: {
            trigger: card,
            start: 'top center',
            end: 'bottom center',
            scrub: 0.6,
            markers: {
              startColor: 'yellow',
              endColor: 'yellow',
            }
          }
        })
        itemAppear
        .fromTo(card , {xPercent:-500} , {xPercent: 0})
      })

      ScrollTrigger.create({
        trigger: '.card-test-container',
        pin: true,
        pinSpacer: false,
        pinSpacing: false,
        start: 'top +=200',
        end: '+=900',
        markers:true
      })



    })
    return () => {
      ScrollTrigger.killAll()
    }
  })

  return (
    <main className="flex flex-col justify-center items-center">
      <section className="h-[1000px]">
      </section>
          <div className="h-[500px] flex flex-col gap-10 justify-center items-center card-test-container">
          <div className="h-32 w-[800px] rounded-xl color-change-5x card-test">
          </div>
          <div className="h-32 w-[800px] rounded-xl color-change-5x card-test">
          </div>
      </div>
      <section className="h-[1600px]">
      </section>
    </main>
  )
}

