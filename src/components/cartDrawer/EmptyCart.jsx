import React from 'react'
import { Link } from 'react-router'

const EmptyCart = () => {
  return (
   <div className='flex justify-center items-center h-[80vh]'>
        <div className='content-center text-center flex flex-col gap-3 justify-center items-center'>
          <img src="https://cdn-icons-png.flaticon.com/512/13791/13791534.png" alt="empty-cart" width='250'/>
          <div>
          <b className='text-3xl'>Looks Like you are Still Hungry</b>
          <p className='text-gray-500'>Your cart is empty. Start adding items to your cart!</p>
          <p >Browse Our Menu , find Items , add to cart and Happy shopping !</p>
          </div>
         <Link className='bg-theme text-black px-3 py-2 rounded mt-4 text-xl border-b-1' to='/menu'>View Menu</Link>
        </div>
      </div>
  )
}

export default EmptyCart