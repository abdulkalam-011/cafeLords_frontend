import { Suspense, useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { toast, ToastContainer } from "react-toastify";
import { addToCart } from "../features/cart/cartSlice";
import ProductCard from "../components/ui/ProductCard";
import SkeletonCard from "../components/ui/SkeletonCard";

const ProductPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { product: productName } = useParams(); // Renamed param for clarity

  const { items } = useSelector((state) => state.menu);
  const { isAuthenticated, currentUser } = useSelector((state) => state.auth);

  const [currSize, setCurrSize] = useState("M");
  const [quantity, setQuantity] = useState(1);

  // Find the current item safely
  const item = items.find((i) => i.name === productName);

  // Get Related Items (excluding current item, take top 4)
  const relatedItems = items.filter((i) => i.name !== productName).slice(0, 4);

  const sizes = ["S", "M", "L", "XL", "XXL"];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    if (item) {
      document.title = `${item.name} | CafeLords`;
    }
  }, [item, productName]);

  const handleAddToCart = useCallback(
    (e) => {
      e.stopPropagation();
      if (!item) return;

      try {
        if (isAuthenticated) {
          dispatch(
            addToCart({
              id: Date.now(),
              item: item,
              quantity: quantity,
              userId: currentUser.id,
              size: currSize, // Added size to cart payload
            }),
          );
          toast.success(`${item.name} Added to cart`, {
            theme: "dark",
            position: "bottom-center",
          });
        } else {
          toast.error("Please login to add items", {
            theme: "dark",
            position: "bottom-center",
          });
          setTimeout(() => navigate("/login"), 2000);
        }
      } catch (err) {
        toast.error("Something went wrong", err, { theme: "dark" });
      }
    },
    [
      isAuthenticated,
      navigate,
      dispatch,
      item,
      quantity,
      currSize,
      currentUser,
    ],
  );

  const handleBuy = useCallback(
    (e) => {
      e.preventDefault();
      if (isAuthenticated && currentUser) {
        // Your buy logic here
        console.log("Processing order for:", {
          item: item.name,
          price: item.final_price,
          size: currSize,
          quantity,
          user: currentUser.email,
        });
        toast.success("Proceeding to checkout...", {
          theme: "dark",
          position: "bottom-center",
        });
      } else {
        toast.error("Please login to buy", {
          theme: "dark",
          position: "bottom-center",
        });
        setTimeout(() => navigate("/login"), 2000);
      }
    },
    [isAuthenticated, currentUser, item, currSize, quantity, navigate],
  );

  return (
    <div className="min-h-screen bg-theme-dark text-white pt-6 pb-20 px-4 md:px-8">
      {item ? (
        <div className="max-w-7xl mx-auto">
          {/* Main Product Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 mb-24 mt-8">
            {/* Left Column: Image */}
            <div className="w-full aspect-square lg:h-[600px] bg-[#111] rounded-3xl overflow-hidden shadow-2xl relative group">
              <img
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                src={item.image}
                alt={item.name}
              />
              {/* Floating Rating Badge */}
              <div className="absolute top-6 right-6 bg-black/60 backdrop-blur-md text-white px-4 py-2 rounded-full flex items-center gap-2 border border-white/10 shadow-lg">
                <span className="text-yellow-400">★</span>
                <span className="font-bold">{item.rating.stars}</span>
                <span className="text-xs text-gray-300">
                  ({item.rating.count})
                </span>
              </div>
            </div>

            {/* Right Column: Details */}
            <div className="flex flex-col justify-center h-full">
              {/* Header */}
              <div className="mb-6">
                <h1 className="text-2xl md:text-6xl font-black tracking-tight mb-2 text-white">
                  {item.name}
                </h1>
                <p className="text-lg text-gray-400">{item.description}</p>
              </div>

              {/* Pricing */}
              <div className="flex items-end gap-4 mb-8">
                <p className="text-5xl font-bold text-green-400">
                  ₹{item.final_price}
                </p>
                <div className="flex flex-col mb-1">
                  <span className="text-xl text-gray-500 line-through">
                    ₹{item.original_price}
                  </span>
                  <span className="text-red-400 text-sm font-bold">
                    -{item.discount_percentage}% OFF
                  </span>
                </div>
              </div>

              <div className="h-px w-full bg-gray-800 mb-2"></div>

              {/* Controls Grid */}
              <div className="space-y-8">
                {/* Size Selector */}
                <div>
                  <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">
                    Select Size
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setCurrSize(size)}
                        className={`w-14 h-14 rounded-xl font-bold text-lg transition-all border-2 flex items-center justify-center
                          ${
                            currSize === size
                              ? "border-yellow-500 bg-yellow-500 text-black shadow-[0_0_15px_rgba(234,179,8,0.4)] scale-110"
                              : "border-gray-700 text-gray-300 hover:border-gray-500 hover:bg-gray-800"
                          }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Quantity & Add to Cart Row */}
                <div className="flex flex-col sm:flex-row gap-4">
                  {/* Quantity Stepper */}
                  <div className="flex items-center bg-[#222] rounded-xl p-1 w-fit border border-gray-700">
                    <button
                      className="w-12 h-12 flex items-center justify-center text-2xl text-gray-400 hover:text-white hover:bg-gray-700 rounded-lg transition"
                      onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                    >
                      -
                    </button>
                    <span className="w-12 text-center font-bold text-xl">
                      {quantity}
                    </span>
                    <button
                      className="w-12 h-12 flex items-center justify-center text-2xl text-gray-400 hover:text-white hover:bg-gray-700 rounded-lg transition"
                      onClick={() => setQuantity(quantity + 1)}
                    >
                      +
                    </button>
                  </div>

                  {/* Add To Cart Button */}
                  <button
                    onClick={handleAddToCart}
                    className="flex-1 bg-green-500 hover:bg-green-400 text-black font-bold text-lg py-4 rounded-xl transition-all shadow-lg active:scale-95"
                  >
                    Add To Cart
                  </button>
                </div>

                {/* Buy Now Button */}
                <button
                  onClick={handleBuy}
                  className="w-full bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-400 hover:to-orange-500 text-black font-bold text-xl py-4 rounded-xl shadow-lg transition-transform hover:-translate-y-1 active:scale-95"
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>

          {/* Related Items Section */}
          {relatedItems.length > 0 && (
            <div className="mt-32">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-xl font-bold text-white">
                  You May Also Like
                </h2>
                <button
                  onClick={() => navigate("/menu")}
                  className="text-yellow-400 hover:text-yellow-300 text-sm font-semibold uppercase tracking-wider"
                >
                  View All
                </button>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {/* {relatedItems.map((relItem) => (
                  <div 
                    key={relItem.id || relItem.name} 
                    onClick={() => navigate(`/product/${relItem.name}`)}
                    className="bg-[#1a1a1a] rounded-2xl p-4 cursor-pointer hover:bg-[#222] transition-colors group"
                  >
                    <div className="aspect-[4/5] rounded-xl overflow-hidden mb-4 bg-black relative">
                      <img 
                        src={relItem.image} 
                        alt={relItem.name} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <h3 className="font-bold text-lg truncate mb-1">{relItem.name}</h3>
                    <div className="flex justify-between items-center">
                        <span className="text-green-400 font-bold">₹{relItem.final_price}</span>
                        <span className="text-xs text-gray-500 line-through">₹{relItem.original_price}</span>
                    </div>
                  </div>
                ))} */}
                {relatedItems.map((relItem) => {
                  return (
                    <div key={relItem.id} className="w-full h-full text-black">
                      <Suspense fallback={<SkeletonCard />}>
                        <ProductCard product={relItem} />
                      </Suspense>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="h-[80vh] flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl font-bold text-red-500 mb-4">
            Product Not Found
          </h1>
          <p className="text-gray-400 mb-8">
            The item you are looking for does not exist or has been removed.
          </p>
          <button
            onClick={() => navigate("/menu")}
            className="px-8 py-3 bg-white text-black rounded-full font-bold hover:bg-gray-200 transition"
          >
            Back to Menu
          </button>
        </div>
      )}

      <ToastContainer />
    </div>
  );
};

export default ProductPage;
