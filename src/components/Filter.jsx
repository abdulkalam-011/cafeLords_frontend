import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../features/menu/menusSlice";

const Filter = () => {
  const dispatch = useDispatch();
  const { category } = useSelector((state) => state.menu);

  return (
    <select
      className="flex items-center"
      name="category"
      id="category"
      value={category}
      onChange={(e) => {
        let a = dispatch(setCategory(e.target.value));
      }}
    >
      <option value="All">All</option>
      <option value="bevrages">Bevrages</option>
      <option value="snacks">snacks</option>
      <option value="pizza">pizza</option>
      <option value="backery">snacks</option>
      <option value="meals">Meals</option>
    </select>
  );
};

export default Filter;
