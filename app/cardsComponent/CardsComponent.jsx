'use client'

//gsap
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { useEffect , useState } from "react";

export default function CardsComponent( {props} ) {

  const heightContainer = props.length * 128

  //plugin register
  gsap.registerPlugin(ScrollTrigger)
  
  useEffect(() => {
    const ctx = gsap.context(() => {

      const elementsSelected = gsap.utils.toArray('.card-test')
      elementsSelected.forEach((card , index) => {

        const itemAppear = gsap.timeline({
          paused:true,
          reversed:true,
          defaults: {ease:'ease-in-out'},
          scrollTrigger: {
            trigger: card,
            start: '+=200 center',
            end: '+=200 center',
            scrub: 2.5,
            markers: {
              startColor: 'yellow',
              endColor: 'yellow',
            }
          }
        }) 

        itemAppear
        .fromTo(card , {xPercent:-500 , } , {xPercent: 0 })

        const hoverTimeline = gsap.timeline({ paused: true });
        hoverTimeline.to(card, { scale: 1.1  });
  
        card.addEventListener('mouseenter', () => {
          hoverTimeline.timeScale(1.3).play();
        });
  
        card.addEventListener('mouseleave', () => {
          hoverTimeline.timeScale(1.3).reverse();
        });
      })
      ScrollTrigger.create({
        trigger: '.card-test-container',
        pin: true,
        pinSpacer: false,
        pinSpacing: false,
        start: 'top +=50',
        end: '+=900',
        markers:true
      })
    })
    return () => {
      ScrollTrigger.killAll()
    }
  } , )


  return (
    <>
      <section className="h-[1000px]">
      </section>
            <div className={`h-[${heightContainer}px] flex flex-col gap-2 justify-center items-center card-test-container`}>
            {
              props.map((card , index) => (
                <div className={`relative h-32 w-[800px] rounded-xl ${card.bgColor}  card-test overflow-hidden`} key={index}>
                  <div className={`absolute h-[140px] w-[450px] ${card.position ? 'left-0' : 'right-0'} rounded-xl`}> 
                    <Image 
                      src={`/images/${card.img}.png`}
                      alt='imagen'
                      fill
                      style={{objectFit: 'cover' , objectPosition:'center' , filter:'grayscale(100%)'}}
                      className='rounded-xl'
                    />
                  </div>
                </div>
              ))
            }
        </div>
        <section className="h-[1600px]">
        </section>
    </>
  )
}