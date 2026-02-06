import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import {
  decreament,
  increament,
  removeFromCart,
} from "../../features/cart/cartSlice";

const CartProductCard = ({ item, userItem }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleRemoveFromCart = useCallback(
    (item, e) => {
      e.stopPropagation();
      if (
        window.confirm(
          `Are you sure you want to remove ${item.name} from the cart?`
        )
      ) {
        dispatch(removeFromCart(item.id));
      }
    },
    [dispatch]
  );

  const handleIncreament = useCallback(
    (itemId, e) => {
      e.stopPropagation();
      dispatch(increament(itemId));
    },
    [dispatch]
  );

  const handleDecreament = useCallback(
    (itemId, e) => {
      e.stopPropagation();
      dispatch(decreament(itemId));
    },
    [dispatch]
  );

  return (
    <div
      onClick={() => navigate(`/${item.name}`)}
      key={item.id}
      className="flex flex-col md:flex-row justify-between p-4 border-b border-gray-300 cursor-pointer md:bg-transparent"
    >
      {/* --- Left Side: Image & Details --- */}
      <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6 w-full md:w-[80%]">
        <img
          src={item.image}
          alt={item.name}
          className="h-48 w-full md:h-64 md:w-80 object-cover rounded"
        />
        
        <div className="h-full py-0 md:py-3 w-full">
          {/* Mobile: Price is usually shown near title, Desktop: Price is distinct */}
          <div className="flex justify-between items-start md:block">
            <div>
              <h3 className="text-lg font-semibold md:block hidden">₹{item.final_price}</h3>
              <h3 className="text-xl md:text-md font-bold md:font-semibold">{item.name}</h3>
            </div>
            {/* Mobile-only Price display */}
            <h3 className="text-lg font-semibold md:hidden text-green-400">₹{item.final_price}</h3>
          </div>

          <p className="text-sm text-gray-400 md:text-gray-300 mt-1">{item.description}</p>
          
          <p className="text-sm mt-2">
            <span className="bg-green-400 text-black p-1 rounded-2xl px-3 mr-2 font-bold">
              {item.rating.stars}⭐
            </span>
            <span className="opacity-75">/ {item.rating.count}</span>
          </p>

          {/* Quantity Controls */}
          <div className="flex mt-4 md:mt-5 gap-3 items-center">
            <button
              className="bg-black text-white w-10 h-10 md:w-8 md:h-8 rounded text-xl flex items-center justify-center hover:bg-gray-800"
              onClick={(e) => handleDecreament(item.id, e)}
            >
              -
            </button>
            <p className="text-2xl w-8 text-center">{userItem.quantity}</p>
            <button
              className="bg-black text-white w-10 h-10 md:w-8 md:h-8 rounded text-xl flex items-center justify-center hover:bg-gray-800"
              onClick={(e) => handleIncreament(item.id, e)}
            >
              +
            </button>
          </div>

          <p className="text-xl font-semibold text-green-500 mt-3 md:mt-5">
            {item.discount_percentage}% OFF
          </p>
        </div>
      </div>

      {/* --- Right Side: Total Price & Remove Button --- */}
      <div className="flex flex-row md:flex-col items-center justify-between md:justify-center w-full md:w-[20%] relative md:overflow-hidden mt-4 md:mt-0 pt-4 md:pt-0 border-t md:border-t-0 border-gray-700 md:border-none">
        
        {/* Total Price */}
        <span className="text-2xl md:text-lg font-bold">
            <span className="text-sm text-gray-400 font-normal mr-2 md:hidden">Total:</span>
            ₹{item.final_price * userItem.quantity}
        </span>

        {/* Remove Button */}
        {/* On Desktop: Absolute top-right. On Mobile: Static red button on right */}
        <button
          className="px-3 py-2 rounded text-red-500 md:text-red-700 md:absolute md:right-0 md:top-0 border border-red-500 md:border-none hover:bg-red-500 hover:text-white transition-colors"
          onClick={(e) => handleRemoveFromCart(item, e)}
        >
          <span className="md:hidden">Remove</span>
          <span className="hidden md:inline">X</span>
        </button>
      </div>
    </div>
  );
};

export default CartProductCard;