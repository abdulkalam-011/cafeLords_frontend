import { useState } from "react";
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { Link, useNavigate } from "react-router";
import { FaGoogle } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { setToast } from "../../features/toast/taostSlice";
import { ToastContainer } from "react-toastify";
import { authError, signup } from "../../features/auth/authSlice";
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";

const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { error } = useSelector((state) => state.auth);
  const [fullname, setfullname] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [isText, setIsText] = useState(false);

  // for errors
  const [errorP, seterrorP] = useState("");
  const [errorEmail, seterrorEmail] = useState("");

  // handlers
  const handleView = () => {
    setIsText((prev) => !prev);
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    if (fullname.length < 5) {
      dispatch(authError("name should be atleast 5 characters"));
      return;
    } else if (password !== confirmPassword) {
      dispatch(authError("password must be same"));
      return;
    } else {
      const newUser = {
        id: Date.now(),
        name: fullname,
        email: email.toLocaleLowerCase(),
        password,
        wishlist: [],
        cart: [],
        createdAt: new Date().toLocaleDateString(),
        orderHistory: [],
        profilePicture: "",
      };
      dispatch(signup(newUser));
      dispatch(setToast({ type: "success", message: "SignUP Successfull" }));
      setfullname("");
      setEmail("");
      setPassword("");
      setconfirmPassword("");
      navigate("/login");
    }
  };
  // UI
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
                <b>SignUp</b>
              </h1>
              <p>to explore cart , wishlist , favoriates and more</p>
            </span>
            <form className="w-full mb-5" onSubmit={handleSignUp}>
              <div className="w-full justify-between items-center  flex  h-[50px] gap-3 mt-5 text-xl px-3 bg-white rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-yellow-400 border-2 border-yellow-300 transition-all duration-200">
                <FaUser />
                <input
                  className="w-full"
                  type="text"
                  placeholder="Full Name"
                  autoFocus="true"
                  autoCorrect="true"
                  autoComplete="true"
                  required
                  value={fullname}
                  onChange={(e) => setfullname(e.target.value)}
                />
              </div>
              <div className="w-full justify-center items-center bg-white flex  h-[50px] gap-3 rounded mt-5 text-xl px-3 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-yellow-400 border-2 border-yellow-300 transition-all duration-200">
                <MdEmail />
                <input
                  className="w-full h-full"
                  type="text"
                  placeholder="Email"
                  autoComplete="true"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <p>{errorEmail}</p>
              <div className="w-full justify-between items-center bg-white  flex  h-[50px] gap-3 rounded mt-5 text-xl px-3 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-yellow-400 border-2 border-yellow-300 transition-all duration-200">
                <RiLockPasswordFill />
                <input
                  className="w-full"
                  type={isText ? "text" : "password"}
                  placeholder="Password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div
                className={`w-full justify-between items-center bg-white px-3 flex  h-[50px] gap-3 rounded mt-5 text-xl px-3 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-yellow-400 border-2 border-yellow-300 transition-all duration-200`}
              >
                <RiLockPasswordFill />
                <input
                  className="w-full"
                  type={isText ? "text" : "password"}
                  placeholder="Confirm Password"
                  autoComplete="true"
                  required
                  value={confirmPassword}
                  onChange={(e) => setconfirmPassword(e.target.value)}
                />
                <button
                  name={isText ? "show" : "hide"}
                  type="button"
                  onClick={handleView}
                >
                  {isText ? <FaRegEye /> : <FaRegEyeSlash />}
                </button>
              </div>

              {error && <p className="text-red-500">{error}</p>}
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
              Already have an account?{" "}
              <span className="text-blue-700">
                <Link to="/login">Login</Link>
              </span>
            </p>

            <div className="w-full h-[50px] rounded-lg border-1 mt-5 flex gap-3 px-3 text-xl items-center justify-center">
              <FaGoogle />
              <Link>Sign up with Google</Link>
            </div>
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

export default SignUp;
