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

  // Function to handle adding item to cart
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
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      } else {
        toast.error("Login to add items to cart", {
          position: "bottom-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        setTimeout(() => {
          navigate("/login");
          window.scrollTo({ top: 0, behavior: "smooth" });
        }, 3000);
      }
    } catch (error) {
      toast.error("Failed to add item to cart ! Please try again", {
        position: "bottom-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  });

  // UI
  return (
    <>
      <div
        name={product.name}
        onClick={() => navigate(`/${product.name}`)}
        to={`/${product.name}`}
        className="w-80 h-96 pointer display-inline-block rounded-1 overflow-hidden relative shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out rounded-lg bg-product hover:border-1 hover:scale-101"
      >
        <div className="w-full h-[65%] overflow-hidden bg-grey-100">
          {" "}
          <img
            className="w-full h-full  object-cover hover:scale-106 duration-200 ease"
            src={product.image}
            alt={product.name.toLowerCase()}
            loading="lazy"
          />
        </div>
        <h2 className="text-2xl px-4 py-3">{product.name}</h2>
        <div className="w-full flex justify-between items-center px-3">
          <div className="w-[80%]">
            <p className="px-4 text-xl font-semibold hover:text-green-500 hover:text-2xl duration-200 ease price ">
              ₹{product.final_price} <span>₹{product.original_price}</span>
            </p>
            <p className="px-4 text-xl font-semibold text-green-500 mt-2">
              {product.discount_percentage}% OFF
            </p>
          </div>
          <button
            name="add to cart"
            onClick={(e) => handleAddToCart(e)}
            className="w-16 h-16 flex justify-center items-center z-9  bg-yellow-600 rounded-full text-3xl"
          >
            <BsCartPlusFill />
          </button>
        </div>
      </div>

      <ToastContainer
        position="bottom-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
};

export default ProductCard;
