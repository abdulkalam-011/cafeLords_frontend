import { useMemo } from "react";
import CartProductCard from "./CartProductCard";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../../features/cart/cartSlice";
import { toast } from "react-toastify";

const MyCart = ({ handlePurchaseAll }) => {
  const { items } = useSelector((state) => state.cart);
  const { currentUser } = useSelector((state) => state.auth);
  const userItems = items.filter((i) => i.userId === currentUser.id);

  // Correct useMemo usage: Return the values instead of mutating outside variables
  const { totalPrice, totalDiscount } = useMemo(() => {
    let price = 0;
    let discount = 0;
    userItems.forEach((item) => {
      price += Math.floor(item.item.final_price * item.quantity);
      discount += item.item.discount_percentage; // Note: This sums up percentages, just logic check if you want avg or sum
    });
    return { totalPrice: price, totalDiscount: discount };
  }, [userItems]);

  const dispatch = useDispatch();
  const handleClearCart = () => {
    if (confirm("Are you sure you want to clear the cart?")) {
      dispatch(clearCart());
      toast.success("Cart cleared", {
        position: "bottom-center",
        theme: "dark",
      });
    }
  };

  return (
    <section className="min-h-screen bg-gray-100 p-4 md:p-8 flex flex-col lg:flex-row gap-6 items-start">
      
      {/* --- Left Section: Cart Items --- */}
      <div className="flex-1 w-full bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Header */}
        <div className="flex justify-between items-center border-b border-gray-200 p-4 md:p-6 bg-white">
          <h1 className="text-xl md:text-2xl font-bold text-gray-800">MY BAG</h1>
          <h2 className="text-lg md:text-xl text-gray-500">
            {userItems.length} {userItems.length === 1 ? 'Item' : 'Items'}
          </h2>
        </div>

        {/* Product List */}
        <div className="flex flex-col gap-2">
          {userItems.length > 0 ? (
            userItems.map((elem) => (
              <CartProductCard
                key={elem.item.id}
                item={elem.item}
                userItem={elem}
              />
            ))
          ) : (
            <div className="p-10 text-center text-gray-500 text-lg">
              Your cart is empty.
            </div>
          )}
        </div>

        {/* Footer: Subtotal & Clear Cart */}
        {userItems.length > 0 && (
          <div className="p-4 md:p-6 bg-gray-50 border-t border-gray-200 flex flex-col-reverse sm:flex-row justify-between items-center gap-4">
            <button
              className="w-full sm:w-auto px-6 py-3 bg-red-100 text-red-700 hover:bg-red-200 font-semibold rounded-lg transition-colors"
              onClick={handleClearCart}
            >
              Clear Cart
            </button>
            <div className="text-xl md:text-2xl font-bold text-gray-800">
              SUB TOTAL: <span className="text-green-600">₹{totalPrice}</span>
            </div>
          </div>
        )}
      </div>

      {/* --- Right Section: Summary Sidebar --- */}
      {/* Shows only if there are items, or you can leave it always visible */}
      {userItems.length > 0 && (
        <div className="w-full lg:w-96 bg-white rounded-xl shadow-lg p-6 sticky top-24">
          <h1 className="text-lg font-bold border-b border-gray-200 pb-4 mb-4 text-gray-700 uppercase tracking-wider">
            Price Details
          </h1>

          <div className="space-y-3">
            <div className="flex justify-between items-center text-gray-600">
              <h2>Sub Total</h2>
              <p className="font-medium">₹{totalPrice}</p>
            </div>
            
            {totalDiscount > 0 && (
              <div className="flex justify-between items-center text-green-600">
                <h2>Total Discount</h2>
                <p>₹{Math.floor((totalPrice * totalDiscount) / 100)} (approx)</p>
              </div>
            )}
            
            <div className="flex justify-between items-center text-gray-600 border-b border-gray-200 pb-4">
              <h2>Delivery Charges</h2>
              <p className="text-green-600 font-medium">FREE</p>
            </div>

            <div className="flex justify-between items-center text-xl font-bold text-gray-900 pt-2">
              <h2>Grand Total</h2>
              <p>₹{totalPrice}</p>
            </div>
          </div>

          <button
            className="w-full mt-8 bg-black text-white py-4 rounded-xl font-bold text-lg hover:bg-gray-800 transition-transform active:scale-95 shadow-lg"
            onClick={handlePurchaseAll}
          >
            Checkout Securely
          </button>
        </div>
      )}
    </section>
  );
};

export default MyCart;