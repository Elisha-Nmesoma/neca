"use client"

import Image from "next/image"
import Countdown from "react-countdown"

const endingDate = new Date("2024-09-20")
const CountDown = () => {
  return (
    <Countdown  className='font-bold text-4xl text-yellow-300' date={endingDate} />
  )

}


const Offers = () => {
  return (
    <div className=" bg-black md:bg-[url('/offerBg.png')] text-white flex flex-col md:flex-row gap-8 p-4 md:px-10  h-[calc(100vh-9rem)] md:h-[70vh]">
      {/* text-container */}
      <div className="flex-1 flex flex-col justify-center items-center md:items-start text-center gap-8 p-6">
        <h1 className="text-4xl font-bold text-left">Delicious Burger & French Fry</h1>
        <p className="text-sm lg:text-base text-left">
          Progressively simplify effective e-toilers and process-centric methods
          of empowerment. Quickly pontificate parallel.
        </p>
       <CountDown />
        <button className="text-black bg-white rounded-md text-sm p-2 hover:bg-neutral-100">
          Order Now
        </button>
      </div>

      {/* image conatner */}
      <div className="flex-1 relative w-full ">
        <Image src="/offerProduct.png" alt="" fill className="object-contain"  />
      </div>
    </div>
  )
}

export default Offers