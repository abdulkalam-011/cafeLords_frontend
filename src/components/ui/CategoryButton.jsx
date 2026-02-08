import { NavLink } from "react-router";

const CategoryButton = ({ title, handleonclick, isActive }) => {
  return (
    <NavLink
      onClick={handleonclick}
      className={`border-2 border-white rounded-xl category px-3 py-2 w-full md:border-0 md:rounded-md text-xl font-md ${
        isActive ? "bg-yellow-200 text-black" : ""
      }`}
    >
      {title}
    </NavLink>
  );
};

export default CategoryButton;
