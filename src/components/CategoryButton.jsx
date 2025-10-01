import React from "react";
import { NavLink } from "react-router";

const CategoryButton = ({ title, handleonclick, isActive }) => {
  return (
    <NavLink
      onClick={handleonclick}
      className={`category px-3 py-2 w-full rounded-md text-xl font-md ${
        isActive ? "bg-white text-black" : ""
      }`}
    >
      {title}
    </NavLink>
  );
};

export default CategoryButton;
