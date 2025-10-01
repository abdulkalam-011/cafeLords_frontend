import { createSlice } from "@reduxjs/toolkit";
import { getFromLocal, saveToLocal } from "../../utils/storage";

const initialState = getFromLocal("cart", {
  items: [],
  total: 0,
});

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload; // {id, item:{product,quantity}, usesrId}
      const existingItem = state.items.find(
        (i) => i.item.id === item.item.id && i.userId === item.userId
      );
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push(item);
      }

      const totalPrice = item.item.final_price * item.quantity;
      state.total += totalPrice;
      saveToLocal("cart", state);
    },
    removeFromCart: (state, action) => {
      const itemId = action.payload;
      const existingItem = state.items.find((i) => i.item.id === itemId);
      if (existingItem) {
        state.total -= existingItem.price * existingItem.quantity;
        state.items = state.items.filter((i) => i.item.id !== itemId);
      }
      saveToLocal("cart", state);
    },
    clearCart: (state) => {
      state.items = [];
      state.total = 0;
      saveToLocal("cart", state);
    },
    increament: (state, action) => {
      let itemId = action.payload;
      let findItem = state.items.find((i) => i.item.id === itemId);
      findItem.quantity += 1;
      saveToLocal("cart", state);
    },
    decreament: (state, action) => {
      let itemId = action.payload;
      let findItem = state.items.find((item) => item.item.id === itemId);
      if (findItem.quantity > 1) {
        findItem.quantity -= 1;
      }
      saveToLocal("cart", state);
    },
  },
});

export const { addToCart, removeFromCart, clearCart, increament, decreament } =
  cartSlice.actions;
export default cartSlice.reducer;
