import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { toast, ToastContainer } from "react-toastify";
import { addToCart } from "../features/cart/cartSlice";

const ProductPage = () => {
  const dispatch = useDispatch()
const navigate = useNavigate()
  const [currSize, setCurrSize] = useState("M");
  const [Quantity, setQuantity] = useState(1);
  const param = useParams();
  const { items } = useSelector((state) => state.menu);
  const { isAuthenticated,currentUser } = useSelector((state) => state.auth);
  let filteredItem = items.filter((item) => item.name == param.product);
  const item = filteredItem[0];
  const sizes = ["L", "M", "S", "xXL"];

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = item ? item.name : "Product Not Found";
  }, []);

  const handleAddToCart = useCallback((e) => {
     e.stopPropagation();
     try {
       if(isAuthenticated){ 
       dispatch(addToCart({
         id:Date.now(),
         item:item,
         quantity:1,
         userId: currentUser.id
       }))
     toast.success(`${item.name} Added to cart `,  {
       position: "bottom-center",
       autoClose: 3000,
       hideProgressBar: false,
       closeOnClick: false,
       pauseOnHover: true,
       draggable: true,
       progress: undefined,
       theme: "dark",
     })}else{
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
         navigate('/login');
         window.scrollTo({top: 0, behavior: 'smooth'});
       }, 3000);
     }
 
       
     } catch (error) {
      console.log(error)
       toast.error(error, {
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
  

 const handleBuy = useCallback((e)=>{
  try {
    
    if(isAuthenticated && currentUser){
     const order = {
       item,
       size: currSize,
       quantity:Quantity,
       orderId : Math.floor(Math.random()*100000),
       user: {
         name : currentUser.name,
         id: currentUser.id,
         email:currentUser.email
       }
     }
   console.log(order)
   }else{
     toast.error("Login to add items to cart", {
           position: "bottom-center", 
           autoClose: 3000,
           hideProgressBar: false,
           closeOnClick: false,
           pauseOnHover: true,
           draggable: true,
           progress: undefined,
           theme: "dark",
         })
          setTimeout(() => {
          navigate('/login');
          window.scrollTo({top: 0, behavior: 'smooth'});
        }, 3000);
         console.log("user is Not login ")
   }
  } catch (error) {
   toast.error("server failed :unable to add item to cart ! Please try again", {
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
 })
  const handleSize = (size) => {
    setCurrSize(size);
  };

  return (

   <>
     {item ? (  <div className="w-full h-[100vh] bg-theme-dark flex items-center justify-center p-8 ">
      <div className="w-[90%] h-[95%] rounded flex flex-wrap bg-[#111] overflow-auto shadow-lg">
        <div className="w-[40%] h-full">
          <img className="w-full h-full fit-cover rounded shadow-md" src={item.image} alt="" />
        </div>
        <div className="w-[60%] h-full p-8">
          <div className="w-full  rounded px-8">
            <p className="text-3xl">{item.description}</p>
            <p className="text-xl mt-2">
              <span className="bg-green-400 p-1 rounded-2xl px-3 mr-2">
                {item.rating.stars}⭐
              </span>
              / {item.rating.count}
            </p>
          </div>
          <div className="text-2xl mt-2 w-full  rounded p-8 py-4">
            <h1 className="text-4xl font-bold ">{item.name}</h1>
            <p className="mt-2">M.R.P.</p>
            <p className="text-3xl text-green-300">
              {" "}
              <span className="text-red-900">
                -{item.discount_percentage}%
              </span>{" "}
              ₹{item.final_price}
            </p>
            <p className="text-[15px] text-black mt-2 bg-gray-100 w-26 px-2 line-th rounded-xl opacity-75">
              M.R.P. ₹{item.original_price}
            </p>
          </div>
          <div className="text-3xl mt-2 w-full  rounded-xl p-8 py-4 font-semibold ">
            <h1>Size </h1>
            <div className="flex gap-4  flex-wrap mt-4">
              {sizes.map((size,idx) => (
                <button
                  key={idx}
                  className={`px-3 py-2 border-1 rounded-full ${
                    currSize === size ? "bg-white text-black" : ""
                  }`}
                  onClick={() => handleSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="flex justify-between items-center mt-5 text-xl px-8 pb-4 py-3 rounded-3xl">
            <p className="text-4xl font-semibold ">Quantity </p>
            <div className="flex justify-between items-center ">
              <button className="bg-gray-600 rounded w-8 h-8 text-white flex items-center justify-center font-semibold " onClick={()=>{Quantity>1? setQuantity(Quantity-1):''}}>-</button>
              <p className="font-bold text-3xl mx-5 flex justify-center items-center text-center bg-white text-black rounded-md px-5 py-2">{Quantity}</p>
              <button className="bg-gray-600 mr-4 rounded w-8 h-8 text-white flex items-center justify-center font-semibold " onClick={()=>setQuantity(Quantity+1)}>+</button>
            </div>
          </div>

          <div className="flex gap-8 items-center justify-end mt-0 text-white">
                <button onClick={handleAddToCart} className="px-8 py-5 bg-green-400 text-2xl w-[40%] font-bold   hover:opacity-75 rounded-xl">Add To Cart </button>
                <button onClick={handleBuy} className="px-8 py-5 bg-yellow-500 w-[60%] text-2xl font-bold rounded-xl hover:opacity-75 cursor-pointer">Buy Now</button>
          </div>
        </div>
      </div>
    </div>): (<div className="w-full h-[90vh] bg-theme flex items-center justify-center">
        <h1 className="text-4xl font-bold text-red-600">Product Not Available</h1>
      </div>)}

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

export default ProductPage;
