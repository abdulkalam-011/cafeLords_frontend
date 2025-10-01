import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router'
import { decreament, increament, removeFromCart } from '../../features/cart/cartSlice';

const CartProductCard = ({item,userItem}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch(); 
  const {items} = useSelector(state => state.cart)

  const handleRemoveFromCart = useCallback((item,e)=>{
    e.stopPropagation();
   if (window.confirm(`Are you sure you want to remove ${item.name} from the cart?`)) {
   alert(`${item.name} removed from cart!`);
   console.log(item.id)
  dispatch(removeFromCart(item.id));
   }
 })


  const handleIncreament =useCallback((itemId,e) =>{
     e.stopPropagation();
   dispatch(increament(itemId))
  } ,[]); 

  const handleDecreament = useCallback((itemId,e)=> {
    e.stopPropagation();
   dispatch(decreament(itemId))
  },[]);

  return (
  <div onClick={() => navigate(`/${item.name}`)} key={item.id} className="flex justify-between p-4 border-b border-gray-300 cursor-pointer">
            <div className="flex items-center gap-6  w-[80%]">
              <img src={item.image} alt={item.name} className="h-62 w-80 object-cover rounded" />
              <div className='h-full py-3'>
                <h3 className="text-lg font-semibold">₹{item.final_price}</h3>
                <h3 className="text-md font-semibold">{item.name}</h3>
                <p className="text-sm">{item.description}</p>
                <p className="text-sm mt-2">
              <span className="bg-green-400 p-1 rounded-2xl px-3 mr-2">
                {item.rating.stars}⭐
              </span>
              / {item.rating.count}
            </p>
            <div className='flex mt-5 gap-3'>
              <button className='bg-black text-white w-8 h-8 rounded' onClick={(e)=> handleDecreament(item.id,e)}>-</button>
               <p className='text-2xl'>{userItem.quantity}</p>
              <button className='bg-black text-white w-8 h-8 rounded' onClick={(e)=> handleIncreament(item.id,e)}>+</button>
              
            </div>
               <p className="text-xl font-semibold text-green-500 mt-5">{item.discount_percentage}% OFF</p>
              </div>
            </div>
            <span className="text-lg font-bold w-[20%] relative overflow-hidden flex items-center justify-center">₹{item.final_price * userItem.quantity} <button className='px-3 py-2 rounded absolute right-0 top-0 text-red-700' onClick={(e)=>handleRemoveFromCart(item,e)}>X</button></span>
          </div>
  )
}

export default CartProductCard