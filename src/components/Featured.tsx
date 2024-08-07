import React from 'react'
import { featuredProducts } from '@/data'
import Image from 'next/image'

function Featured() {
  return (
    // main conatiner
    <div className='text-red-500 overflow-x-scroll no-scrollbar '>
      {/* single conatiner */}
      <div className='w-max flex'>
        {featuredProducts.map(item => (
          <div key={item.id} className=' h-[60vh] xl:h-[90vh] w-screen md:w-[50vw] xl:w-[28vw]  flex flex-col justify-around items-center gap-4 p-4 hover:bg-fuchsia-50'>
            <div className='relative flex-1 h-[20%] w-full  transition-all hover:rotate-[5deg] duration-400 '>
            <Image src={item.img} alt="" fill className="object-contain" />
            </div>
            <h1 className='text-base font-bold'>{item.title}</h1>
            <p className='text-sm lg:text-base'>{item.desc}</p>
            <span className='-mb-3'>$ {item.price}</span>
            <button className='bg-red-500 text-white text-sm p-2 rounded-md hover:bg-red-600 '>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Featured