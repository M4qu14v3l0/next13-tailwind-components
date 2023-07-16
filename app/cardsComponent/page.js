'use client'

import CardsComponent from "./CardsComponent"

const list = [
  { img: 'eyes_one' , position: true , bgColor: 'background-cool-1'},
  { img: 'eyes_two' , position: false , bgColor: 'background-cool-2'},
  { img: 'eyes_three' , position: true , bgColor: 'background-cool-3'},
  { img: 'eyes_four' , postion: false , bgColor: 'background-cool-4'},
  { img: 'eyes_five' , position: true , bgColor: 'background-cool-5'},
  { img: 'eyes_six' , position: false , bgColor: 'background-cool-6'},
]

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center">
      <CardsComponent props = { list }/>
    </main>
  )
}

