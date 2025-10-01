import React, { useMemo } from 'react'
import CartProductCard from './CartProductCard';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from '../../features/cart/cartSlice';
import { toast } from 'react-toastify';

const MyCart = ({handlePurchaseAll}) => {
  const {items} = useSelector(state => state.cart)
  const { currentUser } = useSelector(state => state.auth)
  const userItems = items.filter(i => i.userId === currentUser.id)

let totalPrice = 0;
let totalDiscount = 0;
useMemo(() => {
 userItems.forEach((item) => {
  totalPrice += Math.floor(item.item.final_price * item.quantity)
  totalDiscount += item.item.discount_percentage 
 });
}, [userItems]);
  const dispatch = useDispatch()
  const handleClearCart = ()=>{
    confirm("Are you sure you want to clear the cart?") && dispatch(clearCart())
    toast.success('Cart cleared',  {
          position: "bottom-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",})
  }
   
  return (
    <section className='flex flex-wrap p-0 sm:p-15 bg-gray-100 gap-4'>
      <div className="left w-[70%] min-w-[500px] bg-white min-h-[10vh] relative  p-4 rounded px-5 shadow-lg ">
        <span className='w-full flex justify-between border-b-2 border-gray-300 p-4'>
          <h1 className='text-2xl font-semibold'>MY BAG</h1>
          <h2 className="text-2xl">Total Items: {userItems.length}</h2>
        </span>

        {userItems?.map((elem)=>
         (
          <CartProductCard key={elem.item.id} item={elem.item} userItem={elem}/>
        )
      )}

      <div className=' h-8 float-right float-bottom mt-4 text-2xl font-bold' >
        <h1>SUB TOTAL - ₹{totalPrice}</h1>
        </div>
      <button className='bg-red-700 text-white font-md px-3 py-2 rounded mt-4 text-xl' onClick={handleClearCart}>Clear Cart
      </button>
      </div>
      <div className="right rounded w-[20%] bg-white h-fit px-3 py-2 shadow-lg min-w-[300px]">
          <h1 className='text-lg px-2 py-2 border-b-2 font-bold border-gray-300'>TOTAL</h1>

          <span className='flex justify-between items-center text-md mt-3 px-2'>
            <h2>Sub Total</h2>
            <p>₹{totalPrice}</p>
          </span>
          {totalDiscount > 0 && (
          <span className='flex justify-between items-center text-md mt-1 px-2'>
            <h2>Total Discount</h2>
            <p className='text-green-500'>{totalDiscount}%</p>
          </span>)}
          <span className='flex justify-between items-center text-md mt-1 px-2'>
            <h2>Delivery Charges</h2>
            <p className='text-green-500'>FREE</p>
          </span>
         <button className='w-full px-3 py-2 bg-green-600 mt-5 text-md text-white rounded font-semibold' onClick={handlePurchaseAll}>Purchase All</button>
      </div>
    </section>
  )
}

export default MyCart