import React from 'react'

const ReviewCard = () => {
  return (
     <div className='mt-5 bg-blue-100 pb-5 flex gap-6 p-3 rounded w-full h-64 overflow-hidden items-center'>
            <div className='w-1/4 overflow-hidden'><img src="/images/cafelords-logo.jpg" alt="item image" width='100%'/></div>
            <div className='w-3/4 h-full'>
            <h1 className='text-xl font-bold'>Espresso shot </h1>
            <div className='flex gap-2 my-2'>
                <span className='text-white text-[12px] bg-green-600 px-[4px] py-[2px] leading-1.01 rounded'>4 ★</span> 
                <p>Pretty Good </p>
            </div>
            <p className=' my-2 h-1/3 overflow-auto'>Lorem ipsum dolor sit amet con  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque maiores eos dicta praesentium soluta assumenda dolores quibusdam vero quod consequuntur impedit libero itaque, velit officiis quam porro debitis rem nobis? ectetur adipisicing elit. Hic quibusdam eveniet maiores suscipit nulla, vero ut id eos? Ullam, itaque?</p>
            <p className='text-sm'>Reviewed on: 20th Aug, 2023</p>

            <div><span>Abdul Kalam</span></div>
            <div className='flex justify-end gap-3'>
              <button className='bg-yellow-200 px-3 py-2 rounded'>Edit</button>
              <button className='bg-red-500 px-3 py-2 rounded text-white'>Delete</button>
            </div>
            </div>
        </div>
  )
}

export default ReviewCard