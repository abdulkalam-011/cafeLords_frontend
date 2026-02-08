import { useCallback } from "react";
import { BsCartPlusFill } from "react-icons/bs";
import { useNavigate } from "react-router";
import { addToCart } from "../features/cart/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";

const ProductCard = ({ product }) => {
  const { currentUser, isAuthenticated } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleAddToCart = useCallback((e) => {
    e.stopPropagation();
    try {
      if (isAuthenticated) {
        dispatch(
          addToCart({
            id: Date.now(),
            item: product,
            quantity: 1,
            userId: currentUser.id,
          })
        );
        toast.success(`${product.name} Added to cart `, {
          position: "bottom-center",
          autoClose: 3000,
          theme: "dark",
        });
      } else {
        toast.error("Login to add items to cart", {
          position: "bottom-center",
          autoClose: 3000,
          theme: "dark",
        });
        setTimeout(() => {
          navigate("/login");
          window.scrollTo({ top: 0, behavior: "smooth" });
        }, 3000);
      }
    } catch (error) {
      toast.error(`failed to add items to cart due to ${error.message}`, {
        position: "bottom-center",
        autoClose: 3000,
        theme: "dark",
      });
    }
  }, [dispatch, isAuthenticated, currentUser, navigate, product]);

  return (
    <>
      <div
        name={product.name}
        onClick={() => navigate(`/${product.name}`)}
        
        className="shrink-0 w-[170px] md:w-[300px] h-68 md:h-100 cursor-pointer inline-block align-top rounded-lg overflow-hidden relative shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out bg-white hover:border-gray-300 hover:scale-[1.01] mx-1 md:mx-3 mb-4"
      >
        <div className="w-full h-[70%] md:h-[70%] overflow-hidden bg-gray-100">
          <img
            className="w-full h-full object-cover hover:scale-110 duration-200"
            src={product.image}
            alt={product.name.toLowerCase()}
            loading="lazy"
          />
        </div>
        
        <h2 className="text-sm md:text-2xl px-2 md:px-4 py-2 truncate font-medium">
          {product.name}
        </h2>

        <div className="w-full flex justify-between items-center px-2 md:px-3">
          <div className="flex flex-col">
            <p className="text-sm md:text-xl font-semibold text-gray-800">
              ₹{product.final_price}
              <span className="text-gray-400 line-through text-xs md:text-base ml-1">
                ₹{product.original_price}
              </span>
            </p>
            <p className="text-xs md:text-sm font-bold text-green-600">
              {product.discount_percentage}% OFF
            </p>
          </div>

          <button
            onClick={(e) => handleAddToCart(e)}
            className="w-8 h-8 md:w-14 md:h-14 flex justify-center items-center bg-yellow-600 rounded-full text-white text-lg md:text-2xl hover:bg-yellow-500 transition-colors shadow-md"
          >
            <BsCartPlusFill />
          </button>
        </div>
      </div>

      <ToastContainer
        position="bottom-center"
        autoClose={3000}
        theme="dark"
      />
    </>
  );
};

export default ProductCard;