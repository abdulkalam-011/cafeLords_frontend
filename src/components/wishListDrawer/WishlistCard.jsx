import React from 'react'
import { MdDelete } from "react-icons/md";

const WishlistCard = () => {
  return (
    <div
            name=''
            onClick={() => navigate(`/`)}
            to={`/`}
            className="w-80 h-96 pointer display-inline-block rounded-1 overflow-hidden relative shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out rounded-lg bg-product hover:border-1 hover:scale-101"
          >
            <div className="w-full h-[65%] overflow-hidden bg-grey-100">
              {" "}
              <img
                className="w-full h-full  object-cover hover:scale-106 duration-200 ease"
                src=''
                alt=''
                loading="lazy"
              />
            </div>
            <h2 className="text-2xl px-4 py-3">Espresso</h2>
            <div className="w-full flex justify-between items-center px-3">
              <div className="w-[80%]">
                <p className="px-4 text-xl font-semibold duration-200 ease price relative">
                  ₹175 <span className="text-black ml-2">₹ 199</span>
                </p>
                <p className="px-4 text-xl font-semibold text-green-500 mt-2">
                  12 % OFF
                </p>
              </div>
                <button name='remove from wishlist' className='text-red-800 text-2xl m-5'><MdDelete /></button>
            </div>
          </div>
  )
}

export default WishlistCard