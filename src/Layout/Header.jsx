import { Link } from "react-router-dom";
import LoginButton from "../components/LoginButton";
import AccountNav from "../components/AccountNav";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const { isAuthenticated, currentUser } = useSelector((state) => state.auth);

  return (
    <div className=" h-[10vh] flex justify-between items-center py-4 px-10 shadow-md gap-10 bg-theme-dark relative sticky top-0 z-99990 overflow-hidden">
      <div className="relative">
        <Link
          to="/"
          className="z-10 flex gap-4 items-center  hover:scale-102 transition-transform"
        >
          <img
            className="w-16  h-16 rounded-full logo scale-180 transition-transform object-cover"
            src="/images/logo.png"
            alt="Logo"
          />
          <h1 className="text-2xl font-bold">CafeLords</h1>
        </Link>
      </div>
      <div className="flex-center gap-7 text-lg font-semibold uppercase ">
        <NavLink
          name="go to homepage"
          to="/"
          className={({ isActive }) => (isActive ? "text-yellow-200" : "")}
        >
          home
        </NavLink>
        <NavLink
          name="menu page"
          to="/menu"
          className={({ isActive }) => (isActive ? "text-yellow-200" : "")}
        >
          menu
        </NavLink>
        <NavLink
          name="menu"
          to="/about"
          className={({ isActive }) => (isActive ? "text-yellow-200" : "")}
        >
          about us
        </NavLink>
      </div>

      {isAuthenticated ? (
        <AccountNav />
      ) : (
        <div className="flex gap-2">
          <LoginButton />
        </div>
      )}
    </div>
  );
};

export default Header;
