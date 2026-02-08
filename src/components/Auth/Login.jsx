import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  ToastContainer } from "react-toastify";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom"; // Fixed import: 'react-router' -> 'react-router-dom'
import { login } from "../../features/auth/authSlice";
import { setToast } from "../../features/toast/taostSlice";
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { error, isAuthenticated } = useSelector((state) => state.auth);
  // Removed redundant toast selector if not used directly, handled via ToastContainer
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isText, setIsText] = useState(false);

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  const handleView = () => {
    setIsText((prev) => !prev);
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ password, email }));
    dispatch(setToast({ type: "success", message: "Login Successful" }));
    
    // Note: navigate('/') inside useEffect handles redirection better than history.back()
    // but keeping your logic if specific behavior needed:
    if (isAuthenticated) {
      window.history.back(); 
    }
  };

  return (
    <>
      <section className="min-h-screen w-full flex items-center justify-center bg-[#ffe] p-4 md:p-10">
        <div className="shadow-2xl w-full max-w-5xl bg-white rounded-2xl flex flex-col md:flex-row overflow-hidden">
          
          {/* RIGHT SIDE (Logo/Branding) - Hidden on mobile, visible on medium screens and up */}
          {/* Switched order visually: In code it's first (left on desktop), but on mobile it stacks on top */}
          <div className="hidden md:flex md:w-1/2 bg-yellow-400 text-center flex-col justify-center items-center p-10 relative">
             {/* Decorative circles */}
             <div className="absolute top-10 left-10 w-20 h-20 bg-white/20 rounded-full blur-xl"></div>
             <div className="absolute bottom-10 right-10 w-32 h-32 bg-orange-400/20 rounded-full blur-xl"></div>
             
            <img 
              className="w-48 mb-6 drop-shadow-lg transform hover:scale-105 transition-transform duration-300" 
              src="images/logo.png" 
              alt="logo" 
            />
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-wider">
              CAFELORDS
            </h1>
            <p className="mt-4 text-gray-800 text-lg opacity-80 max-w-xs">
              Experience the best coffee in town, delivered right to your doorstep.
            </p>
          </div>

          {/* LEFT SIDE (Form) */}
          <div className="w-full md:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-center bg-white">
            <div className="mb-8 text-center md:text-left">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                Login
              </h1>
              <p className="text-gray-500 text-sm md:text-base">
                To explore cart, wishlist, favorites and more.
              </p>
            </div>

            <form className="w-full space-y-5" onSubmit={handleLoginSubmit}>
              {/* Email Input */}
              <div className="flex items-center w-full bg-white border-2 border-yellow-300 rounded-lg px-4 py-3 shadow-sm focus-within:ring-2 focus-within:ring-yellow-400 focus-within:border-yellow-400 transition-all duration-200">
                <MdEmail className="text-gray-500 text-xl flex-shrink-0" />
                <input
                  className="w-full ml-3 bg-transparent outline-none text-gray-700 text-lg placeholder-gray-400"
                  type="email" // Lowercase 'email' is standard HTML
                  placeholder="Email"
                  autoComplete="email" // standard autocomplete value
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              {/* Password Input */}
              <div className="flex items-center w-full bg-white border-2 border-yellow-300 rounded-lg px-4 py-3 shadow-sm focus-within:ring-2 focus-within:ring-yellow-400 focus-within:border-yellow-400 transition-all duration-200">
                <RiLockPasswordFill className="text-gray-500 text-xl flex-shrink-0" />
                <input
                  className="w-full ml-3 bg-transparent outline-none text-gray-700 text-lg placeholder-gray-400"
                  type={isText ? "text" : "password"}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="current-password" // standard autocomplete value for login
                />
                <button 
                  type="button" 
                  onClick={handleView} 
                  className="text-gray-500 hover:text-gray-700 focus:outline-none ml-2"
                >
                  {isText ? <FaRegEye /> : <FaRegEyeSlash />}
                </button>
              </div>

              {/* Error Message */}
              {error && (
                <div className="p-3 bg-red-50 text-red-500 text-sm rounded-lg border border-red-100 text-center animate-pulse">
                  {error}
                </div>
              )}

              {/* Terms Checkbox */}
              <div className="flex items-start gap-3 mt-4">
                <input 
                  type="checkbox" 
                  id="terms" 
                  className="mt-1 w-5 h-5 text-blue-600 rounded border-gray-300 focus:ring-blue-500" 
                  required // Added required to enforce policy acceptance
                />
                <label htmlFor="terms" className="text-sm text-gray-600 leading-snug">
                  By continuing, you accept our{" "}
                  <Link to="/privacy" className="text-blue-600 hover:underline">
                    Privacy Policy
                  </Link>{" "}
                  and{" "}
                  <Link to="/terms" className="text-blue-600 hover:underline">
                    Terms & Conditions
                  </Link>
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full mt-6 bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-4 rounded-xl shadow-lg transform active:scale-95 transition-all duration-200 text-lg"
              >
                Submit
              </button>
            </form>

            {/* Signup Link */}
            <p className="mt-8 text-center text-gray-600">
              Don't have an account?{" "}
              <Link to="/signup" className="text-blue-700 font-bold hover:underline ml-1">
                Sign Up
              </Link>
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