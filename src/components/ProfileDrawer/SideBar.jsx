import { Link, NavLink } from "react-router";
import { FaUser } from "react-icons/fa";
import { IoMdLogOut } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { FaHeart } from "react-icons/fa";
import { FaMapLocation } from "react-icons/fa6";
import { BsFillBoxFill } from "react-icons/bs";
import { MdReviews } from "react-icons/md";
import { IoIosNotifications } from "react-icons/io";
import { useCallback } from "react";
import { logout } from "../../features/auth/authSlice";

const SideBar = () => {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.auth);

  const handleLogOut = useCallback(() => {
    dispatch(logout());
  });

  // UI
  return (
    <section className=" min-w-[300px] h-fit ">
      <div className="w-full h-[10%] bg-white flex items-center  gap-3 p-2 rounded">
        {currentUser?.profilePicture ? (
          <img
            className="w-[50px] h-[50px] border-3 border-yellow-200 rounded-full flex-center"
            src={currentUser.profilePicture}
            alt="profilepicture"
          />
        ) : (
          <div className="w-[50px] h-[50px] border-3 border-yellow-200 rounded-full flex-center">
            <FaUser />
          </div>
        )}
        <div>
          <p className="text-sm leading-1.01">Hello</p>
          <h1 className="text-lg">
            <b>{currentUser.name}</b>
          </h1>
        </div>
      </div>
      <div className="w-full h-[72vh] bg-white mt-5 p-3 rounded flex flex-col gap-3">
        <h1 className="text-xl">
          <b>Dashboard</b>
        </h1>
        <div className="flex flex-col gap-2">
          <NavLink
            className={` flex gap-2 items-center text-left hover:bg-yellow-200 p-2 rounded ${({
              isActive,
            }) => (isActive ? "bg-yellow-200" : "")}`}
            to="/profile"
          >
            {" "}
            <span className=" overflow-hidden flex-center">
              <FaUser />{" "}
            </span>{" "}
            My Profile
          </NavLink>
          <NavLink
            className={` flex gap-2 items-center text-left hover:bg-yellow-200 p-2 rounded ${({
              isActive,
            }) => (isActive ? "bg-yellow-200" : "")}`}
            to="/profile/address"
          >
            {" "}
            <span className=" overflow-hidden flex-center">
              <FaMapLocation />
            </span>{" "}
            My Address
          </NavLink>
          <NavLink
            className={` flex gap-2 items-center text-left hover:bg-yellow-200 p-2 rounded ${({
              isActive,
            }) => (isActive ? "bg-yellow-200" : "")}`}
            to="/profile/orders"
          >
            {" "}
            <span className=" overflow-hidden flex-center">
              <BsFillBoxFill />
            </span>{" "}
            My Orders
          </NavLink>
          <NavLink
            className={` flex gap-2 items-center text-left hover:bg-yellow-200 p-2 rounded ${({
              isActive,
            }) => (isActive ? "bg-yellow-200" : "")}`}
            to="/wishlist"
          >
            {" "}
            <span className=" overflow-hidden flex-center">
              <FaHeart />{" "}
            </span>
            My Wishlist
          </NavLink>
          <NavLink
            className={` flex gap-2 items-center text-left hover:bg-yellow-200 p-2 rounded ${({
              isActive,
            }) => (isActive ? "bg-yellow-200" : "")}`}
            to="/profile/reviews"
          >
            {" "}
            <span className=" overflow-hidden flex-center">
              <MdReviews />
            </span>
            Reviews and Rating{" "}
          </NavLink>
          <NavLink
            className={` flex gap-2 items-center text-left hover:bg-yellow-200 p-2 rounded ${({
              isActive,
            }) => (isActive ? "bg-yellow-200" : "")}`}
            to="/profile/notifications"
          >
            {" "}
            <span className=" overflow-hidden flex-center">
              <IoIosNotifications />
            </span>
            All Notification
          </NavLink>
          <button
            onClick={handleLogOut}
            className=' flex gap-2 items-center text-left hover:bg-yellow-200 p-2 rounded bg-gray-100 '
          
          >
            {" "}
            <span className=" overflow-hidden flex-center">
              <IoMdLogOut />{" "}
            </span>
            Logout
          </button>
        </div>
      </div>
    </section>
  );
};

export default SideBar;
