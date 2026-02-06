import React, { useCallback } from "react";
import { NavLink } from "react-router-dom"; // Correct import
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../features/auth/authSlice";

// Icons
import { FaUser, FaHeart } from "react-icons/fa";
import { FaMapLocation } from "react-icons/fa6";
import { BsFillBoxFill } from "react-icons/bs";
import { MdReviews } from "react-icons/md";
import { IoIosNotifications, IoMdLogOut } from "react-icons/io";

const SIDEBAR_LINKS = [
  { to: "/profile/personal-info", label: "My Profile", icon: <FaUser />, end: true },
  { to: "/profile/address", label: "My Address", icon: <FaMapLocation /> },
  { to: "/profile/orders", label: "My Orders", icon: <BsFillBoxFill /> },
  { to: "/wishlist", label: "My Wishlist", icon: <FaHeart /> },
  { to: "/profile/reviews", label: "Reviews & Ratings", icon: <MdReviews /> },
  { to: "/profile/notifications", label: "Notifications", icon: <IoIosNotifications /> },
];

const SideBar = () => {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.auth);

  const handleLogOut = useCallback(() => {
    if (window.confirm("Are you sure you want to log out?")) {
      dispatch(logout());
    }
  }, [dispatch]);

  const navItemClass = ({ isActive }) =>
    `flex items-center gap-4 px-4 py-3 rounded-lg transition-all duration-200 font-medium ${
      isActive
        ? "bg-yellow-400 text-black shadow-md translate-x-2"
        : "text-gray-600 hover:bg-yellow-50 hover:text-black hover:translate-x-1"
    }`;

  return (
    <aside className="w-full md:w-80 flex flex-col gap-6 md:sticky md:top-24 h-fit">
      
      {/* 1. User Info Card */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4">
        <div className="relative">
          {currentUser?.profilePicture ? (
            <img
              className="w-14 h-14 rounded-full object-cover border-2 border-yellow-400 p-0.5"
              src={currentUser.profilePicture}
              alt={currentUser.name}
            />
          ) : (
            <div className="w-14 h-14 rounded-full bg-yellow-100 text-yellow-600 flex items-center justify-center text-xl border-2 border-yellow-400">
              <FaUser />
            </div>
          )}
          <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
        </div>
        
        <div className="overflow-hidden">
          <p className="text-xs text-gray-500 uppercase tracking-wider font-bold">Welcome,</p>
          <h2 className="text-lg font-bold text-gray-900 truncate">
            {currentUser?.name || "Guest"}
          </h2>
        </div>
      </div>

      {/* 2. Navigation Menu */}
      <nav className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex flex-col gap-1">
        <div className="px-4 py-2 mb-2">
          <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest">Dashboard</h3>
        </div>

        {SIDEBAR_LINKS.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.end} // Ensures exact match for /profile
            className={navItemClass}
          >
            <span className="text-xl">{link.icon}</span>
            <span>{link.label}</span>
          </NavLink>
        ))}

        <div className="my-2 border-t border-gray-100"></div>

        {/* Logout Button */}
        <button
          onClick={handleLogOut}
          className="flex items-center gap-4 px-4 py-3 rounded-lg text-red-500 hover:bg-red-50 hover:translate-x-1 transition-all duration-200 font-medium w-full text-left"
        >
          <span className="text-xl"><IoMdLogOut /></span>
          <span>Logout</span>
        </button>
      </nav>
    </aside>
  );
};

export default SideBar;