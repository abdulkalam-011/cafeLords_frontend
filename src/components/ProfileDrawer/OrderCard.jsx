import React from 'react'
import { Link } from 'react-router'
import { MdDelete } from "react-icons/md";

const OrderCard = () => {
  return (
     <div
      onClick={() => navigate(`/`)}
      className="flex justify-between p-4 border-b border-gray-300 cursor-pointer"
    >
      <div className="flex items-center gap-6  w-[80%]">
        <img
          src=''
          alt=''
          className="h-62 w-80 object-cover rounded"
        />
        <div className="h-full py-3">
          <h3 className="text-lg font-semibold">₹ 99</h3>
          <h3 className="text-md font-semibold">espresso</h3>
          <p className="text-sm">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit suscipit natus ducimus dolorem perferendis, ex dignissimos sed quasi sunt porro?</p>
          <p className="text-sm mt-2">
            <span className="bg-green-400 p-1 rounded-2xl px-3 mr-2">
             4.5 ⭐
            </span>
            / 300
          </p>
          <p className="text-m mt-5"> size : M
          </p>
          <p className="text-m   mt-2"> Quantity : 1
          </p>
        </div>
      </div>
      <span className=" w-[50%] relative overflow-hidden flex items-center justify-center flex-col">
        <h1 className='text-m'> Deliverd on { new Date().toLocaleDateString()}</h1>
        <p className='text-[12px]'>your item has been delivered</p>

         <Link> Rate and Review this product </Link>
        <button className="px-3 py-2 rounded absolute right-0 top-0 text-red-700 text-2xl" ><MdDelete /></button>
      </span>
    </div>
  )
}

export default OrderCard