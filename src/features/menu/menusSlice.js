import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: JSON.parse(localStorage.getItem("cafeMenu")) || [],
  search: "",
  category: "All",
  sortBy: "default",
  categories: [
    "All",
    "Coffee",
    "Snacks",
    "Beverages",
    "Desserts",
    "Pizza",
    "Pasta",
    "Bakery",
    "Meals",
    "Soup",
  ],
};

const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    setItems: (state, action) => {
      state.items = action.payload;
      localStorage.getItem("cafeMenu", JSON.stringify(action.payload));
    },
    setSearch: (state, action) => {
      state.search = action.payload;
    },
    setCategory: (state, action) => {
      state.category = action.payload;
    },
    setSortBy: (state, action) => {
      state.sortBy = action.payload;
    },
  },
});

export const { setItems, setSearch, setCategory, setSortBy, setFocus } =
  menuSlice.actions;
export default menuSlice.reducer;
