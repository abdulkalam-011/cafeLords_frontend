import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { Link, useNavigate } from "react-router";
import { login } from "../../features/auth/authSlice";
import { setToast } from "../../features/toast/taostSlice";
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const {error,isAuthenticated} = useSelector(state => state.auth)
  const {toast} = useSelector(state => state.toast)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isText, setIsText] = useState(false)

    useEffect(()=>{
      
     if(isAuthenticated){
      navigate('/')
     }
   },[isAuthenticated])

   const handleView = ()=>{
    setIsText(prev => !prev)
   }

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    dispatch(login({password , email}))
    dispatch(setToast({type:"success",message:'Login Successfull'}))
   if(isAuthenticated){
    history.back()
   }
  };

  return (
    <>
      <section className="p-10 w-full  flex-center bg-[#ffe]">
        <div className="shadow-md w-full min-h-[80vh] rounded-xl bg-white flex justify-center itmes-center gap-5 flex-wrap">
          <div className="rigth bg-theme w-[450px] h-[80vh] text-center flex justify-center flex-col overflow-hidden">
            <img className="scale-200" src="images/logo.png" alt="logo" />
            <h1 className="text-center text-4xl">
              <b>CAFELORDS</b>
            </h1>
          </div>
          <div className="left rounded w-[480px] h-[80vh] p-5 flex flex-col">
            <span>
              <h1 className="text-4xl ">
                <b>Login</b>
              </h1>
              <p>to explore cart , wishlist , favoriates and more</p>
            </span>
            <form className="w-full mb-5" onSubmit={handleLoginSubmit}>
              <div className="w-full justify-center items-center bg-white flex  h-[50px] gap-3 mt-5 text-xl px-3 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-yellow-400 border-2 border-yellow-300 transition-all duration-200">
                <MdEmail />
                <input
                  className="w-full h-full"
                  type="Email"
                  placeholder="Email"
                  autoComplete="true"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              
              </div>
              <div className="w-full justify-between items-center bg-white  flex  h-[50px] gap-3 mt-5 text-xl px-3 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-yellow-400 border-2 border-yellow-300 transition-all duration-200">
                <RiLockPasswordFill />
                <input
                  className="w-full"
                  type={isText?"text": "password"}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="new-password"
                />
                  <button type="button" onClick={handleView}>{isText?<FaRegEye />: <FaRegEyeSlash />}</button>
              </div>
              { error && <p className="text-red-500">{error}</p>}
              <div className="flex gap-3 text-xl mt-5 px-3">
                <input type="checkbox" name="" id="" />
                <p>
                  by continuing you accept our privacy policy and term &
                  conditiom
                </p>
              </div>
              <input
                type="submit"
                value="Submit"
                className="mt-10 bg-blue-700 w-full h-[50px] rounded-lg text-center text-xl text-white"
              />
            </form>
            <p className="text-xl text-center mb-5">
              Don't have an account?{" "}
              <span className="text-blue-700">
                <Link to="/signup">SignUp</Link>
              </span>
            </p>
          </div>
        </div>
      </section>
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

export default Login;
