"use client"


import Image from 'next/image'
import { useState, useEffect } from 'react'

const data = [
  {
    id: 1,
    title: "always fresh & always crispy & always hot",
    image: "/slide1.png",
  },
  {
    id: 2,
    title: "we deliver your order wherever you are in NY",
    image: "/slide2.png",
  },
  {
    id: 3,
    title: "the best pizza to share with your family",
    image: "/slide3.jpg",
  },
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() =>
      setCurrentSlide(prev => (prev === data.length - 1 ? 0 : prev + 1)),
      8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className='flex flex-col lg:flex-row  gap-8 items-center justify-center h-[calc(100vh-5rem)] md:h-[calc(100vh-9rem)] bg-fuchsia-50' key={data[currentSlide].id}>

      {/* text-container */}
      <div className='text-red-500 flow-center gap-8 font-bold flex-1'>
        <h1 className=' text-5xl md:text-6xl lg:text-7xl uppercase px-4 md:p-10 text-center'>
          {data[currentSlide].title}
        </h1>

        <button className='bg-red-500 text-white py-2 px-4 text-sm'>
          Order Now
        </button>
      </div>

      {/* image container */}
      <div className=' relative w-full lg:h-full flex-1'>
        <Image
          src={data[currentSlide].image}
          alt=" "
          fill
          className='object-cover'
        />
      </div>
    </section>
  )
}

export default Slider