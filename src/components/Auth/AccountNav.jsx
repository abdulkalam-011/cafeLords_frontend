import { Link } from "react-router";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { logout } from "../../features/auth/authSlice";
import { FaUser } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { IoMdLogOut } from "react-icons/io";

const AccountNav = () => {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className="p-2 flex gap-6">
      <Link to="/cart" className="flex flex-col items-center">
        <FaShoppingCart />
        <p>Cart</p>
      </Link>
      <Link
        to="/profile"
        className="flex gap-2 bg-yellow-200 text-black items-center px-2 py-1 rounded-full justify-between"
      >
        <h1>{currentUser?.name}</h1>
        {currentUser?.profilePicture ? (
          <img
            className="w-10 rounded-full ml-2"
            src={currentUser.profilePicture}
            alt="profilepicture"
          />
        ) : (
          <FaUser />
        )}
      </Link>
      <button
        className="bg-red-800 rounded px-3 py-2 text-lg"
        onClick={handleLogout}
      >
        <IoMdLogOut />
      </button>
    </div>
  );
};

export default AccountNav;
